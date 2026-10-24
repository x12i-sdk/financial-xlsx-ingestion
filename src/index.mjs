import assert from 'node:assert/strict';
import { createWorkbook, readWorkbook, toCsv } from '@x12i/financial-xlsx-ingestion';

const bytes = createWorkbook({ sheets: [{ name: 'Demo', rows: [
  [{ column: 'A', value: 'Account' }, { column: 'B', value: 'Amount' }],
  [{ column: 'A', value: '001' }, { column: 'B', number: '125.00' }],
] }] });
const workbook = readWorkbook(bytes);
assert.equal(workbook.sheets[0].name, 'Demo');
assert.equal(workbook.sheets[0].cells.find(cell => cell.ref === 'A2').text, '001');
assert.equal(Number(workbook.sheets[0].cells.find(cell => cell.ref === 'B2').stored), 125);
const csv = toCsv([['Account', 'Amount'], ['001', '125.00']]);
assert(csv.includes('001,125.00'));
console.log({ bytes: bytes.length, csv });
