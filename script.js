import { products } from './items.js'


const loadingTexts = [
    "✏️ Sharpening pencils...",
    "🖊️ Filling ink in pens...",
    "📚 Organizing notebooks...",
    "📒 Stacking up registers...",
    "🖍️ Refilling markers...",
    "📄 Laminating ideas...",
    "📎 Stapling thoughts together...",
    "📘 Binding creativity...",
    "📖 Flipping through fresh pages...",
    "🖨️ Printing possibilities...",
    "📏 Measuring success in centimeters...",
    "🎨 Coloring your imagination...",
    "📦 Unpacking new supplies...",
    "📝 Drawing dreams on paper...",
    "🖍️ Highlighting your needs...",
    "🗂️ Filing your orders...",
    "🧽 Erasing the wait...",
    "🕳️ Punching through progress...",
    "📠 Scanning your satisfaction...",
    "🖋️ Writing the future with JA Stationery..."
];
const loader = document.querySelector('.loader');
const ltext = document.querySelector('#loadingtext');
const menu = document.querySelector('#menu')
const errmess = document.querySelector('.errormess')
const xmark = document.querySelector('#xmark')
const menunav = document.querySelector('.mobnav');
const tl = gsap.timeline()
document.addEventListener("DOMContentLoaded", () => {
    ltext.innerHTML = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];


    // Optional: Change the loading text every 3 seconds
    setInterval(() => {
        loader.style.opacity = 0.1
        loader.style.transition = "all 0.5s ease"
        setInterval(() => {
            loader.style.display = "none"
        }, 100)
    }, 1000);
    // loading();x`

    menu.addEventListener("click", () => {
        menunav.style.display = "flex",
            gsap.from(menunav, {
                x: 100,
                duration: 0.2,
                opacity: 0,
            })
        gsap.from(".mobnav ul li", {
            y: -10,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1,
        })
        gsap.from(".mobnav .ctn", {
            y: -10,
            delay: 0.2,
            opacity: 0,
            stagger: 0.1,
        })
    })
    xmark.addEventListener("click", () => {
        menunav.style.display = "none"
    })


    // Gsap Starting
    setTimeout(() => {
        tl.from(".c1rcontent h1", {
            opacity: 0,
            y: 100,
            ease: "power2.out",
            duration: 1,
        })
        tl.from(".c1rcontent h3", {
            opacity: 0,
            ease: "power2.out",
            y: 100,
            duration: 0.8,
        })
        tl.from(".ordernow button", {
            opacity: 0,
            y: 100,
            stagger: 0.2,

        })
    }, 1000)
    gsap.from(".cont2 h1", {
        opacity: 0,
        y: 100,
        duration: 0.8,


    })
    gsap.from(".cont2 p", {
        opacity: 0,
        y: 100,
        duration: 0.8,

    })

    gsap.from(".cont3 img", {
        opacity: 0,
        y: 100,
        duration: 0.8,

    })
    gsap.from(".abthero h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.utils.toArray(".abtcont1 section").forEach((section, i) => {
        gsap.from(section, {
            y: 60,
            duration: 0.8,
            //   delay: i * 0.1,
            ease: "power2.out"
        });
    });
    gsap.utils.toArray(".sc1c").forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: 0, // slight stagger effect
            ease: "power2.out",
        });
    });
    // Gsap Ending 
    // Medicines Items

    const medicines = [
        { "id": 1, "category": "Anti-infective medicines", "name": "Ivermectin (Tablet)" },
        { "id": 2, "category": "Anti-infective medicines", "name": "Mupirocin (Ointment)" },
        { "id": 3, "category": "Anti-infective medicines", "name": "Amoxicillin (Capsule)" },
        { "id": 4, "category": "Anti-infective medicines", "name": "Azithromycin (Tablet)" },
        { "id": 5, "category": "Anti-infective medicines", "name": "Ceftriaxone (Injection)" },
        { "id": 6, "category": "Anti-infective medicines", "name": "Metronidazole (Tablet)" },
        { "id": 7, "category": "Anti-infective medicines", "name": "Albendazole (Tablet)" },
        { "id": 8, "category": "Anti-infective medicines", "name": "Doxycycline (Capsule)" },
        { "id": 9, "category": "Anti-infective medicines", "name": "Fluconazole (Tablet)" },
        { "id": 10, "category": "Anti-infective medicines", "name": "Ciprofloxacin (Tablet)" },
        { "id": 11, "category": "Endocrine medicines", "name": "Insulin Glargine (Injection)" },
        { "id": 12, "category": "Endocrine medicines", "name": "Teneligliptin (Tablet)" },
        { "id": 13, "category": "Endocrine medicines", "name": "Metformin (Tablet)" },
        { "id": 14, "category": "Endocrine medicines", "name": "Glibenclamide (Tablet)" },
        { "id": 15, "category": "Endocrine medicines", "name": "Levothyroxine (Tablet)" },
        { "id": 16, "category": "Cardiovascular medicines", "name": "Dabigatran (Capsule)" },
        { "id": 17, "category": "Cardiovascular medicines", "name": "Tenecteplase (Injection)" },
        { "id": 18, "category": "Cardiovascular medicines", "name": "Amlodipine (Tablet)" },
        { "id": 19, "category": "Cardiovascular medicines", "name": "Atenolol (Tablet)" },
        { "id": 20, "category": "Cardiovascular medicines", "name": "Enalapril (Tablet)" },
        { "id": 21, "category": "Respiratory medicines", "name": "Montelukast (Tablet)" },
        { "id": 22, "category": "Respiratory medicines", "name": "Salbutamol (Inhaler)" },
        { "id": 23, "category": "Respiratory medicines", "name": "Budesonide (Inhaler)" },
        { "id": 24, "category": "Ophthalmological preparations", "name": "Latanoprost (Eye Drops)" },
        { "id": 25, "category": "Rehydration solutions", "name": "Oral Rehydration Salts (ORS) (Powder)" },
        { "id": 26, "category": "Analgesics and antipyretics", "name": "Paracetamol (Tablet)" },
        { "id": 27, "category": "Analgesics and antipyretics", "name": "Paracetamol (Syrup)" },
        { "id": 28, "category": "Analgesics and antipyretics", "name": "Ibuprofen (Tablet)" },
        { "id": 29, "category": "Anaesthetics", "name": "Propofol (Injection)" },
        { "id": 30, "category": "Anaesthetics", "name": "Lidocaine (Injection)" },
        { "id": 31, "category": "Anti-infective medicines", "name": "Levofloxacin (Tablet)" },
        { "id": 32, "category": "Anti-infective medicines", "name": "Clindamycin (Capsule)" },
        { "id": 33, "category": "Anti-infective medicines", "name": "Acyclovir (Tablet)" },
        { "id": 34, "category": "Anti-infective medicines", "name": "Amphotericin B (Injection)" },
        { "id": 35, "category": "Anti-infective medicines", "name": "Chloroquine (Tablet)" },
        { "id": 36, "category": "Anti-infective medicines", "name": "Artesunate (Injection)" },
        { "id": 37, "category": "Anti-infective medicines", "name": "Isoniazid (Tablet)" },
        { "id": 38, "category": "Anti-infective medicines", "name": "Rifampicin (Capsule)" },
        { "id": 39, "category": "Anti-infective medicines", "name": "Ethambutol (Tablet)" },
        { "id": 40, "category": "Anti-infective medicines", "name": "Pyrazinamide (Tablet)" },
        { "id": 41, "category": "Endocrine medicines", "name": "Glimepiride (Tablet)" },
        { "id": 42, "category": "Endocrine medicines", "name": "Insulin Regular (Injection)" },
        { "id": 43, "category": "Endocrine medicines", "name": "Hydrocortisone (Tablet)" },
        { "id": 44, "category": "Endocrine medicines", "name": "Prednisolone (Tablet)" },
        { "id": 45, "category": "Cardiovascular medicines", "name": "Losartan (Tablet)" },
        { "id": 46, "category": "Cardiovascular medicines", "name": "Clopidogrel (Tablet)" },
        { "id": 47, "category": "Cardiovascular medicines", "name": "Aspirin (Tablet)" },
        { "id": 48, "category": "Cardiovascular medicines", "name": "Heparin (Injection)" },
        { "id": 49, "category": "Cardiovascular medicines", "name": "Warfarin (Tablet)" },
        { "id": 50, "category": "Respiratory medicines", "name": "Ipratropium (Inhaler)" },
        { "id": 51, "category": "Gastrointestinal medicines", "name": "Omeprazole (Capsule)" },
        { "id": 52, "category": "Gastrointestinal medicines", "name": "Pantoprazole (Tablet)" },
        { "id": 53, "category": "Gastrointestinal medicines", "name": "Metoclopramide (Tablet)" },
        { "id": 54, "category": "Gastrointestinal medicines", "name": "Ondansetron (Injection)" },
        { "id": 55, "category": "Gastrointestinal medicines", "name": "Loperamide (Tablet)" },
        { "id": 56, "category": "Anticonvulsants", "name": "Carbamazepine (Tablet)" },
        { "id": 57, "category": "Anticonvulsants", "name": "Phenytoin (Capsule)" },
        { "id": 58, "category": "Anticonvulsants", "name": "Valproic Acid (Tablet)" },
        { "id": 59, "category": "Anticonvulsants", "name": "Levetiracetam (Tablet)" },
        { "id": 60, "category": "Psychiatric medicines", "name": "Fluoxetine (Capsule)" },
        { "id": 61, "category": "Psychiatric medicines", "name": "Sertraline (Tablet)" },
        { "id": 62, "category": "Psychiatric medicines", "name": "Amitriptyline (Tablet)" },
        { "id": 63, "category": "Psychiatric medicines", "name": "Diazepam (Tablet)" },
        { "id": 64, "category": "Psychiatric medicines", "name": "Haloperidol (Injection)" },
        { "id": 65, "category": "Medicines used in substance dependence", "name": "Nicotine Replacement Therapy (Gum)" },
        { "id": 66, "category": "Ophthalmological preparations", "name": "Timolol (Eye Drops)" },
        { "id": 67, "category": "Ophthalmological preparations", "name": "Atropine (Eye Drops)" },
        { "id": 68, "category": "Dermatological medicines", "name": "Clotrimazole (Cream)" },
        { "id": 69, "category": "Dermatological medicines", "name": "Betamethasone (Cream)" },
        { "id": 70, "category": "Dermatological medicines", "name": "Hydrocortisone (Cream)" },
        { "id": 71, "category": "Anti-infective medicines", "name": "Cefixime (Tablet)" },
        { "id": 72, "category": "Anti-infective medicines", "name": "Erythromycin (Tablet)" },
        { "id": 73, "category": "Anti-infective medicines", "name": "Gentamicin (Injection)" },
        { "id": 74, "category": "Anti-infective medicines", "name": "Vancomycin (Injection)" },
        { "id": 75, "category": "Anti-infective medicines", "name": "Oseltamivir (Capsule)" },
        { "id": 76, "category": "Endocrine medicines", "name": "Sitagliptin (Tablet)" },
        { "id": 77, "category": "Endocrine medicines", "name": "Thyroxine (Tablet)" },
        { "id": 78, "category": "Cardiovascular medicines", "name": "Bisoprolol (Tablet)" },
        { "id": 79, "category": "Cardiovascular medicines", "name": "Ramipril (Tablet)" },
        { "id": 80, "category": "Cardiovascular medicines", "name": "Atorvastatin (Tablet)" },
        { "id": 81, "category": "Respiratory medicines", "name": "Theophylline (Tablet)" },
        { "id": 82, "category": "Gastrointestinal medicines", "name": "Domperidone (Tablet)" },
        { "id": 83, "category": "Gastrointestinal medicines", "name": "Lactulose (Syrup)" },
        { "id": 84, "category": "Anticonvulsants", "name": "Phenobarbitone (Tablet)" },
        { "id": 85, "category": "Psychiatric medicines", "name": "Olanzapine (Tablet)" },
        { "id": 86, "category": "Anti-infective medicines", "name": "Linezolid (Tablet)" },
        { "id": 87, "category": "Anti-infective medicines", "name": "Meropenem (Injection)" },
        { "id": 88, "category": "Anti-infective medicines", "name": "Piperacillin+Tazobactam (Injection)" },
        { "id": 89, "category": "Endocrine medicines", "name": "Dexamethasone (Injection)" },
        { "id": 90, "category": "Cardiovascular medicines", "name": "Metoprolol (Tablet)" },
        { "id": 91, "category": "Anaesthetics", "name": "Ketamine (Injection)" },
        { "id": 92, "category": "Analgesics and antipyretics", "name": "Diclofenac (Tablet)" },
        { "id": 93, "category": "Analgesics and antipyretics", "name": "Tramadol (Injection)" },
        { "id": 94, "category": "Dermatological medicines", "name": "Miconazole (Cream)" },
        { "id": 95, "category": "Ophthalmological preparations", "name": "Ciprofloxacin (Eye Drops)" },
        { "id": 96, "category": "Anti-infective medicines", "name": "Tinidazole (Tablet)" },
        { "id": 97, "category": "Anti-infective medicines", "name": "Sulfamethoxazole+Trimethoprim (Tablet)" },
        { "id": 98, "category": "Anti-infective medicines", "name": "Nitrofurantoin (Tablet)" },
        { "id": 99, "category": "Endocrine medicines", "name": "Pioglitazone (Tablet)" },
        { "id": 100, "category": "Cardiovascular medicines", "name": "Furosemide (Tablet)" },
        { "id": 101, "category": "Anti-infective medicines", "name": "Cefuroxime (Tablet)" },
        { "id": 102, "category": "Anti-infective medicines", "name": "Clotrimazole (Pessary)" },
        { "id": 103, "category": "Anti-infective medicines", "name": "Valganciclovir (Tablet)" },
        { "id": 104, "category": "Endocrine medicines", "name": "Voglibose (Tablet)" },
        { "id": 105, "category": "Cardiovascular medicines", "name": "Hydrochlorothiazide (Tablet)" },
        { "id": 106, "category": "Respiratory medicines", "name": "Levosalbutamol (Inhaler)" },
        { "id": 107, "category": "Gastrointestinal medicines", "name": "Esomeprazole (Capsule)" },
        { "id": 108, "category": "Anticonvulsants", "name": "Lamotrigine (Tablet)" },
        { "id": 109, "category": "Psychiatric medicines", "name": "Escitalopram (Tablet)" },
        { "id": 110, "category": "Dermatological medicines", "name": "Silver Sulfadiazine (Cream)" },
        { "id": 111, "category": "Anti-infective medicines", "name": "Amikacin (Injection)" },
        { "id": 112, "category": "Anti-infective medicines", "name": "Clarithromycin (Tablet)" },
        { "id": 113, "category": "Anti-infective medicines", "name": "Primaquine (Tablet)" },
        { "id": 114, "category": "Endocrine medicines", "name": "Fludrocortisone (Tablet)" },
        { "id": 115, "category": "Cardiovascular medicines", "name": "Spironolactone (Tablet)" },
        { "id": 116, "category": "Respiratory medicines", "name": "Formoterol (Inhaler)" },
        { "id": 117, "category": "Gastrointestinal medicines", "name": "Ranitidine (Tablet)" },
        { "id": 118, "category": "Anticonvulsants", "name": "Gabapentin (Capsule)" },
        { "id": 119, "category": "Psychiatric medicines", "name": "Risperidone (Tablet)" },
        { "id": 120, "category": "Ophthalmological preparations", "name": "Fluorometholone (Eye Drops)" },
        { "id": 121, "category": "Anti-infective medicines", "name": "Cefpodoxime (Tablet)" },
        { "id": 122, "category": "Anti-infective medicines", "name": "Mefloquine (Tablet)" },
        { "id": 123, "category": "Anti-infective medicines", "name": "Streptomycin (Injection)" },
        { "id": 124, "category": "Endocrine medicines", "name": "Methylprednisolone (Tablet)" },
        { "id": 125, "category": "Cardiovascular medicines", "name": "Digoxin (Tablet)" },
        { "id": 126, "category": "Respiratory medicines", "name": "Aminophylline (Tablet)" },
        { "id": 127, "category": "Gastrointestinal medicines", "name": "Dicyclomine (Tablet)" },
        { "id": 128, "category": "Anticonvulsants", "name": "Topiramate (Tablet)" },
        { "id": 129, "category": "Psychiatric medicines", "name": "Lorazepam (Tablet)" },
        { "id": 130, "category": "Dermatological medicines", "name": "Permethrin (Cream)" },
        { "id": 131, "category": "Anti-infective medicines", "name": "Cefazolin (Injection)" },
        { "id": 132, "category": "Anti-infective medicines", "name": "Nystatin (Tablet)" },
        { "id": 133, "category": "Anti-infective medicines", "name": "Zidovudine (Tablet)" },
        { "id": 134, "category": "Endocrine medicines", "name": "Budesonide (Capsule)" },
        { "id": 135, "category": "Cardiovascular medicines", "name": "Amiodarone (Tablet)" },
        { "id": 136, "category": "Respiratory medicines", "name": "Tiotropium (Inhaler)" },
        { "id": 137, "category": "Gastrointestinal medicines", "name": "Hyoscine (Injection)" },
        { "id": 138, "category": "Anticonvulsants", "name": "Oxcarbazepine (Tablet)" },
        { "id": 139, "category": "Psychiatric medicines", "name": "Quetiapine (Tablet)" },
        { "id": 140, "category": "Ophthalmological preparations", "name": "Pilocarpine (Eye Drops)" },
        { "id": 141, "category": "Anti-infective medicines", "name": "Efavirenz (Tablet)" },
        { "id": 142, "category": "Anti-infective medicines", "name": "Lamivudine (Tablet)" },
        { "id": 143, "category": "Anti-infective medicines", "name": "Nevirapine (Tablet)" },
        { "id": 144, "category": "Endocrine medicines", "name": "Betamethasone (Injection)" },
        { "id": 145, "category": "Cardiovascular medicines", "name": "Verapamil (Tablet)" },
        { "id": 146, "category": "Respiratory medicines", "name": "Beclomethasone (Inhaler)" },
        { "id": 147, "category": "Gastrointestinal medicines", "name": "Mesalazine (Tablet)" },
        { "id": 148, "category": "Anticonvulsants", "name": "Clonazepam (Tablet)" },
        { "id": 149, "category": "Psychiatric medicines", "name": "Mirtazapine (Tablet)" },
        { "id": 150, "category": "Dermatological medicines", "name": "Fusidic Acid (Cream)" },
        { "id": 151, "category": "Anti-infective medicines", "name": "Cloxacillin (Capsule)" },
        { "id": 152, "category": "Anti-infective medicines", "name": "Ritonavir (Tablet)" },
        { "id": 153, "category": "Anti-infective medicines", "name": "Lopinavir (Tablet)" },
        { "id": 154, "category": "Endocrine medicines", "name": "Desmopressin (Tablet)" },
        { "id": 155, "category": "Cardiovascular medicines", "name": "Isosorbide Dinitrate (Tablet)" },
        { "id": 156, "category": "Respiratory medicines", "name": "Salbutamol (Syrup)" },
        { "id": 157, "category": "Gastrointestinal medicines", "name": "Famotidine (Tablet)" },
        { "id": 158, "category": "Anticonvulsants", "name": "Pregabalin (Capsule)" },
        { "id": 159, "category": "Psychiatric medicines", "name": "Venlafaxine (Tablet)" },
        { "id": 160, "category": "Ophthalmological preparations", "name": "Tropicamide (Eye Drops)" },
        { "id": 161, "category": "Anti-infective medicines", "name": "Ganciclovir (Injection)" },
        { "id": 162, "category": "Anti-infective medicines", "name": "Pentamidine (Injection)" },
        { "id": 163, "category": "Anti-infective medicines", "name": "Diethylcarbamazine (Tablet)" },
        { "id": 164, "category": "Endocrine medicines", "name": "Tamoxifen (Tablet)" },
        { "id": 165, "category": "Cardiovascular medicines", "name": "Nifedipine (Capsule)" },
        { "id": 166, "category": "Respiratory medicines", "name": "Fluticasone (Inhaler)" },
        { "id": 167, "category": "Gastrointestinal medicines", "name": "Bismuth Subsalicylate (Tablet)" },
        { "id": 168, "category": "Anticonvulsants", "name": "Divalproex (Tablet)" },
        { "id": 169, "category": "Psychiatric medicines", "name": "Aripiprazole (Tablet)" },
        { "id": 170, "category": "Dermatological medicines", "name": "Terbinafine (Cream)" },
        { "id": 171, "category": "Anti-infective medicines", "name": "Ceftazidime (Injection)" },
        { "id": 172, "category": "Anti-infective medicines", "name": "Dapsone (Tablet)" },
        { "id": 173, "category": "Anti-infective medicines", "name": "Moxifloxacin (Tablet)" },
        { "id": 174, "category": "Endocrine medicines", "name": "Clomiphene (Tablet)" },
        { "id": 175, "category": "Cardiovascular medicines", "name": "Propranolol (Tablet)" },
        { "id": 176, "category": "Respiratory medicines", "name": "Cromolyn Sodium (Inhaler)" },
        { "id": 177, "category": "Gastrointestinal medicines", "name": "Sucralfate (Tablet)" },
        { "id": 178, "category": "Anticonvulsants", "name": "Zonisamide (Capsule)" },
        { "id": 179, "category": "Psychiatric medicines", "name": "Paroxetine (Tablet)" },
        { "id": 180, "category": "Ophthalmological preparations", "name": "Dorzolamide (Eye Drops)" },
        { "id": 181, "category": "Anti-infective medicines", "name": "Cefalexin (Capsule)" },
        { "id": 182, "category": "Anti-infective medicines", "name": "Atovaquone (Tablet)" },
        { "id": 183, "category": "Anti-infective medicines", "name": "Miltefosine (Capsule)" },
        { "id": 184, "category": "Endocrine medicines", "name": "Cabergoline (Tablet)" },
        { "id": 185, "category": "Cardiovascular medicines", "name": "Telmisartan (Tablet)" },
        { "id": 186, "category": "Respiratory medicines", "name": "Acetylcysteine (Solution)" },
        { "id": 187, "category": "Gastrointestinal medicines", "name": "Rifaximin (Tablet)" },
        { "id": 188, "category": "Anticonvulsants", "name": "Lacosamide (Tablet)" },
        { "id": 189, "category": "Psychiatric medicines", "name": "Citalopram (Tablet)" },
        { "id": 190, "category": "Dermatological medicines", "name": "Calamine (Lotion)" },
        { "id": 191, "category": "Anti-infective medicines", "name": "Imipenem+Cilastatin (Injection)" },
        { "id": 192, "category": "Anti-infective medicines", "name": "Flucloxacillin (Capsule)" },
        { "id": 193, "category": "Anti-infective medicines", "name": "Griseofulvin (Tablet)" },
        { "id": 194, "category": "Endocrine medicines", "name": "Letrozole (Tablet)" },
        { "id": 195, "category": "Cardiovascular medicines", "name": "Labetalol (Tablet)" },
        { "id": 196, "category": "Respiratory medicines", "name": "Mometasone (Inhaler)" },
        { "id": 197, "category": "Gastrointestinal medicines", "name": "Prochlorperazine (Tablet)" },
        { "id": 198, "category": "Anticonvulsants", "name": "Vigabatrin (Tablet)" },
        { "id": 199, "category": "Psychiatric medicines", "name": "Bupropion (Tablet)" },
        { "id": 200, "category": "Ophthalmological preparations", "name": "Brimonidine (Eye Drops)" },
        { "id": 201, "category": "Anti-infective medicines", "name": "Amoxicillin+Clavulanic Acid (Tablet)" },
        { "id": 202, "category": "Anti-infective medicines", "name": "Tetracycline (Capsule)" },
        { "id": 203, "category": "Anti-infective medicines", "name": "Ketoconazole (Tablet)" },
        { "id": 204, "category": "Endocrine medicines", "name": "Medroxyprogesterone (Tablet)" },
        { "id": 205, "category": "Cardiovascular medicines", "name": "Diltiazem (Tablet)" },
        { "id": 206, "category": "Respiratory medicines", "name": "Prednisolone (Syrup)" },
        { "id": 207, "category": "Gastrointestinal medicines", "name": "Orlistat (Capsule)" },
        { "id": 208, "category": "Anticonvulsants", "name": "Felbamate (Tablet)" },
        { "id": 209, "category": "Psychiatric medicines", "name": "Fluphenazine (Injection)" },
        { "id": 210, "category": "Dermatological medicines", "name": "Adapalene (Gel)" },
        { "id": 211, "category": "Anti-infective medicines", "name": "Benzathine Penicillin (Injection)" },
        { "id": 212, "category": "Anti-infective medicines", "name": "Procaine Penicillin (Injection)" },
        { "id": 213, "category": "Anti-infective medicines", "name": "Praziquantel (Tablet)" },
        { "id": 214, "category": "Endocrine medicines", "name": "Estradiol (Tablet)" },
        { "id": 215, "category": "Cardiovascular medicines", "name": "Methyldopa (Tablet)" },
        { "id": 216, "category": "Respiratory medicines", "name": "Terbutaline (Tablet)" },
        { "id": 217, "category": "Gastrointestinal medicines", "name": "Bisacodyl (Tablet)" },
        { "id": 218, "category": "Anticonvulsants", "name": "Tiagabine (Tablet)" },
        { "id": 219, "category": "Psychiatric medicines", "name": "Chlorpromazine (Tablet)" },
        { "id": 220, "category": "Ophthalmological preparations", "name": "Acyclovir (Eye Ointment)" },
        { "id": 221, "category": "Anti-infective medicines", "name": "Chloramphenicol (Capsule)" },
        { "id": 222, "category": "Anti-infective medicines", "name": "Norfloxacin (Tablet)" },
        { "id": 223, "category": "Anti-infective medicines", "name": "Isoniazid+Rifampicin (Tablet)" },
        { "id": 224, "category": "Endocrine medicines", "name": "Progesterone (Injection)" },
        { "id": 225, "category": "Cardiovascular medicines", "name": "Carvedilol (Tablet)" },
        { "id": 226, "category": "Respiratory medicines", "name": "Codeine (Syrup)" },
        { "id": 227, "category": "Gastrointestinal medicines", "name": "Sulfasalazine (Tablet)" },
        { "id": 228, "category": "Anticonvulsants", "name": "Ethosuximide (Capsule)" },
        { "id": 229, "category": "Psychiatric medicines", "name": "Trazodone (Tablet)" },
        { "id": 230, "category": "Dermatological medicines", "name": "Tretinoin (Cream)" },
        { "id": 231, "category": "Anti-infective medicines", "name": "Cefoperazone (Injection)" },
        { "id": 232, "category": "Anti-infective medicines", "name": "Doxycycline (Injection)" },
        { "id": 233, "category": "Anti-infective medicines", "name": "Aztreonam (Injection)" },
        { "id": 234, "category": "Endocrine medicines", "name": "Norethisterone (Tablet)" },
        { "id": 235, "category": "Cardiovascular medicines", "name": "Rosuvastatin (Tablet)" },
        { "id": 236, "category": "Respiratory medicines", "name": "Levocetirizine (Tablet)" },
        { "id": 237, "category": "Gastrointestinal medicines", "name": "Cimetidine (Tablet)" },
        { "id": 238, "category": "Anticonvulsants", "name": "Primidone (Tablet)" },
        { "id": 239, "category": "Psychiatric medicines", "name": "Lithium Carbonate (Tablet)" },
        { "id": 240, "category": "Ophthalmological preparations", "name": "Gentamicin (Eye Drops)" },
        { "id": 241, "category": "Anti-infective medicines", "name": "Amphotericin B (Liposomal Injection)" },
        { "id": 242, "category": "Anti-infective medicines", "name": "Tenofovir (Tablet)" },
        { "id": 243, "category": "Anti-infective medicines", "name": "Emtricitabine (Tablet)" },
        { "id": 244, "category": "Endocrine medicines", "name": "Anastrozole (Tablet)" },
        { "id": 245, "category": "Cardiovascular medicines", "name": "Nicorandil (Tablet)" },
        { "id": 246, "category": "Respiratory medicines", "name": "Dexamethasone (Inhaler)" },
        { "id": 247, "category": "Gastrointestinal medicines", "name": "Ranitidine (Syrup)" },
        { "id": 248, "category": "Anticonvulsants", "name": "Perampanel (Tablet)" },
        { "id": 249, "category": "Psychiatric medicines", "name": "Duloxetine (Capsule)" },
        { "id": 250, "category": "Dermatological medicines", "name": "Clobetasol (Cream)" },
        { "id": 251, "category": "Anti-infective medicines", "name": "Cefepime (Injection)" },
        { "id": 252, "category": "Anti-infective medicines", "name": "Fosfomycin (Powder)" },
        { "id": 253, "category": "Anti-infective medicines", "name": "Ivermectin (Cream)" },
        { "id": 254, "category": "Endocrine medicines", "name": "Bromocriptine (Tablet)" },
        { "id": 255, "category": "Cardiovascular medicines", "name": "Prazosin (Tablet)" },
        { "id": 256, "category": "Respiratory medicines", "name": "Fexofenadine (Tablet)" },
        { "id": 257, "category": "Gastrointestinal medicines", "name": "Mebeverine (Tablet)" },
        { "id": 258, "category": "Anticonvulsants", "name": "Brivaracetam (Tablet)" },
        { "id": 259, "category": "Psychiatric medicines", "name": "Clonidine (Tablet)" },
        { "id": 260, "category": "Ophthalmological preparations", "name": "Olopatadine (Eye Drops)" },
        { "id": 261, "category": "Anti-infective medicines", "name": "Colistin (Injection)" },
        { "id": 262, "category": "Anti-infective medicines", "name": "Voriconazole (Tablet)" },
        { "id": 263, "category": "Anti-infective medicines", "name": "Abacavir (Tablet)" },
        { "id": 264, "category": "Endocrine medicines", "name": "Exenatide (Injection)" },
        { "id": 265, "category": "Cardiovascular medicines", "name": "Olmesartan (Tablet)" },
        { "id": 266, "category": "Respiratory medicines", "name": "Chlorpheniramine (Tablet)" },
        { "id": 267, "category": "Gastrointestinal medicines", "name": "Ursodeoxycholic Acid (Tablet)" },
        { "id": 268, "category": "Anticonvulsants", "name": "Eslicarbazepine (Tablet)" },
        { "id": 269, "category": "Psychiatric medicines", "name": "Buspirone (Tablet)" },
        { "id": 270, "category": "Dermatological medicines", "name": "Povidone Iodine (Ointment)" },
        { "id": 271, "category": "Anti-infective medicines", "name": "Caspofungin (Injection)" },
        { "id": 272, "category": "Anti-infective medicines", "name": "Darunavir (Tablet)" },
        { "id": 273, "category": "Anti-infective medicines", "name": "Raltegravir (Tablet)" },
        { "id": 274, "category": "Endocrine medicines", "name": "Liraglutide (Injection)" },
        { "id": 275, "category": "Cardiovascular medicines", "name": "Ivabradine (Tablet)" },
        { "id": 276, "category": "Respiratory medicines", "name": "Roflumilast (Tablet)" },
        { "id": 277, "category": "Gastrointestinal medicines", "name": "Racecadotril (Capsule)" },
        { "id": 278, "category": "Anticonvulsants", "name": "Rufinamide (Tablet)" },
        { "id": 279, "category": "Psychiatric medicines", "name": "Lamotrigine (Tablet)" },
        { "id": 280, "category": "Ophthalmological preparations", "name": "Travoprost (Eye Drops)" },
        { "id": 281, "category": "Anti-infective medicines", "name": "Ertapenem (Injection)" },
        { "id": 282, "category": "Anti-infective medicines", "name": "Posaconazole (Suspension)" },
        { "id": 283, "category": "Anti-infective medicines", "name": "Didanosine (Tablet)" },
        { "id": 284, "category": "Endocrine medicines", "name": "Dapagliflozin (Tablet)" },
        { "id": 285, "category": "Cardiovascular medicines", "name": "Sacubitril+Valsartan (Tablet)" },
        { "id": 286, "category": "Respiratory medicines", "name": "Omalizumab (Injection)" },
        { "id": 287, "category": "Gastrointestinal medicines", "name": "Lansoprazole (Capsule)" },
        { "id": 288, "category": "Anticonvulsants", "name": "Stiripentol (Capsule)" },
        { "id": 289, "category": "Psychiatric medicines", "name": "Asenapine (Tablet)" },
        { "id": 290, "category": "Dermatological medicines", "name": "Tacrolimus (Ointment)" },
        { "id": 291, "category": "Anti-infective medicines", "name": "Telbivudine (Tablet)" },
        { "id": 292, "category": "Anti-infective medicines", "name": "Anidulafungin (Injection)" },
        { "id": 293, "category": "Anti-infective medicines", "name": "Entecavir (Tablet)" },
        { "id": 294, "category": "Endocrine medicines", "name": "Empagliflozin (Tablet)" },
        { "id": 295, "category": "Cardiovascular medicines", "name": "Edoxaban (Tablet)" },
        { "id": 296, "category": "Respiratory medicines", "name": "Vilanterol (Inhaler)" },
        { "id": 297, "category": "Gastrointestinal medicines", "name": "Rabeprazole (Tablet)" },
        { "id": 298, "category": "Anticonvulsants", "name": "Clobazam (Tablet)" },
        { "id": 299, "category": "Psychiatric medicines", "name": "Paliperidone (Tablet)" },
        { "id": 300, "category": "Ophthalmological preparations", "name": "Bimatoprost (Eye Drops)" }
    ]


    const medicinecontainer = document.querySelector('#nitems')
    for (let i = 0; i <= medicines.length - 1; i++) {
        const medicard = document.createElement("div")
        medicard.setAttribute = ("data-category", medicines[i].category)
        medicard.className = "medcard"
        medicard.innerHTML = `
    <h3>${i + 1}.${medicines[i].name} </h3>
    <p>${medicines[i].category}</p>
    `
        medicinecontainer.appendChild(medicard)
    }
    const nitem = document.querySelectorAll('.card')
    nitem.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            duration: 0.2,
            y: 100,
        })
    });

    gsap.from("#cardContainer div", {
        opacity: 0,
        y: 10,
        stagger: 0.1
    })


    window.addEventListener("offline", () => {
        errmess.style.display = "flex";
        errmess.classList.remove("online");
        errmess.classList.add("offline");

        errmess.innerHTML = "You're Offline ❌";

        gsap.from(errmess, {
            y: 100,
            opacity: 0,
            duration: 0.3,
        });
    })
    window.addEventListener("online", () => {
        errmess.style.display = "flex";
        errmess.classList.remove("errormess"); // Assuming this is the offline style
        errmess.classList.add("online");

        errmess.innerHTML = "You're Back Again ✅";

        gsap.from(errmess, {
            y: 100,
            opacity: 0,
            duration: 0.3,
        });

        // Optional: Auto-hide after 3 seconds
        setTimeout(() => {
            errmess.style.display = "none";
            errmess.classList.remove("online");
        }, 3000);
    })

    // Searching Items
    // Medicines
    const parentcontainer = document.querySelector('.nitemscover')
    const medcards = document.querySelectorAll('.medcard')
    const medsearch = document.querySelector('#searchInput')
    const error = document.querySelector('.merror')
    document.addEventListener("keydown", () => {
        medsearch.focus();
    })
    medsearch.addEventListener("change", (inp) => {
        let inputvalue = inp.target.value.toLowerCase();
        medcards.forEach(mcard => {
            let medcardh3val = mcard.querySelector("h3").textContent.toLowerCase()

            if (medcardh3val.includes(inputvalue)) {
                mcard.style.display = "block"
            }
            else {
                // mcard.style.display = "none"
                mcard.style.transition = "all 0.2s ease";
                setTimeout(() => {
                    mcard.style.opacity = "0.5";
                    setTimeout(() => {

                        mcard.style.display = "none";
                    }, 500);

                }, 300);
            }
        })
    })

    // sitem.forEach(element => {
    //     gsap.from(element, {
    //         opacity: 0,
    //         duration: 0.2,
    //         y: 100,


    //     })
    // });
})

const categoryDropdown = document.getElementById('categoryDropdown');
const companyDropdown = document.getElementById('companyDropdown');
const colorDropdown = document.getElementById('colordropdown');
const cardContainer = document.getElementById('cardContainer');
const itemsLoader = document.querySelector('.itemsloader'); // Assuming you have this

// Function to filter items based on selected dropdown values
function filterItems() {
    const selectedCategory = categoryDropdown.value;
    const selectedCompany = companyDropdown.value;
    const selectedColor = colorDropdown.value;

    const filteredItems = products.filter(item => {
        const categoryMatch = !selectedCategory || item.category === selectedCategory;
        const companyMatch = !selectedCompany || item.company === selectedCompany;
        const colorMatch = !selectedColor || item.color.toLowerCase() === selectedColor.toLowerCase(); // Case-insensitive

        return categoryMatch && companyMatch && colorMatch;
    });

    // Update the displayed cards
    renderItems(filteredItems);
}

// Function to render the item cards
function renderItems(itemList) {
    cardContainer.innerHTML = ''; // Clear previous cards
    if (itemsLoader) {
        itemsLoader.style.display = 'none'; // Hide loader after data is (re)loaded
    }

    if (itemList.length === 0) {
        cardContainer.innerHTML = '<p>No items found matching your selections.</p>';
        return;
    }

    itemList.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'p-4', 'mb-4'); // Example Tailwind classes
        card.innerHTML = `
        <h3 class="text-l font-bold">${item.name}</h3>
        <p class="text-gray-600">Category: ${item.category}</p>
        <p class="text-gray-600">Company: ${item.company}</p>
        <p class="text-gray-600">Color: ${item.color}</p>
        `;
        cardContainer.appendChild(card);
    });
}

// Initial rendering of all items
renderItems(products);

// Add event listeners to the dropdowns to trigger filtering on change
categoryDropdown.addEventListener('change', filterItems);
companyDropdown.addEventListener('change', filterItems);
colorDropdown.addEventListener('change', filterItems);
