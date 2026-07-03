const fs = require('fs');

let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const oldQuestions = `<ul class="space-y-6 pl-1 text-gray-300 break-keep text-sm leading-relaxed">
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <span class="text-[#F3F2F0] text-base leading-snug">사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <span class="text-[#F3F2F0] text-base leading-snug">AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <span class="text-[#F3F2F0] text-base leading-snug">미래의 노동은 누구를 위한 것이어야 하는가?</span></li>
                            <li class="flex items-start gap-3 border-t border-white/10 pt-6 mt-6"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">•</span> <strong class="text-[#F3F2F0] text-base leading-snug">이 문제의 답을 직접 만들어 볼 만큼 진지한가요?</strong></li>
                        </ul>`;

const newQuestions = `<ul class="space-y-6 pl-1 text-gray-300 break-keep text-sm leading-relaxed">
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">Q1.</span> <span class="text-[#F3F2F0] text-base leading-snug">사람들은 왜 자신이 좋아하는 일에 오래 몰입하지 못하는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">Q2.</span> <span class="text-[#F3F2F0] text-base leading-snug">AI 시대에도 인간의 경험과 전문성은 어떻게 가치가 될 수 있는가?</span></li>
                            <li class="flex items-start gap-3"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">Q3.</span> <span class="text-[#F3F2F0] text-base leading-snug">미래의 노동은 누구를 위한 것이어야 하는가?</span></li>
                            <li class="flex items-start gap-3 border-t border-white/10 pt-6 mt-6"><span class="text-[#D4C3A3] font-bold text-base mt-0.5">Q4.</span> <strong class="text-[#F3F2F0] text-base leading-snug">이 문제의 답을 직접 만들어 볼 만큼 진지한가요?</strong></li>
                        </ul>`;

html = html.replace(oldQuestions, newQuestions);

fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
console.log('Q1-Q4 restored.');
