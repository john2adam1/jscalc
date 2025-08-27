// input elementlari
const elA = document.getElementById('a');
const elB = document.getElementById('b');
const resultBox = document.getElementById('result');
const clearBtn = document.getElementById('clear');

// String -> Number funksiyasi
function toNumber(str) {
  if (typeof str !== 'string') return NaN;
  const normalized = str.trim().replace(',', '.'); // vergulni nuqtaga almashtirish
  return normalized === '' ? NaN : parseFloat(normalized);
}

// Hisoblash funksiyasi
function calculate(op) {
  const aStr = elA.value;
  const bStr = elB.value;

  const aNum = toNumber(aStr);
  const bNum = toNumber(bStr);

  // noto‘g‘ri kiritilsa
  if (!isFinite(aNum) || !isFinite(bNum)) {
    resultBox.textContent = "❌ Iltimos, a va b uchun to‘g‘ri son kiriting!";
    return;
  }

  let result;
  switch (op) {
    case 'add':
      result = aNum + bNum;
      break;
    case 'sub':
      result = aNum - bNum;
      break;
    case 'mul':
      result = aNum * bNum;
      break;
    case 'div':
      if (bNum === 0) {
        resultBox.textContent = "❌ Bo‘lishda xatolik: b = 0 bo‘la olmaydi!";
        return;
      }
      result = aNum / bNum;
      break;
  }

  resultBox.textContent = `👉 ${aNum} ${opSymbol(op)} ${bNum} = ${result}`;
}

// Operator belgilarini ko‘rsatish
function opSymbol(op) {
  switch (op) {
    case 'add': return '+';
    case 'sub': return '−';
    case 'mul': return '×';
    case 'div': return '÷';
  }
}

// Tugmalarni ulash
document.querySelectorAll('[data-op]').forEach(btn => {
  btn.addEventListener('click', () => calculate(btn.dataset.op));
});

// Tozalash tugmasi
clearBtn.addEventListener('click', () => {
  elA.value = '';
  elB.value = '';
  resultBox.textContent = "Natija shu yerda chiqadi";
});
