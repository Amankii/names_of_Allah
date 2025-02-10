document.addEventListener('DOMContentLoaded', () => {

    const display = document.querySelector("#display2");
    const previousBtn = document.querySelector("#previousBtn");
    const nextBtn = document.querySelector("#nextBtn");

    
    let names_of_allah= [
          "1. الرحمن: The Most Gracious",
          "2. الرحيم: The Most Merciful",
          "3. الملك: The King and Owner of Dominion",
          "4. القدوس: The Absolutely Pure",
          "5. السلام: The Source of Peace and Safety",
          "6. المؤمن: The Giver of Faith and Assurance",
          "7. المهيمن: The Guardian",
          "8. العزيز: The Almighty",
          "9. الجبار: The Compeller",
          "10. المتكبر: The Supreme",
          "11. الخالق: The Creator",
          "12. البارئ: The Evolver",
          "13. المصور: The Fashioner",
          "14. الغفار: The Constant Forgiver",
          "15. القهار: The All-Prevailing One",
          "16. الوهاب: The Supreme Bestower",
          "17. الرزاق: The Provider",
          "18. الفتاح: The Supreme Solver",
          "19. العليم: The All-Knowing",
          "20. القابض: The Withholder",
          "21. الباسط: The Extender",
          "22. الخافض: The Reducer",
          "23. الرافع: The Exalter",
          "24. المعز: The Honourer-Bestower",
          "25. المذل: The Dishonourer",
          "26. السميع: The All-Hearing",
          "27. البصير: The All-Seeing",
          "28. الحكم: The Impartial Judge",
          "29. العدل: The Just One",
          "30. اللطيف: The Subtle One",
          "31. الخبير: The All-Aware",
          "32. الحليم: The Most Forbearing",
          "33. العظيم: The Magnificent",
          "34. الغفور: The Great Forgiver",
          "35. الشكور: The Most Appreciative",
          "36. العلي: The Most High, The Exalted",
          "37. الكبير: The Most Great",
          "38. الحفيظ: The Preserver",
          "39. المقيت: The Sustainer",
          "40. الحسيب: The Reckoner",
          "41. الجليل: The Majestic",
          "42. الكريم: The Most Generous, the Most Esteemed",
          "43. الرقيب: The All-and-Ever-Watchful",
          "44. المجيب: The Responsive One",
          "45. الواسع: The All-Encompassing, the Boundless",
          "46. الحكيم: The All-Wise",
          "47. الودود: The Most Loving",
          "48. المجيد: The Glorious, Most Honorable",
          "49. الباعث: The Infuser of New Life",
          "50. الشهيد: The All-and-Ever Witnessing",
          "51. الحق: The Absolute Truth",
          "52. الوكيل: The Trustee",
          "53. القوي: The All-Strong",
          "54. المتين: The Firm One",
          "55. الولي: The Solely Loyal",
          "56. الحميد: The Most Praiseworthy",
          "57. المحصي: The All-Enumerating, the Counter",
          "58. المبدئ: The Originator, the Initiator",
          "59. المعيد: The Restorer, the Reinstater",
          "60. المحيي: The Giver of Life",
          "61. المميت: The Creator of Death",
          "62. الحي: The Ever-Living",
          "63. القيوم: The Sustainer, The Self-Subsisting",
          "64. الواجد: The Perceiver",
          "65. الماجد: The Glorious, Most Honorable",
          "66. الواحد: The One",
          "67. الأحد: The Indivisible, The Absolute",
          "68. الصمد: The Self-Sufficient, The Impregnable",
          "69. القادر: The Omnipotent",
          "70. المقتدر: The Creator of All Power",
          "71. المقدم: The Expediter",
          "72. المؤخر: The Delayer",
          "73. الأول: The First",
          "74. الآخر: The Last",
          "75. الظاهر: The Manifest",
          "76. الباطن: The Hidden One, Knower of the Hidden",
          "77. الوالي: The Sole Governor",
          "78. المتعالي: The Self Exalted",
          "79. البر: The Source of All Goodness",
          "80. التواب: The Ever-Pardoning",
          "81. المنتقم: The Just Requiter",
          "82. العفو: The Supreme Pardoner",
          "83. الرؤوف: The Most Kind",
          "84. مالك الملك: Master of the Kingdom, Owner of the Dominion",
          "85. ذو الجلال والإكرام: Possessor of Glory and Honor",
          "86. المقسط: The Just One",
          "87. الجامع: The Gatherer, the Uniter",
          "88. الغني: The Self-Sufficient, the Wealthy",
          "89. المغني: The Enricher",
          "90. المانع: The Withholder",
          "91. الضار: The Distresser",
          "92. النافع: The Propitious, the Benefactor",
          "93. النور: The Light",
          "94. الهادي: The Guide",
          "95. البديع: Incomparable Originator",
          "96. الباقي: The Ever-Surviving",
          "97. الوارث: The Inheritor",
          "98. الرشيد: The Guide, Infallible Teacher and Knower",
          "99. الصبور: The Forbearing"
        ];
      
      

    // let count = 0;
    if (!localStorage.getItem('count')) {
        localStorage.setItem('count', 0)
    };

    let count = parseInt(localStorage.getItem('count'));

    

    previousBtn.disabled = count === 0;

    nextBtn.onclick = () => {
        count ++;
        display.innerHTML = names_of_allah[count];
        localStorage.setItem('count', count);


        if (count >= names_of_allah.length) {
            count = 0;
            display.innerHTML = names_of_allah[0];
        };

        if (count > 0) {
            previousBtn.disabled = false;
        };
    };
    display.innerHTML = names_of_allah[count];

    previousBtn.onclick = () => {
        count --;
        display.innerHTML = names_of_allah[count];
        localStorage.setItem('count', count);

        if (count <= 0) {
            previousBtn.disabled = true;
        };
    };
    



});