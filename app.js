// POLISYNC - Public Administration Simulation & Policy Management Platform
// Cute Mascot & Student Record Edition

// Initial High-Quality Sample Policies tailored for Korean High School Student's Spec & School Record
const INITIAL_POLICIES = [
  {
    id: "pol-1",
    title: "스마트 IoT 가로등 및 청소년 안심 귀갓길 민관경 거버넌스 구축 조례안",
    category: "교통·안전 행정",
    target: "관내 중·고등학교 학생 및 심야 보행 취약 시민",
    authority: "시청 안전총괄과, 관할 경찰서 생활안전계, 자율방범대",
    problem: "학원 밀집 지역 및 통학로 이면도로의 야간 조도 취약으로 청소년 대상 안전사고 및 불안감 증가. 기존 경찰 인력만으로는 24시간 순찰 공백이 발생하여 주민 불안이 가중됨.",
    solution: "1. 스마트 IoT 조도·이상음향 감지 가로등 및 안심 비상벨 설치\n2. 청소년 안심 귀가 앱과 지자체 CCTV 통합관제센터 24시간 연동\n3. 지역 주민 자율방범대와 경찰이 공조하는 '민·관·경 합동 순찰 네트워크' 구축 및 인센티브(자원봉사 실적 등) 부여",
    cost: 150, // 백만원
    benefit: 245, // 백만원
    stakeholderPro: "학부모회, 학생회 - 심야 보행 안전 확보 및 범죄 예방 효과 기대",
    stakeholderCon: "상가번영회 및 인근 주택가 - CCTV 프라이버시 침해 우려 및 초기 예산 낭비 논란",
    resolution: "개인정보 보호를 위한 비식별화(블러) 안심 기술 적용, 주민 대상 공청회 3회 개최 및 주민참여예산으로 일부 우선 시범사업 진행",
    createdAt: "2026-10-15"
  },
  {
    id: "pol-2",
    title: "지방소멸 대응 및 청년 정주 여건 개선을 위한 '청소년-청년 로컬 크리에이터' 육성 정책",
    category: "주민참여·지방자치",
    target: "지역 특성화고/일반고 청소년 및 20대 청년 창업 희망자",
    authority: "지자체 지역경제과, 인구정책추진단, 지역 거점 국립대",
    problem: "수도권으로의 청년 인구 유출 심화와 지역 내 양질의 청소년 진로 탐색 및 청년 일자리 인프라 부재로 인한 지역 경제 침체와 학령인구 감소.",
    solution: "1. 유휴 공공시설(폐교, 구 청사)을 리모델링하여 '청소년·청년 로컬 메이커 스페이스' 조성\n2. 지역 특산품 및 문화 자원을 활용한 로컬 브랜딩 인큐베이팅 및 멘토링 지원\n3. 지자체 청년 정착 조례 제정을 통한 창업 지원금 및 주거 보증금 이차보전 지원",
    cost: 320,
    benefit: 450,
    stakeholderPro: "청년 단체, 지역 예술가 - 창작 거점 확보 및 일자리 기회 확대",
    stakeholderCon: "기존 전통 상인회 - 특정 계층(청년)에 대한 특혜 및 실효성 없는 일회성 예산 지출 비판",
    resolution: "전통시장과 연계한 청년 야시장 및 팝업스토어 프로젝트 운영을 통해 기존 상권과의 상생 모델 발굴",
    createdAt: "2026-10-20"
  },
  {
    id: "pol-3",
    title: "학교 및 공공기관 1회용품 Zero화를 위한 '다회용기 공유 순환 시스템' 구축 사업",
    category: "환경·기후위기 대응",
    target: "관내 초·중·고교 학생 및 공공기관 임직원, 시민",
    authority: "지자체 자원순환과, 교육지원청 평생교육건강과",
    problem: "배달 문화 및 학교/학원가 편의점 소비 증가로 플라스틱 1회용 폐기물 급증, 지자체 소각 및 매립지 용량 포화 문제 봉착.",
    solution: "1. 학교 축제 및 지자체 축제 시 다회용기 렌탈·세척 공공 시스템 도입\n2. 청소년 환경 자치 마일리지 도입(다회용기 사용 시 지역화폐 포인트 적립)\n3. 관내 친환경 세척 사회적 기업 육성으로 취약계층 일자리 창출 연계",
    cost: 95,
    benefit: 155,
    stakeholderPro: "환경 시민단체, 교원 단체 - 기후위기 대응 실천 교육 및 온실가스 감축",
    stakeholderCon: "소상공인(카페·식당) - 다회용기 수거·보관에 따른 관리 부담 및 추가 수수료 우려",
    resolution: "지자체가 다회용기 수거·고온세척·배송 체계를 무상 전담 지원하고, 초기 참여 소상공인에게 종량제 봉투 무상 지원 등 인센티브 제공",
    createdAt: "2026-10-28"
  }
];

// App State
let policies = JSON.parse(localStorage.getItem('polisync_policies')) || INITIAL_POLICIES;
let selectedPolicyId = policies[0]?.id || null;
let categoryChart = null;
let feasibilityChart = null;
let simRadarChart = null;

// Mascot cheering messages
const MASCOT_MESSAGES = [
  "고2 몽키 행정관님! 오늘도 우리 지역을 더 살기 좋게 만들어봐요! 🍌",
  "행정학의 핵심은 주민과의 소통이에요! 공청회를 열어볼까요? 🐒",
  "비용편익비(B/C)가 1.0 이상이어야 기획재정부도 통과할 수 있어요! 📊",
  "학종 세특에 '뉴거버넌스 갈등 조정' 키워드를 넣으면 교수님 취향저격! 🎯",
  "보고서 탭에서 바로 A4 양식 PDF로 다운받을 수 있어요! ✨"
];

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const tabPanes = document.querySelectorAll('.tab-pane');
const pageTitle = document.getElementById('page-title');

// Init application
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupFormCalculations();
  setupPolicyForm();
  setupSimulationSliders();
  renderDashboard();
  renderPolicyArchive();
  renderPrintableReport(selectedPolicyId);
  rotateSidebarMascotMessage();

  // Quick Action Buttons
  document.getElementById('quick-create-btn').addEventListener('click', () => {
    switchTab('policy-builder');
  });

  document.getElementById('load-sample-btn').addEventListener('click', () => {
    if (confirm('예시 정책 데이터를 다시 로드하시겠습니까? (현재 데이터가 덮어씌워질 수 있습니다)')) {
      policies = [...INITIAL_POLICIES];
      localStorage.setItem('polisync_policies', JSON.stringify(policies));
      selectedPolicyId = policies[0].id;
      renderDashboard();
      renderPolicyArchive();
      renderPrintableReport(selectedPolicyId);
      alert('예시 정책이 성공적으로 로드되었습니다! 🐵✨');
    }
  });

  document.getElementById('auto-fill-ai-btn').addEventListener('click', autoFillRecommendation);
});

function rotateSidebarMascotMessage() {
  const el = document.getElementById('mascot-sidebar-msg');
  if (!el) return;
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % MASCOT_MESSAGES.length;
    el.textContent = `"${MASCOT_MESSAGES[idx]}"`;
  }, 7000);
}

// Navigation Handling
function setupNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  navItems.forEach(nav => {
    if (nav.getAttribute('data-tab') === tabId) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  });

  tabPanes.forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  // Update Topbar Title
  switch (tabId) {
    case 'dashboard':
      pageTitle.textContent = "행정 모니터링 & 정책 현황 대시보드 🐾";
      renderDashboard();
      break;
    case 'policy-builder':
      pageTitle.textContent = "몽키 정책 입안소 & 타당성 분석 프레임워크 📝";
      break;
    case 'governance-sim':
      pageTitle.textContent = "시민 반응 & 거버넌스 시뮬레이터 🎮";
      initSimulationControls();
      break;
    case 'policy-list':
      pageTitle.textContent = "정책 아카이브 & 생기부 세특 제출용 보고서 📜";
      renderPolicyArchive();
      renderPrintableReport(selectedPolicyId);
      break;
  }
}

// B/C Calculation helper
function calculateBC(cost, benefit) {
  if (!cost || cost <= 0) return 0;
  return (benefit / cost).toFixed(2);
}

// Live calculation in form
function setupFormCalculations() {
  const costInput = document.getElementById('policy-cost');
  const benefitInput = document.getElementById('policy-benefit');
  const displayBox = document.getElementById('calc-bc-display');

  function updateBC() {
    const cost = parseFloat(costInput.value) || 0;
    const benefit = parseFloat(benefitInput.value) || 0;
    if (cost > 0) {
      const ratio = (benefit / cost).toFixed(2);
      if (ratio >= 1.0) {
        displayBox.innerHTML = `${ratio} <span style="font-size:0.85rem; font-weight:normal;">(타당성 합격: 편익 > 비용 🐵🎉)</span>`;
        displayBox.style.color = '#065f46';
        displayBox.style.backgroundColor = '#ecfdf5';
        displayBox.style.borderColor = '#a7f3d0';
      } else {
        displayBox.innerHTML = `${ratio} <span style="font-size:0.85rem; font-weight:normal;">(예산 재조정 필요: 편익 < 비용 🐒💦)</span>`;
        displayBox.style.color = '#b91c1c';
        displayBox.style.backgroundColor = '#fef2f2';
        displayBox.style.borderColor = '#fecaca';
      }
    } else {
      displayBox.textContent = '-';
    }
  }

  costInput.addEventListener('input', updateBC);
  benefitInput.addEventListener('input', updateBC);
  updateBC();
}

// Auto-fill template recommended for high school student
function autoFillRecommendation() {
  document.getElementById('policy-title').value = "AI 데이터 기반 청소년 맞춤형 마음건강 및 학업중단 위기대응 원스톱 행정 거버넌스";
  document.getElementById('policy-category').value = "청소년·교육 복지";
  document.getElementById('policy-target').value = "관내 위기 청소년, 학업 중단 위기 학생 및 학부모 (OO시 전역)";
  document.getElementById('policy-authority').value = "시청 청소년청년과, 교육지원청 위(Wee)센터, 청소년상담복지센터, 정신건강복지센터";
  document.getElementById('policy-problem').value = "청소년 마음건강 및 은둔·고립 청소년 문제가 심각해지고 있으나, 학교(교육청)와 지자체(시청), 전문 보건기관(보건소) 간 정보 연계가 분절되어 적기 개입의 골든타임을 놓치고 있음.";
  document.getElementById('policy-solution').value = "1. 교육청-시청 간 행정협의회를 구성하여 '청소년 위기관리 원스톱 통합지원 조례' 제정\n2. 인공지능 기반 조기 징후 감지 및 비대면 상담 메타버스 플랫폼 구축\n3. 학교 밖 청소년 및 고위험군 대상 맞춤형 멘토링 바우처 지급";
  document.getElementById('policy-cost').value = 180;
  document.getElementById('policy-benefit').value = 290;
  document.getElementById('stakeholder-pro').value = "교사, 학부모, 상담복지사 - 다부처 칸막이 해소 및 신속한 위기 개입 환영";
  document.getElementById('stakeholder-con').value = "일부 학생 및 시민단체 - 민감한 학생 상담 데이터의 공공 공유 시 낙인효과 우려";
  document.getElementById('conflict-resolution').value = "철저한 가명정보 처리 및 본인·보호자 사전 동의제 의무화, 학교 인권 옴부즈만 모니터링단 참여";

  // Trigger B/C refresh
  document.getElementById('policy-cost').dispatchEvent(new Event('input'));
}

// Form Submission
function setupPolicyForm() {
  const form = document.getElementById('policy-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('policy-id').value || 'pol-' + Date.now();
    const title = document.getElementById('policy-title').value;
    const category = document.getElementById('policy-category').value;
    const target = document.getElementById('policy-target').value;
    const authority = document.getElementById('policy-authority').value;
    const problem = document.getElementById('policy-problem').value;
    const solution = document.getElementById('policy-solution').value;
    const cost = parseFloat(document.getElementById('policy-cost').value);
    const benefit = parseFloat(document.getElementById('policy-benefit').value);
    const stakeholderPro = document.getElementById('stakeholder-pro').value;
    const stakeholderCon = document.getElementById('stakeholder-con').value;
    const resolution = document.getElementById('conflict-resolution').value;

    const existingIndex = policies.findIndex(p => p.id === id);
    const newPolicy = {
      id,
      title,
      category,
      target,
      authority,
      problem,
      solution,
      cost,
      benefit,
      stakeholderPro,
      stakeholderCon,
      resolution,
      createdAt: new Date().toISOString().split('T')[0]
    };

    if (existingIndex >= 0) {
      policies[existingIndex] = newPolicy;
    } else {
      policies.unshift(newPolicy);
    }

    localStorage.setItem('polisync_policies', JSON.stringify(policies));
    selectedPolicyId = id;
    form.reset();
    document.getElementById('policy-id').value = '';

    alert('정책이 성공적으로 저장되었습니다! 🐵🎉 시민 반응 시뮬레이션으로 가볼까요?');
    switchTab('governance-sim');
  });

  document.getElementById('reset-form-btn').addEventListener('click', () => {
    form.reset();
    document.getElementById('policy-id').value = '';
    document.getElementById('policy-cost').dispatchEvent(new Event('input'));
  });
}

// Render Dashboard Data & Charts
function renderDashboard() {
  document.getElementById('stat-policy-count').textContent = `${policies.length} 건`;

  // Calculate Average B/C
  if (policies.length > 0) {
    const totalBC = policies.reduce((acc, p) => acc + (p.benefit / p.cost), 0);
    const avgBC = (totalBC / policies.length).toFixed(2);
    document.getElementById('stat-avg-bc').textContent = avgBC;
  } else {
    document.getElementById('stat-avg-bc').textContent = "0.00";
  }

  // Dashboard Table Render
  const tbody = document.getElementById('dashboard-policy-tbody');
  tbody.innerHTML = '';

  policies.forEach(policy => {
    const bc = calculateBC(policy.cost, policy.benefit);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${policy.title}</strong></td>
      <td><span class="badge-cat">${policy.category}</span></td>
      <td><small>${policy.authority || '지자체 협업'}</small></td>
      <td>${policy.cost.toLocaleString()} 백만원</td>
      <td><span class="badge-bc ${bc >= 1.0 ? 'bc-pass' : 'bc-fail'}">B/C ${bc}</span></td>
      <td><span class="text-success"><i class="fa-solid fa-heart" style="color:#ec4899;"></i> 75% 이상</span></td>
      <td>
        <button class="btn btn-sm btn-cute" onclick="loadForEdit('${policy.id}')" title="수정하기"><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-sm btn-cute" onclick="selectAndPrint('${policy.id}')" title="보고서 보기"><i class="fa-solid fa-file-lines"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Render Charts
  renderDashboardCharts();
}

function renderDashboardCharts() {
  // Chart 1: Category Distribution & Cost
  const categoryCounts = {};
  policies.forEach(p => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + p.cost;
  });

  const catCtx = document.getElementById('categoryChart').getContext('2d');
  if (categoryChart) categoryChart.destroy();
  categoryChart = new Chart(catCtx, {
    type: 'bar',
    data: {
      labels: Object.keys(categoryCounts),
      datasets: [{
        label: '분야별 총 소요 예산 (백만원)',
        data: Object.values(categoryCounts),
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(236, 72, 153, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: '예산 규모(백만원)' } }
      }
    }
  });

  // Chart 2: Policy B/C Comparison
  const feasCtx = document.getElementById('feasibilityChart').getContext('2d');
  if (feasibilityChart) feasibilityChart.destroy();
  feasibilityChart = new Chart(feasCtx, {
    type: 'line',
    data: {
      labels: policies.map(p => p.title.length > 10 ? p.title.slice(0, 10) + '...' : p.title),
      datasets: [
        {
          label: '비용편익비 (B/C)',
          data: policies.map(p => calculateBC(p.cost, p.benefit)),
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: '#059669',
          pointRadius: 6
        },
        {
          label: '경제적 타당성 기준선 (1.0)',
          data: policies.map(() => 1.0),
          borderColor: '#ef4444',
          borderDash: [5, 5],
          borderWidth: 2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0.5, max: 2.5, title: { display: true, text: 'B/C Ratio' } }
      }
    }
  });
}

// Simulation Setup
function initSimulationControls() {
  const select = document.getElementById('sim-policy-select');
  select.innerHTML = '';
  policies.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.title;
    if (p.id === selectedPolicyId) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener('change', () => {
    selectedPolicyId = select.value;
    updateSimulationOutput();
  });

  updateSimulationOutput();
}

function setupSimulationSliders() {
  const budget = document.getElementById('slider-budget');
  const deliberation = document.getElementById('slider-deliberation');
  const transparency = document.getElementById('slider-transparency');
  const governance = document.getElementById('slider-governance');

  budget.addEventListener('input', () => {
    document.getElementById('val-budget').textContent = `${budget.value}%`;
    updateSimulationOutput();
  });

  deliberation.addEventListener('input', () => {
    document.getElementById('val-deliberation').textContent = `${deliberation.value} 회`;
    updateSimulationOutput();
  });

  transparency.addEventListener('input', () => {
    document.getElementById('val-transparency').textContent = `${transparency.value} 점`;
    updateSimulationOutput();
  });

  governance.addEventListener('input', () => {
    document.getElementById('val-governance').textContent = `${governance.value} %`;
    updateSimulationOutput();
  });
}

function updateSimulationOutput() {
  const currPolicy = policies.find(p => p.id === selectedPolicyId) || policies[0];
  if (!currPolicy) return;

  const budgetMultiplier = parseFloat(document.getElementById('slider-budget').value) / 100;
  const delibCount = parseFloat(document.getElementById('slider-deliberation').value);
  const transpScore = parseFloat(document.getElementById('slider-transparency').value);
  const govScore = parseFloat(document.getElementById('slider-governance').value);

  // Administrative Logic Simulation
  const modCost = currPolicy.cost * budgetMultiplier;
  const benefitBonus = 1 + ((delibCount * 0.03) + (transpScore * 0.001) + (govScore * 0.002));
  const modBenefit = currPolicy.benefit * (0.8 + 0.2 * budgetMultiplier) * benefitBonus;

  const simBC = (modBenefit / modCost).toFixed(2);

  // Citizen Acceptance Formula
  let acceptance = 48 + (delibCount * 4.2) + (transpScore * 0.2) + (govScore * 0.15) - (budgetMultiplier > 1.3 ? 8 : 0);
  if (acceptance > 96) acceptance = 96;
  if (acceptance < 25) acceptance = 25;

  let efficiency = Math.round(68 + (govScore * 0.22) - (delibCount > 7 ? 8 : 0));

  // Update UI Metrics
  document.getElementById('sim-bc-val').textContent = simBC;
  const bcStatus = document.getElementById('sim-bc-status');
  if (simBC >= 1.2) {
    bcStatus.textContent = "경제적 타당성 매우 우수 ✨";
    bcStatus.className = "sim-verdict text-success";
  } else if (simBC >= 1.0) {
    bcStatus.textContent = "타당성 충족 (추진 적합) 👍";
    bcStatus.className = "sim-verdict text-primary";
  } else {
    bcStatus.textContent = "타당성 미흡 (예산 절감 필요) 💦";
    bcStatus.className = "sim-verdict text-danger";
  }

  document.getElementById('sim-accept-val').textContent = `${acceptance.toFixed(1)}%`;
  const acceptStatus = document.getElementById('sim-accept-status');
  if (acceptance >= 80) {
    acceptStatus.textContent = "주민 열렬한 지지 확보 💖";
  } else if (acceptance >= 65) {
    acceptStatus.textContent = "합의 도출 가능 수준 🤝";
  } else {
    acceptStatus.textContent = "이해관계자 갈등 우려 ⚠️";
  }

  document.getElementById('sim-efficiency-val').textContent = `${efficiency} / 100`;

  const gradeVal = document.getElementById('sim-grade-val');
  let grade = "B 등급";
  if (simBC >= 1.2 && acceptance >= 75) {
    grade = "S 등급 (최우수 행정 정책)";
  } else if (simBC >= 1.0 && acceptance >= 65) {
    grade = "A 등급 (권장 행정 대안)";
  }
  gradeVal.textContent = grade;

  // Update Mascot Dynamic Reaction!
  updateMascotReaction(parseFloat(simBC), acceptance);

  renderRadarChart(simBC, acceptance, efficiency, transpScore, govScore);
}

// Cute Dynamic Mascot Reaction
function updateMascotReaction(bc, acceptance) {
  const imgEl = document.getElementById('sim-mascot-img');
  const tagEl = document.getElementById('sim-mascot-tag');
  const speechEl = document.getElementById('sim-mascot-speech');

  if (bc < 1.0 || acceptance < 50) {
    // Sad/Crying Monkey
    imgEl.src = "assets/monkey_cry.jpg";
    tagEl.textContent = "예산 낭비 or 갈등 폭발 위험! 😭";
    tagEl.style.backgroundColor = "#ef4444";
    speechEl.textContent = `"흑흑... B/C가 ${bc}로 떨어지거나 주민 지지도가 낮아요... 주민 공청회를 더 열고 예산을 조율해봐요!"`;
  } else if (bc >= 1.3 && acceptance >= 80) {
    // Sparkle / Dancing Monkey
    imgEl.src = "assets/monkey_sparkle.png";
    tagEl.textContent = "행정안전부 장관상 후보! 🌟";
    tagEl.style.backgroundColor = "#8b5cf6";
    speechEl.textContent = `"와아아! 반짝반짝 완벽해요! B/C ${bc}에 주민 지지율도 ${acceptance.toFixed(1)}%! 당장 조례안으로 제출해도 손색없어요!"`;
  } else if (acceptance >= 70) {
    // Peace Monkey
    imgEl.src = "assets/monkey_peace.jpg";
    tagEl.textContent = "주민 수용성 매우 양호! ✌️";
    tagEl.style.backgroundColor = "#10b981";
    speechEl.textContent = `"브이! 주민들과 갈등 없이 사이좋게 추진 가능한 멋진 정책이에요! 생기부에 쓰면 딱 좋겠어요."`;
  } else {
    // Curious Looking Monkey
    imgEl.src = "assets/monkey_look.jpg";
    tagEl.textContent = "타당성 검토 진행 중 🔍";
    tagEl.style.backgroundColor = "#f59e0b";
    speechEl.textContent = `"음... 경제성은 통과했는데 거버넌스 협력도를 조금만 더 올리면 완벽해질 것 같아요!"`;
  }
}

function renderRadarChart(bc, acceptance, efficiency, transp, gov) {
  const radarCtx = document.getElementById('simRadarChart').getContext('2d');
  if (simRadarChart) simRadarChart.destroy();

  simRadarChart = new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: ['비용편익성', '시민수용도', '행정효율성', '투명성/공개도', '민관거버넌스'],
      datasets: [{
        label: '정책 종합 지표 평가 (100점 만점 환산)',
        data: [
          Math.min(100, (parseFloat(bc) / 1.8) * 100),
          acceptance,
          efficiency,
          transp,
          gov
        ],
        fill: true,
        backgroundColor: 'rgba(99, 102, 241, 0.25)',
        borderColor: '#4f46e5',
        pointBackgroundColor: '#ec4899',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ec4899',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { stepSize: 20 }
        }
      }
    }
  });
}

// Archive & Report Rendering
function renderPolicyArchive() {
  const container = document.getElementById('policy-list-container');
  const countBadge = document.getElementById('policy-badge-count');
  container.innerHTML = '';
  countBadge.textContent = `${policies.length}개`;

  policies.forEach(policy => {
    const card = document.createElement('div');
    card.className = `policy-list-card ${policy.id === selectedPolicyId ? 'active' : ''}`;
    card.onclick = () => {
      selectedPolicyId = policy.id;
      renderPolicyArchive();
      renderPrintableReport(policy.id);
    };

    const bc = calculateBC(policy.cost, policy.benefit);
    card.innerHTML = `
      <h4>${policy.title}</h4>
      <div class="meta">
        <span><i class="fa-solid fa-tag"></i> ${policy.category}</span>
        <span><i class="fa-solid fa-chart-pie"></i> B/C ${bc}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPrintableReport(policyId) {
  const reportBox = document.getElementById('printable-report');
  const policy = policies.find(p => p.id === policyId) || policies[0];

  if (!policy) {
    reportBox.innerHTML = '<p class="text-muted">정책 데이터가 없습니다. 새 정책을 기획해주세요.</p>';
    return;
  }

  const bc = calculateBC(policy.cost, policy.benefit);

  reportBox.innerHTML = `
    <div class="doc-header">
      <div class="doc-title-block">
        <span style="font-size: 0.8rem; font-weight:700; color: #4338ca; letter-spacing: 1px;">[2026학년도 고교 행정·정책학 심화 탐구 보고서]</span>
        <h1>${policy.title}</h1>
        <div class="doc-subtitle">부제: 데이터 기반 문제 해결 및 민관 거버넌스 연계 정책 타당성 분석서</div>
      </div>
      <table class="doc-meta-table">
        <tr>
          <th>연구자</th>
          <td>고등학교 2학년 (행정학과 희망)</td>
        </tr>
        <tr>
          <th>연구 분야</th>
          <td>${policy.category}</td>
        </tr>
        <tr>
          <th>기안 일자</th>
          <td>${policy.createdAt}</td>
        </tr>
      </table>
    </div>

    <!-- Section 1 -->
    <div class="doc-section">
      <h3 class="doc-sec-title">Ⅰ. 정책 추진 배경 및 행정 문제 (Problem Formulation)</h3>
      <div class="doc-box">
        ${policy.problem.replace(/\n/g, '<br>')}
      </div>
    </div>

    <!-- Section 2 -->
    <div class="doc-section">
      <h3 class="doc-sec-title">Ⅱ. 구체적 행정 대안 및 정책 실현 방안 (Policy Alternatives)</h3>
      <div class="doc-box">
        <strong>[주관 및 협조 행정기구]</strong> : ${policy.authority || '관련 지자체 및 유관기관'}<br>
        <strong>[정책 수혜 대상]</strong> : ${policy.target || '지역 주민'}<br><br>
        <strong>[세부 실천 과제]</strong><br>
        ${policy.solution.replace(/\n/g, '<br>')}
      </div>
    </div>

    <!-- Section 3 -->
    <div class="doc-section">
      <h3 class="doc-sec-title">Ⅲ. 공공 재정 계획 및 경제적 타당성 (B/C 분석)</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>총 소요 예산(Cost)</th>
            <th>추정 사회적 편익(Benefit)</th>
            <th>비용편익비 (B/C Ratio)</th>
            <th>행정 타당성 평가</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>분석치</strong></td>
            <td>${policy.cost.toLocaleString()} 백만원</td>
            <td>${policy.benefit.toLocaleString()} 백만원</td>
            <td style="font-weight: 800; color: #1e3a8a;">${bc}</td>
            <td>${bc >= 1.0 ? '<span style="color:#059669; font-weight:700;">타당성 충족 (B/C ≥ 1.0)</span>' : '<span style="color:#dc2626;">수정 권고 (B/C < 1.0)</span>'}</td>
          </tr>
        </tbody>
      </table>
      <div style="font-size:0.8rem; color:#64748b; margin-top: 6px;">
        * 편익 산정 기준: 안전사고/갈등 비용 절감액, 공공 서비스 수혜자의 효용 증가분, 지역 사회 활성화 파급 효과 계량화치 반영
      </div>
    </div>

    <!-- Section 4 -->
    <div class="doc-section">
      <h3 class="doc-sec-title">Ⅳ. 이해관계자 갈등 분석 및 거버넌스 (Stakeholder & Governance)</h3>
      <div class="doc-box" style="margin-bottom: 8px;">
        <strong>[찬성 및 지지 집단]</strong> : ${policy.stakeholderPro || '관련 시민 및 수혜층'}<br>
        <strong>[갈등 및 우려 집단]</strong> : ${policy.stakeholderCon || '재정 부담 및 규제 우려 그룹'}
      </div>
      <div class="doc-box" style="background-color: #f0fdf4; border-color: #bbf7d0;">
        <strong>[행정적 갈등 조정 및 숙의 민주주의적 해결책]</strong><br>
        ${(policy.resolution || '공청회 및 정책 피드백 수렴을 통한 보완책 마련').replace(/\n/g, '<br>')}
      </div>
    </div>

    <!-- Section 5: Student Learning Point for College Admission -->
    <div class="doc-section">
      <h3 class="doc-sec-title">Ⅴ. 행정학적 의의 및 학생부 전공적합성 연계 포인트</h3>
      <div class="doc-box" style="background-color: #eff6ff; border-color: #bfdbfe;">
        <strong>• 정책학적 관점</strong>: 단순한 복지 시혜를 넘어, 원인 분석부터 비용편익분석(CBA), 정책 딜레마(Dilemma) 관리를 통합적으로 고찰함.<br>
        <strong>• 신공공관리론(NPM) 및 뉴거버넌스론</strong>: 행정관료 독점이 아닌 시민, 경찰, 민간 기업이 협력하는 민관 파트너십(Public-Private Partnership) 모델을 직접 기획함.<br>
        <strong>• 학생부 특기사항 기록 추천 문구</strong>: "지역 사회의 현실적인 문제를 날카롭게 포착하여 행정학의 '정책 과정론'에 입각한 정책 조례안을 기획하고, B/C 비용편익과 이해관계자 갈등 관리 모델을 계량화하여 우수한 정책 평가 보고서를 산출함."
      </div>
    </div>

    <div class="doc-footer">
      <strong>POLISYNC 공공정책 연구소</strong> | 행정학과 수시 학생부종합전형(학종) 대비 정책 포트폴리오
    </div>
  `;
}

// Edit & Actions
window.loadForEdit = function (id) {
  const p = policies.find(item => item.id === id);
  if (!p) return;

  switchTab('policy-builder');
  document.getElementById('policy-id').value = p.id;
  document.getElementById('policy-title').value = p.title;
  document.getElementById('policy-category').value = p.category;
  document.getElementById('policy-target').value = p.target || '';
  document.getElementById('policy-authority').value = p.authority || '';
  document.getElementById('policy-problem').value = p.problem || '';
  document.getElementById('policy-solution').value = p.solution || '';
  document.getElementById('policy-cost').value = p.cost;
  document.getElementById('policy-benefit').value = p.benefit;
  document.getElementById('stakeholder-pro').value = p.stakeholderPro || '';
  document.getElementById('stakeholder-con').value = p.stakeholderCon || '';
  document.getElementById('conflict-resolution').value = p.resolution || '';

  document.getElementById('policy-cost').dispatchEvent(new Event('input'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.selectAndPrint = function (id) {
  selectedPolicyId = id;
  switchTab('policy-list');
  renderPolicyArchive();
  renderPrintableReport(id);
};
