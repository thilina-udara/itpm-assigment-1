
import { test, expect } from '@playwright/test';
import { a } from 'framer-motion/dist/types.d-CtuPurYT';

/*
 * Singlish to Sinhala Translator - Automated Test Suite (TypeScript)
 * Student: IT23247086
 * Assignment: ITPM Assignment 1
 */

test.describe('Singlish to Sinhala Translator Tests', () => {

  const testCases = [
    {
      id: 'Pos_Fun_0001',
      name: 'Simple daily sentence',
      input: 'mama kadeeta yanavaa',
      expected: 'මම කඩේට යනවා',
      actual: 'මම කඩේට යනවා'
    },
    {
      id: 'Pos_Fun_0002',
      name: 'Simple greeting sentence',
      input: 'suBha anaagathayak..!',
      expected: 'සුභ අනාගතයක්..!',
      actual: 'සුභ අනගතයක්..!'
    },
    { id: 'Pos_Fun_0003', 
      name: 'Convert a short simple request using Email',
      input: 'mata Email Ekata dhaanna',
      expected: 'මට Email එකට දාන්න',
      actual: 'මට Email එකට දන්න'
    },
    { id: 'Pos_Fun_0004', 
      name: 'Convert positive present tense', 
      input: 'mama poth kiyavanavaa.', 
      expected: 'මම පොත් කියවනවා.' ,
      actual:  'මම පොත් කියවන්නවා.'
    },
    { id: 'Pos_Fun_0005', 
      name: 'Convert a negative present tense', 
      input: 'mama meekata kaemathi naee', 
      expected: 'මම මේකට කැමති නෑ',
      actual: 'මම මේකට කැමති නැහැ' 
    },
    { id: 'Pos_Fun_0006', 
      name: 'Convert a short compound sentence', 
      input: 'mama kaeema kaeevaa, eththaama batagini.', 
      expected: 'මම කෑම කෑවා, එත්තාම බටගිනි.',
      actual: 'මම කෑම කෑවා, එත්තම බටගින්නි.' 
    },
    { id: 'Pos_Fun_0007', 
      name: 'Convert a short complex sentence', 
      input: 'mama poth kiyavalaa thiyanavaa.', 
      expected: 'මම පොත් කියවලා තියනවා.',
      actual: 'මම පොත් කියවලා තියන්නවා.' 
    },
    { id: 'Pos_Fun_0008', 
      name: 'Convert a polite request question', 
      input: 'karuNaakaralaa mata udhavvak karanavadha?', 
      expected: 'කරුණාකරලා මට උදව්වක් කරනවද?',
      actual: 'කරුණාකරලා මට උදව්වක් කරන්නවද?' 
    },
    { id: 'Pos_Fun_0009', 
      name: 'Convert a medium sentence about assignment', 
      input: 'api heta trip eka yana nisa mama adha assignment eka submit karanavaa', 
      expected: 'අපි හෙට trip එක යන නිස මම අද assignment එක submit කරනවා',
      actual: 'අපි හෙට trip එක යන නිස මම අද assignment එක submit කරනවා, මොකද ඒක හෙට මට කරන්න වෙලවක් හම්බෙන්නෙ නැතිවෙයි, අපේ අනිත් අයටත් කියන්න මම එන්නෙ බදාදා කියලා'
    },
    { id: 'Pos_Fun_0010', 
      name: 'Long mixed Singlish paragraph', 
      input: 'mama dhannava mee assignment ekata playwright use karala test cases  automate karanna oona kiyala but kalin mama playwright use karalaa naethi nisa eka gaena video tikak balanna oona saha mama hithanavaa apita oona scenarios tika mama hariyata kara kiyala, avashya dheval include veladha kiyala aya check karanna ona. deadline valata kalin submite karanthath oona', 
      expected: 'මම දන්නව මේ assignment එකට playwright use කරල test cases  automate කරන්න ඕන කියල but කලින් මම playwright use කරලා නැති නිස එක ගැන video ටිකක් බලන්න ඕන සහ මම හිතනවා අපිට ඕන scenarios ටික මම හරියට කර කියල, අවශ්ය දෙවල් include වෙලද කියල අය check කරන්න ඔන. deadline වලට කලින් සුබ්මිටෙ කරන්තත් ඕන',
      actual: 'මම දන්නව මේ assignment එකට playwright use කරල test cases  automate කරන්න ඕන කියල but කලින් මම playwright use කරලා නැති නිස එක ගැන video ටිකක් බලන්න ඕන සහ මම හිතනවා අපිට ඕන scenarios ටික මම හරියට කර කියල, අවශ්ය දෙවල් include වෙලද කියල අය check කරන්න ඔන. deadline වලට කලින් සුබ්මිටෙ කරන්තත් ඕන'
    },
    { id: 'Pos_Fun_0011', 
      name: 'Short sentence with brand term LinkedIn', 
      input: 'LinkedIn eka Update karanna',
      expected: 'LinkedIn එක Update කරන්න',
      actual: 'LinkedIn එක Update කරන්න' 
    },
    { id: 'Pos_Fun_0012', 
      name: 'Short sentence with abbreviation ID', 
      input: 'magee ID eka gedhara dhaalaa aevith',
      expected: 'මගේ ID එක ගෙදර දාලා ඇවිත්',
      actual: 'මගේ ID එක ගෙදර දාලා ඇවිත්' 
    },
    { id: 'Pos_Fun_0013', 
      name: 'Short sentence with currency amount', 
      input: 'meeka Rs.2500 venavaa.',
      expected: 'මේක Rs.2500 වෙනවා.',
      actual: 'මේක Rs.2500 වෙනවා.'
    },
    { id: 'Pos_Fun_0014', 
      name: 'Short sentence with time', 
      input: 'heta udhee 10.30 lecture eka patangannavaa',
      expected: 'හෙට උදේ 10.30 lecture එක පටන්ගන්නවා',
      actual: 'හෙට උදේ 10.30 lecture එක පටන්ගන්නවා'
    },
    { id: 'Pos_Fun_0015', 
      name: 'Short question with measurement unit Kg', 
      input: 'mata parippu 1kg dhenna puLuvandha?',
      expected: 'මට පරිප්පු 1kg දෙන්න පුළුවන්ද?',
      actual: 'මට පරිප්පු 1kg දෙන්න පුළුවන්ද?'
    },
    { id: 'Pos_Fun_0016', 
      name: 'Short phrase pattern', 
      input: 'mata oona poddak inna',
      expected: 'මට ඕන පොඩ්ඩක් ඉන්න',
      actual: 'මට ඕන පොඩ්ඩක් ඉන්න' 
    },
    { id: 'Pos_Fun_0017', 
      name: 'Two short lines', 
      input: 'heta havasa enna. \n Cricket sellam karanna.',
      expected: 'හෙට හවස එන්න. \n Cricket සෙල්ලම් කරන්න.',
      actual: 'හෙට හවස එන්න. \n Cricket සෙල්ලම් කරන්න.' 
    },
    { id: 'Pos_Fun_0018', 
      name: 'Short slang sentence', 
      input: 'ela machan! hariyatama set unaa.',
      expected: 'එල මචන්! හරියටම සෙට් උනා.',
      actual: 'එල මචන්! හරියටම සෙට් උනා.' 
    },
    { id: 'Pos_Fun_0019', 
      name: 'Slang sentence with mixed English', 
      input: 'ela machan api next week presentation ekata hariyata prepare venna oonee.',
      expected: 'එල මචන් අපි next week presentation එකට හරියට prepare වෙන්න ඕනේ.',
      actual: 'එල මචන් අපි next week presentation එකට හරියට prepare වෙන්න ඕනේ.'
    },
    { id: 'Pos_Fun_0020', 
      name: 'Short sentence with date and time', 
      input: '02/02/2026 savasa 3.00ta meeting eka thiyenavaa.',
      expected: '02/02/2026 සවස 3.00ට meeting එක තියෙනවා.',
      actual: '02/02/2026 සවස 3.00ට meeting එක තියෙනවා.'
    },
    { id: 'Pos_Fun_0021',
      name: 'Medium sentence with Zoom and WiFi', 
      input: 'mama adha Zoom meeting ekata join vennavaa, iita kalin WiFi connection eka hariyata vaedadha kiyala check karanna onee, naethnam video eka lag venna puluvan.',
      expected: 'මම අද Zoom meeting එකට join වෙන්නවා, ඊට කලින් WiFi connection එක හරියට වැඩද කියල check කරන්න ඔනේ, නැත්නම් video එක lag වෙන්න පුලුවන්.',
      actual: 'මම අද Zoom meeting එකට join වෙන්නවා, ඊට කලින් WiFi connection එක හරියට වැඩද කියල check කරන්න ඔනේ, නැත්නම් video එක lag වෙන්න පුලුවන්.'
    },
    { id: 'Pos_Fun_0022', 
      name: 'Sentence with repeated word', 
      input: 'kasun hari hari hodha ekaa ban',
      expected: 'කසුන් හරි හරි හොද එකා බන්',
      actual: 'කසුන් හරි හරි හොද එකා බන්' 
    },
    { id: 'Pos_Fun_0023', 
      name: 'Medium sentence with abbreviation', 
      input: 'Saturday lecture ekata enna, group project eka gaena kathaa karanna, mathaka athuva ID eka aragena.',
      expected: 'Saturday lecture එකට එන්න, group project එක ගැන කතා කරන්න, මතක අතුව ID එක අරගෙන.',
      actual: 'Saturday lecture එකට එන්න, group project එක ගැන කතා කරන්න, මතක අතුව ID එක අරගෙන.'
    },
    { id: 'Pos_Fun_0024', 
      name: 'Short sentence expressing laziness', 
      input: 'mata kammaeli',
      expected: 'මට කම්මැලි',
      actual: 'මට කම්මැලි'
    },
    { id: 'Neg_Fun_0025', 
      name: 'Typo in daily activity sentence', 
      input: 'mama supermrket eke inn.',
      expected: 'මම supermarket එකේ ඉන්නේ.',
      Actual: 'මම සුපෙර්ම්‍රකෙට් eke inn.'
    },
    { id: 'Neg_Fun_0026', 
      name: 'Joined words with no spaces', 
      input: 'dhaenmataassignmentekasubmitkarannathiyanavaa',
      expected: 'දැන් මට assignment එක submit කරන්න තියනවා',
      actual: 'දදැන්මටාස්සිග්න්මෙන්ටෙකසුබ්මිට්කරන්නතියනවා'

     },
    { id: 'Neg_Fun_0027', 
      name: 'Extra spaces and typo', 
      input: 'ma   ma oya ta whatapp messag eka dannam',
      expected: 'මම ඔයට WhatsApp message එක දන්නම්',
      Actual: 'ම   ම ඔය ට wහටප්ප් මෙස්සග් එක ඩන්නම්'
    },
    { id: 'Neg_Fun_0028', 
      name: 'Incomplete sentence with ellipsis', 
      input: 'mama oyaata kiyanne thiyenne eka thama...',
      expected: 'මම ඔයාට කියන්නෙ තියෙන්නෙ එක තම…',
      actual: 'මම ඔයාට කියන්නෙ තියෙන්නේ එක තම...' 
    },
    { id: 'Neg_Fun_0029',
      name: 'Invalid date and time',
      input: 'meeting eka dhalaa thiyenne 31/02/2026 ta 24.80 PM ta kiyala.',
      expected: 'meeting එක දලා තියෙන්නෙ 31/01/2026 ට 12.00 PM ට කියල.',
      actual: 'meeting එක දලා තියෙන්නෙ 31/02/2026 ට 24.80 PM ට කියල.'
     },
    { id: 'Neg_Fun_0030', 
      name: 'Numbers in words', 
      input: 'm33 idea eka hodhayidha???',
      expected: 'මේ idea එක හොඳයිද?',
      actual: 'm33 idea eka hodhayidha???' 
    },
    { id: 'Neg_Fun_0031',
      name: 'Random upper/lower case',
      input: 'aDa lEcTuRe eKa ThErUnaDhA?',
      expected: 'අද lecture එක තෙරුනද?',
      actual: 'අඪ ලෙcඨුRඑ එඛ ථෙරුනධ?'
     },
    { id: 'Neg_Fun_0032',
      name: 'All caps simple negative',
      input: 'CLASS EKA NAE',
      expected: 'class එක නෑ',
      actual: 'CLASS EKA NAE'
     },
    { id: 'Neg_Fun_0033',
      name: 'Special symbol between names',
      input: 'kusal & nimal adha avith naee',
      expected: 'කුසල් සහා නිමල් අද අවිත් නෑ',
      actual: 'කුසල් & නිමල් අද අවිත් නෑ'
     },
    { id: 'Neg_Fun_0034',
      name: 'Long mixed Singlish paragraph',
      input: 'api Mlinma hithaagena sitiyee ella gamana saDHAhaa siyalu saelasum hari lesa sakas vii aethi bavayi. Nmth pasuva naevatha pariikShaa kaLa vita, itinerary ekee dhinayan kihipayak ekata mishra vii aethi bava apata penuNi. emenma, hootal bukin kiriimee thahavuru kiriimee  Email eka  thavama laebii nomaetha.',
      expected: 'අපි මුලින්ම හිතාගෙන සිටියේ ella ගමන සඳහා සියලු සැලසුම් හරි ලෙස සකස් වී ඇති බවයි. නමුත් පසුව නැවත පරීක්ෂා කළ විට, itinerary එකේ දිනයන් කිහිපයක් එකට මිශ්‍ර වී ඇති බව අපට පෙනුණි. එමෙන්ම, හොටල් බුකින් කිරීමේ තහවුරු කිරීමේ  විද්‍යුත් තැපැල් පණිවිඩයද තවම ලැබී නොමැත.',
      actual: 'අපි ම්ලින්ම හිතාගෙන සිටියේ ella ගමන සඳහා සියලු සැලසුම් හරි ලෙස සකස් වී ඇති බවයි. ණ්ම්ත් පසුව නැවත පරීක්ෂා කළ විට, itinerary එකේ දිනයන් කිහිපයක් එකට මිශ්‍ර වී ඇති බව අපට පෙනුණි. එමෙන්ම, හෝටල් බුකින් කිරීමේ තහවුරු කිරීමේ  Email එක  තවම ලැබී නොමැත.'
     },
    { id: 'Pos_UI_0035',
      name: 'Real-time translation update',
      input: 'suBha raathriyak',
      expected: 'සුභ රාත්‍රියක්',
      actual: 'සුභ රාත්‍රියක්'
    },
  ];

  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Clear and type input with proper event triggering
    await inputArea.click();
    await inputArea.clear();
    await page.waitForTimeout(500);
    
    const text = tc.input;
    
    // Type the text character by character with delay
    await inputArea.pressSequentially(text, { delay: 100 });
    
    // Press Space to ensure the last word is processed by the transliterator
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);

    // Trigger input event explicitly to be safe
    await page.evaluate((sel) => {
        const el = document.querySelector(sel) as HTMLTextAreaElement;
        if (el) {
            el.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }, inputSelector);

    // Wait for translation to complete
    await page.waitForTimeout(5000);

    // 3. Select the output box
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Verification Logic
    // Get the actual output
    const output = await outputBox.textContent();
    const outputText = output?.trim() || '';

    // Log the details for manual verification as requested
    // "input and acturel a=output check here"
    console.log(`\n[${tc.id}] Input:    "${tc.input}"`);
    console.log(`[${tc.id}] Actual:   "${outputText}"`);
    if(tc.expected) console.log(`[${tc.id}] Expected: "${tc.expected}"`);

    if (tc.expected) {
        const isMatch = outputText.includes(tc.expected);
        
        if (isMatch) {
            console.log(`[${tc.id}] Result: ✓ PASS`);
        } else {
            console.log(`[${tc.id}] Result: ✗ FAIL (Matches User Requirement: Negative -> Fail if incorrect)`);
        }

        // User requested: "positive -> , negatib=ve -> fail"
        // This asserts that the output MUST match the expected correct text.
        // Positive tests will PASS (assuming translator works).
        // Negative tests will FAIL (because translator produces garbage for garbage input).
        expect(outputText).toContain(tc.expected);
    } else {
        // No expected value provided
        if (outputText.length > 0) {
            console.log(`[${tc.id}] Result: ✓ PASS (Got output)`);
            expect(outputText.length).toBeGreaterThan(0);
        } else {
            console.log(`[${tc.id}] Result: ✗ FAIL (No output)`);
            expect(outputText.length).toBeGreaterThan(0);
        }
    }
  });
}

});