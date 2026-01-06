export function DetailNetwork() {
    return (
        <div className="space-y-8">
            <header>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🛫</span> 5. 망분리 구성 및 대체 통제
                </h3>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-700 dark:text-blue-300">
                    <p className="font-semibold">2025.02.05 전자금융 감독규정 개정 사항 반영</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                        <li>망분리 통제가 적용된 연구개발망으로 업무망, 운영망에서 접속 가능</li>
                        <li>운영망에서 SaaS 이용은 규제 혁신 서비스 지정 후 이용 가능</li>
                    </ul>
                </div>
            </header>

            <section className="space-y-4">
                <h4 className="text-xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">1. 사무실 연구망(인터넷망) 구성</h4>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                    이용자의 고유식별정보 또는 개인신용정보를 처리하지 않는 연구ㆍ개발 목적의 경우(단, 금융회사 또는 전자금융업자가 자체 위험성 평가를 실시한 후 금융감독원장이 정한 망분리 대체 정보보호통제를 적용한 경우
                </div>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 block relative">
                    <img
                        src="/images/office_network_architecture_v2.png"
                        alt="사무실 연구망 구성 아키텍처"
                        className="w-full h-auto object-contain bg-white dark:bg-slate-800"
                    />
                </div>
            </section>

            <section className="space-y-4">
                <h4 className="text-xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">2. 망분리 대체 통제</h4>
                <ul className="list-disc list-inside">
                    <li>[별첨7] 망분리 대체 정보보호 통제</li>
                </ul>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 block relative">
                    <img
                        src="/images/network_separation_control.png"
                        alt="망분리 대체 정보보호 통제"
                        className="w-full h-auto object-contain bg-white dark:bg-slate-800"
                    />
                </div>
            </section>

            <section className="space-y-4">
                <h4 className="text-xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">3. 업무망 구성</h4>
                <p className="text-sm text-slate-500">
                    개념도 (연구·개발망과 규정 제15조제1항제3호의 내부 업무용시스템간 연결에 한하여 논리적 방식으로 분리 가능)
                </p>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 block relative">
                    <img
                        src="/images/work_network_architecture.png"
                        alt="업무망 구성 아키텍처"
                        className="w-full h-auto object-contain bg-white dark:bg-slate-800"
                    />
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>RBI(Remote Browser Isolation):</strong> 웹 또는 메일을 PC에서 직접 접속하지 않고 G/W 통해 접속 후 결과만 전달 받는 논리적 망분리 적용</li>
                    <li><strong>AWS-Workspace:</strong> VDI 접속 후 업무 시스템 접속 가능</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h4 className="text-xl font-bold border-b border-slate-200 dark:border-slate-700 pb-2">4. 운영망 구성</h4>
                <p className="text-sm text-slate-500">
                    개념도 (연구개발망과 규정 제15조제1항제5호의 전산실간 전송시 개발산출물 등 필수적인 경우에 한정)
                </p>
                <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 block relative">
                    <img
                        src="/images/network_architecture_2025.png"
                        alt="운영망 구성 아키텍처"
                        className="w-full h-auto object-contain bg-white dark:bg-slate-800"
                    />
                </div>
            </section>
        </div>
    );
}

