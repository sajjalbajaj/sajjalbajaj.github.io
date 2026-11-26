#!/usr/bin/env ruby
# Structural checks and an editorial review queue, not a factual certification.
require 'yaml'
require 'date'
require 'json'
require 'optparse'

options = { strict: false, json: false }
OptionParser.new do |parser|
  parser.on('--strict', 'Require the future article standard') { options[:strict] = true }
  parser.on('--json', 'Emit the editorial audit as JSON') { options[:json] = true }
end.parse!
files = ARGV.empty? ? Dir['_posts/*.md'].sort : ARGV
hubs = %w[planning industries inventory purchase manufacturing sales accounting website marketing services hr integrations admin]
results = files.map do |path|
  errors, review = [], []
  begin
    source = File.read(path).gsub("\r\n", "\n")
    match = source.match(/\A---\n(.*?)\n---\n(.*)\z/m)
    raise 'Missing YAML front matter' unless match
    meta = YAML.safe_load(match[1], permitted_classes: [Date, Time], aliases: false)
    raise 'Front matter must be a mapping' unless meta.is_a?(Hash)
    body = match[2].lstrip
    %w[title description date].each { |key| errors << "Missing #{key}" if meta[key].to_s.strip.empty? }
    errors << 'Missing opening short answer' unless body.start_with?('**Short answer:**')
    answer = body.split(/\n\s*\n/).first.to_s.sub('**Short answer:**', '').strip
    errors << 'Empty short answer' if answer.empty?
    review << 'Review answer length and usefulness' unless (20..110).cover?(answer.split.length)
    review << 'No external reference' unless body.match?(/\]\(https:\/\//)
    review << 'No question heading' unless body.match?(/^## .+\?/)
    review << 'Check historical or time-sensitive claims' if body.match?(/pre-launch|before launch|expected to launch|latest updates|launch day/i)
    faqs = meta['faqs'] || []
    raise 'FAQs must be a list' unless faqs.is_a?(Array)
    review << 'No FAQs; assess whether follow-up answers would help' if faqs.empty?
    faqs.each do |faq|
      errors << 'FAQ needs a question and answer' unless faq.is_a?(Hash) && !faq['q'].to_s.strip.empty? && !faq['a'].to_s.strip.empty?
    end
    questions = faqs.select { |f| f.is_a?(Hash) }.map { |f| f['q'].to_s.strip.downcase }
    errors << 'Duplicate FAQ questions' unless questions.uniq.length == questions.length
    if options[:strict]
      errors << 'Include an external source link; verify its authority during review' if review.include?('No external reference')
      errors << 'Keep the opening answer between 20 and 110 words' if review.include?('Review answer length and usefulness')
      errors << 'Use the post layout' unless meta['layout'] == 'post'
      errors << 'Provide two or three substantive FAQs' unless (2..3).cover?(faqs.length)
      errors << 'Use eight unique tags' unless meta['tags'].is_a?(Array) && meta['tags'].length == 8 && meta['tags'].uniq.length == 8
      errors << 'Choose a supported hub' unless hubs.include?(meta['hub'])
      errors << 'Remove em or en dashes' if source.match?(/[\u2013\u2014]/)
      errors << 'Replace template placeholders' if source.match?(/Replace with|Replace this|Editorial checklist, remove/)
    end
  rescue StandardError => e
    errors << e.message
  end
  { file: path, errors: errors.uniq, editorial_review: review.uniq }
end
if options[:json]
  puts JSON.pretty_generate(results)
else
  results.select { |r| !r[:errors].empty? }.each { |r| warn "#{r[:file]}: #{r[:errors].join('; ')}" }
  counts = Hash.new(0)
  results.each { |r| r[:editorial_review].each { |flag| counts[flag] += 1 } }
  puts "Checked #{results.length} articles; #{results.count { |r| !r[:errors].empty? }} structural failures."
  counts.each { |flag, count| puts "Editorial review: #{count} articles: #{flag}" }
end
exit(results.any? { |r| !r[:errors].empty? } ? 1 : 0)
