import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {
  searchValue: string = '';

  


  filteredActivities: any[] = [];

  filteredProducts: any[] = [];

  



  filterActivities() {
    this.filteredActivities = this.activities.filter(activity =>
      activity.lib_na9.toLowerCase().includes(this.searchValue.toLowerCase())
    ).slice(0, 10);
  
    this.filteredProducts = this.products
      .filter(product =>
        product.name.toLowerCase().includes(this.searchValue.toLowerCase()) && 
        product.code.length > 5  // filter out products with code length of 4 or less
      )
      .slice(0, 10);
  
    // For each product, find the associated activity
    for (let product of this.filteredProducts) {
      let productCodePrefix = product.code.substr(0, 4); // Extract first four digits of product code
  
      product.relatedActivity = this.activities.find(activity => {
        // Convert cls_na9 to string with 2 decimal points
        let activityCode = Number(activity.cls_na9).toFixed(2);
        return activityCode.startsWith(productCodePrefix);
      });
    }
  }
  
  
  


activities: any[] = [
  {
      "lib_na9": "Location et location-bail de voitures et de véhicules automobiles légers",
      "cls_na9": 77.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير السيارات والمركبات ذات المحركات الخفيفة"
  },
  {
      "lib_na9": "Activités des agences de placement de main-d'oeuvre",
      "cls_na9": 78.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة وكالات توظيف اليد العاملة"
  },
  {
      "lib_na9": "Culture de céréales (à l'exception du riz)",
      "cls_na9": 1.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الحبوب (باستثناء الأرز)"
  },
  {
      "lib_na9": "Culture du riz",
      "cls_na9": 1.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الأرز"
  },
  {
      "lib_na9": "Culture de légumes, de melons, de racines et de tubercules",
      "cls_na9": 1.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الخضر والبطيخات والجذور والدرنيات"
  },
  {
      "lib_na9": "Culture de la canne à sucre",
      "cls_na9": 1.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة القصب السكري"
  },
  {
      "lib_na9": "Production de tabac",
      "cls_na9": 1.15,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة التبغ"
  },
  {
      "lib_na9": "Culture de plantes à fibres",
      "cls_na9": 1.16,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة النباتات ذات الألياف"
  },
  {
      "lib_na9": "Culture de légumineuses et de graines oléagineuses",
      "cls_na9": 1.17,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة البقوليات والبذور الزيتية"
  },
  {
      "lib_na9": "Culture de fourrages",
      "cls_na9": 1.18,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة النباتات العلفية"
  },
  {
      "lib_na9": "Horticulture et autres cultures non permanentes",
      "cls_na9": 1.19,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "بستنة وزراعات أخرى غير دائمة"
  },
  {
      "lib_na9": "Culture de la vigne",
      "cls_na9": 1.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الكروم (العنب)"
  },
  {
      "lib_na9": "Culture de palmiers-dattiers",
      "cls_na9": 1.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة النخيل المنتج للتمور"
  },
  {
      "lib_na9": "Culture d'agrumes",
      "cls_na9": 1.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة القوارص (الحمضيات)"
  },
  {
      "lib_na9": "Culture de fruits à pépins et à noyau",
      "cls_na9": 1.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الثمار ذات النواة والعضم"
  },
  {
      "lib_na9": "Culture d'autres fruits d'arbres ou d'arbustes et de fruits à coque",
      "cls_na9": 1.25,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الأشجار والشجيرات المثمرة الأخرى والجوزيات"
  },
  {
      "lib_na9": "Culture d'oliviers",
      "cls_na9": 1.26,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة الزياتين"
  },
  {
      "lib_na9": "Culture de plantes à boissons",
      "cls_na9": 1.27,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة نباتات المشروبات"
  },
  {
      "lib_na9": "Culture de plantes à épices, aromatiques, médicinales et pharmaceutiques",
      "cls_na9": 1.28,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة نباتات التوابل والنباتات العطرية والطبية والصيدلية"
  },
  {
      "lib_na9": "Autres cultures permanentes",
      "cls_na9": 1.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعات أخرى دائمة"
  },
  {
      "lib_na9": "Pépinières",
      "cls_na9": 1.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة المشاتل"
  },
  {
      "lib_na9": "Elevage de vaches laitières",
      "cls_na9": 1.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الأبقار المنتجة للحليب"
  },
  {
      "lib_na9": "Elevage d'autres bovins à viande",
      "cls_na9": 1.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الأبقار المنتجة للحم"
  },
  {
      "lib_na9": "Elevage de chevaux et d'autres équidés",
      "cls_na9": 1.43,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الخيل والحيوانات الخيلية الأخرى"
  },
  {
      "lib_na9": "Elevage de chameaux et d'autres camélidés",
      "cls_na9": 1.44,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الإبل"
  },
  {
      "lib_na9": "Elevage d'ovins et de caprins",
      "cls_na9": 1.45,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الضأن والماعز"
  },
  {
      "lib_na9": "Elevage de porcins",
      "cls_na9": 1.46,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الخنازير"
  },
  {
      "lib_na9": "Elevage de volailles",
      "cls_na9": 1.47,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الدواجن"
  },
  {
      "lib_na9": "Elevage d'autres animaux",
      "cls_na9": 1.49,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية حيوانات أخرى غ.م.س (غير مذكورة سابقا)"
  },
  {
      "lib_na9": "Culture et élevage associés",
      "cls_na9": 1.5,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "زراعة مقترنة بتربية الحيوانات (فلاحة مختلطة)"
  },
  {
      "lib_na9": "Activités de soutien aux cultures",
      "cls_na9": 1.61,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة دعم الإنتاج الزراعي"
  },
  {
      "lib_na9": "Activités de soutien à la production animale",
      "cls_na9": 1.62,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة دعم الإنتاج الحيواني"
  },
  {
      "lib_na9": "Traitement primaire des récoltes",
      "cls_na9": 1.63,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "المعالجة الأولية للمحاصيل (ما بعد الجني)"
  },
  {
      "lib_na9": "Traitement des semences",
      "cls_na9": 1.64,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "معالجة البذور (قبل التخزين أو التسويق)"
  },
  {
      "lib_na9": "Chasse, piégeage et services annexes",
      "cls_na9": 1.7,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الصيد والقنص وأنشطة الخدمات المتصلة بهما"
  },
  {
      "lib_na9": "Sylviculture et autres activités forestières",
      "cls_na9": 2.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "حراجة وأنشطة غابية أخرى"
  },
  {
      "lib_na9": "Exploitation forestière",
      "cls_na9": 2.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "إستغلال الغابات (قطع الأخشاب)"
  },
  {
      "lib_na9": "Récolte de l'alfa",
      "cls_na9": 2.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "جني الحلفاء"
  },
  {
      "lib_na9": "Récolte du liège",
      "cls_na9": 2.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "جني الفلّين (الخفاف)"
  },
  {
      "lib_na9": "Récolte d'autres produits forestiers non ligneux poussant à l'état sauvage",
      "cls_na9": 2.33,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "جني المنتجات الغابية البرية الأخرى"
  },
  {
      "lib_na9": "Services de soutien à l'exploitation forestière",
      "cls_na9": 2.4,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "خدمات الدعم في مجال استغلال الغابات"
  },
  {
      "lib_na9": "Pêche en mer",
      "cls_na9": 3.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صيد الأسماك في المياه البحرية"
  },
  {
      "lib_na9": "Pêche en eau douce",
      "cls_na9": 3.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صيد الأسماك في المياه العذبة"
  },
  {
      "lib_na9": "Aquaculture en mer",
      "cls_na9": 3.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الأحياء المائية في المياه البحرية"
  },
  {
      "lib_na9": "Aquaculture en eau douce",
      "cls_na9": 3.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تربية الأحياء المائية في المياه العذبة"
  },
  {
      "lib_na9": "Extraction de houille",
      "cls_na9": 5.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج الفحم الحجري"
  },
  {
      "lib_na9": "Extraction de lignite",
      "cls_na9": 5.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج اللينيت"
  },
  {
      "lib_na9": "Extraction de pétrole brut",
      "cls_na9": 6.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج النفط الخام"
  },
  {
      "lib_na9": "Extraction de gaz naturel",
      "cls_na9": 6.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج الغاز الطبيعي"
  },
  {
      "lib_na9": "Extraction de minerais de fer",
      "cls_na9": 7.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج خامات الحديد"
  },
  {
      "lib_na9": "Extraction de minerais d'uranium et de thorium",
      "cls_na9": 7.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج خامات الأورانيوم والثوريوم"
  },
  {
      "lib_na9": "Extraction d'autres minerais de métaux non ferreux",
      "cls_na9": 7.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج خامات معدنية أخرى غير حديدية"
  },
  {
      "lib_na9": "Extraction de pierres ornementales et de construction, de calcaire industriel, de gypse, de craie et d'ardoise",
      "cls_na9": 8.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج أحجارالبناء والزينة، الكلس الصناعي، الجبس، الطباشير والأردواز"
  },
  {
      "lib_na9": "Exploitation de gravières et sablières, extraction d'argiles et de kaolin",
      "cls_na9": 8.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "استغلال المحاجر وحقول الرمال والصلصال والكاولين"
  },
  {
      "lib_na9": "Extraction de phosphates naturels",
      "cls_na9": 8.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج الفسفاط الطبيعي"
  },
  {
      "lib_na9": "Extraction des minéraux chimique et d'engrais minéraux (sauf phosphates)",
      "cls_na9": 8.91,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج خامات معدنية للصناعة الكيميائية والأسمدة الطبيعية (ما عدا الفسفاط)"
  },
  {
      "lib_na9": "Extraction de tourbe",
      "cls_na9": 8.92,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إستخراج الخثّ (التورب)"
  },
  {
      "lib_na9": "Production de sel",
      "cls_na9": 8.93,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إنتاج الملح"
  },
  {
      "lib_na9": "Autres activités extractives n.c.a.",
      "cls_na9": 8.99,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة إستخراجية أخرى غ.م.س"
  },
  {
      "lib_na9": "Activités de soutien à l'extraction d'hydrocarbures",
      "cls_na9": 9.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة الدعم لإستخراج النفط والغاز الطبيعي"
  },
  {
      "lib_na9": "Activités de soutien aux autres industries extractives",
      "cls_na9": 9.9,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الدعم للصناعات الإستخراجية الأخرى"
  },
  {
      "lib_na9": "Transformation et conservation de la viande de boucherie",
      "cls_na9": 10.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل وحفظ  لحوم الجزارة"
  },
  {
      "lib_na9": "Transformation et conservation de la viande de volaille",
      "cls_na9": 10.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل وحفظ  لحوم الدواجن"
  },
  {
      "lib_na9": "Préparation de produits à base de viande",
      "cls_na9": 10.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إعداد منتجات من اللحوم"
  },
  {
      "lib_na9": "Transformation et conservation de poisson, de crustacés et de mollusques",
      "cls_na9": 10.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل وحفظ الأسماك والقشريات والرخويات"
  },
  {
      "lib_na9": "Transformation et conservation de pommes de terre",
      "cls_na9": 10.31,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل وحفظ البطاطا"
  },
  {
      "lib_na9": "Préparation de jus de fruits et légumes",
      "cls_na9": 10.32,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عصير الفواكه والخضر"
  },
  {
      "lib_na9": "Transformation et conservation de tomates",
      "cls_na9": 10.33,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل الطماطم وتصبيرها"
  },
  {
      "lib_na9": "Transformation et conservation d'autres légumes, sauf tomates",
      "cls_na9": 10.34,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل خضر أخرى وتصبيرها (ما عدى الطماطم)"
  },
  {
      "lib_na9": "Transformation et conservation de fruits",
      "cls_na9": 10.39,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل الفواكه وتصبيرها"
  },
  {
      "lib_na9": "Fabrication d'huiles d'olives",
      "cls_na9": 10.41,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع زيت الزيتون"
  },
  {
      "lib_na9": "Fabrication d'huiles et graisses brutes",
      "cls_na9": 10.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الزيوت والدهون الخام"
  },
  {
      "lib_na9": "Fabrication d'huiles et graisses raffinées",
      "cls_na9": 10.43,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الزيوت والدهون المكررة"
  },
  {
      "lib_na9": "Fabrication de margarine et graisses comestibles similaires",
      "cls_na9": 10.44,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المرغرين والدهون المشابهة الصالحة للأكل"
  },
  {
      "lib_na9": "Exploitation de laiteries et fabrication de fromage",
      "cls_na9": 10.51,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات الألبان بما في ذلك الجبن"
  },
  {
      "lib_na9": "Fabrication de glaces et sorbets",
      "cls_na9": 10.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المثلجات والصوربي"
  },
  {
      "lib_na9": "Meunerie",
      "cls_na9": 10.61,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الطّحانة (رحي الحبوب)"
  },
  {
      "lib_na9": "Fabrication de produits amylacés",
      "cls_na9": 10.62,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات نشوية"
  },
  {
      "lib_na9": "Autres activités de travail des grains",
      "cls_na9": 10.69,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة أخرى لتحويل الحبوب"
  },
  {
      "lib_na9": "Boulangerie et boulangerie-pâtisserie",
      "cls_na9": 10.71,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "مخابز ومخابز مقترنة بصنع المرطبات"
  },
  {
      "lib_na9": "Pâtisserie (exclusive)",
      "cls_na9": 10.72,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "صنع المرطبات (فقط)"
  },
  {
      "lib_na9": "Fabrication de biscuits, biscottes et pâtisseries de conservation",
      "cls_na9": 10.73,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع البسكوت والبسكويت والمرطبات المصبرة"
  },
  {
      "lib_na9": "Fabrication de pâtes alimentaires et couscous",
      "cls_na9": 10.74,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع العجين الغذائي والكسكس"
  },
  {
      "lib_na9": "Fabrication de sucre",
      "cls_na9": 10.81,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع السكر"
  },
  {
      "lib_na9": "Fabrication de cacao, chocolat et de produits de confiserie",
      "cls_na9": 10.82,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الكاكاو والشكلاطة والحلويات السكرية"
  },
  {
      "lib_na9": "Transformation du thé et du café",
      "cls_na9": 10.83,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحويل البن والشاي"
  },
  {
      "lib_na9": "Fabrication de condiments et assaisonnements",
      "cls_na9": 10.84,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "صنع التوابل والبهارات"
  },
  {
      "lib_na9": "Fabrication de plats préparés",
      "cls_na9": 10.85,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأطعمة والأطباق الجاهزة"
  },
  {
      "lib_na9": "Fabrication d'aliments homogénéisés et diététiques",
      "cls_na9": 10.86,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أغذية ملائمة للأطفال وأغذية للحمية"
  },
  {
      "lib_na9": "Fabrication d'autres produits alimentaires n.c.a.",
      "cls_na9": 10.89,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات غذائية أخرى غ.م.س"
  },
  {
      "lib_na9": "Fabrication d'aliments pour animaux de ferme",
      "cls_na9": 10.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أغذية حيوانات المزرعة"
  },
  {
      "lib_na9": "Fabrication d'aliments pour animaux de compagnie",
      "cls_na9": 10.92,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أغذية الحيوانات المنزلية"
  },
  {
      "lib_na9": "Production de boissons alcooliques distillées",
      "cls_na9": 11.01,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج المشروبات الكحولية المقطرة"
  },
  {
      "lib_na9": "Production de vin (de raisin)",
      "cls_na9": 11.02,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج الخمر"
  },
  {
      "lib_na9": "Fabrication de cidre et de vins de fruits",
      "cls_na9": 11.03,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأنبذة (من نوع السيدر) وخمور الفواكه"
  },
  {
      "lib_na9": "Production d'autres boissons fermentées non distillées",
      "cls_na9": 11.04,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج مشروبات أخرى مخمّرة غير مقطرة"
  },
  {
      "lib_na9": "Fabrication de bière",
      "cls_na9": 11.05,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الجعة (البيرة)"
  },
  {
      "lib_na9": "Fabrication de malt",
      "cls_na9": 11.06,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة المنتشة (المالت)"
  },
  {
      "lib_na9": "Industrie des eaux minérales et gazeuses",
      "cls_na9": 11.07,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة مياه المائدة (للشراب)"
  },
  {
      "lib_na9": "Production de boissons rafraîchissantes",
      "cls_na9": 11.08,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج المشروبات المنعشة (غير الكحولية)"
  },
  {
      "lib_na9": "Fabrication de produits à base de tabac",
      "cls_na9": 12.0,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة منتجات التبغ"
  },
  {
      "lib_na9": "Préparation de fibres textiles et filature",
      "cls_na9": 13.1,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحضير الألياف النسيجية والغزل"
  },
  {
      "lib_na9": "Tissage industriel",
      "cls_na9": 13.21,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "النسيج الصناعي"
  },
  {
      "lib_na9": "Tissage traditionnel",
      "cls_na9": 13.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "النسيج التقليدي"
  },
  {
      "lib_na9": "Ennoblissement textile",
      "cls_na9": 13.3,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إتمام تجهيز المنسوجات"
  },
  {
      "lib_na9": "Fabrication industrielle de tapis et moquettes",
      "cls_na9": 13.41,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإنتاج الصناعي للزرابي والسجاد"
  },
  {
      "lib_na9": "Fabrication artisanale de tapis",
      "cls_na9": 13.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صنع تقليدي للزرابي"
  },
  {
      "lib_na9": "Fabrication d'étoffes à mailles",
      "cls_na9": 13.91,
      "sec_pri": -1,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "صنع الأقمشة المزردّة"
  },
  {
      "lib_na9": "Fabrication indusrielle de linge domestique, d'articles d'ameublement et de literie",
      "cls_na9": 13.92,
      "sec_pri": -1,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إنتاج صناعي لأقمشة منزلية متنوعة"
  },
  {
      "lib_na9": "fabrication industrielle d'autres articles textiles, sauf habillement",
      "cls_na9": 13.93,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج صناعي لمنتجات نسيج أخرى ما عدى الملابس"
  },
  {
      "lib_na9": "Fabrication de ficelles, cordes et filets",
      "cls_na9": 13.94,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الخيوط والحبال والشباك"
  },
  {
      "lib_na9": "Fabrication de non-tissés, sauf habillement",
      "cls_na9": 13.95,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات غير منسوجة ما عدى الملابس"
  },
  {
      "lib_na9": "Fabrication d'autres textiles techniques et industriels",
      "cls_na9": 13.96,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة منسوجات تقنية وصناعية أخرى"
  },
  {
      "lib_na9": "Fabrication artisanale d'articles textiles traditionnels",
      "cls_na9": 13.97,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صنع حرفي لمنتجات النسيج التقليدية"
  },
  {
      "lib_na9": "Fabrication d'autres textiles n.c.a.",
      "cls_na9": 13.99,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة منسوجات أخرى غ.م.س"
  },
  {
      "lib_na9": "Fabrication de vêtements en cuir",
      "cls_na9": 14.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع ملابس من الجلد"
  },
  {
      "lib_na9": "Fabrication de vêtements de travail",
      "cls_na9": 14.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع ملابس العمل"
  },
  {
      "lib_na9": "Fabrication de vêtements sur mesure",
      "cls_na9": 14.13,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع ملابس بالقياس"
  },
  {
      "lib_na9": "Fabrication industrielle de vêtements de dessus",
      "cls_na9": 14.14,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج صناعي للملابس الخارجية"
  },
  {
      "lib_na9": "Fabrication artisanale de vêtements traditionnels",
      "cls_na9": 14.15,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "إنتاج حرفي للباس التقليدي"
  },
  {
      "lib_na9": "Fabrication de vêtements de dessous",
      "cls_na9": 14.16,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع ملابس داخلية"
  },
  {
      "lib_na9": "Fabrication d'autres vêtements et accessoires",
      "cls_na9": 14.19,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع ملابس أخرى وصنع مكمّلات اللّباس"
  },
  {
      "lib_na9": "Fabrication d'articles en fourrure",
      "cls_na9": 14.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات من الفراء"
  },
  {
      "lib_na9": "Fabrication d'articles chaussants à mailles",
      "cls_na9": 14.31,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الجوارب من الأقمشة المزردّة"
  },
  {
      "lib_na9": "Fabrication d'autres articles à mailles",
      "cls_na9": 14.39,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات أخرى من الأقمشة المزردّة"
  },
  {
      "lib_na9": "Apprêt et tannage des cuirs; préparation et teinture des fourrures",
      "cls_na9": 15.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تهيئة الجلود ودباغتها، تحضير وصباغة الفراء"
  },
  {
      "lib_na9": "Fabrication d'articles de voyage, de maroquinerie et de sellerie",
      "cls_na9": 15.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع معدات السفر ومنتجات أخرى من الجلد (الماروكنري)"
  },
  {
      "lib_na9": "Fabrication indusrielle de chaussures",
      "cls_na9": 15.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج صناعي للأحذية"
  },
  {
      "lib_na9": "Fabrication artisanale de chaussures traditionnelles",
      "cls_na9": 15.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صنع حرفي للأحذية التقليدية"
  },
  {
      "lib_na9": "Sciage et rabotage du bois",
      "cls_na9": 16.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر الخشب ونجره"
  },
  {
      "lib_na9": "Fabrication de placage et de panneaux de bois",
      "cls_na9": 16.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع رقائق من قشرة الخشب والألواح المصنوعة من الخشب"
  },
  {
      "lib_na9": "Fabrication de parquets assemblés",
      "cls_na9": 16.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الرقائق الخشبية المجمعة"
  },
  {
      "lib_na9": "Fabrication de charpentes et d'autres menuiseries",
      "cls_na9": 16.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع هياكل البناء الخشبية والنجارة الخشبية الأخرى"
  },
  {
      "lib_na9": "Fabrication d'emballages en bois",
      "cls_na9": 16.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أوعية اللف من الخشب"
  },
  {
      "lib_na9": "Fabrication industrielle d'objets divers en bois",
      "cls_na9": 16.25,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج صناعي لمنتجات متنوعة من الخشب"
  },
  {
      "lib_na9": "Fabrication artisanale d'objets divers en bois, d'objets en liège, vannerie et sparterie",
      "cls_na9": 16.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صنع حرفي لمنتجات تقليدية متنوعة من الخشب والفلين والقصب ومواد الضفر"
  },
  {
      "lib_na9": "Fabrication de pâte à papier",
      "cls_na9": 17.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عجين الورق"
  },
  {
      "lib_na9": "Fabrication de papier et de carton",
      "cls_na9": 17.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الورق والورق المقوى"
  },
  {
      "lib_na9": "Fabrication de papier et carton ondulés et d'emballages en papier ou en carton",
      "cls_na9": 17.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الورق المقوى المموّج ومواد اللّف من الورق والورق المقوى"
  },
  {
      "lib_na9": "Fabrication d'articles en papier à usage sanitaire ou domestique",
      "cls_na9": 17.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات من الورق للإستعمال الصحّي أو المنزلي"
  },
  {
      "lib_na9": "Fabrication d'articles de papeterie",
      "cls_na9": 17.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات الوراقة"
  },
  {
      "lib_na9": "Fabrication de papiers peints",
      "cls_na9": 17.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الورق الملوّن والمرسوم"
  },
  {
      "lib_na9": "Fabrication d'autres articles en papier ou en carton",
      "cls_na9": 17.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات أخرى من الورق والورق المقوى"
  },
  {
      "lib_na9": "Imprimerie de journaux",
      "cls_na9": 18.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "طباعة الجرائد"
  },
  {
      "lib_na9": "Autre imprimerie (labeur)",
      "cls_na9": 18.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة طباعة أخرى"
  },
  {
      "lib_na9": "Activités de pré-presse",
      "cls_na9": 18.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة ما قبل النشر"
  },
  {
      "lib_na9": "Reliure et activités connexes",
      "cls_na9": 18.14,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تجليد الكتب وأشغال مكملة"
  },
  {
      "lib_na9": "Reproduction d'enregistrements",
      "cls_na9": 18.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نسخ التسجيلات"
  },
  {
      "lib_na9": "Cokéfaction",
      "cls_na9": 19.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع فحم الكوك"
  },
  {
      "lib_na9": "Raffinage du pétrole",
      "cls_na9": 19.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تكرير النفط"
  },
  {
      "lib_na9": "Fabrication de gaz industriels",
      "cls_na9": 20.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الغازات الصناعية"
  },
  {
      "lib_na9": "Fabrication de colorants et de pigments",
      "cls_na9": 20.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الملونات والصباغ"
  },
  {
      "lib_na9": "Fabrication d'autres produits chimiques inorganiques de base",
      "cls_na9": 20.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد كيميائية أساسية غير عضوية أخرى"
  },
  {
      "lib_na9": "Fabrication d'autres produits chimiques organiques de base",
      "cls_na9": 20.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد كيميائية عضوية أساسية أخرى"
  },
  {
      "lib_na9": "Fabrication de produits azotés et d'engrais",
      "cls_na9": 20.15,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد أزوتية وصنع الأسمدة"
  },
  {
      "lib_na9": "Fabrication de matières plastiques de base",
      "cls_na9": 20.16,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد اللدائن (البلاستيك) الأساسية"
  },
  {
      "lib_na9": "Fabrication de caoutchouc synthétique",
      "cls_na9": 20.17,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المطاط التركيبي"
  },
  {
      "lib_na9": "Fabrication de pesticides et d'autres produits agrochimiques",
      "cls_na9": 20.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المبيدات والمواد الكيميازراعية"
  },
  {
      "lib_na9": "Fabrication de peintures, vernis, encres et mastics",
      "cls_na9": 20.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الدهن والبرنيق (الفرنيس) وأحبار الطباعة"
  },
  {
      "lib_na9": "Fabrication de savons, détergents et produits d'entretien",
      "cls_na9": 20.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الصابون ومواد التنظيف ومواد الصيانة"
  },
  {
      "lib_na9": "Fabrication de parfums et de produits pour la toilette",
      "cls_na9": 20.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع العطور ومواد التجميل"
  },
  {
      "lib_na9": "Fabrication de produits explosifs",
      "cls_na9": 20.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المواد المتفجرة"
  },
  {
      "lib_na9": "Fabrication de colles",
      "cls_na9": 20.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأصماغ (الكولّة)"
  },
  {
      "lib_na9": "Fabrication d'huiles essentielles",
      "cls_na9": 20.53,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الزيوت الأساسية"
  },
  {
      "lib_na9": "Fabrication d'autres produits chimiques n.c.a.",
      "cls_na9": 20.59,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد كيميائية أخرى غ.م.س"
  },
  {
      "lib_na9": "Fabrication de fibres artificielles ou synthétiques",
      "cls_na9": 20.6,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع ألياف إصطناعية أو تركيبية"
  },
  {
      "lib_na9": "Fabrication de produits pharmaceutiques de base",
      "cls_na9": 21.1,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد صيدلية أساسية"
  },
  {
      "lib_na9": "Fabrication de préparations pharmaceutiques",
      "cls_na9": 21.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مستحضرات صيدلية"
  },
  {
      "lib_na9": "Fabrication et rechapage de pneumatiques",
      "cls_na9": 22.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع العجلات المطاطية ومواد تجديد الأسطح الخارجية للعجلات المطاطية"
  },
  {
      "lib_na9": "Fabrication d'autres articles en caoutchouc",
      "cls_na9": 22.19,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات أخرى من المطاط"
  },
  {
      "lib_na9": "Fabrication de plaques, feuilles, tubes et profilés en matières plastiques",
      "cls_na9": 22.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الألواح والأوراق والأنابيب والقضبان من اللدائن"
  },
  {
      "lib_na9": "Fabrication d'emballages en matières plastiques",
      "cls_na9": 22.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أوعية اللّف من اللدائن"
  },
  {
      "lib_na9": "Fabrication d'éléments en matières plastiques pour la construction",
      "cls_na9": 22.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عناصر البناء من اللدائن"
  },
  {
      "lib_na9": "Fabrication d'autres articles en matières plastiques",
      "cls_na9": 22.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات أخرى من اللدائن"
  },
  {
      "lib_na9": "Fabrication de verre plat",
      "cls_na9": 23.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الزجاج المسطّح"
  },
  {
      "lib_na9": "Façonnage et transformation du verre plat",
      "cls_na9": 23.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صياغة وتحويل الزجاج المسطّح"
  },
  {
      "lib_na9": "Fabrication de verre creux",
      "cls_na9": 23.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الزجاج المجوّف"
  },
  {
      "lib_na9": "Fabrication de fibres de verre",
      "cls_na9": 23.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الألياف الزجاجية"
  },
  {
      "lib_na9": "Fabrication et façonnage d'autres articles en verre, y compris verre technique",
      "cls_na9": 23.19,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات أخرى من الزجاج وصياغتها"
  },
  {
      "lib_na9": "Fabrication de produits réfractaires",
      "cls_na9": 23.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات منجمية غير معدنية تتحمل الحرارة"
  },
  {
      "lib_na9": "Fabrication de carreaux en céramique",
      "cls_na9": 23.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الزليج من الخزف"
  },
  {
      "lib_na9": "Fabrication de briques, tuiles et produits de construction, en terre cuite",
      "cls_na9": 23.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع القرميد والآجر من الطين المكوي (الفخار)"
  },
  {
      "lib_na9": "Fabrication industrielle d'articles céramiques à usage domestique ou ornemental",
      "cls_na9": 23.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج صناعي لمنتجات خزفية للإستعمال المنزلي أو للزخرفة"
  },
  {
      "lib_na9": "Fabrication artisanale d'articles céramiques à usage domestique ou ornemental",
      "cls_na9": 23.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع تقليدي لمنتجات خزفية للإستعمال المنزلي أو للزخرفة"
  },
  {
      "lib_na9": "Fabrication d'appareils sanitaires en céramique",
      "cls_na9": 23.43,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع تجهيزات صحيّة من الخزف"
  },
  {
      "lib_na9": "Fabrication d'isolateurs et pièces isolantes en céramique",
      "cls_na9": 23.44,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع العوازل الكهربائية والقطع العازلة من الخزف"
  },
  {
      "lib_na9": "Fabrication d'autres produits céramiques à usage technique",
      "cls_na9": 23.45,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات خزفية أخرى للإستعمال التقني"
  },
  {
      "lib_na9": "Fabrication d'autres produits céramiques",
      "cls_na9": 23.49,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات خزفية أخرى"
  },
  {
      "lib_na9": "Fabrication de ciment",
      "cls_na9": 23.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأسمنت"
  },
  {
      "lib_na9": "Fabrication de chaux et plâtre",
      "cls_na9": 23.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الجير والجبس"
  },
  {
      "lib_na9": "Fabrication d'éléments en béton pour la construction",
      "cls_na9": 23.61,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عناصر من الخرسانة  للبناء"
  },
  {
      "lib_na9": "Fabrication d'éléments en plâtre pour la construction",
      "cls_na9": 23.62,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عناصر من الجبس للبناء"
  },
  {
      "lib_na9": "Fabrication de béton prêt à l'emploi",
      "cls_na9": 23.63,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الخرسانة الجاهزة للإستعمال"
  },
  {
      "lib_na9": "Fabrication de mortiers et bétons secs",
      "cls_na9": 23.64,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الملاط والخرسانة المخلوطة خلطا جافّا"
  },
  {
      "lib_na9": "Fabrication d'ouvrages en fibre ciment",
      "cls_na9": 23.65,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عناصر من ألياف الإسمنت"
  },
  {
      "lib_na9": "Fabrication d'autres ouvrages en béton, en ciment ou en plâtre",
      "cls_na9": 23.69,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عناصر أخرى من الخرسانة والإسمنت أو من الجبس"
  },
  {
      "lib_na9": "Taille, façonnage et finissage de pierres",
      "cls_na9": 23.7,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "قطع وتشكيل وصقل الأحجار"
  },
  {
      "lib_na9": "Fabrication de produits abrasifs",
      "cls_na9": 23.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات كاشطة"
  },
  {
      "lib_na9": "Fabrication d'autres produits minéraux non métalliques n.c.a.",
      "cls_na9": 23.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات من مواد منجمية غير معدنية  غ.م.س"
  },
  {
      "lib_na9": "Sidérurgie",
      "cls_na9": 24.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الحديد"
  },
  {
      "lib_na9": "Fabrication de tubes, tuyaux, profilés creux et accessoires correspondants en acier",
      "cls_na9": 24.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأنابيب من الفولاذ وملحقاتها من الفولاذ"
  },
  {
      "lib_na9": "Etirage à froid de barres",
      "cls_na9": 24.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "مدّ الفولاذ على البارد"
  },
  {
      "lib_na9": "Laminage à froid de feuillards",
      "cls_na9": 24.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تصفيح (لاميناج) الفولاذ على البارد"
  },
  {
      "lib_na9": "Profilage à froid par formage ou pliage",
      "cls_na9": 24.33,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تجنيب الفولاذ على البارد بالتشكيل أو بالطيّ"
  },
  {
      "lib_na9": "Tréfilage à froid",
      "cls_na9": 24.34,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "فلد الفولاذ على البارد"
  },
  {
      "lib_na9": "Production de métaux précieux",
      "cls_na9": 24.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج المعادن النفيسة"
  },
  {
      "lib_na9": "Métallurgie de l'aluminium",
      "cls_na9": 24.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الألومنيوم"
  },
  {
      "lib_na9": "Métallurgie du plomb, du zinc ou de l'étain",
      "cls_na9": 24.43,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الرصاص والقصدير (الزنك) والتوتياء (إيتان)"
  },
  {
      "lib_na9": "Métallurgie du cuivre",
      "cls_na9": 24.44,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة النحاس"
  },
  {
      "lib_na9": "Métallurgie des autres métaux non ferreux",
      "cls_na9": 24.45,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة معادن غير حديدية أخرى"
  },
  {
      "lib_na9": "Elaboration et transformation de matières nucléaires",
      "cls_na9": 24.46,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تحضير وتحويل المواد النووية"
  },
  {
      "lib_na9": "Fonderie de fonte",
      "cls_na9": 24.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "سباكة الصلب (الفونت)"
  },
  {
      "lib_na9": "Fonderie d'acier",
      "cls_na9": 24.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "سباكة الفولاذ"
  },
  {
      "lib_na9": "Fonderie de métaux légers",
      "cls_na9": 24.53,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "سباكة المعادن الخفيفة"
  },
  {
      "lib_na9": "Fonderie d'autres métaux non ferreux",
      "cls_na9": 24.54,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "سباكة معادن غير حديدية أخرى"
  },
  {
      "lib_na9": "Fabrication de structures métalliques et de parties de structures",
      "cls_na9": 25.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع هياكل معدنية وأجزاؤها"
  },
  {
      "lib_na9": "Fabrication de portes et fenêtres en métal",
      "cls_na9": 25.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأبواب والنوافذ المعدنية"
  },
  {
      "lib_na9": "Fabrication de radiateurs et de chaudières pour le chauffage central",
      "cls_na9": 25.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المشعاعات (رادياتور) ومراجل التدفئة المركزية"
  },
  {
      "lib_na9": "Fabrication de récipients métalliques pour gaz comprimés ou liquéfiés",
      "cls_na9": 25.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع خزّانات معدنية للغاز المضغوط أو السائل"
  },
  {
      "lib_na9": "Fabrication d'autres réservoirs, citernes et conteneurs métalliques",
      "cls_na9": 25.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع خزّانات وصهاريج معدنية أخرى"
  },
  {
      "lib_na9": "Fabrication de générateurs de vapeur, à l'exception des chaudières pour le chauffage central",
      "cls_na9": 25.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مولّدات بخار الماء باستثناء مراجل التدفئة المركزية"
  },
  {
      "lib_na9": "Fabrication d'armes et de munitions",
      "cls_na9": 25.4,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأسلحة والذخيرة"
  },
  {
      "lib_na9": "Forge, emboutissage, estampage; métallurgie des poudres",
      "cls_na9": 25.5,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "سبك المعادن وطرقها ورشمها وميتالورجيا المساحيق"
  },
  {
      "lib_na9": "Traitement et revêtement des métaux",
      "cls_na9": 25.61,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "معالجة وطلي المعادن، المعالجة بالآلات (أوزيناج)"
  },
  {
      "lib_na9": "Usinage",
      "cls_na9": 25.62,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أشغال الميكانيك العام (خراطة، تفريز، تعديل...)"
  },
  {
      "lib_na9": "Fabrication de coutellerie",
      "cls_na9": 25.71,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أدوات القطع"
  },
  {
      "lib_na9": "Fabrication de serrures et de ferrures",
      "cls_na9": 25.72,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأقفال ومنتجات حديدية متنوعة أخرى"
  },
  {
      "lib_na9": "Fabrication d'outillage à main",
      "cls_na9": 25.73,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الآلات الأدواتية"
  },
  {
      "lib_na9": "Fabrication d'outillage mécanique",
      "cls_na9": 25.74,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأدوات الميكانيكية"
  },
  {
      "lib_na9": "Fabrication de fûts et emballages métalliques similaires",
      "cls_na9": 25.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع البراميل والأوعية المماثلة من المعادن"
  },
  {
      "lib_na9": "Fabrication d'emballages métalliques légers",
      "cls_na9": 25.92,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مواد اللّف المعدنية الخفيفة"
  },
  {
      "lib_na9": "Fabrication d'articles en fils métalliques, de chaînes et de ressorts",
      "cls_na9": 25.93,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات من الخيوط المعدنية وصنع السلاسل والزنابرك (روسور)"
  },
  {
      "lib_na9": "Fabrication de vis et de boulons",
      "cls_na9": 25.94,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع البراغي والمحازق (صنع الفيس والبولون)"
  },
  {
      "lib_na9": "Fabrication artisanale d'ouvrages traditionnels en métaux",
      "cls_na9": 25.95,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع حرفي لمنتجات تقليدية من المعادن غ.م.س"
  },
  {
      "lib_na9": "Fabrication d'autres ouvrages métalliques n.c.a.",
      "cls_na9": 25.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات متنوعة أخرى من المعادن غ.م.س"
  },
  {
      "lib_na9": "Fabrication de composants électroniques",
      "cls_na9": 26.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مكوّنات إلكترونية"
  },
  {
      "lib_na9": "Fabrication de cartes électroniques assemblées",
      "cls_na9": 26.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع لوحات إلكترونية مجمّعة"
  },
  {
      "lib_na9": "Fabrication d'ordinateurs et d'équipements périphériques",
      "cls_na9": 26.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الحواسيب والمعدات الملحقة"
  },
  {
      "lib_na9": "Fabrication d'équipements de communication",
      "cls_na9": 26.3,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أجهزة الإتصال"
  },
  {
      "lib_na9": "Fabrication de produits électroniques grand public",
      "cls_na9": 26.4,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع منتجات إلكترونية واسعة الإستهلاك"
  },
  {
      "lib_na9": "Fabrication d'instruments et d'appareils de mesure, d'essai et de navigation",
      "cls_na9": 26.51,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أدوات القياس والإختبار والملاحة"
  },
  {
      "lib_na9": "Horlogerie",
      "cls_na9": 26.52,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الساعات بإختلاف أنواعها (وآليات تحديد التوقيت)"
  },
  {
      "lib_na9": "Fabrication d'équipements d'irradiation médicale, d'équipements électromédicaux et électrothérapeutiques",
      "cls_na9": 26.6,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة أجهزة الأشعة الطبية والأجهزة الطبية والعلاجية"
  },
  {
      "lib_na9": "Fabrication de matériels optique et photographique",
      "cls_na9": 26.7,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأدوات البصرية وآلات التصوير الفوتوغرافي"
  },
  {
      "lib_na9": "Fabrication de supports magnétiques et optiques",
      "cls_na9": 26.8,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الوسائط المغناطسية والبصرية"
  },
  {
      "lib_na9": "Fabrication de moteurs, génératrices et transformateurs électriques",
      "cls_na9": 27.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المحركات والمولّدات والمحوّلات الكهربائية"
  },
  {
      "lib_na9": "Fabrication de matériel de distribution et de commande électrique",
      "cls_na9": 27.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أجهزة التوزيع والتحكم في التيار الكهربائي"
  },
  {
      "lib_na9": "Fabrication de piles et d'accumulateurs électriques",
      "cls_na9": 27.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع البطاريات والمركمات الكهربائية"
  },
  {
      "lib_na9": "Fabrication de câbles de fibres optiques",
      "cls_na9": 27.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع كابلات الألياف البصرية"
  },
  {
      "lib_na9": "Fabrication d'autres fils et câbles électroniques ou électriques",
      "cls_na9": 27.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أسلاك وكابلات إلكترونية وكهربائية أخرى"
  },
  {
      "lib_na9": "Fabrication de matériel d'installation électrique",
      "cls_na9": 27.33,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أجهزة التركيب الكهربائية"
  },
  {
      "lib_na9": "Fabrication d'appareils d'éclairage électrique",
      "cls_na9": 27.4,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أجهزة الإنارة الكهربائية"
  },
  {
      "lib_na9": "Fabrication d'appareils électroménagers",
      "cls_na9": 27.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات كهربائية منزلية"
  },
  {
      "lib_na9": "Fabrication d'appareils ménagers non électriques",
      "cls_na9": 27.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات منزلية غير كهربائية"
  },
  {
      "lib_na9": "Fabrication d'autres matériels électriques",
      "cls_na9": 27.9,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع معدّات كهربائية أخرى"
  },
  {
      "lib_na9": "Fabrication de moteurs et turbines, à l'exception des moteurs d'avions et de véhicules",
      "cls_na9": 28.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المحركات والتوربينات باستثناء محركات الطائرات والعربات"
  },
  {
      "lib_na9": "Fabrication d'équipements hydrauliques et pneumatiques",
      "cls_na9": 28.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأجهزة الهيدروليكية والهوائية"
  },
  {
      "lib_na9": "Fabrication d'autres pompes et compresseurs",
      "cls_na9": 28.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المضخات والمضاغط الأخرى"
  },
  {
      "lib_na9": "Fabrication d'autres articles de robinetterie",
      "cls_na9": 28.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الحنفيات ومعداتها الأخرى"
  },
  {
      "lib_na9": "Fabrication d'engrenages et d'organes mécaniques de transmission",
      "cls_na9": 28.15,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المسننّات والأعضاء الميكانيكية الناقلة للحركة"
  },
  {
      "lib_na9": "Fabrication de fours et brûleurs",
      "cls_na9": 28.21,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأفران والمحاريق (مواقد أفران الصهر)"
  },
  {
      "lib_na9": "Fabrication de matériel de levage et de manutention",
      "cls_na9": 28.22,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات الرفع والمناولة"
  },
  {
      "lib_na9": "Fabrication de machines et d'équipements de bureau (à l'exception des ordinateurs et équipements périphériques)",
      "cls_na9": 28.23,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الآلات والمعدات المكتبية باستثناء الحواسيب والمعدات الملحقة بها"
  },
  {
      "lib_na9": "Fabrication d'outillage portatif à moteur incorporé",
      "cls_na9": 28.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأدوات الآلية المنقولة ذات محرك مندمج"
  },
  {
      "lib_na9": "Fabrication d'équipements aérauliques et frigorifiques industriels",
      "cls_na9": 28.25,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع تجهيزات التهوئة وتجهيزات التبريد الصناعي"
  },
  {
      "lib_na9": "Fabrication de machines diverses d'usage général",
      "cls_na9": 28.29,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات متنوعة متعددة الأغراض"
  },
  {
      "lib_na9": "Fabrication de machines agricoles et forestières",
      "cls_na9": 28.3,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الآلات المستعملة في الفلاحة والغابات"
  },
  {
      "lib_na9": "Fabrication de machines de formage des métaux",
      "cls_na9": 28.41,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الأدوات الآلية لتشكيل المعادن"
  },
  {
      "lib_na9": "Fabrication d'autres machines-outils",
      "cls_na9": 28.49,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أدوات آلية أخرى"
  },
  {
      "lib_na9": "Fabrication de machines pour la métallurgie",
      "cls_na9": 28.91,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات العدانة"
  },
  {
      "lib_na9": "Fabrication de machines pour l'extraction ou la construction",
      "cls_na9": 28.92,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات لإستخراج المعادن أو للبناء"
  },
  {
      "lib_na9": "Fabrication de machines pour l'industrie agro-alimentaire",
      "cls_na9": 28.93,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات للصناعة الفلاحية-الغذائية"
  },
  {
      "lib_na9": "Fabrication de machines pour les industries textiles",
      "cls_na9": 28.94,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات لصناعة النسيج"
  },
  {
      "lib_na9": "Fabrication de machines pour les industries du papier et du carton",
      "cls_na9": 28.95,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات لصناعة الورق والورق المقوى"
  },
  {
      "lib_na9": "Fabrication de machines pour le travail du caoutchouc ou des plastiques",
      "cls_na9": 28.96,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات لصناعة المطاط واللدائن"
  },
  {
      "lib_na9": "Fabrication d'autres machines d'usage spécifique n.c.a.",
      "cls_na9": 28.99,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع آلات أخرى ذات الإستعمال المختص غ.م.س"
  },
  {
      "lib_na9": "Construction de véhicules automobiles",
      "cls_na9": 29.1,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع عربات ذات محرك"
  },
  {
      "lib_na9": "Fabrication de carrosseries et remorques",
      "cls_na9": 29.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع هياكل السيارات والمقطورات"
  },
  {
      "lib_na9": "Fabrication d'équipements électriques et électroniques automobiles",
      "cls_na9": 29.31,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع معدّات كهربائية وإلكترونية للسيارات"
  },
  {
      "lib_na9": "Fabrication d'autres équipements automobiles",
      "cls_na9": 29.32,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع معدّات أخرى للسيارات"
  },
  {
      "lib_na9": "Construction de navires et de structures flottantes",
      "cls_na9": 30.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع السفن والهياكل العائمة"
  },
  {
      "lib_na9": "Construction de bateaux de plaisance",
      "cls_na9": 30.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع مراكب النزهة"
  },
  {
      "lib_na9": "Construction de locomotives et d'autre materiel ferroviaire roulant",
      "cls_na9": 30.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع القاطرات ومعدات السكك الحديدية المتنقلة"
  },
  {
      "lib_na9": "Construction aéronautique et spatiale",
      "cls_na9": 30.3,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الطائرات والمركبات الفضائية"
  },
  {
      "lib_na9": "Construction de véhicules militaires de combat",
      "cls_na9": 30.4,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع العربات العسكرية الحربية"
  },
  {
      "lib_na9": "Fabrication de motocycles",
      "cls_na9": 30.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الدراجات النارية"
  },
  {
      "lib_na9": "Fabrication de bicyclettes et de véhicules pour invalides",
      "cls_na9": 30.92,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الدراجات العادية وعربات المعوقين"
  },
  {
      "lib_na9": "Fabrication d'autres équipements de transport n.c.a.",
      "cls_na9": 30.99,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع معدات نقل أخرى غ.م.س"
  },
  {
      "lib_na9": "Fabrication de meubles de bureau et de magasin",
      "cls_na9": 31.01,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أثاث المكاتب والمغازات"
  },
  {
      "lib_na9": "Fabrication de meubles de cuisine",
      "cls_na9": 31.02,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أثاث المطبخ"
  },
  {
      "lib_na9": "Fabrication de matelas",
      "cls_na9": 31.03,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الحشايا (المضارب)"
  },
  {
      "lib_na9": "Industries connexes de l'ameublement",
      "cls_na9": 31.08,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعات ملحقة بصنع الأثاث"
  },
  {
      "lib_na9": "Fabrication d'autres meubles",
      "cls_na9": 31.09,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أصناف أخرى من الأثاث"
  },
  {
      "lib_na9": "Frappe de monnaie",
      "cls_na9": 32.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "سكّ النقود"
  },
  {
      "lib_na9": "Fabrication d'articles de joaillerie et bijouterie",
      "cls_na9": 32.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المجوهرات والحليّ والمصوغ"
  },
  {
      "lib_na9": "Fabrication d'articles de bijouterie fantaisie et articles similaires",
      "cls_na9": 32.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع المجوهرات المقلّدة"
  },
  {
      "lib_na9": "Fabrication d'instruments de musique",
      "cls_na9": 32.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الآلات الموسيقية"
  },
  {
      "lib_na9": "Fabrication d'articles de sport",
      "cls_na9": 32.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع أدوات الرياضة"
  },
  {
      "lib_na9": "Fabrication de jeux et jouets",
      "cls_na9": 32.4,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الألعاب واللعب"
  },
  {
      "lib_na9": "Fabrication d'instruments et de fournitures à usage médical et dentaire",
      "cls_na9": 32.5,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صنع الآلات والمستلزمات المستعملة في المجال الطبي وفي طب الأسنان"
  },
  {
      "lib_na9": "Fabrication d'articles de brosserie",
      "cls_na9": 32.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعة الفراشي والمكانس والمنافض"
  },
  {
      "lib_na9": "Autres activités manufacturières n.c.a.",
      "cls_na9": 32.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "صناعات تحويلية أخرى غ.م.س"
  },
  {
      "lib_na9": "Réparation d'ouvrages en métaux",
      "cls_na9": 33.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح منتجات معدنية"
  },
  {
      "lib_na9": "Réparation de machines et équipements mécaniques",
      "cls_na9": 33.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح آلات ومعدات ميكانيكية"
  },
  {
      "lib_na9": "Réparation de matériels électroniques et optiques",
      "cls_na9": 33.13,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح معدات الكترونية وبصرية"
  },
  {
      "lib_na9": "Réparation d'équipements électriques",
      "cls_na9": 33.14,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح معدات كهربائية"
  },
  {
      "lib_na9": "Réparation et maintenance navale",
      "cls_na9": 33.15,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح وصيانة السفن"
  },
  {
      "lib_na9": "Réparation et maintenance d'aéronefs et d'engins spatiaux",
      "cls_na9": 33.16,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح وصيانة الطائرات والمركبات الفضائية"
  },
  {
      "lib_na9": "Réparation et maintenance d'autres équipements de transport",
      "cls_na9": 33.17,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح وصيانة وسائل نقل أخرى"
  },
  {
      "lib_na9": "Réparation d'autres équipements",
      "cls_na9": 33.19,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح معدات أخرى"
  },
  {
      "lib_na9": "Installation de machines et d'équipements industriels",
      "cls_na9": 33.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تركيب آلات ومعدات صناعية"
  },
  {
      "lib_na9": "Production d'électricité",
      "cls_na9": 35.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إنتاج الكهرباء"
  },
  {
      "lib_na9": "Transport d'électricité",
      "cls_na9": 35.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل الكهرباء"
  },
  {
      "lib_na9": "Distribution d'électricité",
      "cls_na9": 35.13,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": 0,
      "arb_na9": "توزيع الكهرباء"
  },
  {
      "lib_na9": "Commerce d'électricité",
      "cls_na9": 35.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "بيع الكهرباء"
  },
  {
      "lib_na9": "Production de combustibles gazeux",
      "cls_na9": 35.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج المحروقات الغازية"
  },
  {
      "lib_na9": "Distribution de combustibles gazeux par conduites",
      "cls_na9": 35.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "توزيع المحروقات الغازية عبر الأنابيب"
  },
  {
      "lib_na9": "Commerce de combustibles gazeux par conduites",
      "cls_na9": 35.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "بيع المحروقات الغازية عبر الأنابيب"
  },
  {
      "lib_na9": "Production et distribution de vapeur et d'air conditionné",
      "cls_na9": 35.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج وتوزيع البخار والهواء المكيّف"
  },
  {
      "lib_na9": "Captage, traitement et distribution d'eau",
      "cls_na9": 36.0,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تجميع المياه ومعالجتها وتوزيعها"
  },
  {
      "lib_na9": "Collecte et traitement des eaux usées",
      "cls_na9": 37.0,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "جمع ومعالجة المياه المستعملة"
  },
  {
      "lib_na9": "Collecte des déchets non dangereux",
      "cls_na9": 38.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "جمع النفايات غير الخطرة"
  },
  {
      "lib_na9": "Collecte des déchets dangereux",
      "cls_na9": 38.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "جمع النفايات الخطرة"
  },
  {
      "lib_na9": "Traitement et élimination des déchets non dangereux",
      "cls_na9": 38.21,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "معالجة النفايات غير الخطرة والتخلص منها"
  },
  {
      "lib_na9": "Traitement et élimination des déchets dangereux",
      "cls_na9": 38.22,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "معالجة النفايات الخطرة والتخلص منها"
  },
  {
      "lib_na9": "Démantèlement d'épaves",
      "cls_na9": 38.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إزالة حطام السفن، السيارات، الحواسيب..."
  },
  {
      "lib_na9": "Récupération de déchets triés",
      "cls_na9": 38.32,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "خدمات إسترداد الفضلات المصنّفة"
  },
  {
      "lib_na9": "Dépollution et autres services de gestion des déchets",
      "cls_na9": 39.0,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إزالة التلوث وخدمات أخرى للتصرف في النفايات"
  },
  {
      "lib_na9": "Promotion immobilière",
      "cls_na9": 41.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "التطوير العقاري"
  },
  {
      "lib_na9": "Construction de bâtiments résidentiels et non résidentiels",
      "cls_na9": 41.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تشييد المباني السكنية وغير السكنية"
  },
  {
      "lib_na9": "Construction de routes et autoroutes",
      "cls_na9": 42.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إنجاز الطرق والطرق السيارة"
  },
  {
      "lib_na9": "Construction de voies ferrées",
      "cls_na9": 42.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إنجاز السكك الحديدية"
  },
  {
      "lib_na9": "Construction de ponts et tunnels",
      "cls_na9": 42.13,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تشييد الجسور والأنفاق"
  },
  {
      "lib_na9": "Construction de réseaux pour fluides",
      "cls_na9": 42.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إنجاز شبكات نقل السوائل"
  },
  {
      "lib_na9": "Construction de réseaux électriques et de télécommunications",
      "cls_na9": 42.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "مدّ أسلاك الكهرباء والإتصالات"
  },
  {
      "lib_na9": "Construction d'ouvrages maritimes et fluviaux",
      "cls_na9": 42.91,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تشييد منشآت في المياه"
  },
  {
      "lib_na9": "Construction d'autres ouvrages de génie civil n.c.a.",
      "cls_na9": 42.99,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تشييد منشآت الهندسة المدنية الأخرى غ.م.س"
  },
  {
      "lib_na9": "Travaux de démolition",
      "cls_na9": 43.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال الهدم"
  },
  {
      "lib_na9": "Travaux de préparation des sites",
      "cls_na9": 43.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال إعداد المواقع"
  },
  {
      "lib_na9": "Forages et sondages",
      "cls_na9": 43.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "حفر الآبار والحفر الإختباري"
  },
  {
      "lib_na9": "Installation électrique",
      "cls_na9": 43.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أشغال تركيب الكهرباء"
  },
  {
      "lib_na9": "Travaux de plomberie et installation de chauffage et de conditionnement d'air",
      "cls_na9": 43.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أشغال السباكة وتركيب معدّات التدفئة وتكييف الهواء"
  },
  {
      "lib_na9": "Autres travaux d'installation",
      "cls_na9": 43.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أشغال تركيب أخرى"
  },
  {
      "lib_na9": "Travaux de plâtrerie",
      "cls_na9": 43.31,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال جبسيّة"
  },
  {
      "lib_na9": "Travaux de menuiserie",
      "cls_na9": 43.32,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال النجارة"
  },
  {
      "lib_na9": "Travaux de revêtement des sols et des murs",
      "cls_na9": 43.33,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال تغليف الأرضية والجدران"
  },
  {
      "lib_na9": "Travaux de miroiterie de bâtiments; vitrerie",
      "cls_na9": 43.34,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تركيب المرايا والزجاج"
  },
  {
      "lib_na9": "Travaux de peinture",
      "cls_na9": 43.35,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال دهن المباني"
  },
  {
      "lib_na9": "Autres travaux de finition",
      "cls_na9": 43.39,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال أخرى متممة للبناء"
  },
  {
      "lib_na9": "Travaux de couverture",
      "cls_na9": 43.91,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشغال تغطية سطوح المباني"
  },
  {
      "lib_na9": "Autres travaux de construction spécialisés n.c.a.",
      "cls_na9": 43.99,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة البناء المتخصصة الأخرى غ.م.س"
  },
  {
      "lib_na9": "Commerce de voitures et de véhicules automobiles légers",
      "cls_na9": 45.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة السيّارات والمركبات الخفيفة ذات المحركات"
  },
  {
      "lib_na9": "Commerce d'autres véhicules automobiles",
      "cls_na9": 45.19,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المركبات الأخرى ذات المحركات"
  },
  {
      "lib_na9": "Entretien et réparation de véhicules automobiles",
      "cls_na9": 45.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "صيانة وإصلاح المركبات ذات المحركات"
  },
  {
      "lib_na9": "Commerce de gros d'équipements automobiles",
      "cls_na9": 45.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة قطع الغيار ولوازم المركبات ذات المحركات بالجملة"
  },
  {
      "lib_na9": "Commerce de détail d'équipements automobiles",
      "cls_na9": 45.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة قطع الغيار ولوازم المركبات ذات المحركات بالتفصيل"
  },
  {
      "lib_na9": "Commerce de motocycles",
      "cls_na9": 45.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الدراجات النارية"
  },
  {
      "lib_na9": "Réparation de motocycles",
      "cls_na9": 45.42,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الدراجات النارية"
  },
  {
      "lib_na9": "Intermédiaires du commerce en matières premières agricoles, animaux vivants, matières premières textiles et produits semi-finis",
      "cls_na9": 46.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة المواد الأوّلية الفلاحية والحيوانات الحيّة ومواد النسيج الأوّلية والمواد النصف جاهزة"
  },
  {
      "lib_na9": "Intermédiaires du commerce en combustibles, métaux, minéraux et produits chimiques",
      "cls_na9": 46.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة المحروقات والمعادن وخامات المعادن والمواد الكيميائية"
  },
  {
      "lib_na9": "Intermédiaires du commerce en bois et matériaux de construction",
      "cls_na9": 46.13,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة الخشب ومواد البناء"
  },
  {
      "lib_na9": "Intermédiaires du commerce en machines, équipements industriels, navires et avions",
      "cls_na9": 46.14,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة الآلات والتجهيزات الصناعية والسفن والطائرات"
  },
  {
      "lib_na9": "Intermédiaires du commerce en meubles, articles de ménage et quincaillerie",
      "cls_na9": 46.15,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة الأثاث والأدوات المنزلية والمواد الحديدية المتنوعة"
  },
  {
      "lib_na9": "Intermédiaires du commerce en textiles, habillement, fourrures, chaussures et articles en cuir",
      "cls_na9": 46.16,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة النسيج والملابس والفراء والأحذية ومنتوجات أخرى من الجلد"
  },
  {
      "lib_na9": "Intermédiaires du commerce en denrées, boissons et tabac",
      "cls_na9": 46.17,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة المواد الغذائية والمشروبات والتبغ"
  },
  {
      "lib_na9": "Intermédiaires spécialisés dans le commerce d'autres produits spécifiques",
      "cls_na9": 46.18,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة مختصون في مواد خاصة أخرى"
  },
  {
      "lib_na9": "Intermédiaires du commerce en produits divers",
      "cls_na9": 46.19,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وسطاء تجارة مواد متنوعة"
  },
  {
      "lib_na9": "Commerce de gros de céréales, de tabac non manufacturé, de semences et d'aliments pour le bétail",
      "cls_na9": 46.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الحبوب والتبغ الخام والبذور والعلف الحيواني بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de fleurs et plantes",
      "cls_na9": 46.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الزهور والنباتات بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'animaux vivants",
      "cls_na9": 46.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الحيوانات الحيّة بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de cuirs et peaux",
      "cls_na9": 46.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الجلود الخام والجلود المدبوغة بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de fruits et légumes",
      "cls_na9": 46.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الفواكه والخضر بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de viandes et de produits à base de viande",
      "cls_na9": 46.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة اللحوم ومنتجاتها بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de produits laitiers, oeufs, huiles et matieres grasses comestibles",
      "cls_na9": 46.33,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الألبان ومشتقاتها والبيض والزيوت والدّهنيات الصالحة للإستهلاك بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de boissons",
      "cls_na9": 46.34,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المشروبات بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de produits à base de de tabac",
      "cls_na9": 46.35,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة التبغ بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de sucre, chocolat et confiserie, de café, thé, cacao et épices",
      "cls_na9": 46.36,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة السكر والشكلاطة والحلويات والبن والشاي والكاكاو والتوابل بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de poissons, crustacés et mollusques",
      "cls_na9": 46.37,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأسماك والقشريات والرخويات بالجملة"
  },
  {
      "lib_na9": "Commerce de gros spécialisé d'autres produits alimentaires",
      "cls_na9": 46.38,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة بالجملة متخصصة في مواد غذائية أخرى"
  },
  {
      "lib_na9": "Commerce de gros non spécialisé de denrées alimentaires, de boissons et de tabac",
      "cls_na9": 46.39,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة بالجملة غير متخصصة في المواد الغذائية والمشروبات والتبغ"
  },
  {
      "lib_na9": "Commerce de gros de textiles",
      "cls_na9": 46.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة النسيج بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'habillement et de chaussures",
      "cls_na9": 46.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الملابس والأحذية بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'appareils électroménagers",
      "cls_na9": 46.43,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأجهزة الكهربائية المنزلية"
  },
  {
      "lib_na9": "Commerce de gros de vaisselle, verrerie et produits d'entretien",
      "cls_na9": 46.44,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة آنية المائدة ومصنوعات الزجاج المنزلية ومواد الصيانة بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de parfumerie et de produits de beauté",
      "cls_na9": 46.45,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة العطور ومواد التجميل بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de produits pharmaceutiques",
      "cls_na9": 46.46,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المواد الصيدلية بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de meubles, de tapis et d'appareils d'éclairage",
      "cls_na9": 46.47,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأثاث والزرابي ومعدات الإضاءة بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'articles d'horlogerie et de bijouterie",
      "cls_na9": 46.48,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الساعات والمجوهرات بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'autres biens domestiques",
      "cls_na9": 46.49,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة لوازم شخصية ومنزلية أخرى بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'ordinateurs, d'équipements informatiques périphériques et de logiciels",
      "cls_na9": 46.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة أجهزة الحاسوب وتجهيزاته الطرفية والبرمجيات بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de composants et d'équipements électroniques et de télécommunication",
      "cls_na9": 46.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المكونات والتجهيزات الإلكترونية والإتصالات بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de matériel agricole",
      "cls_na9": 46.61,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المعدات الفلاحية بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de machines-outils",
      "cls_na9": 46.62,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الآلات الميكانيكية بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de machines pour l'extraction, la construction et le génie civil",
      "cls_na9": 46.63,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الآلات الخاصة بالصناعات الإستخراجية وبالبناء وبالهندسة المدنية بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de machines pour l'industrie textile et l'habillement",
      "cls_na9": 46.64,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة آلات صناعة النسيج والملابس بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de mobilier de bureau",
      "cls_na9": 46.65,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة أثاث المكتب بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'autres machines et équipements de bureau",
      "cls_na9": 46.66,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة آلات وتجهيزات المكتب بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'autres matériels électriques",
      "cls_na9": 46.67,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة معدات كهربائية أخرى بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'autres machines et équipements",
      "cls_na9": 46.69,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة آلات وتجهيزات أخرى بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de combustibles et de produits annexes",
      "cls_na9": 46.71,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المحروقات والمنتجات ذات العلاقة  بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de minerais et métaux",
      "cls_na9": 46.72,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المعادن وخامات المعادن بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de bois et de produits dérivés",
      "cls_na9": 46.73,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الخشب ومشتقات الخشب بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de matériaux de construction et d'appareils sanitaires",
      "cls_na9": 46.74,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة مواد البناء ومعدات التجهيز الصحي بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de quincaillerie et fournitures pour plomberie et chauffage",
      "cls_na9": 46.75,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المواد الحديدية ولوازم السباكة والتدفئة بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de produits chimiques",
      "cls_na9": 46.76,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المواد الكيميائية بالجملة"
  },
  {
      "lib_na9": "Commerce de gros d'autres produits intermédiaires",
      "cls_na9": 46.77,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة مواد وسيطة أخرى بالجملة"
  },
  {
      "lib_na9": "Commerce de gros de déchets et débris",
      "cls_na9": 46.78,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة النفايات والفضلات (الخردة) بالجملة"
  },
  {
      "lib_na9": "Commerce de gros non spécialisé",
      "cls_na9": 46.9,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أصناف أخرى من تجارة الجملة غير المتخصصة"
  },
  {
      "lib_na9": "Commerce de gros de meubles, de tapis et d'appareils d'éclairage",
      "cls_na9": 46.47,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأثاث والزرابي ومعدات الإضاءة بالجملة"
  },
  {
      "lib_na9": "Commerce d'alimentation générale",
      "cls_na9": 47.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة مواد التغذية العامة بالتفصيل"
  },
  {
      "lib_na9": "Supérettes, supermarchés et hypermarchés",
      "cls_na9": 47.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "مغازات ذات مساحة كبيرة (سوبرات، سوبرماركت وهيبارماركت)"
  },
  {
      "lib_na9": "Commerce de détail de  produits divers de l'artisanat",
      "cls_na9": 47.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة مصنوعات تقليدية متنوعة بالتفصيل"
  },
  {
      "lib_na9": "Autre commerce de détail en magasin non spécialisé",
      "cls_na9": 47.19,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة أخرى بالتفصيل في المتاجر غير المتخصصة"
  },
  {
      "lib_na9": "Commerce de détail de fruits et légumes en magasin spécialisé",
      "cls_na9": 47.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الفواكه والخضر بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de viandes et de produits à base de viande en magasin spécialisé",
      "cls_na9": 47.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة اللحوم ومشتقات اللحوم بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de poissons, crustacés et mollusques en magasin spécialisé",
      "cls_na9": 47.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأسماك والقشريات والرخويات بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de pain, pâtisserie et confiserie en magasin spécialisé",
      "cls_na9": 47.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الخبز والمرطبات والحلويات بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de boissons en magasin spécialisé",
      "cls_na9": 47.25,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المشروبات بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de produits à base de tabac en magasin spécialisé",
      "cls_na9": 47.26,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة التبغ ومشتقاته بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de produits laitiers",
      "cls_na9": 47.27,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الألبان ومشتقاتها بالتفصيل"
  },
  {
      "lib_na9": "Commerces de détail de grains, légumes secs et produits d'épicerie",
      "cls_na9": 47.28,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الحبوب والخضر الجافة ومواد البقالة (عطرية) بالتفصيل"
  },
  {
      "lib_na9": "Autres commerces de détail alimentaires en magasin spécialisé",
      "cls_na9": 47.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة مواد غذائية أخرى بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de carburants en magasin spécialisé",
      "cls_na9": 47.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الوقود بالتفصيل في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'ordinateurs, d'unités périphériques et de logiciels en magasin spécialisé",
      "cls_na9": 47.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة بالتفصيل لأجهزة الحاسوب ووحداته الطرفية والبرمجيات الخاصة في متاجر متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de matériels de télécommunication en magasin spécialisé",
      "cls_na9": 47.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة بالتفصيل لمعدات الإتصال في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de matériels audio/vidéo en magasin spécialisé",
      "cls_na9": 47.43,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المعدات السمعية البصرية بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de textiles en magasin spécialisé",
      "cls_na9": 47.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة النسيج بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de quincaillerie, peintures et verres en magasin spécialisé",
      "cls_na9": 47.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المنتجات الحديدية (كانكايري) والدهن والزجاج بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de tapis, moquettes et revêtements de murs et de sols en magasin spécialisé",
      "cls_na9": 47.53,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الزرابي والمفروشات والأغطية الحائطية والأرضية  بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'appareils électroménagers en magasin spécialisé",
      "cls_na9": 47.54,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الآلات الكهربائية المنزلية بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de meubles, appareils d'éclairage et autres articles de ménage en magasin spécialisé",
      "cls_na9": 47.59,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأثاث ومعدات الاضاءة والتجهيزات المنزلية الأخرى بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de livres en magasin spécialisé",
      "cls_na9": 47.61,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الكتب بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de journaux et papeterie en magasin spécialisé",
      "cls_na9": 47.62,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الجرائد والمجلات ومنتجات من الورق بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'enregistrements musicaux et vidéo en magasin spécialisé",
      "cls_na9": 47.63,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة تسجيلات الموسيقى والفيديو بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'articles de sport en magasin spécialisé",
      "cls_na9": 47.64,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة معدات رياضية بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de jeux et jouets en magasin spécialisé",
      "cls_na9": 47.65,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الألعاب واللعب بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'habillement en magasin spécialisé",
      "cls_na9": 47.71,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الملابس بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de chaussures et d'articles en cuir en magasin spécialisé",
      "cls_na9": 47.72,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأحذية ومصنوعات من الجلد بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de produits pharmaceutiques en magasin spécialisé",
      "cls_na9": 47.73,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المواد الصيدلية بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'articles médicaux et orthopédiques en magasin spécialisé",
      "cls_na9": 47.74,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الأدوات الطبية وأدوات تقويم الأعضاء بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de parfumerie et de produits de beauté en magasin spécialisé",
      "cls_na9": 47.75,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة العطور ومواد التجميل بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de fleurs, plantes, graines, engrais, animaux de compagnie et aliments pour ces animaux en magasin spécialisé",
      "cls_na9": 47.76,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الزهور والنباتات والبذور والأسمدة والحيوانات الأليفة والأغذية الخاصة بها بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail d'articles d'horlogerie et de bijouterie en magasin spécialisé",
      "cls_na9": 47.77,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الساعات وأدواتها والمجوهرات بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail de charbon et combustibles",
      "cls_na9": 47.78,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة الفحم والمحروقات بالتفصيل"
  },
  {
      "lib_na9": "Autres commerces de détail de biens neufs en magasin spécialisé",
      "cls_na9": 47.79,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أصناف أخرى من تجارة المنتجات الجديدة بالتفصيل في مغازات متخصصة"
  },
  {
      "lib_na9": "Commerce de détail alimentaire sur éventaires et marchés",
      "cls_na9": 47.81,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة المنتجات الغذائية بالتفصيل عن طريق العرض والأسواق"
  },
  {
      "lib_na9": "Commerce de détail de textiles, d'habillement et de chaussures sur éventaires et marchés",
      "cls_na9": 47.82,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة النسيج والملابس والأحذية عن طريق العرض والأسواق"
  },
  {
      "lib_na9": "Autres commerces de détail sur éventaires et marchés",
      "cls_na9": 47.83,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أصناف أخرى من تجارة التفصيل عن طريق العرض والأسواق"
  },
  {
      "lib_na9": "Commerce de détail de fripes",
      "cls_na9": 47.84,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة بالتفصيل للملابس المستعملة"
  },
  {
      "lib_na9": "Commerce de détail de biens d'antiquité et de brocante",
      "cls_na9": 47.85,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "تجارة بالتفصيل للمنتجات القديمة (العتيقة)"
  },
  {
      "lib_na9": "Autres commerces de détail de biens d'occasion",
      "cls_na9": 47.89,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أصناف أخرى من تجارة بالتفصيل للمنتجات المستعملة"
  },
  {
      "lib_na9": "Vente à distance",
      "cls_na9": 47.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "البيع عن بعد (عن طريق المراسلة)"
  },
  {
      "lib_na9": "Autres commerces de détail hors magasin, éventaires ou marchés",
      "cls_na9": 47.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أصناف أخرى من تجارة التفصيل خارج المغازات، عن طريق العرض والأسواق"
  },
  {
      "lib_na9": "Transport ferroviaire interurbain de voyageurs",
      "cls_na9": 49.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل المسافرين بين المدن عبر السكك الحديدية"
  },
  {
      "lib_na9": "Transports ferroviaires de fret",
      "cls_na9": 49.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل البضائع عبر السكك الحديدية"
  },
  {
      "lib_na9": "Transports urbains et suburbains de voyageurs",
      "cls_na9": 49.31,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل المسافرين في المدن والضواحي"
  },
  {
      "lib_na9": "Transports de voyageurs par taxis et par louage",
      "cls_na9": 49.32,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل المسافرين على متن سيارات التاكسي وسيارات الأجرة"
  },
  {
      "lib_na9": "Autres transports terrestres réguliers de voyageurs, interurbain",
      "cls_na9": 49.33,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أصناف أخرى من النقل البري المنتظم للمسافرين، بين المدن"
  },
  {
      "lib_na9": "Autres transports terrestres de voyageurs n.c.a.",
      "cls_na9": 49.39,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أصناف أخرى من النقل البري للمسافرين غ.م.س"
  },
  {
      "lib_na9": "Transports routiers de fret",
      "cls_na9": 49.41,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل البري للبضائع"
  },
  {
      "lib_na9": "Services de déménagement",
      "cls_na9": 49.42,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات الرحيل (نقل الأثاث)"
  },
  {
      "lib_na9": "Transports par conduites",
      "cls_na9": 49.5,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل عبر الأنابيب"
  },
  {
      "lib_na9": "Transports maritimes et côtiers de passagers",
      "cls_na9": 50.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل البحري والساحلي للمسافرين"
  },
  {
      "lib_na9": "Transports maritimes et côtiers de fret",
      "cls_na9": 50.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل البحري والساحلي للبضائع"
  },
  {
      "lib_na9": "Transports fluviaux de passagers",
      "cls_na9": 50.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل المسافرين عبر الأنهار"
  },
  {
      "lib_na9": "Transports fluviaux de fret",
      "cls_na9": 50.4,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نقل البضائع عبر الأنهار"
  },
  {
      "lib_na9": "Transports aériens de passagers",
      "cls_na9": 51.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل الجوي للمسافرين"
  },
  {
      "lib_na9": "Transports aériens de fret",
      "cls_na9": 51.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل الجوي للبضائع"
  },
  {
      "lib_na9": "Transports spatiaux",
      "cls_na9": 51.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "النقل عبر الفضاء"
  },
  {
      "lib_na9": "Entreposage et stockage frigorifique",
      "cls_na9": 52.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التخزين في مستودعات التبريد"
  },
  {
      "lib_na9": "Entreposage et stockage non frigorifique",
      "cls_na9": 52.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التخزين في مستودعات غير مبرّدة"
  },
  {
      "lib_na9": "Services auxiliaires des transports terrestres",
      "cls_na9": 52.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "خدمات ملحقة بالنقل البري"
  },
  {
      "lib_na9": "Services auxiliaires des transports par eau",
      "cls_na9": 52.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "خدمات ملحقة بالنقل عبر المياه"
  },
  {
      "lib_na9": "Services auxiliaires des transports aériens",
      "cls_na9": 52.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "خدمات ملحقة بالنقل الجوي"
  },
  {
      "lib_na9": "Manutention",
      "cls_na9": 52.24,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "مناولة البضائع (شحن البضائع وتفريغها)"
  },
  {
      "lib_na9": "Autres services auxiliaires des transports",
      "cls_na9": 52.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات أخرى ملحقة بالنقل"
  },
  {
      "lib_na9": "Activités de poste dans le cadre d'une obligation de service universel",
      "cls_na9": 53.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة البريد في إطار واجبات الخدمات الدولية"
  },
  {
      "lib_na9": "Autres activités de poste et de courrier",
      "cls_na9": 53.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أصناف أخرى من أنشطة البريد ونقل الطرود"
  },
  {
      "lib_na9": "Hôtels et hébergement similaire",
      "cls_na9": 55.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "النزل وأصناف الإيواء المماثلة"
  },
  {
      "lib_na9": "Hébergement touristique et autre hébergement de courte durée",
      "cls_na9": 55.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الإيواء السياحي والإيواء لمدة قصيرة"
  },
  {
      "lib_na9": "Terrains de camping et parcs pour caravanes ou véhicules de loisirs",
      "cls_na9": 55.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "فضاءات للمخيمات وفضاءات للكرفانات أو لعربات الترفيه"
  },
  {
      "lib_na9": "Autres hébergements",
      "cls_na9": 55.9,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أصناف الإيواء الأخرى"
  },
  {
      "lib_na9": "Restauration traditionnelle",
      "cls_na9": 56.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "مطاعم من النوع التقليدي"
  },
  {
      "lib_na9": "Restauration de type rapide",
      "cls_na9": 56.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "مطاعم متخصصة في الأكلة السريعة"
  },
  {
      "lib_na9": "Services des traiteurs",
      "cls_na9": 56.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات ممونو أطعمة (تريتور أي صانعو الأكلات) في المناسبات"
  },
  {
      "lib_na9": "Autres services de restauration",
      "cls_na9": 56.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات الطعام الأخرى"
  },
  {
      "lib_na9": "Cafés",
      "cls_na9": 56.31,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "المقاهي"
  },
  {
      "lib_na9": "Débits de boissons alcoolisées",
      "cls_na9": 56.32,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الحانات"
  },
  {
      "lib_na9": "Edition de livres",
      "cls_na9": 58.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر الكتب"
  },
  {
      "lib_na9": "Edition de répertoires et de fichiers d'adresses",
      "cls_na9": 58.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر الأدلة وقوائم العناوين"
  },
  {
      "lib_na9": "Edition de journaux",
      "cls_na9": 58.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر الجرائد"
  },
  {
      "lib_na9": "Edition de revues et périodiques",
      "cls_na9": 58.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر المجلات والدوريات"
  },
  {
      "lib_na9": "Autres activités d'édition",
      "cls_na9": 58.19,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة نشر أخرى"
  },
  {
      "lib_na9": "Edition de jeux électroniques",
      "cls_na9": 58.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر الألعاب الإلكترونية"
  },
  {
      "lib_na9": "Edition d'autres logiciels",
      "cls_na9": 58.29,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "نشر البرمجيات الأخرى"
  },
  {
      "lib_na9": "Production de films cinématographiques, de vidéo et de programmes de télévision",
      "cls_na9": 59.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إنتاج الأفلام السينمائية وأفلام الفيديو وبرامج التلفزة"
  },
  {
      "lib_na9": "Post-production de films cinématographiques, de vidéo et de programmes de télévision",
      "cls_na9": 59.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة مابعد إنتاج الأفلام السينمائية والفيديو وبرامج التلفزة"
  },
  {
      "lib_na9": "Distribution de films cinématographiques, de vidéo et de programmes de télévision",
      "cls_na9": 59.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "توزيع الأفلام السينمائية والفيديو وبرامج التلفزة"
  },
  {
      "lib_na9": "Projection de films cinématographiques",
      "cls_na9": 59.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "عرض الأفلام السينمائية"
  },
  {
      "lib_na9": "Enregistrement sonore et édition musicale",
      "cls_na9": 59.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التسجيلات الصوتية والنشر الموسيقي"
  },
  {
      "lib_na9": "Edition et diffusion de programmes radio",
      "cls_na9": 60.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة برامج البث الإذاعي"
  },
  {
      "lib_na9": "Programmation de télévision et télédiffusion",
      "cls_na9": 60.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة برامج البث التلفزي"
  },
  {
      "lib_na9": "Télécommunications filaires",
      "cls_na9": 61.1,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإتصالات السلكية"
  },
  {
      "lib_na9": "Télécommunications sans fil",
      "cls_na9": 61.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإتصالات اللاسلكية"
  },
  {
      "lib_na9": "Télécommunications par satellite",
      "cls_na9": 61.3,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإتصالات عبر الأقمار الصناعية"
  },
  {
      "lib_na9": "Autres activités de télécommunication",
      "cls_na9": 61.9,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الإتصالات الأخرى"
  },
  {
      "lib_na9": "Programmation informatique",
      "cls_na9": 62.01,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة البرمجة في الإعلامية"
  },
  {
      "lib_na9": "Conseil informatique",
      "cls_na9": 62.02,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الخبرة الإستشارية في أنظمة الإعلامية"
  },
  {
      "lib_na9": "Gestion d'installations informatiques",
      "cls_na9": 62.03,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إدارة الشبكات والأنظمة الإعلامية"
  },
  {
      "lib_na9": "Autres activités informatiques",
      "cls_na9": 62.09,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة أخرى متعلقة بالإعلامية"
  },
  {
      "lib_na9": "Traitement de données, hébergement et activités connexes",
      "cls_na9": 63.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تجهيز البيانات واستضافة المواقع على الشبكة وما يتصل بذلك من أنشطة"
  },
  {
      "lib_na9": "Portails Internet",
      "cls_na9": 63.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "بوابات الشبكة"
  },
  {
      "lib_na9": "Activités des agences de presse",
      "cls_na9": 63.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة وكالات الأنباء"
  },
  {
      "lib_na9": "Autres services d'information n.c.a.",
      "cls_na9": 63.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة خدمات المعلومات الأخرى غ.م.س"
  },
  {
      "lib_na9": "Activités de banque centrale",
      "cls_na9": 64.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة البنك المركزي"
  },
  {
      "lib_na9": "Autres intermédiations monétaires",
      "cls_na9": 64.19,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "وساطة نقدية أخرى"
  },
  {
      "lib_na9": "Activités des sociétés holding",
      "cls_na9": 64.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة الشركات القابضة"
  },
  {
      "lib_na9": "Fonds de placement et entités financières similaires",
      "cls_na9": 64.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "صناديق الأموال والكيانات المالية المماثلة"
  },
  {
      "lib_na9": "Crédit-bail",
      "cls_na9": 64.91,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "التأجير المالي"
  },
  {
      "lib_na9": "Autre distribution de crédit",
      "cls_na9": 64.92,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أشكال منح القروض الأخرى"
  },
  {
      "lib_na9": "Autres activités des services financiers, hors assurance et caisses de retraite, n.c.a.",
      "cls_na9": 64.99,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات مالية أخرى باستثناء التأمين وصناديق التقاعد غ.م.س"
  },
  {
      "lib_na9": "Assurance vie",
      "cls_na9": 65.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "التأمين على الحياة"
  },
  {
      "lib_na9": "Autres assurances",
      "cls_na9": 65.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أصناف أخرى من التأمين"
  },
  {
      "lib_na9": "Réassurance",
      "cls_na9": 65.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إعادة التأمين"
  },
  {
      "lib_na9": "Caisses de retraite",
      "cls_na9": 65.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "صناديق التقاعد"
  },
  {
      "lib_na9": "Administration de marchés financiers",
      "cls_na9": 66.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إدارة الأسواق المالية"
  },
  {
      "lib_na9": "Courtage de valeurs mobilières et de marchandises",
      "cls_na9": 66.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الوساطة المتعلقة بعقود الأوراق المالية والسلع"
  },
  {
      "lib_na9": "Autres activités auxiliaires de services financiers, hors assurance et caisses de retraite",
      "cls_na9": 66.19,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة أخرى مساعدة للخدمات المالية باستثناء التأمين وصناديق التقاعد"
  },
  {
      "lib_na9": "Evaluation des risques et dommages",
      "cls_na9": 66.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تقييم المخاطر والأضرار"
  },
  {
      "lib_na9": "Activités des agents et courtiers d'assurances",
      "cls_na9": 66.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة الوكلاء وسماسرة التأمين"
  },
  {
      "lib_na9": "Autres activités auxiliaires d'assurance et de caisses de retraite",
      "cls_na9": 66.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة أخرى مساعدة للتأمين وصناديق التقاعد"
  },
  {
      "lib_na9": "Gestion de fonds",
      "cls_na9": 66.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة إدارة الأموال"
  },
  {
      "lib_na9": "Activités des marchands de biens immobiliers",
      "cls_na9": 68.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": 0,
      "arb_na9": "أنشطة تجار الأملاك العقارية"
  },
  {
      "lib_na9": "Location de logements",
      "cls_na9": 68.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إيجار المساكن"
  },
  {
      "lib_na9": "Location de terrains et d'autres biens immobiliers",
      "cls_na9": 68.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إيجار الأراضي والأملاك العقارية الأخرى"
  },
  {
      "lib_na9": "Agences immobilières",
      "cls_na9": 68.31,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الوكالات العقارية"
  },
  {
      "lib_na9": "Administration de biens immobiliers",
      "cls_na9": 68.32,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إدارة الأملاك العقارية"
  },
  {
      "lib_na9": "Activités juridiques",
      "cls_na9": 69.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الأنشطة القانونية"
  },
  {
      "lib_na9": "Activités comptables",
      "cls_na9": 69.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة المحاسبة"
  },
  {
      "lib_na9": "Activités des sièges sociaux",
      "cls_na9": 70.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة المقرّات الإجتماعية"
  },
  {
      "lib_na9": "Conseil en relations publiques et communication",
      "cls_na9": 70.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الخبرة الإستشارية في العلاقات العامة والإتصال"
  },
  {
      "lib_na9": "Conseil pour les affaires et autres conseils de gestion",
      "cls_na9": 70.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الخبرة الإستشارية في الأعمال والإستشارات الأخرى في التصرف"
  },
  {
      "lib_na9": "Activités d'architecture",
      "cls_na9": 71.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الأنشطة المعمارية"
  },
  {
      "lib_na9": "Activités d'ingénierie",
      "cls_na9": 71.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الأنشطة الهندسية"
  },
  {
      "lib_na9": "Activités de contrôle et analyses techniques",
      "cls_na9": 71.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة المراقبة والتحاليل التقنية"
  },
  {
      "lib_na9": "Recherche-développement en biotechnologie",
      "cls_na9": 72.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "البحث التنموي في التكنولوجيا الحيويّة"
  },
  {
      "lib_na9": "Recherche-développement en autres sciences physiques et naturelles",
      "cls_na9": 72.19,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "البحث التنموي في علوم الفيزياء والعلوم الطبيعية الأخرى"
  },
  {
      "lib_na9": "Recherche-développement en sciences humaines et sociales",
      "cls_na9": 72.2,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "البحث التنموي في العلوم الإنسانية والإجتماعية"
  },
  {
      "lib_na9": "Activités des agences de publicité",
      "cls_na9": 73.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة وكالات الإشهار"
  },
  {
      "lib_na9": "Régie publicitaire de médias",
      "cls_na9": 73.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "وكالات الإشهار في وسائل الإعلام"
  },
  {
      "lib_na9": "Etudes de marché et sondages",
      "cls_na9": 73.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "دراسة السوق وإستطلاع الرأي"
  },
  {
      "lib_na9": "Activités spécialisées de design",
      "cls_na9": 74.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة التصميم المتخصصة"
  },
  {
      "lib_na9": "Activités photographiques",
      "cls_na9": 74.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة التصوير الفوتوغرافي"
  },
  {
      "lib_na9": "Traduction et interprétation",
      "cls_na9": 74.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الترجمة والترجمة الفورية"
  },
  {
      "lib_na9": "Autres activités spécialisées, scientifiques et techniques n.c.a.",
      "cls_na9": 74.9,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة متخصصة أخرى علمية وتقنية غ.م.س"
  },
  {
      "lib_na9": "Activités vétérinaires",
      "cls_na9": 75.0,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الأنشطة البيطرية"
  },
  {
      "lib_na9": "Location et location-bail de camions",
      "cls_na9": 77.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير الشاحنات"
  },
  {
      "lib_na9": "Location et location-bail d'articles de loisirs et de sport",
      "cls_na9": 77.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير لوازم الرياضة والترفيه"
  },
  {
      "lib_na9": "Location de vidéocassettes et disques vidéo",
      "cls_na9": 77.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير شرائط وأقراص الفيديو"
  },
  {
      "lib_na9": "Location et location-bail d'autres biens personnels et domestiques",
      "cls_na9": 77.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير اللوازم الشخصية والمنزلية الأخرى"
  },
  {
      "lib_na9": "Location et location-bail de machines et équipements agricoles",
      "cls_na9": 77.31,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير الآلات والمعدات الفلاحية"
  },
  {
      "lib_na9": "Location et location-bail de machines et équipements pour la construction",
      "cls_na9": 77.32,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير الآلات والمعدات المخصّصة للبناء"
  },
  {
      "lib_na9": "Location et location-bail de machines de bureau et de matériel informatique",
      "cls_na9": 77.33,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير آلات المكتب ومعدات الإعلامية"
  },
  {
      "lib_na9": "Location et location-bail de matériels de transport par eau",
      "cls_na9": 77.34,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير وسائل النقل عبر المياه"
  },
  {
      "lib_na9": "Location et location-bail de matériels de transport aérien",
      "cls_na9": 77.35,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير وسائل النقل الجوّي"
  },
  {
      "lib_na9": "Location et location-bail dautres machines, equipements et biens materiels n.c.a.",
      "cls_na9": 77.39,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تأجير الآلات والمعدات والبضائع المادية الأخرى غ.م.س"
  },
  {
      "lib_na9": "Location-bail de propriete intellectuelle et de produits similaires, à l'exception des oeuvres soumises a copyright",
      "cls_na9": 77.4,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة تأجير منتجات الملكية الفكرية وما شابهها باستثناء الأعمال الخاضعة لحقوق النشر"
  },
  {
      "lib_na9": "Activités des agences de travail temporaire",
      "cls_na9": 78.2,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة وكالات التشغيل الوقتي"
  },
  {
      "lib_na9": "Autre mise à disposition de ressources humaines",
      "cls_na9": 78.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة الإمداد بالموارد البشرية الأخرى"
  },
  {
      "lib_na9": "Activités des agences de voyage",
      "cls_na9": 79.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة وكالات الأسفار"
  },
  {
      "lib_na9": "Activités des voyagistes",
      "cls_na9": 79.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة  منظمي الرحلات السياحية"
  },
  {
      "lib_na9": "Autres services de réservation et activités connexes",
      "cls_na9": 79.9,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "خدمات أخرى للحجز والأنشطة المرتبطة بها"
  },
  {
      "lib_na9": "Activités de sécurité privée",
      "cls_na9": 80.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الأمن الخاص"
  },
  {
      "lib_na9": "Activités liées aux systèmes de sécurité",
      "cls_na9": 80.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الأنشطة المرتبطة بأنظمة الأمن"
  },
  {
      "lib_na9": "Activités d'enquête",
      "cls_na9": 80.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة التحريات (أو التحقيقات)"
  },
  {
      "lib_na9": "Activités combinées de soutien lié aux bâtiments",
      "cls_na9": 81.1,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة مختلطة لدعم المباني"
  },
  {
      "lib_na9": "Nettoyage courant des bâtiments",
      "cls_na9": 81.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة التنظيف العادي للمباني"
  },
  {
      "lib_na9": "Autres activités de nettoyage des bâtiments et nettoyage industriel",
      "cls_na9": 81.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة تنظيف المباني والتنظيف الصناعي"
  },
  {
      "lib_na9": "Autres activités de nettoyage",
      "cls_na9": 81.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة التنظيف الأخرى"
  },
  {
      "lib_na9": "Services d'aménagement paysager",
      "cls_na9": 81.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات تهيئة المنظر العام"
  },
  {
      "lib_na9": "Services administratifs combinés de bureau",
      "cls_na9": 82.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات إدارية مكتبية مختلطة"
  },
  {
      "lib_na9": "Photocopie, préparation de documents et autres activités spécialisées de soutien de bureau",
      "cls_na9": 82.19,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "نسخ وإعداد الوثائق وخدمات أخرى مختصة في دعم المكاتب"
  },
  {
      "lib_na9": "Activités de centres d'appels",
      "cls_na9": 82.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة مراكز النداء"
  },
  {
      "lib_na9": "Organisation de salons professionnels et congrès",
      "cls_na9": 82.3,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تنظيم المعارض المهنية والمؤتمرات"
  },
  {
      "lib_na9": "Activités des agences de recouvrement de factures et des sociétés d'information financière sur la clientèle",
      "cls_na9": 82.91,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة وكالات استخلاص الفواتير ومؤسسات المعلومات المالية لدى الحرفاء"
  },
  {
      "lib_na9": "Activités de conditionnement",
      "cls_na9": 82.92,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة توضيب السلع (التغليف والتعبئة)"
  },
  {
      "lib_na9": "Autres activités de soutien aux entreprises n.c.a.",
      "cls_na9": 82.99,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات دعم أخرى مقدمة للمؤسسات غ.م.س"
  },
  {
      "lib_na9": "Administration publique centrale",
      "cls_na9": 84.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الإدارة العمومية المركزية"
  },
  {
      "lib_na9": "Administration des collectivités locales",
      "cls_na9": 84.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "إدارة الجماعات المحلية"
  },
  {
      "lib_na9": "Administration publique (tutelle) de la santé, de la formation, de la culture et des services sociaux, autre que sécurité sociale",
      "cls_na9": 84.13,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الإدارة العمومية المشرفة على أنشطة الصحة والتكوين والثقافة والخدمات الإجتماعية باستثناء الضمان الاجتماعي"
  },
  {
      "lib_na9": "Administration publique (tutelle) des activités économiques",
      "cls_na9": 84.14,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الإدارة العمومية المشرفة على الأنشطة الإقتصادية"
  },
  {
      "lib_na9": "Affaires étrangères",
      "cls_na9": 84.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الشؤون الخارجية"
  },
  {
      "lib_na9": "Défense",
      "cls_na9": 84.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الدفاع"
  },
  {
      "lib_na9": "Justice",
      "cls_na9": 84.23,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "العدل"
  },
  {
      "lib_na9": "Activités d'ordre public et de sécurité",
      "cls_na9": 84.24,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة النظام العام والأمن"
  },
  {
      "lib_na9": "Services de protection civile",
      "cls_na9": 84.25,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "مصالح الحماية المدنية"
  },
  {
      "lib_na9": "Sécurité sociale obligatoire",
      "cls_na9": 84.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "الضمان الإجتماعي الإجباري"
  },
  {
      "lib_na9": "Enseignement pré-primaire",
      "cls_na9": 85.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم ما قبل الإبتدائي"
  },
  {
      "lib_na9": "Enseignement primaire",
      "cls_na9": 85.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم الإبتدائي"
  },
  {
      "lib_na9": "Enseignement secondaire (collège - 1er cycle)",
      "cls_na9": 85.31,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم الثانوي (مرحلة أولى)"
  },
  {
      "lib_na9": "Enseignement secondaire (lycée - 2ème cycle)",
      "cls_na9": 85.32,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم الثانوي (مرحلة ثانية)"
  },
  {
      "lib_na9": "Enseignement secondaire technique ou professionnel",
      "cls_na9": 85.33,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم الثانوي التقني والمهني"
  },
  {
      "lib_na9": "Enseignement post-secondaire non supérieur",
      "cls_na9": 85.41,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم في مرحلة ما بعد الثانوي غير العالي"
  },
  {
      "lib_na9": "Enseignement supérieur",
      "cls_na9": 85.42,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم العالي"
  },
  {
      "lib_na9": "Enseignement de disciplines sportives et d'activités de loisirs",
      "cls_na9": 85.51,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم في اختصاص الرياضة وفي أنشطة الترفيه"
  },
  {
      "lib_na9": "Enseignement culturel",
      "cls_na9": 85.52,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "التعليم الثقافي"
  },
  {
      "lib_na9": "Enseignement de la conduite",
      "cls_na9": 85.53,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "تعليم السياقة"
  },
  {
      "lib_na9": "Enseignements divers",
      "cls_na9": 85.59,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنواع أخرى من التعليم"
  },
  {
      "lib_na9": "Activités de soutien à l'enseignement",
      "cls_na9": 85.6,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الدعم في مجال التعليم"
  },
  {
      "lib_na9": "Activités hospitalières",
      "cls_na9": 86.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الأنشطة الإستشفائية"
  },
  {
      "lib_na9": "Activité des médecins généralistes",
      "cls_na9": 86.21,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة أطباء الطب العام"
  },
  {
      "lib_na9": "Activité des médecins spécialistes",
      "cls_na9": 86.22,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الأطباء المختصّين"
  },
  {
      "lib_na9": "Pratique dentaire",
      "cls_na9": 86.23,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "ممارسة طب الأسنان"
  },
  {
      "lib_na9": "Laboratoires d'analyses médicales",
      "cls_na9": 86.91,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "مخابر التحاليل الطبية"
  },
  {
      "lib_na9": "Ambulances",
      "cls_na9": 86.92,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات سيّارات الإسعاف"
  },
  {
      "lib_na9": "Activités des auxiliaires médicaux",
      "cls_na9": 86.93,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة مساعدي الأطباء"
  },
  {
      "lib_na9": "Autres activités pour la santé humaine",
      "cls_na9": 86.99,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "أنشطة أخرى متصلة بصحة الإنسان غ.م.س"
  },
  {
      "lib_na9": "Hébergement médicalisé",
      "cls_na9": 87.1,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإيواء المقترن بالتمريض"
  },
  {
      "lib_na9": "Hébergement social pour personnes handicapées mentales, malades mentales et toxicomanes",
      "cls_na9": 87.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإيواء الإجتماعي لذوي الاعاقة الذهنية وذوي الأمراض العقلية والمدمنين"
  },
  {
      "lib_na9": "Hébergement social pour personnes âgées ou handicapées physiques",
      "cls_na9": 87.3,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الإيواء الإجتماعي لكبار السن وذوي الإعاقة البدنية"
  },
  {
      "lib_na9": "Autres activités d'hébergement social",
      "cls_na9": 87.9,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الإيواء الإجتماعي الأخرى"
  },
  {
      "lib_na9": "Action sociale sans hébergement pour personnes âgées et pour personnes handicapées",
      "cls_na9": 88.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة إجتماعية بدون إيواء لفائدة كبار السن والمعوقين"
  },
  {
      "lib_na9": "Action sociale sans hébergement pour jeunes enfants",
      "cls_na9": 88.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة إجتماعية أخرى بدون إيواء للأطفال"
  },
  {
      "lib_na9": "Autre action sociale sans hébergement n.c.a.",
      "cls_na9": 88.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أعمال إجتماعية أخرى بدون إيواء"
  },
  {
      "lib_na9": "Arts du spectacle vivant",
      "cls_na9": 90.01,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "فنون العروض الحية"
  },
  {
      "lib_na9": "Activités de soutien au spectacle vivant",
      "cls_na9": 90.02,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الدعم للعروض الحيّة"
  },
  {
      "lib_na9": "Création artistique",
      "cls_na9": 90.03,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الإبداع الفني"
  },
  {
      "lib_na9": "Gestion de salles de spectacles",
      "cls_na9": 90.04,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "التصرف في قاعات العروض"
  },
  {
      "lib_na9": "Gestion des bibliothèques et des archives",
      "cls_na9": 91.01,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إدارة المكتبات ودور المحفوظات"
  },
  {
      "lib_na9": "Gestion des musées",
      "cls_na9": 91.02,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إدارة المتاحف"
  },
  {
      "lib_na9": "Gestion des sites et monuments historiques et des attractions touristiques similaires",
      "cls_na9": 91.03,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إدارة المواقع الأثرية والمعالم التاريخية والمواقع السياحية المماثلة"
  },
  {
      "lib_na9": "Gestion des jardins botaniques et zoologiques et des réserves naturelles",
      "cls_na9": 91.04,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إدارة الحدائق النباتية والحيوانية والمحميات الطبيعية"
  },
  {
      "lib_na9": "Organisation de jeux de hasard et d'argent",
      "cls_na9": 92.0,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "تنظيم ألعاب الحظ والقمار"
  },
  {
      "lib_na9": "Gestion d'installations sportives",
      "cls_na9": 93.11,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إدارة المنشآت الرياضية"
  },
  {
      "lib_na9": "Activités de clubs de sports",
      "cls_na9": 93.12,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة النوادي الرياضية"
  },
  {
      "lib_na9": "Activités des centres de culture physique",
      "cls_na9": 93.13,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة مراكز التربية البدنية"
  },
  {
      "lib_na9": "Autres activités liées au sport",
      "cls_na9": 93.19,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة رياضية أخرى"
  },
  {
      "lib_na9": "Activités des parcs d'attractions et parcs à thèmes",
      "cls_na9": 93.21,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة منتزهات الترفيه والتسلية"
  },
  {
      "lib_na9": "Autres activités récréatives et de loisirs",
      "cls_na9": 93.29,
      "sec_pri": -1,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الترفيه والتسلية الأخرى"
  },
  {
      "lib_na9": "Activités des organisations patronales et consulaires",
      "cls_na9": 94.11,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة منظمات الأعراف والهيئات القنصلية"
  },
  {
      "lib_na9": "Activités des organisations professionnelles",
      "cls_na9": 94.12,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة المنظمات المهنية"
  },
  {
      "lib_na9": "Activités des syndicats de salariés",
      "cls_na9": 94.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة نقابات الأجراء"
  },
  {
      "lib_na9": "Activités des organisations religieuses",
      "cls_na9": 94.91,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة المنظمات الدينية"
  },
  {
      "lib_na9": "Activités des organisations politiques",
      "cls_na9": 94.92,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة المنظمات السياسية"
  },
  {
      "lib_na9": "Activités des organisations associatives n.c.a.",
      "cls_na9": 94.99,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة منظمات جمعياتية أخرى غ.م.س"
  },
  {
      "lib_na9": "Réparation d'ordinateurs et d'équipements périphériques",
      "cls_na9": 95.11,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الحاسوب والمعدات الطرفية للحاسوب"
  },
  {
      "lib_na9": "Réparation d'équipements de communication",
      "cls_na9": 95.12,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح أدوات الإتصال"
  },
  {
      "lib_na9": "Réparation de produits électroniques grand public",
      "cls_na9": 95.21,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الآلات الإلكترونية ذات الإستعمال الواسع"
  },
  {
      "lib_na9": "Réparation d'appareils électroménagers et d'équipements pour la maison et le jardin",
      "cls_na9": 95.22,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الآلات الكهربائية المنزلية ومعدات المنازل والحدائق"
  },
  {
      "lib_na9": "Réparation de chaussures et d'articles en cuir",
      "cls_na9": 95.23,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الأحذية والمصنوعات الجلدية"
  },
  {
      "lib_na9": "Réparation de meubles et d'équipements du foyer",
      "cls_na9": 95.24,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الأثاث وتجهيزات المنازل"
  },
  {
      "lib_na9": "Réparation d'articles d'horlogerie et de bijouterie",
      "cls_na9": 95.25,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الساعات بأنواعها والمجوهرات"
  },
  {
      "lib_na9": "Réparation d'autres biens personnels et domestiques",
      "cls_na9": 95.29,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "إصلاح الأدوات الشخصية والأدوات المنزلية غ.م.س"
  },
  {
      "lib_na9": "Blanchisserie teinturerie",
      "cls_na9": 96.01,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "المغاسل والمصابغ"
  },
  {
      "lib_na9": "Coiffure et soins de beauté",
      "cls_na9": 96.02,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "الحلاقة والتجميل"
  },
  {
      "lib_na9": "Services funéraires",
      "cls_na9": 96.03,
      "sec_pri": 0,
      "ndv_rgn": -1,
      "cod_api": -1,
      "arb_na9": "خدمات الجنازات"
  },
  {
      "lib_na9": "Activités thermales et de thalassothérapie",
      "cls_na9": 96.04,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة محطات المياه المعدنية وحمّامات البحر"
  },
  {
      "lib_na9": "Bains et autres soins corporels",
      "cls_na9": 96.05,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "إستحمام وعلاجات جسمية أخرى"
  },
  {
      "lib_na9": "Autres services personnels n.c.a.",
      "cls_na9": 96.09,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "خدمات شخصية أخرى غ.م.س"
  },
  {
      "lib_na9": "Activités des ménages en tant qu'employeurs de personnel domestique",
      "cls_na9": 97.0,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "أنشطة الأسر باعتبارها مشغلة لأفراد قصد أداء الأعمال المنزلية"
  },
  {
      "lib_na9": "Activités indifférenciées des ménages en tant que producteurs de biens pour usage propre",
      "cls_na9": 98.1,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الأنشطة غير المميزة للأسر باعتبارها منتجة للبضائع للإستعمال الخاص"
  },
  {
      "lib_na9": "Activités indifférenciées des ménages en tant que producteurs de services pour usage propre",
      "cls_na9": 98.2,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": -1,
      "arb_na9": "الأنشطة غير المميزة للأسر باعتبارها منتجة للخدمات للإستعمال الخاص"
  },
  {
      "lib_na9": "Activités des organisations et organismes extraterritoriaux",
      "cls_na9": 99.0,
      "sec_pri": 0,
      "ndv_rgn": 0,
      "cod_api": 0,
      "arb_na9": "أنشطة المنظمات والهيئات الدولية"
  }
];


  products: any[] = [
    {
        "code": "01",
        "name": "Produits de l'agriculture et de la chasse et services annexes"
    },
    {
        "code": "01.1",
        "name": "Cultures non permanentes"
    },
    {
        "code": "01.11",
        "name": "Céréales à l'exclusion du riz"
    },
    {
        "code": "01.11.1",
        "name": "Blé"
    },
    {
        "code": "01.11.11",
        "name": "Blé dur"
    },
    {
        "code": "01.11.12",
        "name": "Blé, à l'exclusion du blé dur"
    },
    {
        "code": "01.11.2",
        "name": "Maïs"
    },
    {
        "code": "01.11.20",
        "name": "Maïs"
    },
    {
        "code": "01.11.3",
        "name": "Orge, seigle et avoine"
    },
    {
        "code": "01.11.31",
        "name": "Orge"
    },
    {
        "code": "01.11.32",
        "name": "Seigle"
    },
    {
        "code": "01.11.33",
        "name": "Avoine"
    },
    {
        "code": "01.11.4",
        "name": "Sorgho, millet et autres céréales"
    },
    {
        "code": "01.11.41",
        "name": "Sorgho"
    },
    {
        "code": "01.11.42",
        "name": "Millet"
    },
    {
        "code": "01.11.43",
        "name": "Triticale"
    },
    {
        "code": "01.11.49",
        "name": "Autres céréales"
    },
    {
        "code": "01.11.5",
        "name": "Paille et balles de céréales"
    },
    {
        "code": "01.11.50",
        "name": "Paille et balles de céréales"
    },
    {
        "code": "01.12",
        "name": "Riz, non décortiqué"
    },
    {
        "code": "01.12.1",
        "name": "Riz, non décortiqué"
    },
    {
        "code": "01.12.10",
        "name": "Riz, non décortiqué"
    },
    {
        "code": "01.13",
        "name": "Légumes et melons, racines et tubercules"
    },
    {
        "code": "01.13.1",
        "name": "Légumes à feuilles ou à tiges"
    },
    {
        "code": "01.13.11",
        "name": "Asperges"
    },
    {
        "code": "01.13.12",
        "name": "Choux"
    },
    {
        "code": "01.13.13",
        "name": "Choux-ﬂeurs et brocolis"
    },
    {
        "code": "01.13.14",
        "name": "Laitues"
    },
    {
        "code": "01.13.15",
        "name": "Chicorées"
    },
    {
        "code": "01.13.16",
        "name": "Épinards"
    },
    {
        "code": "01.13.17",
        "name": "Artichauts"
    },
    {
        "code": "01.13.19",
        "name": "Autres légumes à feuilles ou à tiges"
    },
    {
        "code": "01.13.2",
        "name": "Melons"
    },
    {
        "code": "01.13.21",
        "name": "Pastèques"
    },
    {
        "code": "01.13.29",
        "name": "Autres melons"
    },
    {
        "code": "01.13.3",
        "name": "Autres légumes à fruits"
    },
    {
        "code": "01.13.31",
        "name": "Piments et poivrons, verts (uniquement Capsicum)"
    },
    {
        "code": "01.13.32",
        "name": "Concombres et cornichons"
    },
    {
        "code": "01.13.33",
        "name": "Aubergines"
    },
    {
        "code": "01.13.34",
        "name": "Tomates"
    },
    {
        "code": "01.13.39",
        "name": "Autres légumes à fruits n.c.a."
    },
    {
        "code": "01.13.4",
        "name": "Légumes à racine, à bulbe ou à tubercules"
    },
    {
        "code": "01.13.41",
        "name": "Carottes et navets"
    },
    {
        "code": "01.13.42",
        "name": "Ail"
    },
    {
        "code": "01.13.43",
        "name": "Oignons"
    },
    {
        "code": "01.13.44",
        "name": "Poireaux et autres alliacés"
    },
    {
        "code": "01.13.49",
        "name": "Autres légumes à racine, à bulbe ou à tubercules (ne présentant pas "
    },
    {
        "code": "01.13.5",
        "name": "Pommes  de  terre  et  racines  et  tubercules  à  amidon  ou  inuline "
    },
    {
        "code": "01.13.51",
        "name": "Pommes de terre"
    },
    {
        "code": "01.13.52",
        "name": "Patates douces"
    },
    {
        "code": "01.13.53",
        "name": "Manioc"
    },
    {
        "code": "01.13.59",
        "name": "Autres racines et tubercules à amidon ou inuline comestibles"
    },
    {
        "code": "01.13.6",
        "name": "Plants  et  semences  potagers,  à  l'exclusion  des  semences  de "
    },
    {
        "code": "01.13.60",
        "name": "Plants  et  semences  potagers,  à  l'exclusion  des  semences  de "
    },
    {
        "code": "01.13.7",
        "name": "Betteraves à sucre et semences de betteraves à sucre"
    },
    {
        "code": "01.13.71",
        "name": "Betteraves à sucre"
    },
    {
        "code": "01.13.72",
        "name": "Semences de betteraves à sucre"
    },
    {
        "code": "01.13.8",
        "name": "Champignons et truffes"
    },
    {
        "code": "01.13.80",
        "name": "Champignons et truffes"
    },
    {
        "code": "01.13.9",
        "name": "Légumes frais n.c.a."
    },
    {
        "code": "01.13.90",
        "name": "Légumes frais n.c.a."
    },
    {
        "code": "01.14",
        "name": "Cannes à sucre"
    },
    {
        "code": "01.14.1",
        "name": "Cannes à sucre"
    },
    {
        "code": "01.14.10",
        "name": "Cannes à sucre"
    },
    {
        "code": "01.15",
        "name": "Tabac brut"
    },
    {
        "code": "01.15.1",
        "name": "Tabac brut"
    },
    {
        "code": "01.15.10",
        "name": "Tabac brut"
    },
    {
        "code": "01.16",
        "name": "Plantes textiles"
    },
    {
        "code": "01.16.1",
        "name": "Plantes textiles"
    },
    {
        "code": "01.16.11",
        "name": "Coton, égrené ou en masse"
    },
    {
        "code": "01.16.12",
        "name": "Jute, kénaf et autres ﬁbres libériennes, bruts ou rouis, à l'exclusion"
    },
    {
        "code": "01.16.19",
        "name": "Lin, chanvre commun et plantes textiles brutes n.c.a."
    },
    {
        "code": "01.17",
        "name": "Légumineuses et graines oléagineuses"
    },
    {
        "code": "01.17.1",
        "name": "Légumes à cosse, verts"
    },
    {
        "code": "01.17.11",
        "name": "Haricots, verts"
    },
    {
        "code": "01.17.12",
        "name": "Pois, verts"
    },
    {
        "code": "01.17.19",
        "name": "Autres légumes à cosse, verts"
    },
    {
        "code": "01.17.2",
        "name": "Légumes à cosse, secs"
    },
    {
        "code": "01.17.21",
        "name": "Haricots, secs"
    },
    {
        "code": "01.17.22",
        "name": "Fèves et fèveroles, sèches"
    },
    {
        "code": "01.17.23",
        "name": "Pois chiches, secs"
    },
    {
        "code": "01.17.24",
        "name": "Lentilles, sèches"
    },
    {
        "code": "01.17.25",
        "name": "Pois, secs"
    },
    {
        "code": "01.17.29",
        "name": "Légumes à cosse, secs n.c.a."
    },
    {
        "code": "01.17.3",
        "name": "Fèves de soja, arachides et graines de coton"
    },
    {
        "code": "01.17.31",
        "name": "Fèves de soja"
    },
    {
        "code": "01.17.32",
        "name": "Arachides, en coque"
    },
    {
        "code": "01.17.33",
        "name": "Arachides, décortiquées"
    },
    {
        "code": "01.17.34",
        "name": "Graines de coton"
    },
    {
        "code": "01.17.9",
        "name": "Autres oléagineux"
    },
    {
        "code": "01.17.91",
        "name": "Graines de lin"
    },
    {
        "code": "01.17.92",
        "name": "Graines de moutarde"
    },
    {
        "code": "01.17.93",
        "name": "Graines de colza"
    },
    {
        "code": "01.17.94",
        "name": "Graines de sésame"
    },
    {
        "code": "01.17.95",
        "name": "Graines de tournesol"
    },
    {
        "code": "01.17.99",
        "name": "Autres oléagineux n.c.a."
    },
    {
        "code": "01.18",
        "name": "plantes de fourrages"
    },
    {
        "code": "01.18.1",
        "name": "Plantes fourragères"
    },
    {
        "code": "01.18.11",
        "name": "Foin de cultures fourragères"
    },
    {
        "code": "01.18.12",
        "name": "Luzerne non déshydratée"
    },
    {
        "code": "01.18.19",
        "name": "Autres plantes fourragères"
    },
    {
        "code": "01.19",
        "name": "Horticulture et autres cultures non permanentes"
    },
    {
        "code": "01.19.1",
        "name": "Fleurs coupées et boutons de ﬂeurs; semences ﬂorales"
    },
    {
        "code": "01.19.11",
        "name": "Fleurs coupées et boutons de ﬂeurs"
    },
    {
        "code": "01.19.12",
        "name": "Semences ﬂorales"
    },
    {
        "code": "01.19.2",
        "name": "Semences de betteraves et de plantes fourragères, autres produits "
    },
    {
        "code": "01.19.21",
        "name": "Semences de betteraves (à l’exclusion des semences de betteraves à "
    },
    {
        "code": "01.19.29",
        "name": "Produits végétaux bruts n.c.a."
    },
    {
        "code": "01.2",
        "name": "Cultures permanentes"
    },
    {
        "code": "01.21",
        "name": "Raisin"
    },
    {
        "code": "01.21.1",
        "name": "Raisin"
    },
    {
        "code": "01.21.11",
        "name": "Raisin de table"
    },
    {
        "code": "01.21.12",
        "name": "Autre raisin, frais"
    },
    {
        "code": "01.22",
        "name": "Dattes et autres fruits tropicaux et subtropicaux"
    },
    {
        "code": "01.22.1",
        "name": "Dattes"
    },
    {
        "code": "01.22.10",
        "name": "Dattes"
    },
    {
        "code": "01.22.2",
        "name": "Fruits tropicaux et subtropicaux"
    },
    {
        "code": "01.22.21",
        "name": "Avocats"
    },
    {
        "code": "01.22.22",
        "name": "Bananes, bananes plantains et assimilés"
    },
    {
        "code": "01.22.23",
        "name": "Figues"
    },
    {
        "code": "01.22.29",
        "name": "Autres fruits tropicaux et subtropicaux n.c.a"
    },
    {
        "code": "01.23",
        "name": "Agrumes"
    },
    {
        "code": "01.23.1",
        "name": "Agrumes"
    },
    {
        "code": "01.23.11",
        "name": "Pomelos et pamplemousses"
    },
    {
        "code": "01.23.12",
        "name": "Citrons et limes"
    },
    {
        "code": "01.23.13",
        "name": "Oranges"
    },
    {
        "code": "01.23.14",
        "name": "Mandarines et clémentines"
    },
    {
        "code": "01.23.19",
        "name": "Autres agrumes"
    },
    {
        "code": "01.24",
        "name": "Fruits à pépins et à noyau"
    },
    {
        "code": "01.24.1",
        "name": "Pommes"
    },
    {
        "code": "01.24.10",
        "name": "Pommes"
    },
    {
        "code": "01.24.2",
        "name": "Autres fruits à pépins et à noyau"
    },
    {
        "code": "01.24.21",
        "name": "Poires"
    },
    {
        "code": "01.24.22",
        "name": "Coings"
    },
    {
        "code": "01.24.23",
        "name": "Abricots"
    },
    {
        "code": "01.24.24",
        "name": "Cerises"
    },
    {
        "code": "01.24.25",
        "name": "Pêches"
    },
    {
        "code": "01.24.26",
        "name": "Nectarines"
    },
    {
        "code": "01.24.27",
        "name": "Prunes"
    },
    {
        "code": "01.24.28",
        "name": "Prunelles"
    },
    {
        "code": "01.24.29",
        "name": "Autres fruits à pépins et à noyau n.c.a."
    },
    {
        "code": "01.25",
        "name": "Autres fruits d’arbres ou d’arbustes et fruits à coque"
    },
    {
        "code": "01.25.1",
        "name": "Baies et fruits du genre Vaccinium"
    },
    {
        "code": "01.25.11",
        "name": "Kiwis"
    },
    {
        "code": "01.25.12",
        "name": "Framboises"
    },
    {
        "code": "01.25.13",
        "name": "Fraises"
    },
    {
        "code": "01.25.19",
        "name": "Autres baies, fruits du genre Vaccinium n.c.a."
    },
    {
        "code": "01.25.2",
        "name": "Semences fruitières"
    },
    {
        "code": "01.25.20",
        "name": "Semences fruitières"
    },
    {
        "code": "01.25.3",
        "name": "Fruits à coque (à l'exclusion des noix sauvages, arachides et noix "
    },
    {
        "code": "01.25.31",
        "name": "Amandes"
    },
    {
        "code": "01.25.32",
        "name": "Châtaignes et marrons"
    },
    {
        "code": "01.25.33",
        "name": "Noisettes"
    },
    {
        "code": "01.25.34",
        "name": "Pistaches"
    },
    {
        "code": "01.25.35",
        "name": "Noix"
    },
    {
        "code": "01.25.39",
        "name": "Autres fruits à coque (à l'exclusion des noix sauvages, arachides et "
    },
    {
        "code": "01.25.9",
        "name": "Autres fruits d'arbres et d'arbustes n.c.a."
    },
    {
        "code": "01.25.90",
        "name": "Autres fruits d'arbres et d'arbustes n.c.a."
    },
    {
        "code": "01.26",
        "name": "Olives et autres fruits oléagineux"
    },
    {
        "code": "01.26.1",
        "name": "Olives"
    },
    {
        "code": "01.26.11",
        "name": "Olives de table"
    },
    {
        "code": "01.26.12",
        "name": "Olives à huile"
    },
    {
        "code": "01.26.2",
        "name": "Noix de coco"
    },
    {
        "code": "01.26.20",
        "name": "Noix de coco"
    },
    {
        "code": "01.26.9",
        "name": "Autres fruits oléagineux"
    },
    {
        "code": "01.26.90",
        "name": "Autres fruits oléagineux"
    },
    {
        "code": "01.27",
        "name": "Plantes à boisson"
    },
    {
        "code": "01.27.1",
        "name": "Plantes à boisson"
    },
    {
        "code": "01.27.11",
        "name": "Café vert, en cerise ou en grain"
    },
    {
        "code": "01.27.12",
        "name": "Thé en feuilles"
    },
    {
        "code": "01.27.13",
        "name": "Maté en feuilles"
    },
    {
        "code": "01.27.14",
        "name": "Cacao en fèves"
    },
    {
        "code": "01.28",
        "name": "Plantes à épices, aromatiques, médicinales et pharmaceutiques"
    },
    {
        "code": "01.28.1",
        "name": "Épices, brutes"
    },
    {
        "code": "01.28.11",
        "name": "Poivre (Piper spp.), brut"
    },
    {
        "code": "01.28.12",
        "name": "Piments et poivrons (Capsicum spp.) séchés, bruts"
    },
    {
        "code": "01.28.13",
        "name": "Muscade, macis et cardamome, bruts"
    },
    {
        "code": "01.28.14",
        "name": "Anis, badiane, coriandre, cumin, carvi, fenouil et genièvre, bruts"
    },
    {
        "code": "01.28.15",
        "name": "Cannelle, brute"
    },
    {
        "code": "01.28.16",
        "name": "Clous de giroﬂes (entiers), bruts"
    },
    {
        "code": "01.28.17",
        "name": "Gingembre séché, brut"
    },
    {
        "code": "01.28.18",
        "name": "Vanille, brute"
    },
    {
        "code": "01.28.19",
        "name": "Autres épices, brutes"
    },
    {
        "code": "01.28.2",
        "name": "Houblon en cônes"
    },
    {
        "code": "01.28.20",
        "name": "Houblon en cônes"
    },
    {
        "code": "01.28.3",
        "name": "Plantes utilisées principalement en parfumerie, en pharmacie ou à "
    },
    {
        "code": "01.28.30",
        "name": "Plantes utilisées principalement en parfumerie, en pharmacie ou à "
    },
    {
        "code": "01.29",
        "name": "Autres cultures permanentes"
    },
    {
        "code": "01.29.1",
        "name": "Caoutchouc naturel brut"
    },
    {
        "code": "01.29.10",
        "name": "Caoutchouc naturel brut"
    },
    {
        "code": "01.29.2",
        "name": "Arbres de Noël coupés"
    },
    {
        "code": "01.29.20",
        "name": "Arbres de Noël coupés"
    },
    {
        "code": "01.29.3",
        "name": "Matières  premières  végétales  utilisées  principalement  pour  la "
    },
    {
        "code": "01.29.30",
        "name": "Matières  premières  végétales  utilisées  principalement  pour  la "
    },
    {
        "code": "01.3",
        "name": "Plants: plants de pépinière, bulbes, tubercules et rhizomes, "
    },
    {
        "code": "01.30",
        "name": "Plants:  plants  de  pépinière,  bulbes,  tubercules  et  rhizomes, "
    },
    {
        "code": "01.30.1",
        "name": "Plants:  plants  de  pépinière,  bulbes,  tubercules  et  rhizomes, "
    },
    {
        "code": "01.30.10",
        "name": "Plants: plants de pépinière, bulbes, tubercules et rhizomes, boutures "
    },
    {
        "code": "01.4",
        "name": "Produits de l'élevage"
    },
    {
        "code": "01.41",
        "name": "Vaches laitières, vivantes et lait de vache, brut"
    },
    {
        "code": "01.41.1",
        "name": "Vaches laitières, vivantes"
    },
    {
        "code": "01.41.10",
        "name": "Vaches laitières, vivantes"
    },
    {
        "code": "01.41.2",
        "name": "Lait de vache, brut"
    },
    {
        "code": "01.41.20",
        "name": "Lait de vache, brut"
    },
    {
        "code": "01.42",
        "name": "Autres bovins et bufﬂes, vivants et leur sperme"
    },
    {
        "code": "01.42.1",
        "name": "Autres bovins et bufﬂes, vivants"
    },
    {
        "code": "01.42.11",
        "name": "Autres bovins et bufﬂes, à l'exclusion des veaux, vivants"
    },
    {
        "code": "01.42.12",
        "name": "Veaux et bufﬂons, vivants"
    },
    {
        "code": "01.42.2",
        "name": "Sperme de taureau et de bufﬂe"
    },
    {
        "code": "01.42.20",
        "name": "Sperme de taureau et de bufﬂe"
    },
    {
        "code": "01.43",
        "name": "Chevaux et autres équidés, vivants"
    },
    {
        "code": "01.43.1",
        "name": "Chevaux et autres équidés, vivants"
    },
    {
        "code": "01.43.11",
        "name": "Chevaux, vivants"
    },
    {
        "code": "01.43.19",
        "name": "Autres équidés, vivants"
    },
    {
        "code": "01.44",
        "name": "Chameaux et autres camélidés, vivants"
    },
    {
        "code": "01.44.1",
        "name": "Chameaux et autres camélidés, vivants"
    },
    {
        "code": "01.44.10",
        "name": "Chameaux et autres camélidés, vivants"
    },
    {
        "code": "01.45",
        "name": "Ovins et caprins, vivants; lait de brebis et de chèvre brut, laine "
    },
    {
        "code": "01.45.1",
        "name": "Ovins et caprins, vivants"
    },
    {
        "code": "01.45.11",
        "name": "Ovins, vivants"
    },
    {
        "code": "01.45.12",
        "name": "Caprins, vivants"
    },
    {
        "code": "01.45.2",
        "name": "Lait de brebis et de chèvre, brut"
    },
    {
        "code": "01.45.21",
        "name": "Lait de brebis, brut"
    },
    {
        "code": "01.45.22",
        "name": "Lait de chèvre, brut"
    },
    {
        "code": "01.45.3",
        "name": "Laine en suint et poils d'ovins et de caprins"
    },
    {
        "code": "01.45.30",
        "name": "Laine en suint et poils d'ovins et de caprins"
    },
    {
        "code": "01.46",
        "name": "Porcins, vivants"
    },
    {
        "code": "01.46.1",
        "name": "Porcins, vivants"
    },
    {
        "code": "01.46.10",
        "name": "Porcins, vivants"
    },
    {
        "code": "01.47",
        "name": "Volailles vivantes et œufs"
    },
    {
        "code": "01.47.1",
        "name": "Volailles, vivantes"
    },
    {
        "code": "01.47.11",
        "name": "Poulets, vivants"
    },
    {
        "code": "01.47.12",
        "name": "Dindes, vivantes"
    },
    {
        "code": "01.47.13",
        "name": "Oies, vivantes"
    },
    {
        "code": "01.47.14",
        "name": "Canards et pintades, vivants"
    },
    {
        "code": "01.47.2",
        "name": "Œufs, en coquille, frais"
    },
    {
        "code": "01.47.21",
        "name": "Œufs de poule, en coquille, frais"
    },
    {
        "code": "01.47.22",
        "name": "Œufs d'autres volailles, en coquille, frais"
    },
    {
        "code": "01.47.23",
        "name": "Œufs, à couver"
    },
    {
        "code": "01.49",
        "name": "Autres animaux d'élevage et produits d'origine animale"
    },
    {
        "code": "01.49.1",
        "name": "Autres animaux d'élevage, vivants"
    },
    {
        "code": "01.49.11",
        "name": "Lapins d'élevage, vivants"
    },
    {
        "code": "01.49.12",
        "name": "Oiseaux d'élevage n.c.a., vivants"
    },
    {
        "code": "01.49.13",
        "name": "Reptiles d'élevage (y compris serpents et tortues), vivants"
    },
    {
        "code": "01.49.19",
        "name": "Autres animaux d'élevage n.c.a., vivants"
    },
    {
        "code": "01.49.2",
        "name": "Autres produits d'origine animale"
    },
    {
        "code": "01.49.21",
        "name": "Miel"
    },
    {
        "code": "01.49.22",
        "name": "Lait brut de camélidés"
    },
    {
        "code": "01.49.23",
        "name": "Autres laits bruts n.c.a."
    },
    {
        "code": "01.49.24",
        "name": "Escargots, frais, réfrigérés, congelés ou surgelés, séchés ou salés, à "
    },
    {
        "code": "01.49.25",
        "name": "Produits comestibles d'origine animale n.c.a."
    },
    {
        "code": "01.49.26",
        "name": "Cocons de vers à soie"
    },
    {
        "code": "01.49.27",
        "name": "Cires d'insectes et spermaceti, afﬁnés et colorés ou non"
    },
    {
        "code": "01.49.28",
        "name": "Embryons animaux destinés à la reproduction"
    },
    {
        "code": "01.49.29",
        "name": "Produits non comestibles d'origine animale n.c.a."
    },
    {
        "code": "01.49.3",
        "name": "Peaux et fourrures"
    },
    {
        "code": "01.49.31",
        "name": "Fourrures  d'élevage  ou  de  piégeage,  à  l'exclusion  des  peaux "
    },
    {
        "code": "01.49.32",
        "name": "Peaux d'agneaux"
    },
    {
        "code": "01.49.39",
        "name": "Peaux d'animaux n.c.a. (brutes ou conservées, mais non travaillées)"
    },
    {
        "code": "01.6",
        "name": "Services annexes à l'agriculture et à l'élevage (à l'exclusion "
    },
    {
        "code": "01.61",
        "name": "Services de soutien aux cultures"
    },
    {
        "code": "01.61.1",
        "name": "Services de soutien aux cultures"
    },
    {
        "code": "01.61.10",
        "name": "Services de soutien aux cultures"
    },
    {
        "code": "01.62",
        "name": "Services de soutien à la production animale"
    },
    {
        "code": "01.62.1",
        "name": "Services de soutien à la production animale"
    },
    {
        "code": "01.62.10",
        "name": "Services de soutien à la production animale"
    },
    {
        "code": "01.63",
        "name": "Traitement primaire des récoltes"
    },
    {
        "code": "01.63.1",
        "name": "Traitement primaire des récoltes"
    },
    {
        "code": "01.63.10",
        "name": "Traitement primaire des récoltes"
    },
    {
        "code": "01.64",
        "name": "Traitement des semences"
    },
    {
        "code": "01.64.1",
        "name": "Traitement des semences"
    },
    {
        "code": "01.64.10",
        "name": "Traitement des semences"
    },
    {
        "code": "01.7",
        "name": "Chasse, piégeage et services annexes"
    },
    {
        "code": "01.70",
        "name": "Chasse, piégeage et services annexes"
    },
    {
        "code": "01.70.1",
        "name": "Chasse, piégeage et services annexes"
    },
    {
        "code": "01.70.10",
        "name": "Chasse, piégeage et services annexes"
    },
    {
        "code": "02",
        "name": "PRODUITS SYLVICOLES ET SERVICES ANNEXES"
    },
    {
        "code": "02.1",
        "name": "Arbres forestiers et services des pépinières"
    },
    {
        "code": "02.10",
        "name": "Arbres forestiers et services des pépinières"
    },
    {
        "code": "02.10.1",
        "name": "Plants d'arbres forestiers; semences d'arbres forestiers"
    },
    {
        "code": "02.10.11",
        "name": "Plants d'arbres forestiers"
    },
    {
        "code": "02.10.12",
        "name": "Semences d'arbres forestiers"
    },
    {
        "code": "02.10.2",
        "name": "Services des pépinières forestières"
    },
    {
        "code": "02.10.20",
        "name": "Services des pépinières forestières"
    },
    {
        "code": "02.10.3",
        "name": "Arbres forestiers"
    },
    {
        "code": "02.10.30",
        "name": "Arbres forestiers"
    },
    {
        "code": "02.2",
        "name": "Bois brut"
    },
    {
        "code": "02.20",
        "name": "Bois brut"
    },
    {
        "code": "02.20.1",
        "name": "Bois brut"
    },
    {
        "code": "02.20.11",
        "name": "Grumes de conifères"
    },
    {
        "code": "02.20.12",
        "name": "Grumes de feuillus, à l'exclusion des bois tropicaux"
    },
    {
        "code": "02.20.13",
        "name": "Grumes de bois tropicaux"
    },
    {
        "code": "02.20.14",
        "name": "Bois de chauffage"
    },
    {
        "code": "02.3",
        "name": "Autres produits forestiers"
    },
    {
        "code": "02.31",
        "name": "Alfa"
    },
    {
        "code": "02.31.1",
        "name": "Alfa"
    },
    {
        "code": "02.31.10",
        "name": "Alfa"
    },
    {
        "code": "02.32",
        "name": "Liège"
    },
    {
        "code": "02.32.1",
        "name": "Liège naturel, brut ou simplement préparé"
    },
    {
        "code": "02.32.10",
        "name": "Liège naturel, brut ou simplement préparé"
    },
    {
        "code": "02.33",
        "name": "Autres produits forestiers"
    },
    {
        "code": "02.33.1",
        "name": "Gommes naturelles"
    },
    {
        "code": "02.33.11",
        "name": "Balata,  gutta-percha,  gommes  chicle  et  de  guayule  et  gommes "
    },
    {
        "code": "02.33.12",
        "name": "Gomme laque, baumes et autres gommes et résines naturelles"
    },
    {
        "code": "02.33.2",
        "name": "Parties de plantes, herbes, mousses et lichens utilisables à des fins ornementales"
    },
    {
        "code": "02.33.21",
        "name": "Romarin sauvage"
    },
    {
        "code": "02.33.22",
        "name": "Myrte sauvage"
    },
    {
        "code": "02.33.23",
        "name": "Parties de plantes, herbes, mousses et lichens utilisables à des fins ornementales"
    },
    {
        "code": "02.33.3",
        "name": "Produits forestiers comestibles"
    },
    {
        "code": "02.33.30",
        "name": "Produits forestiers comestibles"
    },
    {
        "code": "02.4",
        "name": "Services de soutien à l'exploitation forestière"
    },
    {
        "code": "02.40",
        "name": "Services de soutien à l'exploitation forestière"
    },
    {
        "code": "02.40.1",
        "name": "Services de soutien à l'exploitation forestière"
    },
    {
        "code": "02.40.10",
        "name": "Services de soutien à l'exploitation forestière"
    },
    {
        "code": "03",
        "name": "Produits de la pêche et de l'aquaculture; services de soutien à la pêche"
    },
    {
        "code": "03.0",
        "name": "Produits de la pêche et de l'aquaculture; services de soutien à la pêche"
    },
    {
        "code": "03.00",
        "name": "Produits de la pêche et de l'aquaculture; services de soutien à la pêche"
    },
    {
        "code": "03.00.1",
        "name": "Poissons, vivants"
    },
    {
        "code": "03.00.11",
        "name": "Poissons d'ornement vivants"
    },
    {
        "code": "03.00.12",
        "name": "Gros pélagiques vivants, sauvages"
    },
    {
        "code": "03.00.13",
        "name": "Autres poissons de mer vivants, sauvages"
    },
    {
        "code": "03.00.14",
        "name": "Poissons d'eau douce vivants, sauvages"
    },
    {
        "code": "03.00.15",
        "name": "Poissons de mer vivants, d’élevage"
    },
    {
        "code": "03.00.16",
        "name": "Poissons d'eau douce vivants, d'élevage"
    },
    {
        "code": "03.00.2",
        "name": "Poissons, frais ou réfrigérés"
    },
    {
        "code": "03.00.21",
        "name": "Petits pélagiques frais ou réfrigérés"
    },
    {
        "code": "03.00.22",
        "name": "Gros pélagiques frais ou réfrigérés"
    },
    {
        "code": "03.00.23",
        "name": "Autres poissons de mer frais ou réfrigérés, sauvages"
    },
    {
        "code": "03.00.24",
        "name": "Poissons d'eau douce frais ou réfrigérés, sauvages"
    },
    {
        "code": "03.00.25",
        "name": "Poissons de mer frais ou réfrigérés, d’élevage"
    },
    {
        "code": "03.00.26",
        "name": "Poissons d'eau douce frais ou réfrigérés, d'élevage"
    },
    {
        "code": "03.00.3",
        "name": "Crustacés, non congelés ou surgelés"
    },
    {
        "code": "03.00.31",
        "name": "Crustacés, non congelés ou surgelés, sauvages"
    },
    {
        "code": "03.00.32",
        "name": "Crustacés, non congelés ou surgelés, d'élevage"
    },
    {
        "code": "03.00.4",
        "name": "Mollusques et autres invertébrés aquatiques vivants, frais ou réfrigérés"
    },
    {
        "code": "03.00.41",
        "name": "Huîtres vivantes, fraîches ou réfrigérées, sauvages"
    },
    {
        "code": "03.00.42",
        "name": "Autres coquillages, frais ou réfrigérés, sauvages"
    },
    {
        "code": "03.00.43",
        "name": "Mollusques céphalopodes, frais ou réfrigérés, sauvages"
    },
    {
        "code": "03.00.44",
        "name": "Autres  mollusques  et  invertébrés  aquatiques  vivants,  frais  ou "
    },
    {
        "code": "03.00.45",
        "name": "Huîtres vivantes, fraîches ou réfrigérées, d'élevage"
    },
    {
        "code": "03.00.46",
        "name": "Autres  mollusques  et  invertébrés  aquatiques  vivants,  frais  ou "
    },
    {
        "code": "03.00.5",
        "name": "Perles, brutes"
    },
    {
        "code": "03.00.51",
        "name": "Perles naturelles, brutes"
    },
    {
        "code": "03.00.52",
        "name": "Perles de culture, brutes"
    },
    {
        "code": "03.00.6",
        "name": "Autres plantes et animaux aquatiques et leurs produits"
    },
    {
        "code": "03.00.61",
        "name": "Coraux et produits similaires, coquilles de mollusques, de crustacés "
    },
    {
        "code": "03.00.62",
        "name": "Éponges naturelles"
    },
    {
        "code": "03.00.63",
        "name": "Algues sauvages"
    },
    {
        "code": "03.00.64",
        "name": "Algues de culture"
    },
    {
        "code": "03.00.69",
        "name": "Autres plantes et animaux aquatiques et leurs produits n.c.a."
    },
    {
        "code": "03.00.7",
        "name": "Services de soutien à la pêche et à l'aquaculture"
    },
    {
        "code": "03.00.71",
        "name": "Services de soutien à la pêche"
    },
    {
        "code": "03.00.72",
        "name": "Services de soutien à l'aquaculture"
    },
    {
        "code": "05",
        "name": "HOUILLE ET LIGNITE"
    },
    {
        "code": "05.1",
        "name": "Houille"
    },
    {
        "code": "05.10",
        "name": "Houille"
    },
    {
        "code": "05.10.1",
        "name": "Houille"
    },
    {
        "code": "05.10.10",
        "name": "Houille"
    },
    {
        "code": "05.2",
        "name": "Lignite"
    },
    {
        "code": "05.20",
        "name": "Lignite"
    },
    {
        "code": "05.20.1",
        "name": "Lignite"
    },
    {
        "code": "05.20.10",
        "name": "Lignite"
    },
    {
        "code": "06",
        "name": "HYDROCARBURES"
    },
    {
        "code": "06.1",
        "name": "Pétrole brut"
    },
    {
        "code": "06.10",
        "name": "Pétrole brut"
    },
    {
        "code": "06.10.1",
        "name": "Huiles brutes de pétrole ou de minéraux bitumineux"
    },
    {
        "code": "06.10.10",
        "name": "Huiles brutes de pétrole ou de minéraux bitumineux"
    },
    {
        "code": "06.10.2",
        "name": "Sables et schistes bitumineux"
    },
    {
        "code": "06.10.20",
        "name": "Sables et schistes bitumineux"
    },
    {
        "code": "06.2",
        "name": "Gaz naturel, liquéﬁé ou gazeux"
    },
    {
        "code": "06.20",
        "name": "Gaz naturel, liquéﬁé ou gazeux"
    },
    {
        "code": "06.20.1",
        "name": "Gaz naturel, liquéﬁé ou gazeux"
    },
    {
        "code": "06.20.10",
        "name": "Gaz naturel, liquéﬁé ou gazeux"
    },
    {
        "code": "07",
        "name": "MINERAIS MÉTALLIQUES"
    },
    {
        "code": "07.1",
        "name": "Minerais de fer"
    },
    {
        "code": "07.10",
        "name": "Minerais de fer"
    },
    {
        "code": "07.10.1",
        "name": "Minerais de fer"
    },
    {
        "code": "07.10.11",
        "name": "Hématite"
    },
    {
        "code": "07.10.12",
        "name": "carbonate de fer"
    },
    {
        "code": "07.2",
        "name": "Minerais de métaux non ferreux"
    },
    {
        "code": "07.21",
        "name": "Minerais d'uranium et de thorium"
    },
    {
        "code": "07.21.1",
        "name": "Minerais d'uranium et de thorium"
    },
    {
        "code": "07.21.10",
        "name": "Minerais d'uranium et de thorium"
    },
    {
        "code": "07.29",
        "name": "Autres minerais métalliques"
    },
    {
        "code": "07.29.1",
        "name": "Autres minerais métalliques"
    },
    {
        "code": "07.29.11",
        "name": "Minerais de cuivre"
    },
    {
        "code": "07.29.12",
        "name": "Minerais de nickel"
    },
    {
        "code": "07.29.13",
        "name": "Minerais d'aluminium"
    },
    {
        "code": "07.29.14",
        "name": "Minerais de métaux précieux"
    },
    {
        "code": "07.29.15",
        "name": "Minerais de plomb"
    },
    {
        "code": "07.29.16",
        "name": "Minerais de zinc"
    },
    {
        "code": "07.29.17",
        "name": "Minerais d'étain"
    },
    {
        "code": "07.29.19",
        "name": "Autres minerais métalliques n.c.a."
    },
    {
        "code": "08",
        "name": "Autres produits des industries extractives"
    },
    {
        "code": "08.1",
        "name": "Pierres, sables et argiles"
    },
    {
        "code": "08.11",
        "name": "Pierres  ornementales  ou  de  construction,  calcaire  industriel, "
    },
    {
        "code": "08.11.1",
        "name": "Pierres ornementales ou de construction"
    },
    {
        "code": "08.11.11",
        "name": "Marbres et autres pierres marbrières"
    },
    {
        "code": "08.11.12",
        "name": "Granit, grès et autres pierres ornementales ou de construction"
    },
    {
        "code": "08.11.2",
        "name": "Calcaire industriel et gypse"
    },
    {
        "code": "08.11.21",
        "name": "Calcaire industriel"
    },
    {
        "code": "08.11.22",
        "name": "Gypse"
    },
    {
        "code": "08.11.23",
        "name": "Pierre à ciment"
    },
    {
        "code": "08.11.3",
        "name": "Craie et dolomie crue"
    },
    {
        "code": "08.11.30",
        "name": "Craie et dolomie crue"
    },
    {
        "code": "08.11.4",
        "name": "Ardoise"
    },
    {
        "code": "08.11.40",
        "name": "Ardoise"
    },
    {
        "code": "08.12",
        "name": "Sables et granulats, argiles et kaolin"
    },
    {
        "code": "08.12.1",
        "name": "Sables et granulats"
    },
    {
        "code": "08.12.11",
        "name": "Sables naturels"
    },
    {
        "code": "08.12.12",
        "name": "Graviers"
    },
    {
        "code": "08.12.13",
        "name": "Autres granulats, roches concassées et cailloux"
    },
    {
        "code": "08.12.14",
        "name": "Mélanges de laitiers et de déchets industriels similaires, comprenant "
    },
    {
        "code": "08.12.2",
        "name": "Argiles et kaolin"
    },
    {
        "code": "08.12.21",
        "name": "Kaolin et autres argiles kaoliniques"
    },
    {
        "code": "08.12.22",
        "name": "Bentonite et argiles smectetiques"
    },
    {
        "code": "08.12.29",
        "name": "Autres argiles, andalousite, cyanite, sillimanite; mullite; chamottes "
    },
    {
        "code": "08.2",
        "name": "Phosphates naturels"
    },
    {
        "code": "08.20",
        "name": "Phosphates  de  calcium  naturel  ou  phosphates  alumino-"
    },
    {
        "code": "08.20.1",
        "name": "Phosphates de calcium naturel ou phosphates alumino-calciques"
    },
    {
        "code": "08.20.10",
        "name": "Phosphates de calcium naturel ou phosphates alumino-calciques"
    },
    {
        "code": "08.9",
        "name": "Produits des industries extractives n.c.a."
    },
    {
        "code": "08.91",
        "name": "Minéraux chimiques et engrais minéraux (sauf phosphates)"
    },
    {
        "code": "08.91.1",
        "name": "Minéraux chimiques et engrais minéraux (sauf phosphates)"
    },
    {
        "code": "08.91.11",
        "name": "Pyrites de fer non grillées; soufre brut ou non rafﬁné"
    },
    {
        "code": "08.91.12",
        "name": "Fluorine"
    },
    {
        "code": "08.91.13",
        "name": "Barytine"
    },
    {
        "code": "08.91.19",
        "name": "Autres minéraux chimiques et engrais minéraux"
    },
    {
        "code": "08.92",
        "name": "Tourbe"
    },
    {
        "code": "08.92.1",
        "name": "Tourbe"
    },
    {
        "code": "08.92.10",
        "name": "Tourbe"
    },
    {
        "code": "08.93",
        "name": "Sel et chlorure de sodium pur; eau de mer"
    },
    {
        "code": "08.93.1",
        "name": "Sel et chlorure de sodium pur; eau de mer"
    },
    {
        "code": "08.93.10",
        "name": "Sel et chlorure de sodium pur; eau de mer"
    },
    {
        "code": "08.99",
        "name": "Autres produits des industries extractives n.c.a."
    },
    {
        "code": "08.99.1",
        "name": "Bitumes et asphaltes naturels; asphaltites et roche asphaltique"
    },
    {
        "code": "08.99.10",
        "name": "Bitumes et asphaltes naturels; asphaltites et roche asphaltique"
    },
    {
        "code": "08.99.2",
        "name": "Pierres précieuses et semi-précieuses; diamants industriels, bruts "
    },
    {
        "code": "08.99.21",
        "name": "Pierres précieuses et semi-précieuses (à l'exclusion des diamants "
    },
    {
        "code": "08.99.22",
        "name": "Diamants  industriels,  bruts  ou  dégrossis;  pierre  ponce;  émeri; "
    },
    {
        "code": "08.99.29",
        "name": "Autres minéraux"
    },
    {
        "code": "09",
        "name": "Services de soutien aux industries extractives"
    },
    {
        "code": "09.1",
        "name": "Services de soutien à l'extraction d'hydrocarbures"
    },
    {
        "code": "09.10",
        "name": "Services de soutien à l'extraction d'hydrocarbures"
    },
    {
        "code": "09.10.1",
        "name": "Services de soutien à l'extraction d'hydrocarbures"
    },
    {
        "code": "09.10.11",
        "name": "Forages pour l'extraction d'hydrocarbures"
    },
    {
        "code": "09.10.12",
        "name": "Montage, réparation et démontage de tours de forage et services de "
    },
    {
        "code": "09.10.13",
        "name": "Liquéfaction ou regazéification du gaz naturel sur site à des fins de transport"
    },
    {
        "code": "09.9",
        "name": "Services de soutien aux autres industries extractives"
    },
    {
        "code": "09.90",
        "name": "Services de soutien aux autres industries extractives"
    },
    {
        "code": "09.90.1",
        "name": "Services de soutien aux autres industries extractives"
    },
    {
        "code": "09.90.11",
        "name": "Services de soutien à l'extraction de houille"
    },
    {
        "code": "09.90.19",
        "name": "Services de soutien aux autres industries extractives n.c.a."
    },
    {
        "code": "10",
        "name": "Produits des industries alimentaires"
    },
    {
        "code": "10.1",
        "name": "Viandes et produits à base de viandes"
    },
    {
        "code": "10.11",
        "name": "Viandes de boucherie et produits d'abattage"
    },
    {
        "code": "10.11.1",
        "name": "Viandes de boucherie, fraîches ou réfrigérées"
    },
    {
        "code": "10.11.11",
        "name": "Viande bovine, fraîche ou réfrigérée"
    },
    {
        "code": "10.11.12",
        "name": "Viande porcine, fraîche ou réfrigérée"
    },
    {
        "code": "10.11.13",
        "name": "Viande ovine, fraîche ou réfrigérée"
    },
    {
        "code": "10.11.14",
        "name": "Viande caprine, fraîche ou réfrigérée"
    },
    {
        "code": "10.11.15",
        "name": "Viande équine, fraîche, ou réfrigérée"
    },
    {
        "code": "10.11.16",
        "name": "Viande de camélidés, fraîche, ou réfrigérée"
    },
    {
        "code": "10.11.2",
        "name": "Abats comestibles d'animaux de boucherie, frais ou réfrigérés"
    },
    {
        "code": "10.11.20",
        "name": "Abats comestibles d'animaux de boucherie, frais ou réfrigérés"
    },
    {
        "code": "10.11.3",
        "name": "Viande et abats comestibles congelés ou surgelés; autres viandes "
    },
    {
        "code": "10.11.31",
        "name": "Viande bovine, congelée ou surgelée"
    },
    {
        "code": "10.11.32",
        "name": "Viande porcine, congelée ou surgelée"
    },
    {
        "code": "10.11.33",
        "name": "Viande ovine, congelée ou surgelée"
    },
    {
        "code": "10.11.34",
        "name": "Viande caprine, congelée ou surgelée"
    },
    {
        "code": "10.11.35",
        "name": "Viande équine, congelée ou surgelée"
    },
    {
        "code": "10.11.36",
        "name": "Viande de camélidés, congelée ou surgelée"
    },
    {
        "code": "10.11.37",
        "name": "Viande de lapin, congelée ou surgelée"
    },
    {
        "code": "10.11.39",
        "name": "Autres viandes et abats comestibles, frais, réfrigérés, congelés ou "
    },
    {
        "code": "10.11.4",
        "name": "Laine de délainage et cuirs bruts"
    },
    {
        "code": "10.11.41",
        "name": "Laine de délainage en suint, y compris laine lavée à dos"
    },
    {
        "code": "10.11.42",
        "name": "Cuirs et peaux bruts de bovins ou d'équidés, entiers"
    },
    {
        "code": "10.11.43",
        "name": "Autres cuirs et peaux bruts de bovins ou d'équidés"
    },
    {
        "code": "10.11.44",
        "name": "Cuirs et peaux bruts de moutons ou d'agneaux"
    },
    {
        "code": "10.11.45",
        "name": "Cuirs et peaux bruts de chèvres ou de chevreaux"
    },
    {
        "code": "10.11.5",
        "name": "Graisses d'animaux de boucherie"
    },
    {
        "code": "10.11.50",
        "name": "Graisses d'animaux de boucherie"
    },
    {
        "code": "10.11.6",
        "name": "Sous-produits animaux bruts, non comestibles"
    },
    {
        "code": "10.11.60",
        "name": "Sous-produits animaux bruts, non comestibles"
    },
    {
        "code": "10.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  préparation  de "
    },
    {
        "code": "10.11.99",
        "name": "Opérations sous-traitées intervenant dans la préparation de viandes "
    },
    {
        "code": "10.12",
        "name": "Viandes de volailles"
    },
    {
        "code": "10.12.1",
        "name": "Viandes de volailles, fraîches ou réfrigérées"
    },
    {
        "code": "10.12.10",
        "name": "Viandes de volailles, fraîches ou réfrigérées"
    },
    {
        "code": "10.12.2",
        "name": "Viandes de volailles, congelées ou surgelées"
    },
    {
        "code": "10.12.20",
        "name": "Viandes de volailles, congelées ou surgelées"
    },
    {
        "code": "10.12.3",
        "name": "Graisses de volailles"
    },
    {
        "code": "10.12.30",
        "name": "Graisses de volailles"
    },
    {
        "code": "10.12.4",
        "name": "Abats comestibles de volailles"
    },
    {
        "code": "10.12.40",
        "name": "Abats comestibles de volailles"
    },
    {
        "code": "10.12.5",
        "name": "Plumes et duvets"
    },
    {
        "code": "10.12.50",
        "name": "Plumes et duvets"
    },
    {
        "code": "10.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  préparation  de "
    },
    {
        "code": "10.12.99",
        "name": "Opérations sous-traitées intervenant dans la préparation de viandes "
    },
    {
        "code": "10.13",
        "name": "Produits à base de viandes"
    },
    {
        "code": "10.13.1",
        "name": "Conserves et préparations à base de viandes, abats et sang"
    },
    {
        "code": "10.13.11",
        "name": "Viandes et abats de porc découpés, salés, séchés ou fumés (bacon "
    },
    {
        "code": "10.13.12",
        "name": "Viandes de bœuf salées, séchées ou fumées"
    },
    {
        "code": "10.13.13",
        "name": "Autres  viandes  et  abats  comestibles  salés,  séchés  ou  fumés  (à "
    },
    {
        "code": "10.13.14",
        "name": "Saucisses et charcuteries similaires"
    },
    {
        "code": "10.13.15",
        "name": "Autres préparations et conserves à base de viandes, abats et sang, à "
    },
    {
        "code": "10.13.16",
        "name": "Farines, poudres et pellets de viandes, impropres à l’alimentation "
    },
    {
        "code": "10.13.9",
        "name": "Cuisson  et  autres  façons  de  préparations  à  base  de  viandes; "
    },
    {
        "code": "10.13.91",
        "name": "Cuisson et autres façons de préparations à base de viandes"
    },
    {
        "code": "10.13.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de produits "
    },
    {
        "code": "10.2",
        "name": "Préparations et conserves à base de poissons et de produits "
    },
    {
        "code": "10.20",
        "name": "Préparations et conserves à base de poissons et de produits de "
    },
    {
        "code": "10.20.1",
        "name": "Poissons, frais, réfrigérés, congelés ou surgelés"
    },
    {
        "code": "10.20.11",
        "name": "Filets de poissons et autres viandes de poisson (y compris hachées), "
    },
    {
        "code": "10.20.12",
        "name": "Foies et œufs de poissons, frais ou réfrigérés"
    },
    {
        "code": "10.20.13",
        "name": "Poissons, congelés ou surgelés"
    },
    {
        "code": "10.20.14",
        "name": "Filets de poissons, congelés ou surgelés"
    },
    {
        "code": "10.20.15",
        "name": "Viandes de poissons (y compris hachées), congelées ou surgelées"
    },
    {
        "code": "10.20.16",
        "name": "Foies et œufs de poissons, congelés ou surgelés"
    },
    {
        "code": "10.20.2",
        "name": "Autres préparations et conserves à base de poissons; caviar et ses "
    },
    {
        "code": "10.20.21",
        "name": "Filets de poissons séchés, salés, mais non fumés"
    },
    {
        "code": "10.20.22",
        "name": "Foies et œufs de poissons séchés, salés ou fumés; farines, poudres et "
    },
    {
        "code": "10.20.23",
        "name": "Poissons, séchés, salés ou non, ou en saumure"
    },
    {
        "code": "10.20.24",
        "name": "Poissons, y compris ﬁlets, fumés"
    },
    {
        "code": "10.20.25",
        "name": "Conserves de petits pélagiques"
    },
    {
        "code": "10.20.26",
        "name": "Conserves de gros pélagiques"
    },
    {
        "code": "10.20.27",
        "name": "Autres préparations et conserves à base de poissons, à l'exclusion "
    },
    {
        "code": "10.20.28",
        "name": "Caviar et ses succédanés"
    },
    {
        "code": "10.20.3",
        "name": "Crustacés, mollusques et autres invertébrés aquatiques, congelés, "
    },
    {
        "code": "10.20.31",
        "name": "Crustacés, congelés ou surgelés"
    },
    {
        "code": "10.20.32",
        "name": "Coquillages, congelés ou surgelés, séchés, salés ou fumés"
    },
    {
        "code": "10.20.33",
        "name": "Mollusques  céphalopodes,  congelés  ou  surgelés,  séchés,  salés  ou "
    },
    {
        "code": "10.20.34",
        "name": "Autres invertébrés aquatiques, congelés, surgelés, séchés, salés ou "
    },
    {
        "code": "10.20.35",
        "name": "Autres préparations et conserves à base de crustacés, mollusques et "
    },
    {
        "code": "10.20.4",
        "name": "Farines, poudres et pellets, impropres à l'alimentation humaine et "
    },
    {
        "code": "10.20.41",
        "name": "Farines,  poudres  et  pellets  de  poissons,  crustacés,  mollusques  ou "
    },
    {
        "code": "10.20.42",
        "name": "Autres sous-produits non comestibles à base de poissons, crustacés, "
    },
    {
        "code": "10.20.9",
        "name": "Fumage  et  autres  façons  de  préparations  à  base  de  poissons; "
    },
    {
        "code": "10.20.91",
        "name": "Fumage et autres façons de préparations et de traitements à base "
    },
    {
        "code": "10.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de "
    },
    {
        "code": "10.3",
        "name": "Produits à base de fruits et légumes"
    },
    {
        "code": "10.31",
        "name": "Préparations et conserves à base de pommes de terre"
    },
    {
        "code": "10.31.1",
        "name": "Préparations et conserves à base de pommes de terre"
    },
    {
        "code": "10.31.11",
        "name": "Pommes de terre, congelées ou surgelées"
    },
    {
        "code": "10.31.12",
        "name": "Pommes de terre, déshydratées, coupées ou non, mais sans autre "
    },
    {
        "code": "10.31.13",
        "name": "Pommes de terre déshydratées sous forme de farine, de poudre, de "
    },
    {
        "code": "10.31.14",
        "name": "Préparations et conserves à base de pommes de terre"
    },
    {
        "code": "10.31.9",
        "name": "Cuisson  et  autres  façons  de  préparations  à  base  de  pommes  de "
    },
    {
        "code": "10.31.91",
        "name": "Cuisson et autres façons de préparations à base de pommes de terre"
    },
    {
        "code": "10.31.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de "
    },
    {
        "code": "10.32",
        "name": "Jus de fruits et légumes"
    },
    {
        "code": "10.32.1",
        "name": "Jus de fruits et légumes"
    },
    {
        "code": "10.32.11",
        "name": "Jus de tomate"
    },
    {
        "code": "10.32.12",
        "name": "Jus d'orange"
    },
    {
        "code": "10.32.13",
        "name": "Jus de pamplemousse"
    },
    {
        "code": "10.32.14",
        "name": "Jus d'ananas"
    },
    {
        "code": "10.32.15",
        "name": "Jus de raisin"
    },
    {
        "code": "10.32.16",
        "name": "Jus de pomme"
    },
    {
        "code": "10.32.17",
        "name": "Mélanges de jus de fruits et légumes"
    },
    {
        "code": "10.32.19",
        "name": "Autres jus de fruits et légumes"
    },
    {
        "code": "10.32.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de jus de "
    },
    {
        "code": "10.32.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de  jus  de "
    },
    {
        "code": "10.33",
        "name": "Préparations et conserves à base de tomates"
    },
    {
        "code": "10.33.1",
        "name": "Préparations et conserves à base de tomates"
    },
    {
        "code": "10.33.11",
        "name": "Tomates traitées pour une conservation temporaire"
    },
    {
        "code": "10.33.12",
        "name": "Tomates séchées"
    },
    {
        "code": "10.33.13",
        "name": "Tomates coupés et emballés"
    },
    {
        "code": "10.33.14",
        "name": "Tomates appertisées, à l’exclusion de plats préparés"
    },
    {
        "code": "10.33.9",
        "name": "Cuisson  et  autres  façons  de  préparations  à  base  de  tomates; "
    },
    {
        "code": "10.33.91",
        "name": "Cuisson et autres façons de préparations et conserves à base de tomates"
    },
    {
        "code": "10.33.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  de "
    },
    {
        "code": "10.34",
        "name": "Préparation et conserves à base de légumes, sauf tomates"
    },
    {
        "code": "10.34.1",
        "name": "Préparation et conserves à base légumes, sauf tomates"
    },
    {
        "code": "10.34.11",
        "name": "Légumes congelés ou surgelés"
    },
    {
        "code": "10.34.12",
        "name": "Légumes traités pour une conservation temporaire"
    },
    {
        "code": "10.34.13",
        "name": "Légumes séchés"
    },
    {
        "code": "10.34.14",
        "name": "Légumes coupés et emballés"
    },
    {
        "code": "10.34.15",
        "name": "Haricots appertisés, à l’exclusion des plats préparés"
    },
    {
        "code": "10.34.16",
        "name": "Pois appertisés, à l’exclusion de plats préparés"
    },
    {
        "code": "10.34.17",
        "name": "Légumes,  appertisés  (à  l’exclusion  des  pommes  de  terre),  à "
    },
    {
        "code": "10.34.2",
        "name": "Déchets et sous-produits de légumes"
    },
    {
        "code": "10.34.20",
        "name": "Déchets et sous-produits de légumes"
    },
    {
        "code": "10.34.9",
        "name": "Cuisson  et  autres  façons  de  préparations  à  base  de  légumes; "
    },
    {
        "code": "10.34.91",
        "name": "Cuisson  et  autres  façons  de  préparations  et  conserves  à  base  de "
    },
    {
        "code": "10.34.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  de "
    },
    {
        "code": "10.39",
        "name": "Préparation et conserves à base de fruits"
    },
    {
        "code": "10.39.1",
        "name": "Préparation et conserves à base de fruits"
    },
    {
        "code": "10.39.11",
        "name": "Fruits crus ou cuits, congelés ou surgelés"
    },
    {
        "code": "10.39.12",
        "name": "Conﬁtures, gelées, compotes et purées de fruits"
    },
    {
        "code": "10.39.13",
        "name": "Fruits à coque grillés, salés ou autrement préparés"
    },
    {
        "code": "10.39.14",
        "name": "Fruits traités pour une conservation temporaire, impropres à une "
    },
    {
        "code": "10.39.19",
        "name": "Autres conserves et préparations à base de fruits"
    },
    {
        "code": "10.39.2",
        "name": "Déchets et sous-produits de fruits"
    },
    {
        "code": "10.39.20",
        "name": "Déchets et sous-produits de fruits"
    },
    {
        "code": "10.39.9",
        "name": "Cuisson et autres façons de préparations à base de fruits; opérations "
    },
    {
        "code": "10.39.91",
        "name": "Cuisson et autres façons de préparations à base de fruits"
    },
    {
        "code": "10.39.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  de "
    },
    {
        "code": "10.4",
        "name": "Huiles et graisses végétales animales"
    },
    {
        "code": "10.41",
        "name": "Huiles d'olives"
    },
    {
        "code": "10.41.1",
        "name": "Huiles d’olive, brute"
    },
    {
        "code": "10.41.11",
        "name": "Huile d’olive, brute"
    },
    {
        "code": "10.41.12",
        "name": "Huile de grignons d'olive, brute"
    },
    {
        "code": "10.41.2",
        "name": "Huiles d’olive et leurs fractions, rafﬁnées, mais non chimiquement"
    },
    {
        "code": "10.41.21",
        "name": "Huile  d’olive  et  ses  fractions,  rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.41.22",
        "name": "Huile de grignons d'olive, rafﬁnée"
    },
    {
        "code": "10.41.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  d’huiles "
    },
    {
        "code": "10.41.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d’huiles d'olives"
    },
    {
        "code": "10.42",
        "name": "huiles et graisses brutes"
    },
    {
        "code": "10.42.1",
        "name": "Huiles et graisses animales et leurs fractions, brutes"
    },
    {
        "code": "10.42.11",
        "name": "Stéarine solaire, huile de saindoux, oléostéarine, oléomargarine et huile "
    },
    {
        "code": "10.42.12",
        "name": "Graisses et huiles de poissons et de mammifères marins et leurs fractions"
    },
    {
        "code": "10.42.19",
        "name": "Autres  graisses  et  huiles  animales  et  leurs  fractions,  rafﬁnées ou"
    },
    {
        "code": "10.42.2",
        "name": "Huiles végétales, brutes"
    },
    {
        "code": "10.42.21",
        "name": "Huile de soja, brute"
    },
    {
        "code": "10.42.22",
        "name": "Huile d’arachide, brute"
    },
    {
        "code": "10.42.23",
        "name": "Huile de tournesol, brute"
    },
    {
        "code": "10.42.24",
        "name": "Huile de coton, brute"
    },
    {
        "code": "10.42.25",
        "name": "Huiles de navette, de colza et de moutarde, brutes"
    },
    {
        "code": "10.42.26",
        "name": "Huile de palme, brute"
    },
    {
        "code": "10.42.27",
        "name": "Huile de coprah, brute"
    },
    {
        "code": "10.42.29",
        "name": "Autres huiles végétales brutes"
    },
    {
        "code": "10.42.3",
        "name": "Linters de coton"
    },
    {
        "code": "10.42.30",
        "name": "Linters de coton"
    },
    {
        "code": "10.42.4",
        "name": "Tourteaux et autres résidus solides de graisses et d'huiles végétales; "
    },
    {
        "code": "10.42.41",
        "name": "Tourteaux et autres résidus solides de graisses et d’huiles végétales"
    },
    {
        "code": "10.42.42",
        "name": "Farines et poudres de graines ou de fruits oléagineux, à l’exclusion "
    },
    {
        "code": "10.42.9",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d'huiles et "
    },
    {
        "code": "10.42.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d’huiles et "
    },
    {
        "code": "10.43",
        "name": "Huiles et graisses rafﬁnées"
    },
    {
        "code": "10.43.1",
        "name": "Huiles rafﬁnées, à l'exclusion des résidus"
    },
    {
        "code": "10.43.11",
        "name": "Huile  de  soja  et  ses  fractions,  rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.43.12",
        "name": "Huile d’arachide et ses fractions, rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.43.13",
        "name": "Huile de tournesol et ses fractions, rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.43.14",
        "name": "Huile  de  coton  et  ses  fractions,  rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.43.15",
        "name": "Huiles  de  navette,  de  colza,  de  sésame  et  de  moutarde  et  leurs "
    },
    {
        "code": "10.43.16",
        "name": "Huile de palme et ses fractions, rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.43.17",
        "name": "Huile  de  coco  et  ses  fractions,  rafﬁnée, mais non chimiquement"
    },
    {
        "code": "10.43.18",
        "name": "Huiles rafﬁnées mélangées"
    },
    {
        "code": "10.43.19",
        "name": "Autres huiles et leurs fractions, rafﬁnées, mais non chimiquement"
    },
    {
        "code": "10.43.2",
        "name": "Huiles  et  graisses  animales  ou  végétales  et  leurs  fractions, "
    },
    {
        "code": "10.43.20",
        "name": "Huiles  et  graisses  animales  ou  végétales  et  leurs  fractions, "
    },
    {
        "code": "10.43.3",
        "name": "Cires végétales (à l’exclusion des triglycérides); dégras; résidus provenant "
    },
    {
        "code": "10.43.31",
        "name": "Cires végétales (à l’exclusion des triglycérides)"
    },
    {
        "code": "10.43.32",
        "name": "Dégras; résidus provenant du traitement de corps gras ou de cires "
    },
    {
        "code": "10.43.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  d’huiles "
    },
    {
        "code": "10.43.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d’huiles et "
    },
    {
        "code": "10.44",
        "name": "Margarines et graisses comestibles similaires"
    },
    {
        "code": "10.44.1",
        "name": "Margarines et graisses comestibles similaires"
    },
    {
        "code": "10.44.10",
        "name": "Margarines et graisses comestibles similaires"
    },
    {
        "code": "10.44.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  de "
    },
    {
        "code": "10.44.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  de "
    },
    {
        "code": "10.5",
        "name": "Produits laitiers"
    },
    {
        "code": "10.51",
        "name": "Produits laitiers et fromages"
    },
    {
        "code": "10.51.1",
        "name": "Lait liquide et crème de lait"
    },
    {
        "code": "10.51.11",
        "name": "Lait liquide"
    },
    {
        "code": "10.51.12",
        "name": "Lait  et  crème  contenant  plus  de  6%  de  matières  grasses,  non "
    },
    {
        "code": "10.51.2",
        "name": "Lait sec"
    },
    {
        "code": "10.51.21",
        "name": "Lait en poudre écrémé"
    },
    {
        "code": "10.51.22",
        "name": "Lait en poudre entier"
    },
    {
        "code": "10.51.3",
        "name": "Beurre et pâtes à tartiner laitières"
    },
    {
        "code": "10.51.30",
        "name": "Beurre et pâtes à tartiner laitières"
    },
    {
        "code": "10.51.4",
        "name": "Fromages"
    },
    {
        "code": "10.51.40",
        "name": "Fromages"
    },
    {
        "code": "10.51.5",
        "name": "Autres produits laitiers"
    },
    {
        "code": "10.51.51",
        "name": "Lait et crème, concentrés ou contenant des sucres ajoutés ou d'autres "
    },
    {
        "code": "10.51.52",
        "name": "Yaourts et autres produits lactés fermentés ou acidiﬁés"
    },
    {
        "code": "10.51.53",
        "name": "Caséine"
    },
    {
        "code": "10.51.54",
        "name": "Lactose et sirop de lactose"
    },
    {
        "code": "10.51.55",
        "name": "Lactosérum"
    },
    {
        "code": "10.51.56",
        "name": "Produits laitiers n.c.a."
    },
    {
        "code": "10.51.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de produits "
    },
    {
        "code": "10.51.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de produits "
    },
    {
        "code": "10.52",
        "name": "Glaces et sorbets"
    },
    {
        "code": "10.52.1",
        "name": "Glaces et sorbets"
    },
    {
        "code": "10.52.10",
        "name": "Glaces et sorbets"
    },
    {
        "code": "10.52.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de glaces "
    },
    {
        "code": "10.52.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de glaces "
    },
    {
        "code": "10.6",
        "name": "Produits du travail des grains et produits amylacés"
    },
    {
        "code": "10.61",
        "name": "Produits de Meunerie"
    },
    {
        "code": "10.61.1",
        "name": "Farines de céréales et de légumes; mélanges de ces farines"
    },
    {
        "code": "10.61.11",
        "name": "Farine de blé"
    },
    {
        "code": "10.61.12",
        "name": "Farines d’autres céréales"
    },
    {
        "code": "10.61.13",
        "name": "Farines de légumes"
    },
    {
        "code": "10.61.14",
        "name": "Farines préparées"
    },
    {
        "code": "10.61.2",
        "name": "Sons et autres résidus de meunerie"
    },
    {
        "code": "10.61.20",
        "name": "Sons et autres résidus de meunerie"
    },
    {
        "code": "10.61.9",
        "name": "Services de cuisson et de mouture"
    },
    {
        "code": "10.61.99",
        "name": "Services de cuisson et de mouture"
    },
    {
        "code": "10.62",
        "name": "Produits amylacés"
    },
    {
        "code": "10.62.1",
        "name": "Produits amylacés; sucres et sirops de sucre n.c.a."
    },
    {
        "code": "10.62.11",
        "name": "Amidons;  inuline;  gluten  de  blé;  dextrines  et  autres  amidons "
    },
    {
        "code": "10.62.12",
        "name": "Tapiocas et succédanés à base d’amidon, en ﬂocons ou en grains"
    },
    {
        "code": "10.62.13",
        "name": "Glucose  et  sirop  de  glucose;  fructose  et  sirop  de  fructose;  sucre "
    },
    {
        "code": "10.62.14",
        "name": "Huile de maïs"
    },
    {
        "code": "10.62.2",
        "name": "Résidus d'amidonnerie"
    },
    {
        "code": "10.62.20",
        "name": "Résidus d’amidonnerie"
    },
    {
        "code": "10.62.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de produits "
    },
    {
        "code": "10.62.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration de produits "
    },
    {
        "code": "10.69",
        "name": "Autres produits de travail des grains"
    },
    {
        "code": "10.69.1",
        "name": "Riz, semi-blanchi ou blanchi, décortiqué ou en brisures"
    },
    {
        "code": "10.69.11",
        "name": "Riz, décortiqué"
    },
    {
        "code": "10.69.12",
        "name": "Riz, semi-blanchi ou blanchi ou en brisures"
    },
    {
        "code": "10.69.3",
        "name": "Gruaux, semoules, pellets et autres produits à base de céréales"
    },
    {
        "code": "10.69.31",
        "name": "Gruaux et semoules de blé"
    },
    {
        "code": "10.69.32",
        "name": "Gruaux, semoules et pellets d'autres céréales n.c.a."
    },
    {
        "code": "10.69.33",
        "name": "Céréales pour petit-déjeuner et autres produits à base de céréales"
    },
    {
        "code": "10.69.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "10.69.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "10.7",
        "name": "Produits de boulangerie-pâtisserie et pâtes alimentaires"
    },
    {
        "code": "10.70",
        "name": "Pain; pâtisseries et viennoiseries fraîches"
    },
    {
        "code": "10.70.1",
        "name": "Pain; pâtisseries et viennoiseries fraîches"
    },
    {
        "code": "10.70.11",
        "name": "Pain frais"
    },
    {
        "code": "10.70.12",
        "name": "Pâtisseries et viennoiseries fraîches"
    },
    {
        "code": "10.70.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du pain et "
    },
    {
        "code": "10.70.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du pain et "
    },
    {
        "code": "10.73",
        "name": "Biscottes et biscuits; pâtisseries de conservation"
    },
    {
        "code": "10.73.1",
        "name": "Biscottes et biscuits; pâtisseries de conservation"
    },
    {
        "code": "10.73.11",
        "name": "Biscottes, toasts, pains grillés et produits grillés similaires"
    },
    {
        "code": "10.73.12",
        "name": "Pains d'épices; biscuits sucrés; gaufres et gaufrettes"
    },
    {
        "code": "10.73.19",
        "name": "Autres gâteaux secs ou de conservation"
    },
    {
        "code": "10.73.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de "
    },
    {
        "code": "10.73.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de biscottes, "
    },
    {
        "code": "10.74",
        "name": "Pâtes alimentaires et couscous"
    },
    {
        "code": "10.74.1",
        "name": "Macaronis, nouilles, couscous et autres produits similaires à base "
    },
    {
        "code": "10.74.11",
        "name": "Macaronis, nouilles et autres produits similaires à base de farine"
    },
    {
        "code": "10.74.12",
        "name": "Couscous"
    },
    {
        "code": "10.74.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de pâtes "
    },
    {
        "code": "10.74.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de  pâtes "
    },
    {
        "code": "10.8",
        "name": "Autres produits alimentaires"
    },
    {
        "code": "10.81",
        "name": "Sucre"
    },
    {
        "code": "10.81.1",
        "name": "Sucre de canne ou de betterave, brut ou rafﬁné; mélasses"
    },
    {
        "code": "10.81.11",
        "name": "Sucre de canne ou de betterave, brut, solide"
    },
    {
        "code": "10.81.12",
        "name": "Sucre de canne ou de betterave rafﬁné et saccharose chimiquement"
    },
    {
        "code": "10.81.13",
        "name": "Sucre de canne ou de betterave rafﬁné, contenant des arômes ou des"
    },
    {
        "code": "10.81.14",
        "name": "Mélasses"
    },
    {
        "code": "10.81.2",
        "name": "Pulpe de betteraves, bagasses et autres résidus de sucrerie"
    },
    {
        "code": "10.81.20",
        "name": "Pulpe de betteraves, bagasses et autres résidus de sucrerie"
    },
    {
        "code": "10.81.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du sucre"
    },
    {
        "code": "10.81.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du sucre"
    },
    {
        "code": "10.82",
        "name": "Cacao, chocolat et produits de conﬁserie"
    },
    {
        "code": "10.82.1",
        "name": "Cacao  en  masse,  dégraissé  ou  non,  beurre  de  cacao,  cacao  en "
    },
    {
        "code": "10.82.11",
        "name": "Cacao en masse, dégraissé ou non"
    },
    {
        "code": "10.82.12",
        "name": "Beurre de cacao"
    },
    {
        "code": "10.82.13",
        "name": "Cacao en poudre, sans sucre, ni autre édulcorant"
    },
    {
        "code": "10.82.14",
        "name": "Cacao en poudre, contenant du sucre ou de l'édulcorant"
    },
    {
        "code": "10.82.2",
        "name": "Chocolat et produits de conﬁserie"
    },
    {
        "code": "10.82.21",
        "name": "Chocolat et préparations à base de cacao (à l'exclusion du cacao en "
    },
    {
        "code": "10.82.22",
        "name": "Chocolat et préparations à base de cacao (à l'exclusion du cacao en "
    },
    {
        "code": "10.82.23",
        "name": "Halwa Chamia"
    },
    {
        "code": "10.82.24",
        "name": "Autres produits de conﬁserie divers (y compris le chocolat blanc) ne"
    },
    {
        "code": "10.82.25",
        "name": "Fruits conﬁts"
    },
    {
        "code": "10.82.3",
        "name": "Coques, pellicules et autres résidus de cacao"
    },
    {
        "code": "10.82.30",
        "name": "Coques, pellicules et autres résidus de cacao"
    },
    {
        "code": "10.82.9",
        "name": "Opérations sous-traitées intervenant dans l’élaboration de cacao, "
    },
    {
        "code": "10.82.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration de cacao, "
    },
    {
        "code": "10.83",
        "name": "Café et thé transformés"
    },
    {
        "code": "10.83.1",
        "name": "Café et thé transformés"
    },
    {
        "code": "10.83.11",
        "name": "Café, décaféiné ou torréﬁé"
    },
    {
        "code": "10.83.12",
        "name": "Succédanés de café; extraits, essences et concentrés de café ou de "
    },
    {
        "code": "10.83.13",
        "name": "Thé  vert  (non  fermenté),  thé  noir  (fermenté)  et  thé  partiellement "
    },
    {
        "code": "10.83.14",
        "name": "Extraits, essences, concentrés et préparations à base de thé ou de "
    },
    {
        "code": "10.83.15",
        "name": "Infusions"
    },
    {
        "code": "10.83.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du café et "
    },
    {
        "code": "10.83.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du café et "
    },
    {
        "code": "10.84",
        "name": "Condiments et assaisonnements"
    },
    {
        "code": "10.84.1",
        "name": "Vinaigres; sauces; mélanges de condiments; farines de moutarde "
    },
    {
        "code": "10.84.11",
        "name": "Vinaigres  et  succédanés  de  vinaigres  obtenus  à  partir  d'acide "
    },
    {
        "code": "10.84.12",
        "name": "Sauces à la tomate"
    },
    {
        "code": "10.84.13",
        "name": "Autres  sauces;  mélanges  de  condiments  et  assaisonnements "
    },
    {
        "code": "10.84.2",
        "name": "Épices préparées"
    },
    {
        "code": "10.84.21",
        "name": "Poivre (Piper spp.), préparé"
    },
    {
        "code": "10.84.22",
        "name": "Piments (Capsicum spp.) séchés, préparés"
    },
    {
        "code": "10.84.23",
        "name": "Piments (Capsicum spp.) moulus"
    },
    {
        "code": "10.84.24",
        "name": "Poivrons séchés, préparés"
    },
    {
        "code": "10.84.25",
        "name": "Harissa préparée"
    },
    {
        "code": "10.84.29",
        "name": "Cannelle, préparée; autres épices préparées"
    },
    {
        "code": "10.84.3",
        "name": "Sel de qualité alimentaire (rafﬁné)"
    },
    {
        "code": "10.84.30",
        "name": "Sel de qualité alimentaire (rafﬁné)"
    },
    {
        "code": "10.84.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de "
    },
    {
        "code": "10.84.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de "
    },
    {
        "code": "10.85",
        "name": "Plats préparés"
    },
    {
        "code": "10.85.1",
        "name": "Plats préparés"
    },
    {
        "code": "10.85.11",
        "name": "Plats préparés à base de viandes, d'abats ou de sang"
    },
    {
        "code": "10.85.12",
        "name": "Plats préparés à base de poissons, de crustacés et de mollusques"
    },
    {
        "code": "10.85.13",
        "name": "Plats préparés à base de légumes"
    },
    {
        "code": "10.85.14",
        "name": "Plats préparés à base de pâtes"
    },
    {
        "code": "10.85.19",
        "name": "Autres plats préparés (y compris les pizzas surgelées)"
    },
    {
        "code": "10.85.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de  plats "
    },
    {
        "code": "10.85.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de  plats "
    },
    {
        "code": "10.86",
        "name": "Aliments homogénéisés et diététiques"
    },
    {
        "code": "10.86.1",
        "name": "Aliments homogénéisés et diététiques"
    },
    {
        "code": "10.86.10",
        "name": "Aliments homogénéisés et diététiques"
    },
    {
        "code": "10.86.9",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d’aliments "
    },
    {
        "code": "10.86.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d’aliments "
    },
    {
        "code": "10.89",
        "name": "Autres produits alimentaires n.c.a."
    },
    {
        "code": "10.89.1",
        "name": "Soupes,  ovoproduits,  levures  et  autres  produits  alimentaires; "
    },
    {
        "code": "10.89.11",
        "name": "Soupes et potages"
    },
    {
        "code": "10.89.12",
        "name": "Œufs, en conserve, et jaunes d'œufs, frais et en conserve; œufs cuits, "
    },
    {
        "code": "10.89.13",
        "name": "Levures (vivantes ou mortes); autres microorganismes unicellulaires, "
    },
    {
        "code": "10.89.14",
        "name": "Extraits et jus de viandes, de poissons et d'invertébrés aquatiques"
    },
    {
        "code": "10.89.15",
        "name": "Sucs  et  extraits  végétaux;  matières  peptiques;  mucilages  et "
    },
    {
        "code": "10.89.19",
        "name": "Produits alimentaires divers n.c.a."
    },
    {
        "code": "10.89.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "10.89.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "10.9",
        "name": "Aliments pour animaux"
    },
    {
        "code": "10.91",
        "name": "Aliments pour animaux de ferme"
    },
    {
        "code": "10.91.1",
        "name": "Aliments  pour  animaux  de  ferme,  à  l'exclusion  des  fourrages "
    },
    {
        "code": "10.91.11",
        "name": "Aliments composés pour le bétail"
    },
    {
        "code": "10.91.12",
        "name": "Aliments composés pour les volailles et autres animaux de ferme"
    },
    {
        "code": "10.91.19",
        "name": "Autres aliments pour animaux de ferme, à l'exclusion des fourrages "
    },
    {
        "code": "10.91.2",
        "name": "Fourrages déshydratés (luzerne)"
    },
    {
        "code": "10.91.20",
        "name": "Fourrages déshydratés (luzerne)"
    },
    {
        "code": "10.91.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration d'aliments "
    },
    {
        "code": "10.91.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration d'aliments "
    },
    {
        "code": "10.92",
        "name": "Aliments pour animaux de compagnie"
    },
    {
        "code": "10.92.1",
        "name": "Aliments pour animaux de compagnie"
    },
    {
        "code": "10.92.10",
        "name": "Aliments pour animaux de compagnie"
    },
    {
        "code": "10.92.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration d'aliments "
    },
    {
        "code": "10.92.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration d'aliments "
    },
    {
        "code": "11",
        "name": "Boissons"
    },
    {
        "code": "11.0",
        "name": "Boissons"
    },
    {
        "code": "11.01",
        "name": "Boissons alcoolisées distillées"
    },
    {
        "code": "11.01.1",
        "name": "Boissons alcoolisées distillées"
    },
    {
        "code": "11.01.11",
        "name": "Boukha"
    },
    {
        "code": "11.01.19",
        "name": "Autres boissons alcoolisées distillées"
    },
    {
        "code": "11.01.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de boissons "
    },
    {
        "code": "11.01.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de boissons "
    },
    {
        "code": "11.02",
        "name": "Vins de raisin"
    },
    {
        "code": "11.02.1",
        "name": "Vins de raisin frais; moûts de raisins"
    },
    {
        "code": "11.02.11",
        "name": "Vins mousseux, issus de raisin frais"
    },
    {
        "code": "11.02.12",
        "name": "Vins de raisin frais, à l'exclusion des vins mousseux; moûts de raisins"
    },
    {
        "code": "11.02.2",
        "name": "Lie de vin; tartre"
    },
    {
        "code": "11.02.20",
        "name": "Lie de vin; tartre"
    },
    {
        "code": "11.02.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de vins de "
    },
    {
        "code": "11.02.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de vins de raisin"
    },
    {
        "code": "11.03",
        "name": "Cidre et autres vins de fruits"
    },
    {
        "code": "11.03.1",
        "name": "Autres boissons fermentées (cidre, poiré, hydromel); mélanges de "
    },
    {
        "code": "11.03.10",
        "name": "Autres boissons fermentées (cidre, poiré, hydromel); mélanges de "
    },
    {
        "code": "11.03.9",
        "name": "Opérations sous-traitées dans le cadre de l'élaboration du cidre et "
    },
    {
        "code": "11.03.99",
        "name": "Opérations sous-traitées dans le cadre de l'élaboration du cidre et "
    },
    {
        "code": "11.04",
        "name": "Autres boissons fermentées non distillées"
    },
    {
        "code": "11.04.1",
        "name": "Vermouths et autres vins de raisin frais aromatisés"
    },
    {
        "code": "11.04.10",
        "name": "Vermouths et autres vins de raisin frais aromatisés"
    },
    {
        "code": "11.04.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "11.04.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "11.05",
        "name": "Bière"
    },
    {
        "code": "11.05.1",
        "name": "Bière, à l'exclusion des résidus de brasserie"
    },
    {
        "code": "11.05.10",
        "name": "Bière, à l'exclusion des résidus de brasserie"
    },
    {
        "code": "11.05.2",
        "name": "Résidus de brasserie et de distillerie"
    },
    {
        "code": "11.05.20",
        "name": "Résidus de brasserie et de distillerie"
    },
    {
        "code": "11.05.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  de  la "
    },
    {
        "code": "11.05.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration de la bière"
    },
    {
        "code": "11.06",
        "name": "Malt"
    },
    {
        "code": "11.06.1",
        "name": "Malt"
    },
    {
        "code": "11.06.10",
        "name": "Malt"
    },
    {
        "code": "11.06.9",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du malt"
    },
    {
        "code": "11.06.99",
        "name": "Opérations sous-traitées intervenant dans l'élaboration du malt"
    },
    {
        "code": "11.07",
        "name": "Eaux minérales et gazeuses, non sucrées, ni aromatisées"
    },
    {
        "code": "11.07.1",
        "name": "Eaux minérales et gazeuses, non sucrées, ni aromatisées"
    },
    {
        "code": "11.07.11",
        "name": "Eaux minérales, non sucrées ni aromatisées"
    },
    {
        "code": "11.07.12",
        "name": "Eaux gazeuses, non sucrées ni aromatisées"
    },
    {
        "code": "11.07.9",
        "name": "Opérations sous-traitées intervenant dans l’élaboration d'eaux "
    },
    {
        "code": "11.07.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  d'eaux "
    },
    {
        "code": "11.08",
        "name": "Boissons rafraîchissantes"
    },
    {
        "code": "11.08.1",
        "name": "Boissons rafraîchissantes"
    },
    {
        "code": "11.08.10",
        "name": "Boissons rafraîchissantes"
    },
    {
        "code": "11.08.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l’élaboration  de "
    },
    {
        "code": "11.08.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration de boissons "
    },
    {
        "code": "12",
        "name": "Produits à base de tabac"
    },
    {
        "code": "12.0",
        "name": "Produits à base de tabac"
    },
    {
        "code": "12.00",
        "name": "Produits à base de tabac"
    },
    {
        "code": "12.00.1",
        "name": "Produits à base de tabac, à l’exclusion des déchets"
    },
    {
        "code": "12.00.11",
        "name": "Cigares,  cigarillos  et  cigarettes  contenant  du  tabac  ou  des "
    },
    {
        "code": "12.00.12",
        "name": "Tabac à priser"
    },
    {
        "code": "12.00.19",
        "name": "Autres tabacs et succédanés manufacturés; tabacs homogénéisés ou "
    },
    {
        "code": "12.00.2",
        "name": "Déchets de tabac"
    },
    {
        "code": "12.00.20",
        "name": "Déchets de tabac"
    },
    {
        "code": "12.00.9",
        "name": "Opérations sous-traitées intervenant dans l’élaboration de produits "
    },
    {
        "code": "12.00.99",
        "name": "Opérations sous-traitées intervenant dans l’élaboration de produits "
    },
    {
        "code": "13",
        "name": "Produits de l'industrie textile"
    },
    {
        "code": "13.1",
        "name": "Fils et ﬁlés"
    },
    {
        "code": "13.10",
        "name": "Fils et ﬁlés"
    },
    {
        "code": "13.10.1",
        "name": "Graisse de suint (y compris lanoline)"
    },
    {
        "code": "13.10.10",
        "name": "Graisse de suint (y compris lanoline)"
    },
    {
        "code": "13.10.2",
        "name": "Fibres textiles naturelles préparées"
    },
    {
        "code": "13.10.21",
        "name": "Soie grège (non moulinée)"
    },
    {
        "code": "13.10.22",
        "name": "Laine dégraissée ou carbonisée, non cardée ni peignée"
    },
    {
        "code": "13.10.23",
        "name": "Blousses de laine ou de poils ﬁns"
    },
    {
        "code": "13.10.24",
        "name": "Laine et poils ﬁns ou grossiers, cardés ou peignés"
    },
    {
        "code": "13.10.25",
        "name": "Coton, cardé ou peigné"
    },
    {
        "code": "13.10.26",
        "name": "Jute et autres ﬁbres textiles (à l'exclusion du lin, du chanvre commun"
    },
    {
        "code": "13.10.29",
        "name": "Autres ﬁbres textiles végétales, travaillées mais non ﬁlées"
    },
    {
        "code": "13.10.3",
        "name": "Fibres artiﬁcielles ou synthétiques discontinues préparées"
    },
    {
        "code": "13.10.31",
        "name": "Fibres  synthétiques  discontinues,  cardées,  peignées  ou  autrement "
    },
    {
        "code": "13.10.32",
        "name": "Fibres  artiﬁcielles discontinues, cardées, peignées ou autrement"
    },
    {
        "code": "13.10.4",
        "name": "Fils de soie ou de déchets de soie"
    },
    {
        "code": "13.10.40",
        "name": "Fils de soie ou de déchets de soie"
    },
    {
        "code": "13.10.5",
        "name": "Fils de laine conditionnés ou non pour la vente au détail; ﬁls de"
    },
    {
        "code": "13.10.50",
        "name": "Fils de laine conditionnés ou non pour la vente au détail; ﬁls de"
    },
    {
        "code": "13.10.6",
        "name": "Fils de coton; ﬁls à coudre de coton"
    },
    {
        "code": "13.10.61",
        "name": "Fils de coton (autres que ﬁls à coudre)"
    },
    {
        "code": "13.10.62",
        "name": "Fils à coudre de coton"
    },
    {
        "code": "13.10.7",
        "name": "Fils de ﬁbres textiles végétales autres que le coton (y compris le"
    },
    {
        "code": "13.10.71",
        "name": "Fils de lin"
    },
    {
        "code": "13.10.72",
        "name": "Fils de jute ou d'autres ﬁbres textiles libériennes; ﬁls d'autres ﬁbres"
    },
    {
        "code": "13.10.8",
        "name": "Fils de ﬁbres discontinues ou de ﬁlaments artiﬁciels ou synthétiques"
    },
    {
        "code": "13.10.81",
        "name": "Fils de ﬁlaments artiﬁciels ou synthétiques, multiples ou torsadés"
    },
    {
        "code": "13.10.82",
        "name": "Fils de ﬁbres synthétiques discontinues (autres que ﬁls à coudre),"
    },
    {
        "code": "13.10.83",
        "name": "Fils de ﬁbres synthétiques discontinues (autres que ﬁls à coudre),"
    },
    {
        "code": "13.10.84",
        "name": "Fils de ﬁbres discontinues artiﬁcielles (autres que ﬁls à coudre), non"
    },
    {
        "code": "13.10.85",
        "name": "Fils à coudre en ﬁbres et ﬁlaments artiﬁciels ou synthétiques"
    },
    {
        "code": "13.10.9",
        "name": "Efﬁlochés; préparation de ﬁbres textiles naturelles; opérations"
    },
    {
        "code": "13.10.91",
        "name": "Efﬁlochés de laine ou de poils ﬁns ou grossiers"
    },
    {
        "code": "13.10.92",
        "name": "Efﬁlochés de coton et autres déchets de coton"
    },
    {
        "code": "13.10.93",
        "name": "Préparation de ﬁbres textiles naturelles"
    },
    {
        "code": "13.10.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  ﬁls"
    },
    {
        "code": "13.2",
        "name": "Tissus"
    },
    {
        "code": "13.21",
        "name": "Tissus industriels"
    },
    {
        "code": "13.21.1",
        "name": "Tissus  (à  l'exclusion  des  tissus  spéciaux)  en  ﬁbres naturelles"
    },
    {
        "code": "13.21.11",
        "name": "Tissus de soie ou de déchets de soie"
    },
    {
        "code": "13.21.12",
        "name": "Tissus de laine cardée ou peignée, de poils ﬁns ou grossiers ou de"
    },
    {
        "code": "13.21.13",
        "name": "Tissus de lin"
    },
    {
        "code": "13.21.14",
        "name": "Tissus de jute et d'autres ﬁbres textiles libériennes (à l'exclusion du"
    },
    {
        "code": "13.21.19",
        "name": "Tissus d'autres ﬁbres textiles végétales; tissus de ﬁls de papier"
    },
    {
        "code": "13.21.2",
        "name": "Tissus de coton"
    },
    {
        "code": "13.21.20",
        "name": "Tissus de coton"
    },
    {
        "code": "13.21.3",
        "name": "Tissus (à l'exclusion des tissus spéciaux) en ﬁbres discontinues et"
    },
    {
        "code": "13.21.31",
        "name": "Tissus en ﬁls de ﬁlaments artiﬁciels ou synthétiques"
    },
    {
        "code": "13.21.32",
        "name": "Tissus en ﬁbres synthétiques discontinues"
    },
    {
        "code": "13.21.33",
        "name": "Tissus en ﬁbres artiﬁcielles discontinues"
    },
    {
        "code": "13.21.4",
        "name": "Velours, peluches, tissus éponge et autres tissus spéciaux"
    },
    {
        "code": "13.21.41",
        "name": "Velours et  peluches  tissés  et  tissus  de  chenille  (autres  que  tissus "
    },
    {
        "code": "13.21.42",
        "name": "Tissus éponge et étoffes bouclées similaires (autres qu'articles de "
    },
    {
        "code": "13.21.43",
        "name": "Autres tissus éponge et étoffes bouclées similaires (autres qu'articles "
    },
    {
        "code": "13.21.44",
        "name": "Tissus à point de gaze (autres qu'articles de rubanerie)"
    },
    {
        "code": "13.21.45",
        "name": "Surfaces textiles touffetées, autres que tapis"
    },
    {
        "code": "13.21.46",
        "name": "Tissus en ﬁties de verre (y compris articles de rubanerie)"
    },
    {
        "code": "13.21.5",
        "name": "Imitation de fourrure par tissage"
    },
    {
        "code": "13.21.50",
        "name": "Imitation de fourrure par tissage"
    },
    {
        "code": "13.21.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "13.21.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication industrielle "
    },
    {
        "code": "13.29",
        "name": "Tissus traditionnels"
    },
    {
        "code": "13.29.1",
        "name": "Tissus traditionnels"
    },
    {
        "code": "13.29.10",
        "name": "Tissus traditionnels"
    },
    {
        "code": "13.29.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tissus "
    },
    {
        "code": "13.29.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tissus "
    },
    {
        "code": "13.3",
        "name": "Ennoblissement textile"
    },
    {
        "code": "13.30",
        "name": "Ennoblissement textile"
    },
    {
        "code": "13.30.1",
        "name": "Apprêt de textiles"
    },
    {
        "code": "13.30.11",
        "name": "Blanchiment et teinture de ﬁls et de ﬁbres textiles"
    },
    {
        "code": "13.30.12",
        "name": "Blanchiment  de  tissus  et  d’articles  textiles  (y  compris  d’articles "
    },
    {
        "code": "13.30.13",
        "name": "Teinture  de  tissus  et  d’articles  textiles  (y  compris  d’articles "
    },
    {
        "code": "13.30.14",
        "name": "Impression  de  tissus  et  d’articles  textiles  (y  compris  d’articles "
    },
    {
        "code": "13.30.19",
        "name": "Autres ennoblissements de textiles et d’articles textiles (y compris "
    },
    {
        "code": "13.4",
        "name": "Tapis et moquettes"
    },
    {
        "code": "13.41",
        "name": "Tapis et moquettes, industriels"
    },
    {
        "code": "13.41.1",
        "name": "Tapis et moquettes"
    },
    {
        "code": "13.41.11",
        "name": "Tapis  et  autres  revêtements  de  sol  en  matières  textiles,  à  points "
    },
    {
        "code": "13.41.12",
        "name": "Tapis et autres revêtements de sol en matières textiles, tissés, non "
    },
    {
        "code": "13.41.13",
        "name": "Tapis et autres revêtements de sol en matières textiles, touffetés"
    },
    {
        "code": "13.41.19",
        "name": "Autres tapis et revêtements de sol en matières textiles (y compris en "
    },
    {
        "code": "13.41.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tapis "
    },
    {
        "code": "13.41.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tapis et "
    },
    {
        "code": "13.42",
        "name": "Tapis artisanaux"
    },
    {
        "code": "13.42.1",
        "name": "Tapis artisanaux"
    },
    {
        "code": "13.42.10",
        "name": "Tapis artisanaux"
    },
    {
        "code": "13.42.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tapis "
    },
    {
        "code": "13.42.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  tapis "
    },
    {
        "code": "13.9",
        "name": "Autres textiles"
    },
    {
        "code": "13.91",
        "name": "Étoffes à maille"
    },
    {
        "code": "13.91.1",
        "name": "Étoffes à maille"
    },
    {
        "code": "13.91.11",
        "name": "Velours, peluches et étoffes bouclées à maille"
    },
    {
        "code": "13.91.19",
        "name": "Autres étoffes à maille, y compris imitation de fourrure"
    },
    {
        "code": "13.91.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'étoffes "
    },
    {
        "code": "13.91.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'étoffes "
    },
    {
        "code": "13.92",
        "name": "Linge domestique, articles d'ameublement et de literie"
    },
    {
        "code": "13.92.1",
        "name": "Linge de maison, articles d'ameublement et de literie"
    },
    {
        "code": "13.92.11",
        "name": "Couvertures  industrielles,  à  l’exclusion  des  couvertures "
    },
    {
        "code": "13.92.12",
        "name": "Linge de lit"
    },
    {
        "code": "13.92.13",
        "name": "Linge de table"
    },
    {
        "code": "13.92.14",
        "name": "Linge de toilette ou de cuisine"
    },
    {
        "code": "13.92.15",
        "name": "Rideaux  (y  compris  doubles  rideaux)  et  stores  d’intérieur; "
    },
    {
        "code": "13.92.16",
        "name": "Articles  d’ameublement  n.c.a.;  assortiments  composés  de  pièces "
    },
    {
        "code": "13.92.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de linge "
    },
    {
        "code": "13.92.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  linge "
    },
    {
        "code": "13.93",
        "name": "Autres articles textiles confectionnés, sauf habillement"
    },
    {
        "code": "13.93.1",
        "name": "Autres articles textiles confectionnés"
    },
    {
        "code": "13.93.11",
        "name": "Sacs et sachets d’emballage"
    },
    {
        "code": "13.93.12",
        "name": "Bâches, bannes et stores d’extérieur; voiles pour bateaux, planches "
    },
    {
        "code": "13.93.13",
        "name": "Parachutes (y compris parapentes) et rotochutes, et leurs parties"
    },
    {
        "code": "13.93.14",
        "name": "Couettes,  édredons,  coussins,  poufs,  oreillers,  sacs  de  couchage, "
    },
    {
        "code": "13.93.19",
        "name": "Autres  articles  textiles  confectionnés  (y  compris  serpillières, "
    },
    {
        "code": "13.93.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "13.93.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "13.94",
        "name": "Ficelles, cordes et ﬁlets"
    },
    {
        "code": "13.94.1",
        "name": "Ficelles, cordes et ﬁlets, à l’exclusion des déchets"
    },
    {
        "code": "13.94.11",
        "name": "Ficelles,  cordes,  cordages  et  câbles,  de  jute  ou  d’autres  ﬁbres"
    },
    {
        "code": "13.94.12",
        "name": "Filets  à  mailles  nouées,  obtenus  à  partir  de  ﬁcelles, cordes ou"
    },
    {
        "code": "13.94.2",
        "name": "Chiffons, déchets de cordages et articles textiles usés"
    },
    {
        "code": "13.94.20",
        "name": "Chiffons, déchets de cordages et articles textiles usés"
    },
    {
        "code": "13.94.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de ﬁcelles,"
    },
    {
        "code": "13.94.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de ﬁcelles,"
    },
    {
        "code": "13.95",
        "name": "Non-tissés et articles en non-tissés, sauf habillement"
    },
    {
        "code": "13.95.1",
        "name": "Non-tissés et articles en non-tissés, sauf habillement"
    },
    {
        "code": "13.95.10",
        "name": "Non-tissés et articles en non-tissés, sauf habillement"
    },
    {
        "code": "13.95.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de non-"
    },
    {
        "code": "13.95.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  non-"
    },
    {
        "code": "13.96",
        "name": "Autres textiles techniques et industriels"
    },
    {
        "code": "13.96.1",
        "name": "Fils et ﬁlés métallisés; tissus en ﬁls métalliques et ﬁlés métallisés;"
    },
    {
        "code": "13.96.11",
        "name": "Fils et ﬁlés métallisés"
    },
    {
        "code": "13.96.12",
        "name": "Tissus en ﬁls métalliques et ﬁlés métallisés n.c.a."
    },
    {
        "code": "13.96.13",
        "name": "Fils  et  cordes  de  caoutchouc,  recouverts  de  textiles;  ﬁls textiles"
    },
    {
        "code": "13.96.14",
        "name": "Tissus imprégnés, enduits ou recouverts n.c.a."
    },
    {
        "code": "13.96.15",
        "name": "Nappes tramées pour pneumatiques obtenues à partir de ﬁls à haute"
    },
    {
        "code": "13.96.16",
        "name": "Produits et articles textiles pour usages techniques (y compris mèches "
    },
    {
        "code": "13.96.17",
        "name": "Articles de rubanerie; rubans sans trame encollés (bolducs); articles "
    },
    {
        "code": "13.96.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de textiles "
    },
    {
        "code": "13.96.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de textiles "
    },
    {
        "code": "13.97",
        "name": "Articles textiles traditionnels"
    },
    {
        "code": "13.97.1",
        "name": "Articles textiles traditionnels"
    },
    {
        "code": "13.97.10",
        "name": "Articles textiles traditionnels"
    },
    {
        "code": "13.99",
        "name": "Autres textiles n.c.a."
    },
    {
        "code": "13.99.1",
        "name": "Tulles,  dentelles  et  broderies;  ﬁls guipés et guipures; chenilles;"
    },
    {
        "code": "13.99.11",
        "name": "Tulles  et  tulles  bobinots,  à  l’exclusion  des  articles  tissés  ou  de "
    },
    {
        "code": "13.99.12",
        "name": "Broderies en pièces, bandes ou motifs"
    },
    {
        "code": "13.99.13",
        "name": "Feutres, enduits, recouverts ou stratiﬁés"
    },
    {
        "code": "13.99.14",
        "name": "Fibres  textiles  d’une  longueur  n’excédant  pas  5  mm  (tontisses), "
    },
    {
        "code": "13.99.15",
        "name": "Fils guipés et guipures; chenilles; chaînettes"
    },
    {
        "code": "13.99.16",
        "name": "Pièces textiles de capitonnage"
    },
    {
        "code": "13.99.19",
        "name": "Autres textiles et articles textiles n.c.a."
    },
    {
        "code": "13.99.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "13.99.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "14",
        "name": "Articles d'habillement"
    },
    {
        "code": "14.1",
        "name": "Articles d'habillement, à l'exclusion des fourrures"
    },
    {
        "code": "14.11",
        "name": "Vêtements en cuir"
    },
    {
        "code": "14.11.1",
        "name": "Vêtements en cuir naturel ou reconstitué"
    },
    {
        "code": "14.11.10",
        "name": "Vêtements en cuir naturel ou reconstitué"
    },
    {
        "code": "14.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "14.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "14.12",
        "name": "Vêtements de travail"
    },
    {
        "code": "14.12.1",
        "name": "Vêtements de travail pour hommes"
    },
    {
        "code": "14.12.11",
        "name": "Ensembles et vestes de travail pour hommes"
    },
    {
        "code": "14.12.12",
        "name": "Pantalons, salopettes, culottes et shorts de travail pour hommes"
    },
    {
        "code": "14.12.2",
        "name": "Vêtements de travail pour femmes"
    },
    {
        "code": "14.12.21",
        "name": "Ensembles et vestes de travail pour femmes"
    },
    {
        "code": "14.12.22",
        "name": "Pantalons, salopettes, culottes et shorts de travail pour femmes"
    },
    {
        "code": "14.12.3",
        "name": "Autres vêtements de travail"
    },
    {
        "code": "14.12.30",
        "name": "Autres vêtements de travail"
    },
    {
        "code": "14.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  confection  de "
    },
    {
        "code": "14.12.99",
        "name": "Opérations sous-traitées intervenant dans la confection de vêtements "
    },
    {
        "code": "14.13",
        "name": "Autres vêtements de dessus"
    },
    {
        "code": "14.13.1",
        "name": "Vêtements de dessus, en maille"
    },
    {
        "code": "14.13.11",
        "name": "Manteaux, pardessus, paletots, pèlerines, anoraks, coupe-vent, parkas "
    },
    {
        "code": "14.13.12",
        "name": "Costumes, complets, vestes, vestons, pantalons, salopettes, culottes "
    },
    {
        "code": "14.13.13",
        "name": "Manteaux,  pardessus,  paletots,  pèlerines,  anoraks,  coupe-vent, "
    },
    {
        "code": "14.13.14",
        "name": "Costumes-tailleurs,  ensembles,  vestes,  robes,  jupes,  pantalons, "
    },
    {
        "code": "14.13.2",
        "name": "Autres vêtements de dessus, pour hommes et garçonnets"
    },
    {
        "code": "14.13.21",
        "name": "Manteaux, pardessus, imperméables, paletots, pèlerines, anoraks, coupe-"
    },
    {
        "code": "14.13.22",
        "name": "Costumes et complets, en tissu, pour hommes et garçonnets"
    },
    {
        "code": "14.13.23",
        "name": "Vestes et vestons, en tissu, pour hommes et garçonnets"
    },
    {
        "code": "14.13.24",
        "name": "Pantalons, salopettes, culottes et shorts, en tissu, pour hommes et "
    },
    {
        "code": "14.13.3",
        "name": "Autres vêtements de dessus, pour femmes et ﬁllettes"
    },
    {
        "code": "14.13.31",
        "name": "Manteaux,  pardessus,  paletots,  pèlerines,  anoraks,  coupe-vent, "
    },
    {
        "code": "14.13.32",
        "name": "Costumes-tailleurs et ensembles, en tissu, pour femmes et ﬁllettes"
    },
    {
        "code": "14.13.33",
        "name": "Vestes et vestons, en tissu, pour femmes et ﬁllettes"
    },
    {
        "code": "14.13.34",
        "name": "Robes, jupes et jupes-culottes, en tissu, pour femmes et ﬁllettes"
    },
    {
        "code": "14.13.35",
        "name": "Pantalons, salopettes, culottes et shorts, en tissu, pour femmes et "
    },
    {
        "code": "14.13.4",
        "name": "Fripes"
    },
    {
        "code": "14.13.40",
        "name": "Fripes"
    },
    {
        "code": "14.13.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  confection  de "
    },
    {
        "code": "14.13.99",
        "name": "Opérations sous-traitées intervenant dans la confection de vêtements "
    },
    {
        "code": "14.15",
        "name": "Articles d'habillement traditionnels"
    },
    {
        "code": "14.15.1",
        "name": "Articles d'habillement traditionnels"
    },
    {
        "code": "14.15.10",
        "name": "Articles d'habillement traditionnels"
    },
    {
        "code": "14.16",
        "name": "Vêtements de dessous"
    },
    {
        "code": "14.16.1",
        "name": "Vêtements de dessous, en maille"
    },
    {
        "code": "14.16.11",
        "name": "Chemises  et  chemisettes,  en  maille,  pour  hommes  et "
    },
    {
        "code": "14.16.12",
        "name": "Slips, caleçons, gilets de corps, pyjamas, peignoirs, robes de chambre "
    },
    {
        "code": "14.16.13",
        "name": "Chemisiers et tuniques, en maille, pour femmes et ﬁllettes"
    },
    {
        "code": "14.16.14",
        "name": "Slips,  culottes,  jupons,  combinaisons,  chemises  de  nuit,  pyjamas, "
    },
    {
        "code": "14.16.2",
        "name": "Vêtements de dessous, en tissu"
    },
    {
        "code": "14.16.21",
        "name": "Chemises et chemisettes, en tissu, pour hommes et garçonnets"
    },
    {
        "code": "14.16.22",
        "name": "Maillots  et  autres  tricots  de  corps,  slips,  caleçons,  pyjamas, "
    },
    {
        "code": "14.16.23",
        "name": "Chemisiers et tuniques, en tissu, pour femmes et ﬁllettes"
    },
    {
        "code": "14.16.24",
        "name": "Maillots  et  autres  tricots  de  corps,  slips,  culottes,  jupons, "
    },
    {
        "code": "14.16.25",
        "name": "Soutien-gorge, corsets, gaines, bustiers, porte-jarretelles, jarretières "
    },
    {
        "code": "14.16.3",
        "name": "Tee-shirts et maillots de corps, en maille"
    },
    {
        "code": "14.16.30",
        "name": "Tee-shirts et maillots de corps, en maille"
    },
    {
        "code": "14.16.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  confection  de "
    },
    {
        "code": "14.16.99",
        "name": "Opérations sous-traitées intervenant dans la confection de vêtements "
    },
    {
        "code": "14.19",
        "name": "Autres vêtements et accessoires"
    },
    {
        "code": "14.19.1",
        "name": "Layette, survêtements et autres vêtements de sport, accessoires du "
    },
    {
        "code": "14.19.11",
        "name": "Layette et accessoires du vêtement, en maille"
    },
    {
        "code": "14.19.12",
        "name": "Survêtements, ensembles de ski, maillots de bains et autres vêtements "
    },
    {
        "code": "14.19.13",
        "name": "Gants, mitaines et mouﬂes, en maille"
    },
    {
        "code": "14.19.19",
        "name": "Autres accessoires de l'habillement et leurs parties, en maille"
    },
    {
        "code": "14.19.2",
        "name": "Layette, autres vêtements et accessoires de l’habillement, en tissu"
    },
    {
        "code": "14.19.21",
        "name": "Layette et accessoires de l’habillement, en tissu"
    },
    {
        "code": "14.19.22",
        "name": "Survêtements, ensembles de ski et maillots de bains; autres vêtements "
    },
    {
        "code": "14.19.23",
        "name": "Mouchoirs,  châles,  écharpes,  voiles,  cravates,  nœuds  papillons, "
    },
    {
        "code": "14.19.3",
        "name": "Accessoires  en  cuir;  vêtements  confectionnés  en  feutres  ou  en "
    },
    {
        "code": "14.19.31",
        "name": "Accessoires  de  l'habillement,  en  cuir  naturel  ou  reconstitué,  à "
    },
    {
        "code": "14.19.32",
        "name": "Vêtements  confectionnés  en  feutres,  en  non-tissés  ou  en  textiles "
    },
    {
        "code": "14.19.4",
        "name": "Articles de chapellerie"
    },
    {
        "code": "14.19.41",
        "name": "Cloches et formes pour chapeaux, capuchons de feutre; plateaux et "
    },
    {
        "code": "14.19.42",
        "name": "Chapeaux  et  autres  coiffures,  en  feutre,  en  matières  tressées  ou "
    },
    {
        "code": "14.19.43",
        "name": "Autres  coiffures,  à  l'exclusion  des  coiffures  en  caoutchouc  ou "
    },
    {
        "code": "14.19.9",
        "name": "Opérations sous-traitées intervenant dans la confection d'autres "
    },
    {
        "code": "14.19.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  confection  d'autres "
    },
    {
        "code": "14.2",
        "name": "Articles en fourrure"
    },
    {
        "code": "14.20",
        "name": "Articles en fourrure"
    },
    {
        "code": "14.20.1",
        "name": "Vêtements, accessoires et autres articles en fourrure, à l'exclusion "
    },
    {
        "code": "14.20.10",
        "name": "Vêtements, accessoires et autres articles en fourrure, à l'exclusion "
    },
    {
        "code": "14.20.9",
        "name": "Opérations sous-traitées intervenant dans la confection d’articles "
    },
    {
        "code": "14.20.99",
        "name": "Opérations sous-traitées intervenant dans la confection d’articles "
    },
    {
        "code": "14.3",
        "name": "Articles à maille"
    },
    {
        "code": "14.31",
        "name": "Articles chaussants à maille"
    },
    {
        "code": "14.31.1",
        "name": "Collants,  bas,  chaussettes  et  autres  articles  chaussants  à "
    },
    {
        "code": "14.31.10",
        "name": "Collants, bas, chaussettes et autres articles chaussants à maille"
    },
    {
        "code": "14.31.9",
        "name": "Opérations sous-traitées intervenant dans la confection d'articles "
    },
    {
        "code": "14.31.99",
        "name": "Opérations sous-traitées intervenant dans la confection d'articles "
    },
    {
        "code": "14.39",
        "name": "Autres articles à mailles"
    },
    {
        "code": "14.39.1",
        "name": "Pull-overs,  cardigans,  chandails,  gilets  et  articles  similaires  à "
    },
    {
        "code": "14.39.10",
        "name": "Pull-overs,  cardigans,  chandails,  gilets  et  articles  similaires  à "
    },
    {
        "code": "14.39.9",
        "name": "Opérations sous-traitées intervenant dans la confection d’autres "
    },
    {
        "code": "14.39.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  confection  d’autres "
    },
    {
        "code": "15",
        "name": "Cuir et articles en cuir"
    },
    {
        "code": "15.1",
        "name": "Cuirs et peaux tannés et apprêtés; articles de voyage et de "
    },
    {
        "code": "15.11",
        "name": "Cuirs et peaux tannés et apprêtés; peaux apprêtées et teintées"
    },
    {
        "code": "15.11.1",
        "name": "Peaux tannées ou apprêtées"
    },
    {
        "code": "15.11.10",
        "name": "Peaux tannées ou apprêtées"
    },
    {
        "code": "15.11.2",
        "name": "Cuirs et peaux chamoisés; cuirs et peaux vernis ou plaqués; cuirs "
    },
    {
        "code": "15.11.21",
        "name": "Cuirs et peaux chamoisés"
    },
    {
        "code": "15.11.22",
        "name": "Cuirs et peaux vernis ou plaqués; cuirs et peaux métallisés"
    },
    {
        "code": "15.11.3",
        "name": "Cuirs et peaux épilés de bovins et équidés"
    },
    {
        "code": "15.11.31",
        "name": "Cuirs et peaux épilés de bovins, entiers"
    },
    {
        "code": "15.11.32",
        "name": "Cuirs et peaux épilés de bovins, en parties"
    },
    {
        "code": "15.11.33",
        "name": "Cuirs et peaux épilés d’équidés"
    },
    {
        "code": "15.11.4",
        "name": "Cuirs et peaux épilés d’ovins, caprins et porcins"
    },
    {
        "code": "15.11.41",
        "name": "Cuirs et peaux délainés d’ovins"
    },
    {
        "code": "15.11.42",
        "name": "Cuirs et peaux épilés de caprins"
    },
    {
        "code": "15.11.43",
        "name": "Cuirs et peaux de porcins"
    },
    {
        "code": "15.11.5",
        "name": "Cuirs  et  peaux  d’autres  animaux;  cuirs  reconstitués  à  base  de "
    },
    {
        "code": "15.11.51",
        "name": "Cuirs et peaux épilés d’autres animaux"
    },
    {
        "code": "15.11.52",
        "name": "Cuirs reconstitués à base de cuir ou de ﬁbres de cuir"
    },
    {
        "code": "15.11.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de cuirs "
    },
    {
        "code": "15.11.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de cuirs et "
    },
    {
        "code": "15.12",
        "name": "Articles  de  voyage,  de  maroquinerie,  de  sellerie  et  de "
    },
    {
        "code": "15.12.1",
        "name": "Articles  de  sellerie  et  de  bourrellerie;  articles  de  voyage  et  de "
    },
    {
        "code": "15.12.11",
        "name": "Articles de sellerie et de bourrellerie pour tous animaux, en toutes "
    },
    {
        "code": "15.12.12",
        "name": "Sacs à mains en cuir naturel ou reconstitué"
    },
    {
        "code": "15.12.13",
        "name": "Autres  articles  de  voyage  et  de  maroquinerie,  en  cuir  naturel  ou "
    },
    {
        "code": "15.12.14",
        "name": "Bracelets de montre non métalliques et leurs parties"
    },
    {
        "code": "15.12.19",
        "name": "Autres  articles  en  cuir  naturel  ou  reconstitué  (y  compris  articles "
    },
    {
        "code": "15.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "15.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles de "
    },
    {
        "code": "15.2",
        "name": "Chaussures"
    },
    {
        "code": "15.21",
        "name": "Chaussures, industriels"
    },
    {
        "code": "15.21.1",
        "name": "Chaussures,  autres  que  chaussures  de  sport  et  de  protection  et "
    },
    {
        "code": "15.21.11",
        "name": "Chaussures étanches à semelles extérieures et dessus en caoutchouc "
    },
    {
        "code": "15.21.12",
        "name": "Chaussures à semelles extérieures et dessus en caoutchouc ou en "
    },
    {
        "code": "15.21.13",
        "name": "Chaussures  à  dessus  en  cuir,  autres  que  chaussures  de  sport, "
    },
    {
        "code": "15.21.14",
        "name": "Chaussures à dessus en textile, autres que chaussures de sport"
    },
    {
        "code": "15.21.2",
        "name": "Chaussures de sport"
    },
    {
        "code": "15.21.21",
        "name": "Chaussures de tennis, basket, gymnastique et similaires"
    },
    {
        "code": "15.21.29",
        "name": "Autres chaussures de sport, à l’exclusion des chaussures de ski et "
    },
    {
        "code": "15.21.3",
        "name": "Chaussures de protection et autres chaussures n.c.a."
    },
    {
        "code": "15.21.31",
        "name": "Chaussures comportant une coquille de protection en métal"
    },
    {
        "code": "15.21.32",
        "name": "Chaussures  en  bois,  chaussures  spéciales  diverses  et  autres "
    },
    {
        "code": "15.21.4",
        "name": "Parties de chaussures en cuir; semelles intérieures amovibles, "
    },
    {
        "code": "15.21.41",
        "name": "Tiges de chaussures en cuir"
    },
    {
        "code": "15.21.42",
        "name": "Autres parties de chaussures en cuir; semelles intérieures "
    },
    {
        "code": "15.21.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de chaussures"
    },
    {
        "code": "15.21.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "15.22",
        "name": "Chaussures artisanales"
    },
    {
        "code": "15.22.1",
        "name": "Chaussures artisanales"
    },
    {
        "code": "15.22.10",
        "name": "Chaussures artisanales"
    },
    {
        "code": "15.22.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "15.22.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "16",
        "name": "Bois, articles en bois et en liège, à l’exclusion des meubles; "
    },
    {
        "code": "16.1",
        "name": "Bois, sciés et rabotés"
    },
    {
        "code": "16.10",
        "name": "Bois, sciés et rabotés"
    },
    {
        "code": "16.10.1",
        "name": "Bois, sciés ou dédossés longitudinalement, tranchés ou déroulés, "
    },
    {
        "code": "16.10.10",
        "name": "Bois,  sciés  ou  dédossés  longitudinalement,  tranchés  ou  déroulés, "
    },
    {
        "code": "16.10.2",
        "name": "Bois, proﬁlés sur au moins une face; laine de bois; farine de bois;"
    },
    {
        "code": "16.10.21",
        "name": "Bois, proﬁlés sur au moins une face (y compris lambris et lames à"
    },
    {
        "code": "16.10.22",
        "name": "Laine de bois; farine de bois"
    },
    {
        "code": "16.10.23",
        "name": "Plaquettes et particules de bois"
    },
    {
        "code": "16.10.3",
        "name": "Bois  bruts;  traverses  de  chemins  de  fer  en  bois,  imprégnées  ou "
    },
    {
        "code": "16.10.31",
        "name": "Bois bruts, peints, teints ou traités à la créosote ou avec d'autres "
    },
    {
        "code": "16.10.32",
        "name": "Traverses de chemins de fer en bois, imprégnées"
    },
    {
        "code": "16.10.39",
        "name": "Autres bois bruts, y compris poteaux et piquets fendus"
    },
    {
        "code": "16.10.9",
        "name": "Séchage, imprégnation ou traitement chimique du bois; opérations "
    },
    {
        "code": "16.10.91",
        "name": "Séchage, imprégnation ou traitement chimique du bois"
    },
    {
        "code": "16.10.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  bois, "
    },
    {
        "code": "16.2",
        "name": "Articles en bois, liège, vannerie et sparterie"
    },
    {
        "code": "16.21",
        "name": "Panneaux et placages à base de bois"
    },
    {
        "code": "16.21.1",
        "name": "Bois  contreplaqués,  bois  plaqués  et  bois  stratiﬁés similaires;"
    },
    {
        "code": "16.21.11",
        "name": "Bois  contreplaqués,  bois  plaqués  et  bois  stratiﬁés similaires, en"
    },
    {
        "code": "16.21.12",
        "name": "Autres  bois  contreplaqués,  bois  plaqués  et  bois  stratiﬁés"
    },
    {
        "code": "16.21.13",
        "name": "Panneaux de particules et panneaux similaires en bois ou en autres "
    },
    {
        "code": "16.21.14",
        "name": "Panneaux de ﬁbres de bois ou d'autres matières ligneuses"
    },
    {
        "code": "16.21.2",
        "name": "Feuilles de placage; feuilles pour contreplaqués; bois densiﬁés"
    },
    {
        "code": "16.21.21",
        "name": "Feuilles de placage, feuilles pour contreplaqués et pour autres bois "
    },
    {
        "code": "16.21.22",
        "name": "Bois densiﬁés, en blocs, planches, lames ou proﬁlés"
    },
    {
        "code": "16.21.9",
        "name": "Finition de contreplaqués et panneaux à base de bois; opérations "
    },
    {
        "code": "16.21.91",
        "name": "Finition de contreplaqués et panneaux à base de bois"
    },
    {
        "code": "16.21.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "16.22",
        "name": "Parquets assemblés"
    },
    {
        "code": "16.22.1",
        "name": "Parquets assemblés en panneaux"
    },
    {
        "code": "16.22.10",
        "name": "Parquets assemblés en panneaux"
    },
    {
        "code": "16.22.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "16.22.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de parquets "
    },
    {
        "code": "16.23",
        "name": "Autres éléments de menuiserie et de charpente"
    },
    {
        "code": "16.23.1",
        "name": "Éléments  de  menuiserie  et  de  charpente  (à  l’exclusion  des "
    },
    {
        "code": "16.23.11",
        "name": "Fenêtres, portes-fenêtres, portes et huisseries, en bois"
    },
    {
        "code": "16.23.12",
        "name": "Coffrages pour le bétonnage, bardeaux, en bois"
    },
    {
        "code": "16.23.19",
        "name": "Éléments de menuiserie et de charpente, en bois, n.c.a."
    },
    {
        "code": "16.23.2",
        "name": "Bâtiments préfabriqués en bois"
    },
    {
        "code": "16.23.20",
        "name": "Bâtiments préfabriqués en bois"
    },
    {
        "code": "16.23.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "16.23.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "16.24",
        "name": "Emballages en bois"
    },
    {
        "code": "16.24.1",
        "name": "Emballages en bois"
    },
    {
        "code": "16.24.11",
        "name": "Palettes, caisses-palettes et autres plates-formes de manutention, en "
    },
    {
        "code": "16.24.12",
        "name": "Tonneaux et articles de tonnellerie en bois"
    },
    {
        "code": "16.24.13",
        "name": "Autres emballages en bois et leurs parties"
    },
    {
        "code": "16.24.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "16.24.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "16.25",
        "name": "Autres objets en bois, industriels"
    },
    {
        "code": "16.25.1",
        "name": "Autres objets en bois, industriels"
    },
    {
        "code": "16.25.11",
        "name": "Outils,  manches,  montures  d'outils,  de  balais  et  de  brosses,  en "
    },
    {
        "code": "16.25.12",
        "name": "Articles industriels en bois pour la table et la cuisine"
    },
    {
        "code": "16.25.13",
        "name": "Bois marqueté et incrusté, coffrets, écrins et étuis pour bijouterie ou "
    },
    {
        "code": "16.25.14",
        "name": "Cadres  en  bois  pour  tableaux,  photographies,  miroirs  ou  objets "
    },
    {
        "code": "16.25.9",
        "name": "Services  liés  à  la  fabrication  d'article  en  bois,  à  l'exclusion  de "
    },
    {
        "code": "16.25.91",
        "name": "Services liés à la fabrication d'article en bois, à l'exclusion de meubles"
    },
    {
        "code": "16.25.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "16.29",
        "name": "Objets  divers  en  bois,  objets  en  liège,  vannerie  et  sparterie, "
    },
    {
        "code": "16.29.1",
        "name": "Objets divers en bois, artisanaux"
    },
    {
        "code": "16.29.11",
        "name": "Bois marqueté et incrusté, coffrets, écrins et étuis pour bijouterie "
    },
    {
        "code": "16.29.19",
        "name": "Objets divers en bois, artisanaux"
    },
    {
        "code": "16.29.2",
        "name": "Objets en liège, vannerie et sparterie"
    },
    {
        "code": "16.29.21",
        "name": "Liège naturel, écroûté ou simplement équarri, ou en cubes, plaques, "
    },
    {
        "code": "16.29.22",
        "name": "Articles en liège naturel"
    },
    {
        "code": "16.29.23",
        "name": "Blocs,  plaques,  feuilles,  bandes,  dalles,  cylindres,  en  liège "
    },
    {
        "code": "16.29.24",
        "name": "Liège aggloméré; articles en liège aggloméré n.c.a."
    },
    {
        "code": "16.29.25",
        "name": "Tresses"
    },
    {
        "code": "16.29.29",
        "name": "Autres articles de sparterie et vannerie"
    },
    {
        "code": "17",
        "name": "Papier et carton"
    },
    {
        "code": "17.1",
        "name": "Pâte à papier, papier et carton"
    },
    {
        "code": "17.11",
        "name": "Pâte à papier"
    },
    {
        "code": "17.11.1",
        "name": "Pâtes de bois et d’autres matières ﬁbreuses cellulosiques"
    },
    {
        "code": "17.11.11",
        "name": "Pâtes chimiques de bois, à dissoudre"
    },
    {
        "code": "17.11.12",
        "name": "Pâtes  chimiques  de  bois,  à  la  soude  ou  au  sulfate,  autres  qu’à "
    },
    {
        "code": "17.11.13",
        "name": "Pâtes chimiques de bois, au bisulﬁte, autres qu’à dissoudre"
    },
    {
        "code": "17.11.14",
        "name": "Pâtes  mécaniques  de  bois;  pâtes  mi-chimiques  de  bois;  pâtes "
    },
    {
        "code": "17.11.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de la pâte à papier"
    },
    {
        "code": "17.11.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de la pâte "
    },
    {
        "code": "17.12",
        "name": "Papier et carton"
    },
    {
        "code": "17.12.1",
        "name": "Papier  journal,  papier  à  la  main  et  autres  papiers  et  cartons  à "
    },
    {
        "code": "17.12.11",
        "name": "Papier journal, en rouleaux ou en feuilles"
    },
    {
        "code": "17.12.12",
        "name": "Papier et carton à la main"
    },
    {
        "code": "17.12.13",
        "name": "Papier  et  carton  support  pour  surfaces  photosensibles, "
    },
    {
        "code": "17.12.14",
        "name": "Autres papiers et cartons à usage graphique"
    },
    {
        "code": "17.12.2",
        "name": "Papiers toilette, pour serviettes à démaquiller, pour essuie-mains "
    },
    {
        "code": "17.12.20",
        "name": "Papiers toilette, pour serviettes à démaquiller, pour essuie-mains ou "
    },
    {
        "code": "17.12.3",
        "name": "Papier pour carton ondulé"
    },
    {
        "code": "17.12.31",
        "name": "Papiers kraftliner, non blanchis, ni couchés, ni enduits"
    },
    {
        "code": "17.12.32",
        "name": "Papiers kraftliner blanchis et couchés ou enduits"
    },
    {
        "code": "17.12.33",
        "name": "Papiers ﬂuting mi-chimiques"
    },
    {
        "code": "17.12.34",
        "name": "Papiers ﬂuting recyclés et autres"
    },
    {
        "code": "17.12.35",
        "name": "Papiers testliner (ﬁbres récupérées)"
    },
    {
        "code": "17.12.4",
        "name": "Papiers non couchés, ni enduits"
    },
    {
        "code": "17.12.41",
        "name": "Papiers  kraft,  non  couchés,  ni  enduits;  papiers  kraft  pour  sacs, "
    },
    {
        "code": "17.12.42",
        "name": "Papier sulﬁte d’emballage et autres papiers non couchés, ni enduits"
    },
    {
        "code": "17.12.43",
        "name": "Papier et carton ﬁltre; papier feutre"
    },
    {
        "code": "17.12.44",
        "name": "Papier à cigarette, non découpé à format ou en cahiers ou tubes"
    },
    {
        "code": "17.12.5",
        "name": "Cartons non couchés, ni enduits (autres que les cartons utilisés "
    },
    {
        "code": "17.12.51",
        "name": "Cartons gris, non couchés, ni enduits"
    },
    {
        "code": "17.12.59",
        "name": "Autres cartons non couchés, ni enduits"
    },
    {
        "code": "17.12.6",
        "name": "Parchemin  végétal,  papiers  ingraissables,  papiers  calque  et "
    },
    {
        "code": "17.12.60",
        "name": "Parchemin végétal, papiers ingraissables, papiers calque et \"cristal\" "
    },
    {
        "code": "17.12.7",
        "name": "Papiers et cartons élaborés"
    },
    {
        "code": "17.12.71",
        "name": "Papiers et cartons assemblés, non couchés ni enduits à la surface, "
    },
    {
        "code": "17.12.72",
        "name": "Papiers et cartons, crêpés, plissés, gaufrés, estampés ou perforés"
    },
    {
        "code": "17.12.73",
        "name": "Papiers et cartons utilisés pour l'écriture, l'impression ou d'autres ﬁns"
    },
    {
        "code": "17.12.74",
        "name": "Papiers kraft (autres que ceux utilisés pour l'écriture, l'impression "
    },
    {
        "code": "17.12.75",
        "name": "Cartons kraft (autres que ceux utilisés pour l'écriture, l'impression "
    },
    {
        "code": "17.12.76",
        "name": "Papier carbone, papier autocopiant et autres papier pour duplication "
    },
    {
        "code": "17.12.77",
        "name": "Papiers, cartons, ouate de cellulose et nappes de ﬁbres de cellulose,"
    },
    {
        "code": "17.12.78",
        "name": "Cartons gris (autres que ceux utilisés pour l'écriture, l'impression "
    },
    {
        "code": "17.12.79",
        "name": "Autres cartons (autres que ceux utilisés pour l'écriture, l'impression "
    },
    {
        "code": "17.12.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de papiers "
    },
    {
        "code": "17.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de papiers "
    },
    {
        "code": "17.2",
        "name": "Articles en papier ou en carton"
    },
    {
        "code": "17.21",
        "name": "Papier et carton ondulés et emballages en papier ou en carton"
    },
    {
        "code": "17.21.1",
        "name": "Papier et carton ondulés et emballages en papier ou en carton"
    },
    {
        "code": "17.21.11",
        "name": "Carton ondulé, en rouleaux ou en feuilles"
    },
    {
        "code": "17.21.12",
        "name": "Sacs et sachets en papier (y.c. kraft)"
    },
    {
        "code": "17.21.13",
        "name": "Boîtes et caisses en carton ondulé"
    },
    {
        "code": "17.21.14",
        "name": "Boîtes et caisses pliantes en carton compact"
    },
    {
        "code": "17.21.15",
        "name": "Classeurs à courrier, boîtes de rangement et de classement et autres "
    },
    {
        "code": "17.21.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de papier "
    },
    {
        "code": "17.21.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de papier "
    },
    {
        "code": "17.22",
        "name": "Articles en papier à usage sanitaire ou domestique"
    },
    {
        "code": "17.22.1",
        "name": "Articles en papier à usage sanitaire ou domestique"
    },
    {
        "code": "17.22.11",
        "name": "Papier  hygiénique,  mouchoirs,  serviettes  à  démaquiller,  essuie-"
    },
    {
        "code": "17.22.12",
        "name": "Serviettes  et  tampons  hygiéniques,  couches  pour  bébés,  articles "
    },
    {
        "code": "17.22.13",
        "name": "Plats, assiettes, gobelets et articles similaires en papier ou en carton"
    },
    {
        "code": "17.22.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "17.22.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "17.23",
        "name": "Articles de papeterie"
    },
    {
        "code": "17.23.1",
        "name": "Articles de papeterie"
    },
    {
        "code": "17.23.11",
        "name": "Papier carbone, autocopiant et autre papier pour duplication et report; "
    },
    {
        "code": "17.23.12",
        "name": "Enveloppes, cartes-lettres, cartes postales non illustrées et cartes "
    },
    {
        "code": "17.23.13",
        "name": "Registres, livres comptables, carnets, formulaires et autres articles "
    },
    {
        "code": "17.23.14",
        "name": "Autres papiers et cartons utilisés pour l’écriture, l’impression ou "
    },
    {
        "code": "17.23.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "17.23.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "17.24",
        "name": "Papiers peints"
    },
    {
        "code": "17.24.1",
        "name": "Papiers peints"
    },
    {
        "code": "17.24.11",
        "name": "Papiers peints et revêtements muraux similaires; vitrophanies"
    },
    {
        "code": "17.24.12",
        "name": "Revêtements muraux textiles"
    },
    {
        "code": "17.24.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de papiers "
    },
    {
        "code": "17.24.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de papiers "
    },
    {
        "code": "17.29",
        "name": "Autres articles en papier ou en carton"
    },
    {
        "code": "17.29.1",
        "name": "Autres articles en papier ou en carton"
    },
    {
        "code": "17.29.11",
        "name": "Étiquettes en papier ou carton"
    },
    {
        "code": "17.29.12",
        "name": "Blocs et plaques ﬁltrantes, en pâte à papier"
    },
    {
        "code": "17.29.19",
        "name": "Papier  à  cigarette  ;  bobines,  canettes  et  busettes  et  supports "
    },
    {
        "code": "17.29.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "17.29.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "18",
        "name": "Travaux d’impression et de reproduction"
    },
    {
        "code": "18.1",
        "name": "Travaux d’impression et services connexes"
    },
    {
        "code": "18.11",
        "name": "Impression de journaux"
    },
    {
        "code": "18.11.1",
        "name": "Impression de journaux"
    },
    {
        "code": "18.11.10",
        "name": "Impression de journaux"
    },
    {
        "code": "18.12",
        "name": "Autres travaux d'impression"
    },
    {
        "code": "18.12.1",
        "name": "Autres travaux d'impression"
    },
    {
        "code": "18.12.11",
        "name": "Impression  de  timbres-poste,  timbres  ﬁscaux, titres de valeurs,"
    },
    {
        "code": "18.12.12",
        "name": "Impression  de  catalogues,  brochures,  afﬁches et autres imprimés"
    },
    {
        "code": "18.12.13",
        "name": "Impression de revues et périodiques paraissant moins de quatre fois "
    },
    {
        "code": "18.12.14",
        "name": "Impression de livres, de cartes géographiques, marines ou autres, "
    },
    {
        "code": "18.12.15",
        "name": "Impression d’étiquettes"
    },
    {
        "code": "18.12.16",
        "name": "Impression directe sur plastique, verre, métal, bois "
    },
    {
        "code": "18.12.19",
        "name": "Autres travaux d’impression n.c.a."
    },
    {
        "code": "18.13",
        "name": "Travaux de préparation d'impression"
    },
    {
        "code": "18.13.1",
        "name": "Travaux de préparation d'impression"
    },
    {
        "code": "18.13.10",
        "name": "Travaux de préparation d'impression"
    },
    {
        "code": "18.13.2",
        "name": "Plaques ou cylindres d'impression et autres supports d'impression"
    },
    {
        "code": "18.13.20",
        "name": "Plaques ou cylindres d'impression et autres supports d'impression"
    },
    {
        "code": "18.13.3",
        "name": "Travaux auxiliaires de l'impression"
    },
    {
        "code": "18.13.30",
        "name": "Travaux auxiliaires de l'impression"
    },
    {
        "code": "18.14",
        "name": "Reliure et services connexes"
    },
    {
        "code": "18.14.1",
        "name": "Reliure et services connexes"
    },
    {
        "code": "18.14.10",
        "name": "Reliure et services connexes"
    },
    {
        "code": "18.2",
        "name": "Reproduction d'enregistrements"
    },
    {
        "code": "18.20",
        "name": "Reproduction d'enregistrements"
    },
    {
        "code": "18.20.1",
        "name": "Reproduction d'enregistrements sonores"
    },
    {
        "code": "18.20.10",
        "name": "Reproduction d'enregistrements sonores"
    },
    {
        "code": "18.20.2",
        "name": "Reproduction d'enregistrements vidéo"
    },
    {
        "code": "18.20.20",
        "name": "Reproduction d'enregistrements vidéo"
    },
    {
        "code": "18.20.3",
        "name": "Reproduction d'enregistrements informatiques"
    },
    {
        "code": "18.20.30",
        "name": "Reproduction d'enregistrements informatiques"
    },
    {
        "code": "19",
        "name": "Produits de la cokéfaction et du rafﬁnage"
    },
    {
        "code": "19.1",
        "name": "Produits de la cokéfaction"
    },
    {
        "code": "19.10",
        "name": "Produits de la cokéfaction"
    },
    {
        "code": "19.10.1",
        "name": "Cokes et semi-cokes de houille, de lignite ou de tourbe; charbon "
    },
    {
        "code": "19.10.10",
        "name": "Cokes et semi-cokes de houille, de lignite ou de tourbe; charbon de "
    },
    {
        "code": "19.10.2",
        "name": "Goudrons  de  houille,  de  lignite  ou  de  tourbe;  autres  goudrons "
    },
    {
        "code": "19.10.20",
        "name": "Goudrons  de  houille,  de  lignite  ou  de  tourbe;  autres  goudrons "
    },
    {
        "code": "19.10.3",
        "name": "Brai et coke de brai"
    },
    {
        "code": "19.10.30",
        "name": "Brai et coke de brai"
    },
    {
        "code": "19.10.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "19.10.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "19.2",
        "name": "Produits du rafﬁnage du pétrole"
    },
    {
        "code": "19.20",
        "name": "Produits du rafﬁnage du pétrole"
    },
    {
        "code": "19.20.1",
        "name": "Briquettes, boulets et combustibles solides similaires"
    },
    {
        "code": "19.20.11",
        "name": "Briquettes,  boulets  et  combustibles  solides  similaires  obtenus  à "
    },
    {
        "code": "19.20.12",
        "name": "Briquettes,  boulets  et  combustibles  solides  similaires  obtenus  à "
    },
    {
        "code": "19.20.13",
        "name": "Briquettes,  boulets  et  combustibles  solides  similaires  obtenus  à "
    },
    {
        "code": "19.20.2",
        "name": "Huile et gaz combustibles; huiles lubriﬁantes"
    },
    {
        "code": "19.20.21",
        "name": "Essences pour moteurs, y compris essences d’aviation"
    },
    {
        "code": "19.20.22",
        "name": "Carburéacteurs (de type essence)"
    },
    {
        "code": "19.20.23",
        "name": "Huiles de pétrole légères, fractions légères n.c.a."
    },
    {
        "code": "19.20.24",
        "name": "Kérosène"
    },
    {
        "code": "19.20.25",
        "name": "Carburéacteurs de type kérosène"
    },
    {
        "code": "19.20.26",
        "name": "Gazoles"
    },
    {
        "code": "19.20.27",
        "name": "Huiles de pétrole moyennes; fractions moyennes n.c.a."
    },
    {
        "code": "19.20.28",
        "name": "Fiouls lourds n.c.a."
    },
    {
        "code": "19.20.29",
        "name": "Huiles de pétrole lubriﬁantes; fractions lourdes n.c.a."
    },
    {
        "code": "19.20.3",
        "name": "Gaz de pétrole et autres hydrocarbures gazeux, à l’exclusion du "
    },
    {
        "code": "19.20.31",
        "name": "Butane et propane, liquéﬁés"
    },
    {
        "code": "19.20.32",
        "name": "Éthylène, propylène, butylène, butadiène et autres gaz de pétrole ou "
    },
    {
        "code": "19.20.4",
        "name": "Autres produits pétroliers"
    },
    {
        "code": "19.20.41",
        "name": "Vaseline; parafﬁne; cires de pétrole et autres"
    },
    {
        "code": "19.20.42",
        "name": "Coke de pétrole; bitume de pétrole et autres résidus des huiles de "
    },
    {
        "code": "19.20.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "19.20.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "20",
        "name": "Produits chimiques"
    },
    {
        "code": "20.1",
        "name": "Produits  chimiques  de  base,  engrais  et  produits  azotés, "
    },
    {
        "code": "20.11",
        "name": "Gaz industriels"
    },
    {
        "code": "20.11.1",
        "name": "Gaz industriels"
    },
    {
        "code": "20.11.11",
        "name": "Hydrogène, argon, gaz rares, azote et oxygène"
    },
    {
        "code": "20.11.12",
        "name": "Dioxyde de carbone et autres composés oxygénés inorganiques des "
    },
    {
        "code": "20.11.13",
        "name": "Air liquide ou comprimé"
    },
    {
        "code": "20.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  gaz "
    },
    {
        "code": "20.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  gaz "
    },
    {
        "code": "20.12",
        "name": "Colorants, pigments et agents tannants"
    },
    {
        "code": "20.12.1",
        "name": "Oxydes, peroxydes et hydroxydes"
    },
    {
        "code": "20.12.11",
        "name": "Oxyde et peroxyde de zinc; oxydes de titane"
    },
    {
        "code": "20.12.12",
        "name": "Oxydes et hydroxydes de chrome, manganèse, plomb et cuivre"
    },
    {
        "code": "20.12.19",
        "name": "Autres oxydes, peroxydes et hydroxydes métalliques"
    },
    {
        "code": "20.12.2",
        "name": "Extraits tannants; tanins naturels et dérivés; matières colorantes "
    },
    {
        "code": "20.12.21",
        "name": "Matières colorantes organiques synthétiques et préparations à base "
    },
    {
        "code": "20.12.22",
        "name": "Extraits tannants d'origine végétale; tannins et leurs sels, éthers, "
    },
    {
        "code": "20.12.23",
        "name": "Produits  tannants  organiques  synthétiques;  produits  tannants "
    },
    {
        "code": "20.12.24",
        "name": "Matières  colorantes  n.c.a.;  produits  inorganiques  utilisés  comme "
    },
    {
        "code": "20.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.12.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.13",
        "name": "Autres produits chimiques inorganiques de base"
    },
    {
        "code": "20.13.1",
        "name": "Uranium et plutonium enrichis; uranium et thorium appauvris; "
    },
    {
        "code": "20.13.11",
        "name": "Uranium et plutonium enrichis et leurs composés"
    },
    {
        "code": "20.13.12",
        "name": "Uranium et thorium appauvris et leurs composés"
    },
    {
        "code": "20.13.13",
        "name": "Autres  éléments,  isotopes  et  composés  radioactifs;  alliages, "
    },
    {
        "code": "20.13.14",
        "name": "Éléments combustibles, non irradiés, pour réacteurs nucléaires"
    },
    {
        "code": "20.13.2",
        "name": "Éléments chimiques n.c.a.; acides et composés inorganiques"
    },
    {
        "code": "20.13.21",
        "name": "Métalloïdes"
    },
    {
        "code": "20.13.22",
        "name": "Dérivés halogénés, oxyhalogénés ou sulfurés des éléments non métalliques"
    },
    {
        "code": "20.13.23",
        "name": "Métaux  alcalins  ou  alcalino-terreux;  métaux  de  terres  rares, "
    },
    {
        "code": "20.13.24",
        "name": "Oxydes,  hydroxydes  et  peroxydes;  hydrazine  et  hydroxylamine  et "
    },
    {
        "code": "20.13.25",
        "name": "Acide chlorhydrique"
    },
    {
        "code": "20.13.26",
        "name": "Acide ﬂuorhydrique"
    },
    {
        "code": "20.13.27",
        "name": "Acide sulfurique"
    },
    {
        "code": "20.13.28",
        "name": "Acide phosphorique"
    },
    {
        "code": "20.13.29",
        "name": "Autres chlorures d’hydrogène; oléum; pentaoxyde de diphosphore; "
    },
    {
        "code": "20.13.3",
        "name": "Halogénures métalliques; hypochlorites, chlorates et perchlorates"
    },
    {
        "code": "20.13.31",
        "name": "Halogénures métalliques"
    },
    {
        "code": "20.13.32",
        "name": "Hypochlorites, chlorates, perchlorates"
    },
    {
        "code": "20.13.4",
        "name": "Sulfures et sulfates; nitrates, phosphates et carbonates"
    },
    {
        "code": "20.13.41",
        "name": "Sulfures, sulﬁtes et sulfates"
    },
    {
        "code": "20.13.42",
        "name": "Carbonates"
    },
    {
        "code": "20.13.43",
        "name": "Tripolyphosphate de soude"
    },
    {
        "code": "20.13.44",
        "name": "Phosphate bicalcique"
    },
    {
        "code": "20.13.49",
        "name": "Autres phosphinates, phosphonates, phosphates, polyphosphates et "
    },
    {
        "code": "20.13.5",
        "name": "Autres sels métalliques"
    },
    {
        "code": "20.13.51",
        "name": "Sels  des  acides  oxométalliques  ou  peroxométalliques;  métaux "
    },
    {
        "code": "20.13.52",
        "name": "Composés inorganiques n.c.a., y compris eau distillée; amalgames "
    },
    {
        "code": "20.13.6",
        "name": "Autres produits chimiques inorganiques de base"
    },
    {
        "code": "20.13.61",
        "name": "Isotopes n.c.a. et leurs composés (y compris eau lourde)"
    },
    {
        "code": "20.13.62",
        "name": "Cyanures, oxycyanures et cyanures complexes; fulminates, cyanates "
    },
    {
        "code": "20.13.63",
        "name": "Peroxyde d'hydrogène"
    },
    {
        "code": "20.13.64",
        "name": "Phosphures, carbures, hydrures, nitrures, azotures, siliciures et borures"
    },
    {
        "code": "20.13.65",
        "name": "Composés des métaux des terres rares, de l'yttrium ou du scandium"
    },
    {
        "code": "20.13.66",
        "name": "Pyrites de fer grillées"
    },
    {
        "code": "20.13.67",
        "name": "Quartz piézo-électrique; autres pierres précieuses et semi-précieuses "
    },
    {
        "code": "20.13.68",
        "name": "Soufre rafﬁné"
    },
    {
        "code": "20.13.69",
        "name": "Autre  sulfure,  à  l’exclusion  du  soufre  sublimé,  précipité  ou "
    },
    {
        "code": "20.13.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "20.13.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "20.14",
        "name": "Autres produits chimiques organiques de base"
    },
    {
        "code": "20.14.1",
        "name": "Hydrocarbures et leurs dérivés"
    },
    {
        "code": "20.14.11",
        "name": "Hydrocarbures acycliques"
    },
    {
        "code": "20.14.12",
        "name": "Hydrocarbures cycliques"
    },
    {
        "code": "20.14.13",
        "name": "Dérivés chlorés des hydrocarbures acycliques"
    },
    {
        "code": "20.14.14",
        "name": "Dérivés sulfonés, nitrés ou nitrosés des hydrocarbures, halogénés ou non"
    },
    {
        "code": "20.14.19",
        "name": "Autres dérivés des hydrocarbures"
    },
    {
        "code": "20.14.2",
        "name": "Alcools,  phénols,  phénols-alcools  et  leurs  dérivés  halogénés, "
    },
    {
        "code": "20.14.21",
        "name": "Alcools gras industriels"
    },
    {
        "code": "20.14.22",
        "name": "Monoalcools"
    },
    {
        "code": "20.14.23",
        "name": "Diols, polyalcools, alcools cycliques et leurs dérivés"
    },
    {
        "code": "20.14.24",
        "name": "Phénols; phénols-alcools et dérivés des phénols"
    },
    {
        "code": "20.14.3",
        "name": "Acides monocarboxyliques gras industriels; acides carboxyliques "
    },
    {
        "code": "20.14.31",
        "name": "Acides monocarboxyliques gras industriels; huiles acides de rafﬁnage"
    },
    {
        "code": "20.14.32",
        "name": "Acides monocarboxyliques acycliques saturés et leurs dérivés"
    },
    {
        "code": "20.14.33",
        "name": "Acides monocarboxyliques, cyclaniques, cycléniques ou cycloterpéniques, "
    },
    {
        "code": "20.14.34",
        "name": "Acides polycarboxyliques et carboxyliques aromatiques, contenant "
    },
    {
        "code": "20.14.4",
        "name": "Composés organiques à fonction azotée"
    },
    {
        "code": "20.14.41",
        "name": "Composés à fonction amine"
    },
    {
        "code": "20.14.42",
        "name": "Composés aminés à fonction oxygénée, à l'exclusion de la lysine et "
    },
    {
        "code": "20.14.43",
        "name": "Uréines;  composés  à  fonction  carboxyimide  ou  nitrile  et  leurs "
    },
    {
        "code": "20.14.44",
        "name": "Composés à autres fonctions azotées"
    },
    {
        "code": "20.14.5",
        "name": "Thiocomposés  organiques  et  autres  composés  organo-"
    },
    {
        "code": "20.14.51",
        "name": "Thiocomposés organiques et autres composés organo-inorganiques"
    },
    {
        "code": "20.14.52",
        "name": "Composés hétérocycliques n.c.a.; acides nucléiques et leurs sels"
    },
    {
        "code": "20.14.53",
        "name": "Esters phosphoriques et leurs sels, esters d'autres acides inorganiques "
    },
    {
        "code": "20.14.6",
        "name": "Éthers,  peroxydes  organiques,  époxydes,  acétals,  hémiacétals; "
    },
    {
        "code": "20.14.61",
        "name": "Composés à fonction aldéhyde"
    },
    {
        "code": "20.14.62",
        "name": "Composés à fonction cétone et quinone"
    },
    {
        "code": "20.14.63",
        "name": "Éthers,  peroxydes  organiques,  époxydes,  acétals,  hémiacétals  et "
    },
    {
        "code": "20.14.64",
        "name": "Enzymes et autres composés organiques n.c.a."
    },
    {
        "code": "20.14.7",
        "name": "Produits chimiques organiques de base divers"
    },
    {
        "code": "20.14.71",
        "name": "Dérivés de produits végétaux ou résineux"
    },
    {
        "code": "20.14.72",
        "name": "Charbon de bois"
    },
    {
        "code": "20.14.73",
        "name": "Huiles et autres produits de la distillation des goudrons et produits "
    },
    {
        "code": "20.14.74",
        "name": "Alcool éthylique non dénaturé d'une teneur d'alcool par volume de "
    },
    {
        "code": "80",
        "name": "% ou plus"
    },
    {
        "code": "20.14.75",
        "name": "Alcool éthylique et autres alcools, dénaturés"
    },
    {
        "code": "20.14.8",
        "name": "Lessives résiduaires de l'industrie de la pâte à papier, à l'exclusion "
    },
    {
        "code": "20.14.80",
        "name": "Lessives résiduaires de l'industrie de la pâte à papier, à l'exclusion "
    },
    {
        "code": "20.14.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "20.14.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "20.15",
        "name": "Engrais et composés azotés"
    },
    {
        "code": "20.15.1",
        "name": "Acide nitrique; acides sulfonitriques; ammoniac"
    },
    {
        "code": "20.15.10",
        "name": "Acide nitrique; acides sulfonitriques; ammoniac"
    },
    {
        "code": "20.15.2",
        "name": "Chlorure d'ammonium; nitrites"
    },
    {
        "code": "20.15.20",
        "name": "Chlorure d'ammonium; nitrites"
    },
    {
        "code": "20.15.3",
        "name": "Engrais azotés, minéraux ou chimiques"
    },
    {
        "code": "20.15.31",
        "name": "Urée"
    },
    {
        "code": "20.15.32",
        "name": "Sulfate d'ammonium"
    },
    {
        "code": "20.15.33",
        "name": "Nitrate d'ammonium"
    },
    {
        "code": "20.15.34",
        "name": "Sels  doubles  et  mélanges  de  nitrate  de  calcium  et  de  nitrate "
    },
    {
        "code": "20.15.35",
        "name": "Mélanges  de  nitrate  d'ammonium  et  de  carbonate  de  calcium  ou "
    },
    {
        "code": "20.15.39",
        "name": "Autres engrais et mélanges azotés"
    },
    {
        "code": "20.15.4",
        "name": "Engrais phosphatés, minéraux ou chimiques"
    },
    {
        "code": "20.15.41",
        "name": "Hyperphosphate"
    },
    {
        "code": "20.15.42",
        "name": "Super phosphate simple et double"
    },
    {
        "code": "20.15.43",
        "name": "Super phosphate triple"
    },
    {
        "code": "20.15.44",
        "name": "Monoammonium phosphaté"
    },
    {
        "code": "20.15.45",
        "name": "Diammonium phosphaté"
    },
    {
        "code": "20.15.49",
        "name": "Autres engrais phosphatés"
    },
    {
        "code": "20.15.5",
        "name": "Engrais potassiques, minéraux ou chimiques"
    },
    {
        "code": "20.15.51",
        "name": "Chlorure de potassium (muriate de potasse)"
    },
    {
        "code": "20.15.52",
        "name": "Sulfate de potassium (sulfate de potasse)"
    },
    {
        "code": "20.15.59",
        "name": "Autres engrais potassiques"
    },
    {
        "code": "20.15.6",
        "name": "Nitrate de sodium"
    },
    {
        "code": "20.15.60",
        "name": "Nitrate de sodium"
    },
    {
        "code": "20.15.7",
        "name": "Engrais n.c.a."
    },
    {
        "code": "20.15.71",
        "name": "Engrais ternaires: azote, phosphore et potassium"
    },
    {
        "code": "20.15.72",
        "name": "Hydrogénoorthophosphate   de    diammonium     (phosphate "
    },
    {
        "code": "20.15.73",
        "name": "Phosphate monoammonique"
    },
    {
        "code": "20.15.74",
        "name": "Engrais binaires: azote et phosphore"
    },
    {
        "code": "20.15.75",
        "name": "Engrais binaires: phosphore et potassium"
    },
    {
        "code": "20.15.76",
        "name": "Nitrates de potassium"
    },
    {
        "code": "20.15.79",
        "name": "Engrais minéraux ou chimiques contenant au moins deux éléments "
    },
    {
        "code": "20.15.8",
        "name": "Engrais d'origine animale ou végétale n.c.a."
    },
    {
        "code": "20.15.80",
        "name": "Engrais d'origine animale ou végétale n.c.a."
    },
    {
        "code": "20.15.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'engrais "
    },
    {
        "code": "20.15.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'engrais "
    },
    {
        "code": "20.16",
        "name": "Matières plastiques sous formes primaires"
    },
    {
        "code": "20.16.1",
        "name": "Polymères de l'éthylène, sous formes primaires"
    },
    {
        "code": "20.16.10",
        "name": "Polymères de l'éthylène, sous formes primaires"
    },
    {
        "code": "20.16.2",
        "name": "Polymères du styrène, sous formes primaires"
    },
    {
        "code": "20.16.20",
        "name": "Polymères du styrène, sous formes primaires"
    },
    {
        "code": "20.16.3",
        "name": "Polymères du chlorure de vinyle ou d'autres oléﬁnes halogénées,"
    },
    {
        "code": "20.16.30",
        "name": "Polymères  du  chlorure  de  vinyle  ou  d'autres  oléﬁnes halogénées,"
    },
    {
        "code": "20.16.4",
        "name": "Polyacétals,  autres  polyéthers  et  résines  époxydes,  sous  formes "
    },
    {
        "code": "20.16.40",
        "name": "Polyacétals,  autres  polyéthers  et  résines  époxydes,  sous  formes "
    },
    {
        "code": "20.16.5",
        "name": "Autres  matières  plastiques  sous  formes  primaires;  échangeurs "
    },
    {
        "code": "20.16.51",
        "name": "Polymères  de  propylène  ou  d'autres  oléﬁnes, sous formes"
    },
    {
        "code": "20.16.52",
        "name": "Polymères d'acétate de vinyle ou d'autres esters de vinyle et autres "
    },
    {
        "code": "20.16.53",
        "name": "Polymères acryliques, sous formes primaires"
    },
    {
        "code": "20.16.54",
        "name": "Polyamides, sous formes primaires"
    },
    {
        "code": "20.16.55",
        "name": "Résines uréiques, résines de thio-urée et résines mélaminiques, sous "
    },
    {
        "code": "20.16.56",
        "name": "Autres résines aminiques et phénoliques, polyuréthanes, sous formes "
    },
    {
        "code": "20.16.57",
        "name": "Silicones, sous formes primaires"
    },
    {
        "code": "20.16.59",
        "name": "Autres matières plastiques, sous formes primaires, n.c.a."
    },
    {
        "code": "20.16.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.16.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de matières "
    },
    {
        "code": "20.17",
        "name": "Caoutchouc synthétique sous formes primaires"
    },
    {
        "code": "20.17.1",
        "name": "Caoutchouc synthétique sous formes primaires"
    },
    {
        "code": "20.17.10",
        "name": "Caoutchouc synthétique sous formes primaires"
    },
    {
        "code": "20.17.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.17.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.2",
        "name": "Pesticides et autres produits agrochimiques"
    },
    {
        "code": "20.20",
        "name": "Pesticides et autres produits agrochimiques"
    },
    {
        "code": "20.20.1",
        "name": "Pesticides et autres produits agrochimiques"
    },
    {
        "code": "20.20.11",
        "name": "Insecticides"
    },
    {
        "code": "20.20.12",
        "name": "Herbicides"
    },
    {
        "code": "20.20.13",
        "name": "Inhibiteurs de germination et régulateurs de croissance"
    },
    {
        "code": "20.20.14",
        "name": "Désinfectants"
    },
    {
        "code": "20.20.15",
        "name": "Fongicides"
    },
    {
        "code": "20.20.19",
        "name": "Autres pesticides et autres produits agrochimiques"
    },
    {
        "code": "20.20.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.3",
        "name": "Peintures,  vernis  et  revêtements  similaires,  encres "
    },
    {
        "code": "20.30",
        "name": "Peintures, vernis et revêtements similaires, encres d'imprimerie "
    },
    {
        "code": "20.30.1",
        "name": "Peintures et vernis à base de polymères"
    },
    {
        "code": "20.30.11",
        "name": "Peintures et vernis à base de polymères acryliques ou vinyliques, en "
    },
    {
        "code": "20.30.12",
        "name": "Peintures et vernis à base de polyesters et de polymères acryliques "
    },
    {
        "code": "20.30.2",
        "name": "Autres peintures et vernis et produits connexes; couleurs ﬁnes et"
    },
    {
        "code": "20.30.21",
        "name": "Pigments, opaciﬁantset couleurs préparés, compositions vitriﬁables,"
    },
    {
        "code": "20.30.22",
        "name": "Autres peintures et vernis; siccatifs préparés"
    },
    {
        "code": "20.30.23",
        "name": "Couleurs  ﬁnes pour la peinture artistique, l'enseignement, la"
    },
    {
        "code": "20.30.24",
        "name": "Encres d'imprimerie"
    },
    {
        "code": "20.30.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de peintures, "
    },
    {
        "code": "20.30.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.4",
        "name": "Savons, produits d’entretien et parfums"
    },
    {
        "code": "20.41",
        "name": "Savons, détergents et produits d’entretien"
    },
    {
        "code": "20.41.1",
        "name": "Glycérine"
    },
    {
        "code": "20.41.10",
        "name": "Glycérine"
    },
    {
        "code": "20.41.2",
        "name": "Agents tensioactifs, à l'exclusion du savon"
    },
    {
        "code": "20.41.20",
        "name": "Agents tensioactifs, à l'exclusion du savon"
    },
    {
        "code": "20.41.3",
        "name": "Savons et produits de nettoyage"
    },
    {
        "code": "20.41.31",
        "name": "Savons,  produits  et  préparations  tensioactifs  à  usage  de  savon; "
    },
    {
        "code": "20.41.32",
        "name": "Détergents et produits de nettoyage"
    },
    {
        "code": "20.41.4",
        "name": "Préparations odoriférantes et cires"
    },
    {
        "code": "20.41.41",
        "name": "Préparations pour parfumer et désodoriser des locaux"
    },
    {
        "code": "20.41.42",
        "name": "Cires artiﬁcielles et préparées"
    },
    {
        "code": "20.41.43",
        "name": "Cirages  et  crèmes  pour  chaussures,  encaustiques,  brillants  pour "
    },
    {
        "code": "20.41.44",
        "name": "Pâtes et poudres à récurer et préparations similaires"
    },
    {
        "code": "20.41.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de savons, "
    },
    {
        "code": "20.41.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de savons, "
    },
    {
        "code": "20.42",
        "name": "Parfums et produits pour la toilette"
    },
    {
        "code": "20.42.1",
        "name": "Parfums et produits pour la toilette"
    },
    {
        "code": "20.42.11",
        "name": "Parfums et eaux de toilette"
    },
    {
        "code": "20.42.12",
        "name": "Produits pour les lèvres et les yeux"
    },
    {
        "code": "20.42.13",
        "name": "Préparations pour manucures et pédicures"
    },
    {
        "code": "20.42.14",
        "name": "Poudres, fards, fonds de teint"
    },
    {
        "code": "20.42.15",
        "name": "Produits de beauté, de maquillage et de soin de la peau (y compris "
    },
    {
        "code": "20.42.16",
        "name": "Shampooings, laques pour cheveux, produits pour permanentes et "
    },
    {
        "code": "20.42.17",
        "name": "Lotions et autres préparations capillaires n.c.a."
    },
    {
        "code": "20.42.18",
        "name": "Préparation pour l'hygiène buccale ou dentaire (y compris les poudres "
    },
    {
        "code": "20.42.19",
        "name": "Préparations  pour  le  rasage;  déodorants  corporels  et  produits "
    },
    {
        "code": "20.42.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.42.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de parfums "
    },
    {
        "code": "20.5",
        "name": "Autres produits chimiques"
    },
    {
        "code": "20.51",
        "name": "Produits explosifs"
    },
    {
        "code": "20.51.1",
        "name": "Produits explosifs préparés; mèches de sûreté; amorces et capsules "
    },
    {
        "code": "20.51.11",
        "name": "Poudres propulsives et produits explosifs préparés"
    },
    {
        "code": "20.51.12",
        "name": "Mèches  de  sûreté;  cordeaux  détonants,  capsules  fulminantes; "
    },
    {
        "code": "20.51.13",
        "name": "Feux d'artiﬁce"
    },
    {
        "code": "20.51.14",
        "name": "Fusées de signalisation ou paragrêle, pétards et autres articles de "
    },
    {
        "code": "20.51.2",
        "name": "Allumettes"
    },
    {
        "code": "20.51.20",
        "name": "Allumettes"
    },
    {
        "code": "20.51.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.51.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "20.52",
        "name": "Colles"
    },
    {
        "code": "20.52.1",
        "name": "Colles"
    },
    {
        "code": "20.52.10",
        "name": "Colles"
    },
    {
        "code": "20.52.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "20.52.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de colles"
    },
    {
        "code": "20.53",
        "name": "Huiles essentielles"
    },
    {
        "code": "20.53.1",
        "name": "Huiles essentielles"
    },
    {
        "code": "20.53.10",
        "name": "Huiles essentielles"
    },
    {
        "code": "20.53.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'huiles "
    },
    {
        "code": "20.53.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'huiles "
    },
    {
        "code": "20.59",
        "name": "Autres produits chimiques n.c.a."
    },
    {
        "code": "20.59.1",
        "name": "Plaques  et  ﬁlms photographiques, ﬁlms à  développement"
    },
    {
        "code": "20.59.11",
        "name": "Plaques  et  ﬁlms photographiques et ﬁlms à  développement"
    },
    {
        "code": "20.59.12",
        "name": "Emulsions  sensibilisatrices  pour  usages  photographiques; "
    },
    {
        "code": "20.59.2",
        "name": "Graisses et huiles animales ou végétales modiﬁées chimiquement;"
    },
    {
        "code": "20.59.20",
        "name": "Graisses et huiles animales ou végétales modiﬁées chimiquement;"
    },
    {
        "code": "20.59.3",
        "name": "Encres de bureau et de dessin et autres encres"
    },
    {
        "code": "20.59.30",
        "name": "Encres de bureau et de dessin et autres encres"
    },
    {
        "code": "20.59.4",
        "name": "Préparations lubriﬁantes; additifs; préparations antigel"
    },
    {
        "code": "20.59.41",
        "name": "Lubriﬁants spéciaux"
    },
    {
        "code": "20.59.42",
        "name": "Préparations  antidétonantes;  additifs  pour  huiles  minérales  et "
    },
    {
        "code": "20.59.43",
        "name": "Liquides  pour  freins  hydrauliques;  préparations  antigel  et  pour "
    },
    {
        "code": "20.59.5",
        "name": "Produits chimiques divers"
    },
    {
        "code": "20.59.51",
        "name": "Peptones, autres substances peptiques et dérivés n.c.a.; poudre de "
    },
    {
        "code": "20.59.52",
        "name": "Pâtes  à  modeler;  cire  dentaire  et  autres  préparations  pour  l'art "
    },
    {
        "code": "20.59.53",
        "name": "Éléments chimiques dopés en vue de leur utilisation en électronique, "
    },
    {
        "code": "20.59.54",
        "name": "Charbons actifs"
    },
    {
        "code": "20.59.55",
        "name": "Agents  d'apprêt  ou  de  finissage,  accélérateurs  de  teinture "
    },
    {
        "code": "20.59.56",
        "name": "Préparations  pour  le  décapage;  ﬂux à souder ou à braser;"
    },
    {
        "code": "20.59.57",
        "name": "Liants  préparés  pour  moules  ou  noyaux  de  fonderie;  produits "
    },
    {
        "code": "20.59.59",
        "name": "Autres produits chimiques divers n.c.a."
    },
    {
        "code": "20.59.6",
        "name": "Gélatines et leurs dérivés, y compris lactalbumines"
    },
    {
        "code": "20.59.60",
        "name": "Gélatines et leurs dérivés, y compris lactalbumines"
    },
    {
        "code": "20.59.9",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "20.59.99",
        "name": "Opérations  sous-traitées  intervenant  dans  l'élaboration  d'autres "
    },
    {
        "code": "20.6",
        "name": "Fibres artiﬁcielles ou synthétiques"
    },
    {
        "code": "20.60",
        "name": "Fibres artiﬁcielles ou synthétiques"
    },
    {
        "code": "20.60.1",
        "name": "Fibres synthétiques"
    },
    {
        "code": "20.60.11",
        "name": "Fibres synthétiques discontinues, non cardées, ni peignées et câbles "
    },
    {
        "code": "20.60.12",
        "name": "Fils de ﬁlaments de haute ténacité en polyamides et polyesters"
    },
    {
        "code": "20.60.13",
        "name": "Autres ﬁls de monoﬁlaments synthétiques"
    },
    {
        "code": "20.60.14",
        "name": "Monoﬁlaments  synthétiques; lames   en  matières  textiles"
    },
    {
        "code": "20.60.2",
        "name": "Fibres artiﬁcielles"
    },
    {
        "code": "20.60.21",
        "name": "Fibres artiﬁcielles discontinues, non cardées, ni peignées et câbles"
    },
    {
        "code": "20.60.22",
        "name": "Fils de ﬁlaments de haute ténacité en viscose"
    },
    {
        "code": "20.60.23",
        "name": "Autres ﬁls de monoﬁlaments artiﬁciels"
    },
    {
        "code": "20.60.24",
        "name": "Monoﬁlaments artiﬁciels; lames en matières textiles artiﬁcielles"
    },
    {
        "code": "20.60.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de ﬁbres"
    },
    {
        "code": "20.60.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de ﬁbres"
    },
    {
        "code": "21",
        "name": "Produits  pharmaceutiques  de  base  et  préparations "
    },
    {
        "code": "21.1",
        "name": "Produits pharmaceutiques de base"
    },
    {
        "code": "21.10",
        "name": "Produits pharmaceutiques de base"
    },
    {
        "code": "21.10.1",
        "name": "Acide salicylique et ses dérivés, sels et esters"
    },
    {
        "code": "21.10.10",
        "name": "Acide salicylique et ses dérivés, sels et esters"
    },
    {
        "code": "21.10.2",
        "name": "Lysine,  acide  glutamique  et  leurs  sels;  sels  et  hydroxydes "
    },
    {
        "code": "21.10.20",
        "name": "Lysine, acide glutamique et leurs sels; sels et hydroxydes d'ammonium "
    },
    {
        "code": "21.10.3",
        "name": "Lactones n.c.a., composés hétérocycliques à hétéroatome(s) d'azote "
    },
    {
        "code": "21.10.31",
        "name": "Lactones  n.c.a.,  composés  hétérocycliques  à  hétéroatome(s)  d'azote "
    },
    {
        "code": "21.10.32",
        "name": "Sulfonamides"
    },
    {
        "code": "21.10.4",
        "name": "Sucres chimiquement purs, n.c.a.; éthers et esters de sucre et leurs "
    },
    {
        "code": "21.10.40",
        "name": "Sucres chimiquement purs, n.c.a.; éthers et esters de sucre et leurs "
    },
    {
        "code": "21.10.5",
        "name": "Provitamines,  vitamines  et  hormones;  glycosides  et  alcaloïdes "
    },
    {
        "code": "21.10.51",
        "name": "Provitamines, vitamines et leurs dérivés"
    },
    {
        "code": "21.10.52",
        "name": "Hormones et leurs dérivés; autres stéroïdes utilisés principalement "
    },
    {
        "code": "21.10.53",
        "name": "Glycosides, alcaloïdes d'origine végétale et leurs sels, éthers, esters "
    },
    {
        "code": "21.10.54",
        "name": "Antibiotiques"
    },
    {
        "code": "21.10.6",
        "name": "Glandes et autres organes; extraits de glandes ou d'autres organes "
    },
    {
        "code": "21.10.60",
        "name": "Glandes et autres organes; extraits de glandes ou d'autres organes "
    },
    {
        "code": "21.10.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "21.10.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "21.2",
        "name": "Préparations pharmaceutiques"
    },
    {
        "code": "21.20",
        "name": "Préparations pharmaceutiques"
    },
    {
        "code": "21.20.1",
        "name": "Médicaments"
    },
    {
        "code": "21.20.11",
        "name": "Médicaments contenant des pénicillines ou d’autres antibiotiques"
    },
    {
        "code": "21.20.12",
        "name": "Médicaments contenant des hormones, mais pas d’antibiotiques"
    },
    {
        "code": "21.20.13",
        "name": "Médicaments  contenant  des  alcaloïdes  ou  leurs  dérivés,  mais  ne "
    },
    {
        "code": "21.20.2",
        "name": "Autres préparations pharmaceutiques"
    },
    {
        "code": "21.20.21",
        "name": "Sérums et vaccins"
    },
    {
        "code": "21.20.22",
        "name": "Préparations  chimiques  contraceptives  à  base  d'hormones  ou  de "
    },
    {
        "code": "21.20.23",
        "name": "Réactifs de diagnostic et autres préparations pharmaceutiques"
    },
    {
        "code": "21.20.24",
        "name": "Pansements  adhésifs,  catguts  et  matériels  similaires;  trousses  de "
    },
    {
        "code": "21.20.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "21.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "22",
        "name": "Produits en caoutchouc et en plastique"
    },
    {
        "code": "22.1",
        "name": "Produits en caoutchouc"
    },
    {
        "code": "22.11",
        "name": "Pneumatiques; rechapage et resculptage de pneumatiques"
    },
    {
        "code": "22.11.1",
        "name": "Pneumatiques neufs"
    },
    {
        "code": "22.11.11",
        "name": "Pneumatiques neufs, pour voitures de tourisme"
    },
    {
        "code": "22.11.12",
        "name": "Pneumatiques neufs, pour cycles et motocycles"
    },
    {
        "code": "22.11.13",
        "name": "Pneumatiques neufs, pour camions, autocars et avions"
    },
    {
        "code": "22.11.14",
        "name": "Pneumatiques pour tracteurs; autres pneumatiques neufs"
    },
    {
        "code": "22.11.15",
        "name": "Chambres à air, bandages, bandes de roulement amovibles et ﬂaps,"
    },
    {
        "code": "22.11.16",
        "name": "Proﬁlés pour le rechapage"
    },
    {
        "code": "22.11.2",
        "name": "Pneumatiques rechapés"
    },
    {
        "code": "22.11.20",
        "name": "Pneumatiques rechapés"
    },
    {
        "code": "22.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "22.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "22.19",
        "name": "Autres produits en caoutchouc"
    },
    {
        "code": "22.19.1",
        "name": "Caoutchouc  régénéré  sous  formes  primaires  ou  en  plaques, "
    },
    {
        "code": "22.19.10",
        "name": "Caoutchouc régénéré sous formes primaires ou en plaques, feuilles "
    },
    {
        "code": "22.19.2",
        "name": "Caoutchouc non vulcanisé et articles en caoutchouc vulcanisé; "
    },
    {
        "code": "22.19.20",
        "name": "Caoutchouc  non  vulcanisé  et  articles  en  caoutchouc  vulcanisé; "
    },
    {
        "code": "22.19.3",
        "name": "Tubes et tuyaux en caoutchouc vulcanisé non durci"
    },
    {
        "code": "22.19.30",
        "name": "Tubes et tuyaux en caoutchouc vulcanisé non durci"
    },
    {
        "code": "22.19.4",
        "name": "Bandes transporteuses et courroies de transmission en caoutchouc "
    },
    {
        "code": "22.19.40",
        "name": "Bandes transporteuses et courroies de transmission en caoutchouc "
    },
    {
        "code": "22.19.5",
        "name": "Tissus caoutchoutés, à l'exclusion des toiles à pneu"
    },
    {
        "code": "22.19.50",
        "name": "Tissus caoutchoutés, à l'exclusion des toiles à pneu"
    },
    {
        "code": "22.19.6",
        "name": "Vêtements  et  accessoires  du  vêtement  en  caoutchouc  vulcanisé "
    },
    {
        "code": "22.19.60",
        "name": "Vêtements et accessoires du vêtement en caoutchouc vulcanisé non "
    },
    {
        "code": "22.19.7",
        "name": "Articles  en  caoutchouc  vulcanisé  n.c.a.;  caoutchouc  durci  et "
    },
    {
        "code": "22.19.71",
        "name": "Articles  d'hygiène  ou  de  pharmacie  (y  compris  les  tétines)  en "
    },
    {
        "code": "22.19.72",
        "name": "Revêtements de sol et tapis en caoutchouc vulcanisé non alvéolaire"
    },
    {
        "code": "22.19.73",
        "name": "Autres  articles  en  caoutchouc  vulcanisé  n.c.a.;  caoutchouc  durci "
    },
    {
        "code": "22.19.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "22.19.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "22.2",
        "name": "Produits en plastique"
    },
    {
        "code": "22.21",
        "name": "Plaques, feuilles, tubes et proﬁlés en matières plastiques"
    },
    {
        "code": "22.21.1",
        "name": "Monoﬁlaments supérieurs à 1 mm, joncs, bâtons et proﬁlés, en"
    },
    {
        "code": "22.21.10",
        "name": "Monoﬁlaments supérieurs à 1 mm, joncs, bâtons et proﬁlés, en"
    },
    {
        "code": "22.21.2",
        "name": "Tubes, tuyaux et leurs accessoires, en matières plastiques"
    },
    {
        "code": "22.21.21",
        "name": "Boyaux artiﬁciels en protéines durcies ou en matières cellulosiques;"
    },
    {
        "code": "22.21.29",
        "name": "Autres tubes et tuyaux et leurs accessoires, en matières plastiques"
    },
    {
        "code": "22.21.3",
        "name": "Plaques, feuilles, ﬁlms, bandes et lames, en matières plastiques,"
    },
    {
        "code": "22.21.30",
        "name": "Plaques, feuilles, ﬁlms, bandes et lames, en matières plastiques, non"
    },
    {
        "code": "22.21.4",
        "name": "Autres  plaques,  feuilles,  ﬁlms, bandes et lames en matières"
    },
    {
        "code": "22.21.41",
        "name": "Autres plaques, feuilles, ﬁlms, bandes et lames en matières plastiques"
    },
    {
        "code": "22.21.42",
        "name": "Autres plaques, feuilles, ﬁlms, bandes et lames en matières plastiques"
    },
    {
        "code": "22.21.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "22.21.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "22.22",
        "name": "Emballages en matières plastiques"
    },
    {
        "code": "22.22.1",
        "name": "Emballages en matières plastiques"
    },
    {
        "code": "22.22.11",
        "name": "Sacs, sachets, pochettes et cornets en polymères de l'éthylène"
    },
    {
        "code": "22.22.12",
        "name": "Sacs, sachets, pochettes et cornets en autres matières plastiques"
    },
    {
        "code": "22.22.13",
        "name": "Boîtes,  caisses,  casiers  et  articles  similaires  en  matières "
    },
    {
        "code": "22.22.14",
        "name": "Bonbonnes,  bouteilles,  ﬂacons et articles similaires en matières"
    },
    {
        "code": "22.22.19",
        "name": "Autres emballages en matières plastiques"
    },
    {
        "code": "22.22.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "22.22.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "22.23",
        "name": "Éléments en matières plastiques pour la construction"
    },
    {
        "code": "22.23.1",
        "name": "Éléments en matières plastiques pour la construction; linoléum et "
    },
    {
        "code": "22.23.11",
        "name": "Revêtements en matières plastiques, en rouleaux ou en dalles"
    },
    {
        "code": "22.23.12",
        "name": "Baignoires, lavabos, cuvettes d'aisance et leurs sièges et couvercles, "
    },
    {
        "code": "22.23.13",
        "name": "Réservoirs, foudres, cuves et récipients analogues, d'une contenance "
    },
    {
        "code": "22.23.14",
        "name": "Portes, fenêtres et huisseries; volets, stores et articles similaires, et "
    },
    {
        "code": "22.23.15",
        "name": "Linoléum  et  revêtements  de  sol  durs  à  surface  non  plastique, "
    },
    {
        "code": "22.23.19",
        "name": "Éléments en matières plastiques pour la construction n.c.a."
    },
    {
        "code": "22.23.2",
        "name": "Constructions préfabriquées en matières plastiques"
    },
    {
        "code": "22.23.20",
        "name": "Constructions préfabriquées en matières plastiques"
    },
    {
        "code": "22.23.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’éléments "
    },
    {
        "code": "22.23.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’éléments "
    },
    {
        "code": "22.29",
        "name": "Autres produits en matières plastiques"
    },
    {
        "code": "22.29.1",
        "name": "Vêtements  et  accessoires  de  l’habillement  (y  compris  gants)  en "
    },
    {
        "code": "22.29.10",
        "name": "Vêtements  et  accessoires  de  l’habillement  (y  compris  gants)  en "
    },
    {
        "code": "22.29.2",
        "name": "Autres produits en matières plastiques n.c.a."
    },
    {
        "code": "22.29.21",
        "name": "Plaques, feuilles, bandes, rubans, pellicules et autres formes plates, "
    },
    {
        "code": "22.29.22",
        "name": "Autres plaques, feuilles, bandes, rubans, pellicules et autres formes "
    },
    {
        "code": "22.29.23",
        "name": "Articles de tables et de cuisine, en matière plastiques; gobelets"
    },
    {
        "code": "22.29.24",
        "name": "Cintres en plastique"
    },
    {
        "code": "22.29.25",
        "name": "Autres articles ménagers et de toilette, en matières plastiques"
    },
    {
        "code": "22.29.26",
        "name": "Parties n.c.a. d'appareils d'éclairage, enseignes, panneaux lumineux, "
    },
    {
        "code": "22.29.27",
        "name": "Articles scolaires et de bureau en matières plastiques"
    },
    {
        "code": "22.29.28",
        "name": "Garnitures pour meubles, carrosseries ou similaires; statuettes et "
    },
    {
        "code": "22.29.29",
        "name": "Autres articles en matières plastiques"
    },
    {
        "code": "22.29.9",
        "name": "Façons de travail des matières plastiques; opérations sous-traitées "
    },
    {
        "code": "22.29.91",
        "name": "Façons de travail des matières plastiques"
    },
    {
        "code": "22.29.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "23",
        "name": "Autres produits minéraux non métalliques"
    },
    {
        "code": "23.1",
        "name": "Verre et articles en verre"
    },
    {
        "code": "23.11",
        "name": "Verre plat"
    },
    {
        "code": "23.11.1",
        "name": "Verre plat"
    },
    {
        "code": "23.11.11",
        "name": "Verre coulé, étiré ou soufﬂé, en feuilles, mais non travaillé"
    },
    {
        "code": "23.11.12",
        "name": "Verre ﬂotté et verre douci ou poli, en feuilles, mais non travaillé"
    },
    {
        "code": "23.11.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de verre "
    },
    {
        "code": "23.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  verre "
    },
    {
        "code": "23.12",
        "name": "Verre plat travaillé"
    },
    {
        "code": "23.12.1",
        "name": "Verre plat travaillé"
    },
    {
        "code": "23.12.11",
        "name": "Verre plat, biseauté, gravé, percé, émaillé ou autrement travaillé, "
    },
    {
        "code": "23.12.12",
        "name": "Verre de sécurité"
    },
    {
        "code": "23.12.13",
        "name": "Miroirs en verre; vitrages isolants à parois multiples"
    },
    {
        "code": "23.12.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de verre "
    },
    {
        "code": "23.12.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  verre "
    },
    {
        "code": "23.13",
        "name": "Verre creux"
    },
    {
        "code": "23.13.1",
        "name": "Verre creux"
    },
    {
        "code": "23.13.11",
        "name": "Bouteilles,  bocaux,  ﬂacons et autres récipients en verre, à"
    },
    {
        "code": "23.13.12",
        "name": "Verres à boire autres qu'en vitrocérame"
    },
    {
        "code": "23.13.13",
        "name": "Verrerie domestique, objets en verre pour la toilette ou le bureau, "
    },
    {
        "code": "23.13.14",
        "name": "Ampoules en verre pour bouteilles isolantes ou pour autres récipients "
    },
    {
        "code": "23.13.9",
        "name": "Façonnage du verre creux; opérations sous-traitées intervenant "
    },
    {
        "code": "23.13.91",
        "name": "Façonnage  de  verres  à  boire  et  d'autres  articles  de  verrerie "
    },
    {
        "code": "23.13.92",
        "name": "Façonnage de récipients en verre"
    },
    {
        "code": "23.13.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  verre "
    },
    {
        "code": "23.14",
        "name": "Fibres de verre"
    },
    {
        "code": "23.14.1",
        "name": "Fibres de verre"
    },
    {
        "code": "23.14.11",
        "name": "Mèches, stratiﬁls (rovings) et ﬁls, coupés ou non, en ﬁbres de "
    },
    {
        "code": "23.14.12",
        "name": "Voiles, nappes, mats, matelas, panneaux et autres produits en ﬁbres"
    },
    {
        "code": "23.14.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de ﬁbres"
    },
    {
        "code": "23.14.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de ﬁbres"
    },
    {
        "code": "23.19",
        "name": "Autres articles en verre travaillé, y compris verre technique"
    },
    {
        "code": "23.19.1",
        "name": "Autre verre, semi-ﬁni"
    },
    {
        "code": "23.19.11",
        "name": "Verre en masse, en billes (à l'exclusion des microsphères), barres ou "
    },
    {
        "code": "23.19.12",
        "name": "Pavés, dalles, briques, carreaux, tuiles et autres articles, en verre "
    },
    {
        "code": "23.19.2",
        "name": "Verre technique et autre"
    },
    {
        "code": "23.19.21",
        "name": "Ampoules  et  enveloppes  tubulaires,  ouvertes,  et  leurs  parties,  en "
    },
    {
        "code": "23.19.22",
        "name": "Verres  d'horlogerie  et  de  lunetterie,  non  travaillés  optiquement; "
    },
    {
        "code": "23.19.23",
        "name": "Verrerie de laboratoire, d'hygiène ou de pharmacie; ampoules de "
    },
    {
        "code": "23.19.24",
        "name": "Parties  en  verre  d'appareils  d'éclairage,  enseignes  et  panneaux "
    },
    {
        "code": "23.19.25",
        "name": "Isolateurs en verre"
    },
    {
        "code": "23.19.26",
        "name": "Produits en verre technique n.c.a."
    },
    {
        "code": "23.19.9",
        "name": "Façonnage  d’articles  en  verre,  y  compris  d’articles  techniques "
    },
    {
        "code": "23.19.91",
        "name": "Façonnage d'articles en verre, y compris d'articles techniques en verre"
    },
    {
        "code": "23.19.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autre "
    },
    {
        "code": "23.2",
        "name": "Produits réfractaires"
    },
    {
        "code": "23.20",
        "name": "Produits réfractaires"
    },
    {
        "code": "23.20.1",
        "name": "Produits réfractaires"
    },
    {
        "code": "23.20.11",
        "name": "Briques, dalles, carreaux et autres produits céramiques en farines "
    },
    {
        "code": "23.20.12",
        "name": "Briques, dalles, carreaux et matériaux céramiques réfractaires de "
    },
    {
        "code": "23.20.13",
        "name": "Ciments,  mortiers,  bétons  et  compositions  similaires  réfractaires "
    },
    {
        "code": "23.20.14",
        "name": "Produits  réfractaires  non  cuits  et  autres  produits  céramiques "
    },
    {
        "code": "23.20.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "23.20.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "23.3",
        "name": "Matériaux de construction en terre cuite"
    },
    {
        "code": "23.31",
        "name": "Carreaux et dalles en céramique"
    },
    {
        "code": "23.31.1",
        "name": "Carreaux et dalles en céramique"
    },
    {
        "code": "23.31.10",
        "name": "Carreaux et dalles en céramique"
    },
    {
        "code": "23.31.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "23.31.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de carreaux "
    },
    {
        "code": "23.32",
        "name": "Tuiles, briques et produits de construction en terre cuite"
    },
    {
        "code": "23.32.1",
        "name": "Tuiles, briques et produits de construction en terre cuite"
    },
    {
        "code": "23.32.11",
        "name": "Briques  de  construction,  hourdis,  cache-poutrelles  et  articles "
    },
    {
        "code": "23.32.12",
        "name": "Tuiles,  éléments  de  cheminée,  conduits  de  fumée,  ornements "
    },
    {
        "code": "23.32.13",
        "name": "Tuyaux, gouttières et accessoires de tuyauterie, en céramique"
    },
    {
        "code": "23.32.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tuiles, "
    },
    {
        "code": "23.32.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tuiles, "
    },
    {
        "code": "23.4",
        "name": "Autres produits en porcelaine et céramique"
    },
    {
        "code": "23.41",
        "name": "Articles  céramiques  à  usage  domestique  ou  ornemental, "
    },
    {
        "code": "23.41.1",
        "name": "Articles céramiques à usage domestique ou ornemental, industriels"
    },
    {
        "code": "23.41.11",
        "name": "Vaisselle,  autres  articles  de  table  ou  d'économie  domestique  et "
    },
    {
        "code": "23.41.12",
        "name": "Vaisselle,  autres  articles  de  table  ou  d'économie  domestique  et "
    },
    {
        "code": "23.41.13",
        "name": "Statuettes et autres objets d'ornement en céramique"
    },
    {
        "code": "23.41.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'articles "
    },
    {
        "code": "23.41.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'articles "
    },
    {
        "code": "23.42",
        "name": "Articles céramiques artisanaux à usage domestique ou ornemental"
    },
    {
        "code": "23.42.1",
        "name": "Articles céramiques artisanaux à usage domestique ou ornemental"
    },
    {
        "code": "23.42.10",
        "name": "Articles céramiques artisanaux à usage domestique ou ornemental"
    },
    {
        "code": "23.42.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'articles "
    },
    {
        "code": "23.42.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'articles "
    },
    {
        "code": "23.43",
        "name": "Appareils sanitaires en céramique"
    },
    {
        "code": "23.43.1",
        "name": "Appareils sanitaires en céramique"
    },
    {
        "code": "23.43.10",
        "name": "Appareils sanitaires en céramique"
    },
    {
        "code": "23.43.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'appareils "
    },
    {
        "code": "23.43.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'appareils "
    },
    {
        "code": "23.44",
        "name": "Isolateurs et pièces isolantes en céramique"
    },
    {
        "code": "23.44.1",
        "name": "Isolateurs en céramique; pièces isolantes pour machines, appareils "
    },
    {
        "code": "23.44.10",
        "name": "Isolateurs en céramique; pièces isolantes pour machines, appareils "
    },
    {
        "code": "23.44.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "23.44.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'isolateurs "
    },
    {
        "code": "23.45",
        "name": "Autres produits céramiques à usage technique"
    },
    {
        "code": "23.45.1",
        "name": "Autres produits céramiques à usage technique"
    },
    {
        "code": "23.45.11",
        "name": "Porcelaines  pour  laboratoires  ou  pour  usages  chimiques  ou "
    },
    {
        "code": "23.45.12",
        "name": "Autres  produits  céramiques  pour  laboratoires  ou  pour  usages "
    },
    {
        "code": "23.45.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "23.45.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "23.49",
        "name": "Autres produits céramiques"
    },
    {
        "code": "23.49.1",
        "name": "Autres produits céramiques"
    },
    {
        "code": "23.49.11",
        "name": "Produits céramiques à usage agricole et emballages en céramique"
    },
    {
        "code": "23.49.12",
        "name": "Autres produits céramiques non structurels n.c.a."
    },
    {
        "code": "23.49.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "23.49.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "23.5",
        "name": "Ciment, chaux et plâtre"
    },
    {
        "code": "23.51",
        "name": "Ciment"
    },
    {
        "code": "23.51.1",
        "name": "Ciment"
    },
    {
        "code": "23.51.11",
        "name": "Clinkers de ciment"
    },
    {
        "code": "23.51.12",
        "name": "Ciment  portland,  ciment  alumineux,  ciment  de  laitier  et  ciments "
    },
    {
        "code": "23.51.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  du "
    },
    {
        "code": "23.51.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication du ciment"
    },
    {
        "code": "23.52",
        "name": "Chaux et plâtre"
    },
    {
        "code": "23.52.1",
        "name": "Chaux vive, chaux éteinte et chaux hydraulique"
    },
    {
        "code": "23.52.10",
        "name": "Chaux vive, chaux éteinte et chaux hydraulique"
    },
    {
        "code": "23.52.2",
        "name": "Plâtre"
    },
    {
        "code": "23.52.20",
        "name": "Plâtre"
    },
    {
        "code": "23.52.3",
        "name": "Dolomie calcinée ou agglomérée"
    },
    {
        "code": "23.52.30",
        "name": "Dolomie calcinée ou agglomérée"
    },
    {
        "code": "23.52.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  la "
    },
    {
        "code": "23.52.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de la chaux "
    },
    {
        "code": "23.6",
        "name": "Ouvrages en béton, en ciment ou en plâtre"
    },
    {
        "code": "23.61",
        "name": "Éléments en béton pour la construction"
    },
    {
        "code": "23.61.1",
        "name": "Éléments en béton pour la construction"
    },
    {
        "code": "23.61.11",
        "name": "Tuiles,  carreaux,  dalles,  briques  et  articles  similaires,  en  ciment, "
    },
    {
        "code": "23.61.12",
        "name": "Éléments  préfabriqués  pour  la  construction,  en  ciment,  béton  ou "
    },
    {
        "code": "23.61.2",
        "name": "Constructions préfabriquées en béton"
    },
    {
        "code": "23.61.20",
        "name": "Constructions préfabriquées en béton"
    },
    {
        "code": "23.61.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'éléments "
    },
    {
        "code": "23.61.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'éléments "
    },
    {
        "code": "23.62",
        "name": "Éléments en plâtre pour la construction"
    },
    {
        "code": "23.62.1",
        "name": "Éléments en plâtre pour la construction"
    },
    {
        "code": "23.62.10",
        "name": "Éléments en plâtre pour la construction"
    },
    {
        "code": "23.62.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "23.62.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'éléments "
    },
    {
        "code": "23.63",
        "name": "Béton prêt à l'emploi"
    },
    {
        "code": "23.63.1",
        "name": "Béton prêt à l'emploi"
    },
    {
        "code": "23.63.10",
        "name": "Béton prêt à l'emploi"
    },
    {
        "code": "23.63.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de béton "
    },
    {
        "code": "23.63.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de béton "
    },
    {
        "code": "23.64",
        "name": "Mortiers et bétons secs"
    },
    {
        "code": "23.64.1",
        "name": "Mortiers et bétons secs"
    },
    {
        "code": "23.64.10",
        "name": "Mortiers et bétons secs"
    },
    {
        "code": "23.64.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "23.64.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de mortiers "
    },
    {
        "code": "23.65",
        "name": "Fibre-ciment"
    },
    {
        "code": "23.65.1",
        "name": "Ouvrages en ﬁbre-ciment"
    },
    {
        "code": "23.65.11",
        "name": "Planches, blocs et articles similaires, en ﬁbres végétales, en paille"
    },
    {
        "code": "23.65.12",
        "name": "Ouvrages en amiante-ciment, cellulose-ciment ou similaires"
    },
    {
        "code": "23.65.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'ouvrages "
    },
    {
        "code": "23.65.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'ouvrages "
    },
    {
        "code": "23.69",
        "name": "Autres ouvrages en béton, plâtre ou ciment"
    },
    {
        "code": "23.69.1",
        "name": "Autres ouvrages en béton, plâtre ou ciment"
    },
    {
        "code": "23.69.11",
        "name": "Autres  ouvrages  en  plâtre  ou  en  compositions  à  base  de  plâtre "
    },
    {
        "code": "23.69.19",
        "name": "Ouvrages en ciment, béton ou pierre artiﬁcielle n.c.a."
    },
    {
        "code": "23.69.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "23.69.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "23.7",
        "name": "Pierre taillée, façonnée et ﬁnie"
    },
    {
        "code": "23.70",
        "name": "Pierre taillée, façonnée et ﬁnie"
    },
    {
        "code": "23.70.1",
        "name": "Pierre taillée, façonnée et ﬁnie"
    },
    {
        "code": "23.70.11",
        "name": "Marbre, travertin, albâtre, travaillés, et ouvrages en marbre, "
    },
    {
        "code": "23.70.12",
        "name": "Autres pierres de taille ou de construction travaillées et ouvrages en "
    },
    {
        "code": "23.70.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de pierre "
    },
    {
        "code": "23.70.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de pierre "
    },
    {
        "code": "23.9",
        "name": "Autres produits minéraux non métalliques"
    },
    {
        "code": "23.91",
        "name": "Produits abrasifs"
    },
    {
        "code": "23.91.1",
        "name": "Produits abrasifs"
    },
    {
        "code": "23.91.11",
        "name": "Meules et articles similaires pour le travail des pierres, sans bâtis, et "
    },
    {
        "code": "23.91.12",
        "name": "Abrasifs  en  poudre  ou  en  grains,  appliqués  sur  produits  textiles, "
    },
    {
        "code": "23.91.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "23.91.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "23.99",
        "name": "Autres produits minéraux non métalliques n.c.a."
    },
    {
        "code": "23.99.1",
        "name": "Autres produits minéraux non métalliques n.c.a."
    },
    {
        "code": "23.99.11",
        "name": "Amiante travaillé en ﬁbres; mélanges à base d'amiante et de carbonate"
    },
    {
        "code": "23.99.12",
        "name": "Ouvrages en asphalte ou en produits similaires"
    },
    {
        "code": "23.99.13",
        "name": "Mélanges bitumineux à base de bitume et de matériaux pierreux naturels "
    },
    {
        "code": "23.99.14",
        "name": "Graphites artiﬁciel, colloïdal ou semi-colloïdal; préparations à base"
    },
    {
        "code": "23.99.15",
        "name": "Corindon artiﬁciel"
    },
    {
        "code": "23.99.19",
        "name": "Produits minéraux non métalliques n.c.a."
    },
    {
        "code": "23.99.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "23.99.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "24",
        "name": "Produits métallurgiques"
    },
    {
        "code": "24.1",
        "name": "Produits sidérurgiques de base et ferroalliages"
    },
    {
        "code": "24.10",
        "name": "Produits sidérurgiques de base et ferroalliages"
    },
    {
        "code": "24.10.1",
        "name": "Produits sidérurgiques primaires"
    },
    {
        "code": "24.10.11",
        "name": "Fontes  brutes  et  fontes  spiegel  en  gueuses,  saumons  ou  autres "
    },
    {
        "code": "24.10.12",
        "name": "Ferroalliages"
    },
    {
        "code": "24.10.13",
        "name": "Produits ferreux obtenus par réduction directe des minerais de fer "
    },
    {
        "code": "24.10.14",
        "name": "Grenailles et poudres de fonte brute, de fonte spiegel ou d'acier"
    },
    {
        "code": "24.10.2",
        "name": "Acier brut"
    },
    {
        "code": "24.10.21",
        "name": "Acier  non  allié  en  lingots  ou  autres  formes  primaires  et  demi-"
    },
    {
        "code": "24.10.22",
        "name": "Acier  inoxydable  en  lingots  ou  autres  formes  primaires  et  demi-"
    },
    {
        "code": "24.10.23",
        "name": "Autres aciers alliés en lingots ou autres formes primaires et demi-"
    },
    {
        "code": "24.10.3",
        "name": "Produits laminés plats en acier, simplement laminés à chaud"
    },
    {
        "code": "24.10.31",
        "name": "Produits  laminés  plats  en  acier  non  allié,  simplement  laminés  à "
    },
    {
        "code": "24.10.32",
        "name": "Produits  laminés  plats  en  acier  non  allié,  simplement  laminés  à "
    },
    {
        "code": "24.10.33",
        "name": "Produits laminés plats en acier inoxydable, simplement laminés à "
    },
    {
        "code": "24.10.34",
        "name": "Produits laminés plats en acier inoxydable, simplement laminés à "
    },
    {
        "code": "24.10.35",
        "name": "Produits laminés plats en autres aciers alliés, simplement laminés à "
    },
    {
        "code": "24.10.36",
        "name": "Produits laminés plats en autres aciers alliés, simplement laminés à "
    },
    {
        "code": "24.10.4",
        "name": "Produits laminés plats en acier, simplement laminés à froid, d’une "
    },
    {
        "code": "24.10.41",
        "name": "Produits  laminés  plats  en  acier  non  allié,  simplement  laminés  à "
    },
    {
        "code": "24.10.42",
        "name": "Produits laminés plats en acier inoxydable, simplement laminés à "
    },
    {
        "code": "24.10.43",
        "name": "Produits laminés plats en autres aciers alliés, simplement laminés à "
    },
    {
        "code": "24.10.5",
        "name": "Produits  laminés  plats  en  acier,  plaqués  ou  revêtus  et  produits "
    },
    {
        "code": "24.10.51",
        "name": "Produits laminés plats en acier non allié, d'une largeur supérieure "
    },
    {
        "code": "24.10.52",
        "name": "Produits  laminés  plats  en  autres  aciers  alliés,  d'une  largeur "
    },
    {
        "code": "24.10.53",
        "name": "Produits laminés plats en acier au silicium, d'une largeur supérieure "
    },
    {
        "code": "24.10.54",
        "name": "Produits laminés plats en acier au silicium, d'une largeur inférieure "
    },
    {
        "code": "24.10.55",
        "name": "Produits  laminés  plats  en  acier  à  coupe  rapide,  d'une  largeur "
    },
    {
        "code": "24.10.6",
        "name": "Barres laminées à chaud en acier"
    },
    {
        "code": "24.10.61",
        "name": "Fil machine enroulé en couronnes irrégulières, laminé à chaud, en "
    },
    {
        "code": "24.10.62",
        "name": "Barres en acier, simplement forgées, laminées ou ﬁlées à chaud, y"
    },
    {
        "code": "24.10.63",
        "name": "Fil machine enroulé en couronnes irrégulières, laminé à chaud, en "
    },
    {
        "code": "24.10.64",
        "name": "Barres  en  acier  inoxydable,  simplement  forgées,  laminées  ou "
    },
    {
        "code": "24.10.65",
        "name": "Fil machine enroulé en couronnes irrégulières, laminé à chaud, en "
    },
    {
        "code": "24.10.66",
        "name": "Barres en autres aciers alliés, simplement forgées, laminées ou ﬁlées"
    },
    {
        "code": "24.10.67",
        "name": "Barres creuses pour le forage"
    },
    {
        "code": "24.10.7",
        "name": "Proﬁlés ouverts laminés à chaud, palplanches et éléments de voie"
    },
    {
        "code": "24.10.71",
        "name": "Proﬁlés ouverts, simplement laminés ou ﬁlées à chaud, en acier non"
    },
    {
        "code": "24.10.72",
        "name": "Proﬁlés ouverts, simplement laminés ou ﬁlées à  chaud, en acier"
    },
    {
        "code": "24.10.73",
        "name": "Proﬁlés ouverts, simplement laminés ou ﬁlées à chaud, en autres"
    },
    {
        "code": "24.10.74",
        "name": "Palplanches en acier et proﬁlés ouverts obtenus par soudage"
    },
    {
        "code": "24.10.75",
        "name": "Éléments de voie ferrée en acier"
    },
    {
        "code": "24.10.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "24.10.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "24.2",
        "name": "Tubes, tuyaux, proﬁlés creux et accessoires correspondants"
    },
    {
        "code": "24.20",
        "name": "Tubes, tuyaux, proﬁlés creux et accessoires correspondants en"
    },
    {
        "code": "24.20.1",
        "name": "Tubes, tuyaux et proﬁlés creux, sans soudure, en acier"
    },
    {
        "code": "24.20.11",
        "name": "Tubes  sans  soudure  des  types  utilisés  pour  les  oléoducs  et  les "
    },
    {
        "code": "24.20.12",
        "name": "Tubes sans soudure des types utilisés pour le forage pétrolier ou "
    },
    {
        "code": "24.20.13",
        "name": "Autres tubes et tuyaux, de section circulaire, en acier"
    },
    {
        "code": "24.20.14",
        "name": "Tubes et tuyaux, de section non circulaire, et proﬁlés creux, en acier"
    },
    {
        "code": "24.20.2",
        "name": "Tubes  et  tuyaux,  soudés,  de  section  circulaire  et  d'un  diamètre "
    },
    {
        "code": "24.20.21",
        "name": "Tubes soudés des types0 utilisés pour les oléoducs et les gazoducs, d'un "
    },
    {
        "code": "24.20.22",
        "name": "Tubes soudés des types utilisés pour le forage pétrolier ou gazier, en "
    },
    {
        "code": "24.20.23",
        "name": "Autres tubes et tuyaux, soudés, de section circulaire et d'un diamètre "
    },
    {
        "code": "24.20.24",
        "name": "Autres  tubes  et  tuyaux  rivés,  agrafés  ou  à  bords  rapprochés,  de "
    },
    {
        "code": "406,4",
        "name": "mm"
    },
    {
        "code": "24.20.3",
        "name": "Tubes et tuyaux soudés, d’un diamètre extérieur inférieur ou égal "
    },
    {
        "code": "24.20.31",
        "name": "Tubes soudés des types utilisés pour les oléoducs et les gazoducs, "
    },
    {
        "code": "24.20.32",
        "name": "Tubes soudés des types utilisés pour le forage pétrolier ou gazier, en "
    },
    {
        "code": "24.20.33",
        "name": "Autres tubes et tuyaux, soudés, de section circulaire et d’un diamètre "
    },
    {
        "code": "24.20.34",
        "name": "Tubes  et  tuyaux  soudés,  de  section  non  circulaire,  en  acier, d’un "
    },
    {
        "code": "24.20.35",
        "name": "Autres tubes et tuyaux rivés, agrafés ou à bords rapprochés, en acier, "
    },
    {
        "code": "24.20.4",
        "name": "Accessoires de tuyauterie, en acier, non moulés"
    },
    {
        "code": "24.20.40",
        "name": "Accessoires de tuyauterie, en acier, non moulés"
    },
    {
        "code": "24.20.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de tubes, "
    },
    {
        "code": "24.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  tubes, "
    },
    {
        "code": "24.3",
        "name": "Autres produits de première transformation de l’acier"
    },
    {
        "code": "24.31",
        "name": "Barres étirées à froid"
    },
    {
        "code": "24.31.1",
        "name": "Barres étirées à froid et proﬁlés pleins en acier non allié"
    },
    {
        "code": "24.31.10",
        "name": "Barres étirées à froid et proﬁlés pleins en acier non allié"
    },
    {
        "code": "24.31.2",
        "name": "Barres étirées à froid et proﬁlés pleins en acier allié, autres qu’en"
    },
    {
        "code": "24.31.20",
        "name": "Barres étirées à froid et proﬁlés pleins en acier allié, autres qu’en"
    },
    {
        "code": "24.31.3",
        "name": "Barres étirées à froid et proﬁlés pleins en acier inoxydable"
    },
    {
        "code": "24.31.30",
        "name": "Barres étirées à froid et proﬁlés pleins en acier inoxydable"
    },
    {
        "code": "24.31.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de barres "
    },
    {
        "code": "24.31.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de barres "
    },
    {
        "code": "24.32",
        "name": "Feuillards laminés à froid"
    },
    {
        "code": "24.32.1",
        "name": "Produits plats laminés à froid, en acier, non revêtus, d’une largeur "
    },
    {
        "code": "24.32.10",
        "name": "Produits plats laminés à froid, en acier, non revêtus, d’une largeur "
    },
    {
        "code": "24.32.2",
        "name": "Produits plats laminés à froid, en acier, plaqués ou revêtus, d’une "
    },
    {
        "code": "24.32.20",
        "name": "Produits plats laminés à froid, en acier, plaqués ou revêtus, d’une "
    },
    {
        "code": "24.32.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "24.32.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de feuillards "
    },
    {
        "code": "24.33",
        "name": "Produits formés à froid ou pliés"
    },
    {
        "code": "24.33.1",
        "name": "Proﬁlés formés à froid ou pliés"
    },
    {
        "code": "24.33.11",
        "name": "Proﬁlés formés à froid ou pliés, en acier non allié"
    },
    {
        "code": "24.33.12",
        "name": "Proﬁlés formés à froid ou pliés, en acier inoxydable"
    },
    {
        "code": "24.33.2",
        "name": "Tôles nervurées, en acier non allié"
    },
    {
        "code": "24.33.20",
        "name": "Tôles nervurées, en acier non allié"
    },
    {
        "code": "24.33.3",
        "name": "Panneaux-sandwichs en tôle d’acier revêtue"
    },
    {
        "code": "24.33.30",
        "name": "Panneaux-sandwichs en tôle d’acier revêtue"
    },
    {
        "code": "24.33.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "24.33.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "24.34",
        "name": "Fils tréﬁlés à froid"
    },
    {
        "code": "24.34.1",
        "name": "Fils tréﬁlés à froid"
    },
    {
        "code": "24.34.11",
        "name": "Fils tréﬁlés à froid, en acier non allié"
    },
    {
        "code": "24.34.12",
        "name": "Fils tréﬁlés à froid, en acier inoxydable"
    },
    {
        "code": "24.34.13",
        "name": "Fils tréﬁlés à froid, en autres aciers alliés"
    },
    {
        "code": "24.34.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  ﬁls"
    },
    {
        "code": "24.34.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  ﬁls"
    },
    {
        "code": "24.4",
        "name": "Métaux précieux et autres métaux non ferreux communs"
    },
    {
        "code": "24.41",
        "name": "Métaux précieux"
    },
    {
        "code": "24.41.1",
        "name": "Argent brut, mi-ouvré ou en poudre"
    },
    {
        "code": "24.41.10",
        "name": "Argent brut, mi-ouvré ou en poudre"
    },
    {
        "code": "24.41.2",
        "name": "Or brut, mi-ouvré ou en poudre"
    },
    {
        "code": "24.41.20",
        "name": "Or brut, mi-ouvré ou en poudre"
    },
    {
        "code": "24.41.3",
        "name": "Platine, brut, mi-ouvré ou en poudre"
    },
    {
        "code": "24.41.30",
        "name": "Platine, brut, mi-ouvré ou en poudre"
    },
    {
        "code": "24.41.4",
        "name": "Plaqués ou doublés d’or sur métaux communs ou sur argent, sous "
    },
    {
        "code": "24.41.40",
        "name": "Plaqués ou doublés d’or sur métaux communs ou sur argent, sous "
    },
    {
        "code": "24.41.5",
        "name": "Plaqués  ou  doublés  d’argent  sur  métaux  communs  et  plaqués "
    },
    {
        "code": "24.41.50",
        "name": "Plaqués  ou  doublés  d’argent  sur  métaux  communs  et  plaqués  ou "
    },
    {
        "code": "24.41.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de métaux "
    },
    {
        "code": "24.41.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de métaux "
    },
    {
        "code": "24.42",
        "name": "Aluminium"
    },
    {
        "code": "24.42.1",
        "name": "Aluminium brut ; oxyde d’aluminium"
    },
    {
        "code": "24.42.11",
        "name": "Aluminium brut"
    },
    {
        "code": "24.42.12",
        "name": "Oxyde d’aluminium, à l’exclusion du corindon artiﬁciel"
    },
    {
        "code": "24.42.2",
        "name": "Demi-produits en aluminium ou en alliages d’aluminium"
    },
    {
        "code": "24.42.21",
        "name": "Poudres et paillettes d’aluminium"
    },
    {
        "code": "24.42.22",
        "name": "Barres et proﬁlés en aluminium"
    },
    {
        "code": "24.42.23",
        "name": "Fils en aluminium"
    },
    {
        "code": "24.42.24",
        "name": "Tôles et bandes en aluminium, d’une épaisseur supérieure à 0,2 mm"
    },
    {
        "code": "24.42.25",
        "name": "Feuilles et bandes minces en aluminium, d’une épaisseur inférieure "
    },
    {
        "code": "24.42.26",
        "name": "Tubes, tuyaux et accessoires de tuyauterie en aluminium"
    },
    {
        "code": "24.42.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "24.42.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de l’aluminium"
    },
    {
        "code": "24.43",
        "name": "Plomb, zinc et étain"
    },
    {
        "code": "24.43.1",
        "name": "Plomb, zinc et étain bruts"
    },
    {
        "code": "24.43.11",
        "name": "Plomb brut"
    },
    {
        "code": "24.43.12",
        "name": "Zinc brut"
    },
    {
        "code": "24.43.13",
        "name": "Étain brut"
    },
    {
        "code": "24.43.2",
        "name": "Demi-produits en plomb, zinc ou étain ou en alliages à base de "
    },
    {
        "code": "24.43.21",
        "name": "Tôles, bandes et feuilles en plomb; poudres et paillettes de plomb"
    },
    {
        "code": "24.43.22",
        "name": "Poussières, poudres et paillettes de zinc"
    },
    {
        "code": "24.43.23",
        "name": "Barres, proﬁlés et ﬁls en zinc; tôles, bandes et feuilles en zinc"
    },
    {
        "code": "24.43.24",
        "name": "Barres, proﬁlés et ﬁls en étain"
    },
    {
        "code": "24.43.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de plomb, "
    },
    {
        "code": "24.43.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de plomb, "
    },
    {
        "code": "24.44",
        "name": "Cuivre"
    },
    {
        "code": "24.44.1",
        "name": "Cuivre brut; mattes de cuivre; cuivre de ciment"
    },
    {
        "code": "24.44.11",
        "name": "Mattes de cuivre; cuivre de ciment"
    },
    {
        "code": "24.44.12",
        "name": "Cuivre non afﬁné; anodes en cuivre pour afﬁnage électrolytique"
    },
    {
        "code": "24.44.13",
        "name": "Cuivre afﬁné et alliages de cuivre bruts; alliages mères de cuivre"
    },
    {
        "code": "24.44.2",
        "name": "Demi-produits en cuivre et en alliages de cuivre"
    },
    {
        "code": "24.44.21",
        "name": "Poudres et paillettes de cuivre"
    },
    {
        "code": "24.44.22",
        "name": "Barres et proﬁlés en cuivre"
    },
    {
        "code": "24.44.23",
        "name": "Fils de cuivre"
    },
    {
        "code": "24.44.24",
        "name": "Tôles et bandes en cuivre, d’une épaisseur supérieure à 0,15 mm"
    },
    {
        "code": "24.44.25",
        "name": "Feuilles en cuivre, d’une épaisseur inférieure ou égale à 0,15 mm"
    },
    {
        "code": "24.44.26",
        "name": "Tubes, tuyaux et accessoires de tuyauterie en cuivre"
    },
    {
        "code": "24.44.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  du "
    },
    {
        "code": "24.44.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication du cuivre"
    },
    {
        "code": "24.45",
        "name": "Autres métaux non ferreux"
    },
    {
        "code": "24.45.1",
        "name": "Nickel brut; produits intermédiaires de la métallurgie du nickel"
    },
    {
        "code": "24.45.11",
        "name": "Nickel brut"
    },
    {
        "code": "24.45.12",
        "name": "Mattes  de  nickel,  sinters  et  autres  produits  intermédiaires  de  la "
    },
    {
        "code": "24.45.2",
        "name": "Demi-produits en nickel et en alliages de nickel"
    },
    {
        "code": "24.45.21",
        "name": "Poudres et paillettes de nickel"
    },
    {
        "code": "24.45.22",
        "name": "Barres, proﬁlés et ﬁls en nickel"
    },
    {
        "code": "24.45.23",
        "name": "Tôles, bandes et feuilles en nickel"
    },
    {
        "code": "24.45.24",
        "name": "Tubes, tuyaux et accessoires de tuyauterie en nickel"
    },
    {
        "code": "24.45.3",
        "name": "Autres métaux non ferreux et ouvrages en ces métaux; cermets; "
    },
    {
        "code": "24.45.30",
        "name": "Autres  métaux  non  ferreux  et  ouvrages  en  ces  métaux;  cermets; "
    },
    {
        "code": "24.45.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "24.45.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "24.46",
        "name": "Combustibles nucléaires traités"
    },
    {
        "code": "24.46.1",
        "name": "Uranium naturel et ses composés; alliages, dispersions (y compris "
    },
    {
        "code": "24.46.10",
        "name": "Uranium naturel et ses composés; alliages, dispersions (y compris "
    },
    {
        "code": "24.46.9",
        "name": "Opérations  sous-traitées  intervenant  dans  le  traitement  de "
    },
    {
        "code": "24.46.99",
        "name": "Opérations  sous-traitées  intervenant  dans  le  traitement  de "
    },
    {
        "code": "24.5",
        "name": "Travaux de fonderie"
    },
    {
        "code": "24.51",
        "name": "Travaux de fonderie de fonte"
    },
    {
        "code": "24.51.1",
        "name": "Travaux de fonderie de fonte"
    },
    {
        "code": "24.51.11",
        "name": "Travaux de fonderie de fonte malléable"
    },
    {
        "code": "24.51.12",
        "name": "Travaux de fonderie de fonte à graphite sphéroïdal"
    },
    {
        "code": "24.51.13",
        "name": "Travaux de fonderie de fonte grise ordinaire"
    },
    {
        "code": "24.51.2",
        "name": "Tubes, tuyaux et proﬁlés creux, en fonte"
    },
    {
        "code": "24.51.20",
        "name": "Tubes, tuyaux et proﬁlés creux, en fonte"
    },
    {
        "code": "24.51.3",
        "name": "Accessoires de tuyauterie, en fonte"
    },
    {
        "code": "24.51.30",
        "name": "Accessoires de tuyauterie, en fonte"
    },
    {
        "code": "24.51.9",
        "name": "Opérations sous-traitées intervenant dans la fonderie de fonte"
    },
    {
        "code": "24.51.99",
        "name": "Opérations sous-traitées intervenant dans la fonderie de fonte"
    },
    {
        "code": "24.52",
        "name": "Travaux de fonderie d’acier"
    },
    {
        "code": "24.52.1",
        "name": "Travaux de fonderie d’acier"
    },
    {
        "code": "24.52.10",
        "name": "Travaux de fonderie d’acier"
    },
    {
        "code": "24.52.2",
        "name": "Tubes et tuyaux en acier coulé par centrifugation"
    },
    {
        "code": "24.52.20",
        "name": "Tubes et tuyaux en acier coulé par centrifugation"
    },
    {
        "code": "24.52.3",
        "name": "Accessoires de tuyauterie, en acier coulé"
    },
    {
        "code": "24.52.30",
        "name": "Accessoires de tuyauterie, en acier coulé"
    },
    {
        "code": "24.53",
        "name": "Travaux de fonderie de métaux légers"
    },
    {
        "code": "24.53.1",
        "name": "Travaux de fonderie de métaux légers"
    },
    {
        "code": "24.53.10",
        "name": "Travaux de fonderie de métaux légers"
    },
    {
        "code": "24.54",
        "name": "Travaux de fonderie d’autres métaux non ferreux"
    },
    {
        "code": "24.54.1",
        "name": "Travaux de fonderie d’autres métaux non ferreux"
    },
    {
        "code": "24.54.10",
        "name": "Travaux de fonderie d’autres métaux non ferreux"
    },
    {
        "code": "25",
        "name": "Produits  métalliques,  à  l’exclusion  des  machines  et "
    },
    {
        "code": "25.1",
        "name": "Éléments en métal pour la construction"
    },
    {
        "code": "25.11",
        "name": "Structures métalliques et parties de structures"
    },
    {
        "code": "25.11.1",
        "name": "Constructions métalliques préfabriquées"
    },
    {
        "code": "25.11.10",
        "name": "Constructions métalliques préfabriquées"
    },
    {
        "code": "25.11.2",
        "name": "Constructions et ossatures métalliques"
    },
    {
        "code": "25.11.21",
        "name": "Tabliers de pont et passerelles, en fer ou en acier"
    },
    {
        "code": "25.11.22",
        "name": "Pylônes et mâts, en fer ou en acier"
    },
    {
        "code": "25.11.23",
        "name": "Autres ossatures et éléments de structures, plaques, barres, proﬁlés"
    },
    {
        "code": "25.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.12",
        "name": "Portes et fenêtres en métal"
    },
    {
        "code": "25.12.1",
        "name": "Portes, fenêtres et huisseries métalliques"
    },
    {
        "code": "25.12.10",
        "name": "Portes, fenêtres et huisseries métalliques"
    },
    {
        "code": "25.12.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de portes "
    },
    {
        "code": "25.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de portes "
    },
    {
        "code": "25.2",
        "name": "Réservoirs, citernes et conteneurs métalliques"
    },
    {
        "code": "25.21",
        "name": "Radiateurs et chaudières pour le chauffage central"
    },
    {
        "code": "25.21.1",
        "name": "Radiateurs et chaudières pour le chauffage central"
    },
    {
        "code": "25.21.11",
        "name": "Radiateurs pour le chauffage, non électriques, en fonte ou en acier"
    },
    {
        "code": "25.21.12",
        "name": "Chaudières pour le chauffage central, à eau chaude ou à vapeur; "
    },
    {
        "code": "25.21.13",
        "name": "Parties de chaudières pour le chauffage central"
    },
    {
        "code": "25.21.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.21.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.22",
        "name": "Récipients métalliques pour gaz comprimés ou liquéﬁés"
    },
    {
        "code": "25.22.1",
        "name": "Récipients métalliques pour gaz comprimés ou liquéﬁés"
    },
    {
        "code": "25.22.10",
        "name": "Récipients métalliques pour gaz comprimés ou liquéﬁés"
    },
    {
        "code": "25.22.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.22.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de récipients "
    },
    {
        "code": "25.29",
        "name": "Autres réservoirs, citernes et conteneurs métalliques"
    },
    {
        "code": "25.29.1",
        "name": "Autres réservoirs, citernes et conteneurs métalliques"
    },
    {
        "code": "25.29.10",
        "name": "Réservoirs, foudres, cuves et conteneurs similaires (autres que pour "
    },
    {
        "code": "25.29.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.29.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.3",
        "name": "Générateurs  de  vapeur,  à  l’exclusion  des  chaudières  pour "
    },
    {
        "code": "25.30",
        "name": "Générateurs  de  vapeur,  à  l’exclusion  des  chaudières  pour "
    },
    {
        "code": "25.30.1",
        "name": "Générateurs de vapeur et leurs éléments"
    },
    {
        "code": "25.30.11",
        "name": "Générateurs  produisant  de  la  vapeur;  générateurs  produisant  de "
    },
    {
        "code": "25.30.12",
        "name": "Auxiliaires des générateurs de vapeur; condensateurs"
    },
    {
        "code": "25.30.13",
        "name": "Éléments de générateurs de vapeur"
    },
    {
        "code": "25.30.2",
        "name": "Réacteurs nucléaires et leurs éléments"
    },
    {
        "code": "25.30.21",
        "name": "Réacteurs nucléaires, à l’exclusion des séparateurs d’isotope"
    },
    {
        "code": "25.30.22",
        "name": "Éléments  de  réacteurs  nucléaires,  à  l’exclusion  des  séparateurs "
    },
    {
        "code": "25.30.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.30.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.4",
        "name": "Armes et munitions"
    },
    {
        "code": "25.40",
        "name": "Armes et munitions"
    },
    {
        "code": "25.40.1",
        "name": "Armes et munitions et leurs parties"
    },
    {
        "code": "25.40.11",
        "name": "Armes de guerre, autres que revolvers, pistolets et armes similaires"
    },
    {
        "code": "25.40.12",
        "name": "Revolvers, pistolets, armes à feu de chasse et armes similaires"
    },
    {
        "code": "25.40.13",
        "name": "Bombes,  missiles  et  armements  de  guerre  similaires;  cartouches, "
    },
    {
        "code": "25.40.14",
        "name": "Parties et pièces d’armes de guerre ou de chasse"
    },
    {
        "code": "25.40.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’armes "
    },
    {
        "code": "25.40.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’armes et "
    },
    {
        "code": "25.5",
        "name": "Produits de la forge, de l’emboutissage, de l’estampage et du "
    },
    {
        "code": "25.50",
        "name": "Produits  de  la  forge,  de  l’emboutissage,  de  l’estampage  et  du "
    },
    {
        "code": "25.50.1",
        "name": "Produits de la forge, de l’emboutissage, de l’estampage et du proﬁlage"
    },
    {
        "code": "25.50.11",
        "name": "Travaux de grosse forge et de forge libre, sur plan"
    },
    {
        "code": "25.50.12",
        "name": "Travaux d’estampage, sur plan"
    },
    {
        "code": "25.50.13",
        "name": "Travaux de découpage-emboutissage, sur plan"
    },
    {
        "code": "25.50.2",
        "name": "Travaux de la métallurgie des poudres"
    },
    {
        "code": "25.50.20",
        "name": "Travaux de la métallurgie des poudres"
    },
    {
        "code": "25.6",
        "name": "Traitement et revêtement des métaux; usinage"
    },
    {
        "code": "25.61",
        "name": "Traitement et revêtement des métaux"
    },
    {
        "code": "25.61.1",
        "name": "Revêtement des métaux"
    },
    {
        "code": "25.61.11",
        "name": "Revêtement métallique des métaux"
    },
    {
        "code": "25.61.12",
        "name": "Revêtement non métallique des métaux"
    },
    {
        "code": "25.61.2",
        "name": "Autres traitements des métaux"
    },
    {
        "code": "25.61.21",
        "name": "Traitements  thermiques  des  métaux,  autres  que  revêtement "
    },
    {
        "code": "25.61.22",
        "name": "Autres traitements de surface des métaux"
    },
    {
        "code": "25.62",
        "name": "Usinage"
    },
    {
        "code": "25.62.1",
        "name": "Décolletage"
    },
    {
        "code": "25.62.10",
        "name": "Décolletage"
    },
    {
        "code": "25.62.2",
        "name": "Autres travaux d’usinage"
    },
    {
        "code": "25.62.20",
        "name": "Autres travaux d’usinage"
    },
    {
        "code": "25.7",
        "name": "Coutellerie, outillage et quincaillerie"
    },
    {
        "code": "25.71",
        "name": "Articles de coutellerie"
    },
    {
        "code": "25.71.1",
        "name": "Articles de coutellerie"
    },
    {
        "code": "25.71.11",
        "name": "Couteaux et ciseaux, et leurs lames"
    },
    {
        "code": "25.71.12",
        "name": "Rasoirs  mécaniques  et  lames  de  rasoir,  y  compris  ébauches  en "
    },
    {
        "code": "25.71.13",
        "name": "Autres  articles  de  coutellerie;  outils  et  trousses  de  manucure  et "
    },
    {
        "code": "25.71.14",
        "name": "Cuillères, fourchettes, louches, écumoires, pelles à tartes, couteaux "
    },
    {
        "code": "25.71.15",
        "name": "Épées,  sabres,  baïonnettes,  lances  et  armes  similaires,  et  leurs "
    },
    {
        "code": "25.71.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "25.71.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "25.72",
        "name": "Serrures et ferrures"
    },
    {
        "code": "25.72.1",
        "name": "Serrures et ferrures"
    },
    {
        "code": "25.72.11",
        "name": "Serrures pour l’automobile et l’ameublement, en métaux communs"
    },
    {
        "code": "25.72.12",
        "name": "Autres serrures, en métaux communs"
    },
    {
        "code": "25.72.13",
        "name": "Fermoirs  et  montures-fermoirs  comportant  une  serrure,  et  leurs "
    },
    {
        "code": "25.72.14",
        "name": "Ferrures,  garnitures,  accessoires  et  articles  similaires  pour "
    },
    {
        "code": "25.72.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "25.72.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de serrures "
    },
    {
        "code": "25.73",
        "name": "Outils à main"
    },
    {
        "code": "25.73.1",
        "name": "Outils à main agricoles, horticoles ou forestiers"
    },
    {
        "code": "25.73.10",
        "name": "Outils à main agricoles, horticoles ou forestiers"
    },
    {
        "code": "25.73.2",
        "name": "Scies à main; lames de scie de toutes sortes"
    },
    {
        "code": "25.73.20",
        "name": "Scies à main; lames de scie de toutes sortes"
    },
    {
        "code": "25.73.3",
        "name": "Autres outils à main"
    },
    {
        "code": "25.73.30",
        "name": "Autres outils à main"
    },
    {
        "code": "25.73.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'outils "
    },
    {
        "code": "25.73.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'outils à "
    },
    {
        "code": "25.74",
        "name": "Outillage mécanique"
    },
    {
        "code": "25.74.1",
        "name": "Outils interchangeables pour outillage à main, mécanique ou non, "
    },
    {
        "code": "25.74.10",
        "name": "Outils interchangeables pour outillage à main, mécanique ou non, "
    },
    {
        "code": "25.74.2",
        "name": "Moules; châssis de moulage pour la fonderie; carcasses; modèles"
    },
    {
        "code": "25.74.20",
        "name": "Moules; châssis de moulage pour la fonderie; carcasses; modèles"
    },
    {
        "code": "25.74.3",
        "name": "Autres outils mécaniques"
    },
    {
        "code": "25.74.30",
        "name": "Autres outils mécaniques"
    },
    {
        "code": "25.74.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’outillage "
    },
    {
        "code": "25.74.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’outillage "
    },
    {
        "code": "25.9",
        "name": "Autres ouvrages en métaux"
    },
    {
        "code": "25.91",
        "name": "Bidons métalliques et récipients similaires"
    },
    {
        "code": "25.91.1",
        "name": "Bidons métalliques et récipients similaires"
    },
    {
        "code": "25.91.11",
        "name": "Fûts,  bidons,  tonnelets,  boîtes  et  récipients  similaires,  pour  tout "
    },
    {
        "code": "25.91.12",
        "name": "Fûts, bidons, tonnelets, boîtes et récipients similaires (à l’exclusion "
    },
    {
        "code": "25.91.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de bidons "
    },
    {
        "code": "25.91.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de bidons "
    },
    {
        "code": "25.92",
        "name": "Emballages légers métalliques"
    },
    {
        "code": "25.92.1",
        "name": "Emballages légers métalliques"
    },
    {
        "code": "25.92.11",
        "name": "Boîtes,  en  fer  ou  en  acier,  à  souder  ou  à  sertir,  d’une  capacité "
    },
    {
        "code": "25.92.12",
        "name": "Fûts,  bidons,  tonnelets,  boîtes  et  récipients  similaires,  pour  tout "
    },
    {
        "code": "25.92.13",
        "name": "Bouchons,  bouchons-couronnes,  couvercles,  capsules,  en  métaux "
    },
    {
        "code": "25.92.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "25.92.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "25.93",
        "name": "Articles en ﬁls, chaînes et ressorts"
    },
    {
        "code": "25.93.1",
        "name": "Articles en ﬁls, chaînes et ressorts"
    },
    {
        "code": "25.93.11",
        "name": "Torons, câbles, tresses, élingues et articles similaires, en fer ou en "
    },
    {
        "code": "25.93.12",
        "name": "Ronces  artiﬁcielles en fer ou en acier; torons, câbles, tresses et"
    },
    {
        "code": "25.93.13",
        "name": "Toiles métalliques, grillages et treillis, en ﬁls de fer, d’acier ou de"
    },
    {
        "code": "25.93.14",
        "name": "Pointes, clous, punaises, agrafes et articles similaires"
    },
    {
        "code": "25.93.15",
        "name": "Fils, baguettes, tubes, plaques, électrodes, enrobés ou fourrés pour "
    },
    {
        "code": "25.93.16",
        "name": "Ressorts et lames de ressorts, en fer ou en acier; ressorts en cuivre"
    },
    {
        "code": "25.93.17",
        "name": "Chaînes et chaînettes (à l’exclusion des chaînes à maillons articulés), "
    },
    {
        "code": "25.93.18",
        "name": "Aiguilles  à  coudre,  aiguilles  à  tricoter,  passe-lacets,  crochets, "
    },
    {
        "code": "25.93.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "25.93.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "25.94",
        "name": "Vis et boulons"
    },
    {
        "code": "25.94.1",
        "name": "Vis et boulons"
    },
    {
        "code": "25.94.11",
        "name": "Vis et boulons ﬁletés, en fer ou en acier, n.c.a."
    },
    {
        "code": "25.94.12",
        "name": "Vis et boulons non ﬁletés, en fer ou en acier, n.c.a."
    },
    {
        "code": "25.94.13",
        "name": "Vis et boulons ﬁletés et non ﬁletés, en cuivre"
    },
    {
        "code": "25.94.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de vis et boulons"
    },
    {
        "code": "25.94.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de vis et "
    },
    {
        "code": "25.95",
        "name": "Ouvrages traditionnels en métaux"
    },
    {
        "code": "25.95.1",
        "name": "Ouvrages traditionnels en métaux"
    },
    {
        "code": "25.95.10",
        "name": "Ouvrages  traditionnels  en  métaux:  (Articles  de  table,  objets "
    },
    {
        "code": "25.95.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication artisanale "
    },
    {
        "code": "25.95.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication artisanale "
    },
    {
        "code": "25.99",
        "name": "Autres produits métalliques n.c.a."
    },
    {
        "code": "25.99.1",
        "name": "Articles métalliques domestiques"
    },
    {
        "code": "25.99.11",
        "name": "Eviers, lavabos, baignoires et autres installations sanitaires, et leurs "
    },
    {
        "code": "25.99.12",
        "name": "Articles  de  table,  de  cuisine  et  ménagers  industrielles  et  leurs "
    },
    {
        "code": "25.99.2",
        "name": "Autres articles en métaux communs"
    },
    {
        "code": "25.99.21",
        "name": "Coffres-forts,  portes  blindées  et  compartiments  pour  chambres "
    },
    {
        "code": "25.99.22",
        "name": "Boîtes  de  classement,  porte-copies,  plumiers,  porte-cachets  et "
    },
    {
        "code": "25.99.23",
        "name": "Mécanismes  pour  reliure  de  feuillets  mobiles  ou  pour  classeurs, "
    },
    {
        "code": "25.99.24",
        "name": "Statuettes et autres objets d’ornement, cadres et miroirs, industriels, "
    },
    {
        "code": "25.99.25",
        "name": "Fermoirs,  montures-fermoirs,  boucles,  boucles-fermoirs,  agrafes, "
    },
    {
        "code": "25.99.26",
        "name": "Hélices et pales d’hélices pour bateaux"
    },
    {
        "code": "25.99.29",
        "name": "Autres articles industriels en métaux communs n.c.a."
    },
    {
        "code": "25.99.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "25.99.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "26",
        "name": "Produits informatiques, électroniques et optiques"
    },
    {
        "code": "26.1",
        "name": "Composants et cartes électroniques"
    },
    {
        "code": "26.11",
        "name": "Composants électroniques"
    },
    {
        "code": "26.11.1",
        "name": "Lampes, tubes et valves électroniques à cathode chaude, à cathode "
    },
    {
        "code": "26.11.11",
        "name": "Tubes  cathodiques  pour  récepteurs  de  télévision;  tubes  pour "
    },
    {
        "code": "26.11.12",
        "name": "Magnétrons, klystrons, tubes à ondes progressives et autres tubes "
    },
    {
        "code": "26.11.2",
        "name": "Diodes et transistors"
    },
    {
        "code": "26.11.21",
        "name": "Diodes; transistors; thyristors, diacs et triacs"
    },
    {
        "code": "26.11.22",
        "name": "Dispositifs  à  semi-conducteur;  diodes  émettrices  de  lumière; "
    },
    {
        "code": "26.11.3",
        "name": "Circuits intégrés électroniques"
    },
    {
        "code": "26.11.30",
        "name": "Circuits intégrés électroniques"
    },
    {
        "code": "26.11.4",
        "name": "Parties de tubes, valves et autres composants électroniques n.c.a."
    },
    {
        "code": "26.11.40",
        "name": "Parties de tubes, valves et autres composants électroniques n.c.a."
    },
    {
        "code": "26.11.9",
        "name": "Circuits  intégrés  électroniques;  opérations  sous-traitées "
    },
    {
        "code": "26.11.91",
        "name": "Circuits intégrés électroniques"
    },
    {
        "code": "26.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "26.12",
        "name": "Cartes électroniques assemblées"
    },
    {
        "code": "26.12.1",
        "name": "Circuits imprimés chargés"
    },
    {
        "code": "26.12.10",
        "name": "Circuits imprimés chargés"
    },
    {
        "code": "26.12.2",
        "name": "Cartes son, vidéo, réseau et similaires pour unités automatiques de "
    },
    {
        "code": "26.12.20",
        "name": "Cartes son, vidéo, réseau et similaires pour unités automatiques de "
    },
    {
        "code": "26.12.3",
        "name": "Cartes intelligentes"
    },
    {
        "code": "26.12.30",
        "name": "Cartes intelligentes"
    },
    {
        "code": "26.12.9",
        "name": "Impression de circuits; opérations sous-traitées intervenant dans "
    },
    {
        "code": "26.12.91",
        "name": "Impression de circuits"
    },
    {
        "code": "26.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de cartes "
    },
    {
        "code": "26.2",
        "name": "Ordinateurs et équipements périphériques"
    },
    {
        "code": "26.20",
        "name": "Ordinateurs et équipements périphériques"
    },
    {
        "code": "26.20.1",
        "name": "Ordinateurs et leurs parties et accessoires"
    },
    {
        "code": "26.20.11",
        "name": "Micro-ordinateurs portables dont le poids n'excède pas 10 kg, tels "
    },
    {
        "code": "26.20.12",
        "name": "Terminaux point de vente, GAB et machines similaires, pouvant être "
    },
    {
        "code": "26.20.13",
        "name": "Unités  intégrées  de  traitement  de  l'information  comportant,  sous "
    },
    {
        "code": "26.20.14",
        "name": "Systèmes informatiques"
    },
    {
        "code": "26.20.15",
        "name": "Autres  unités  intégrées  de  traitement  de  l’information,  pouvant "
    },
    {
        "code": "26.20.16",
        "name": "Unités  d’entrée  ou  de  sortie  comportant  ou  non  des  unités  de "
    },
    {
        "code": "26.20.17",
        "name": "Moniteurs  et  projecteurs  utilisés  principalement  dans  un  système "
    },
    {
        "code": "26.20.18",
        "name": "Unités  effectuant  deux  ou  plusieurs  des  fonctions  suivantes: "
    },
    {
        "code": "26.20.2",
        "name": "Unités de mémoire et autres dispositifs de stockage"
    },
    {
        "code": "26.20.21",
        "name": "Unités de mémoire"
    },
    {
        "code": "26.20.22",
        "name": "Dispositifs à mémoire rémanente à semi-conducteurs"
    },
    {
        "code": "26.20.3",
        "name": "Autres unités pour matériel informatique"
    },
    {
        "code": "26.20.30",
        "name": "Autres unités pour matériel informatique"
    },
    {
        "code": "26.20.4",
        "name": "Parties et accessoires pour matériel informatique"
    },
    {
        "code": "26.20.40",
        "name": "Parties et accessoires pour matériel informatique"
    },
    {
        "code": "26.20.9",
        "name": "Ordinateurs et équipements périphériques; opérations sous-traitées "
    },
    {
        "code": "26.20.91",
        "name": "Ordinateurs et équipements périphériques"
    },
    {
        "code": "26.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "26.3",
        "name": "Équipements de communication"
    },
    {
        "code": "26.30",
        "name": "Équipements de communication"
    },
    {
        "code": "26.30.1",
        "name": "Appareils  d’émission  pour  la  radiodiffusion  ou  la  télévision; "
    },
    {
        "code": "26.30.11",
        "name": "Appareils d’émission incorporant un appareil de réception"
    },
    {
        "code": "26.30.12",
        "name": "Appareils d’émission sans appareil de réception"
    },
    {
        "code": "26.30.13",
        "name": "Caméras de télévision"
    },
    {
        "code": "26.30.2",
        "name": "Appareils électriques pour la téléphonie ou la télégraphie par "
    },
    {
        "code": "26.30.21",
        "name": "Postes téléphoniques d’usager ﬁxes à combinés sans ﬁl"
    },
    {
        "code": "26.30.22",
        "name": "Téléphones pour réseaux cellulaires et autres réseaux sans ﬁl"
    },
    {
        "code": "26.30.23",
        "name": "Autres  postes  téléphoniques  pour  usager  et  appareils  d’émission "
    },
    {
        "code": "26.30.3",
        "name": "Parties de matériel téléphonique et télégraphique"
    },
    {
        "code": "26.30.30",
        "name": "Parties de matériel téléphonique et télégraphique"
    },
    {
        "code": "26.30.4",
        "name": "Antennes et réﬂecteurs d’antenne de tous types et leurs parties;"
    },
    {
        "code": "26.30.40",
        "name": "Antennes  et  réﬂecteurs d’antenne de tous types et leurs parties;"
    },
    {
        "code": "26.30.5",
        "name": "Avertisseurs  pour  la  protection  contre  le  vol  ou  l’incendie  et "
    },
    {
        "code": "26.30.50",
        "name": "Avertisseurs  pour  la  protection  contre  le  vol  ou  l’incendie  et "
    },
    {
        "code": "26.30.6",
        "name": "Parties d’avertisseurs pour la protection contre le vol ou l’incendie "
    },
    {
        "code": "26.30.60",
        "name": "Parties d’avertisseurs pour la protection contre le vol ou l’incendie "
    },
    {
        "code": "26.30.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "26.30.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "26.4",
        "name": "Produits électroniques grand public"
    },
    {
        "code": "26.40",
        "name": "Produits électroniques grand public"
    },
    {
        "code": "26.40.1",
        "name": "Récepteurs radio"
    },
    {
        "code": "26.40.11",
        "name": "Récepteurs radio (à l’exclusion des autoradios) pouvant fonctionner "
    },
    {
        "code": "26.40.12",
        "name": "Récepteurs  radios  ne  pouvant  fonctionner  sans  source  d’énergie "
    },
    {
        "code": "26.40.2",
        "name": "Récepteurs de télévision, combinés ou non à un récepteur de radio "
    },
    {
        "code": "26.40.20",
        "name": "Récepteurs de télévision, combinés ou non à un récepteur de radio ou un "
    },
    {
        "code": "26.40.3",
        "name": "Appareils  d’enregistrement  ou  de  reproduction  du  son  ou  des "
    },
    {
        "code": "26.40.31",
        "name": "Électrophones, lecteurs de disques ou de cassettes et autres appareils "
    },
    {
        "code": "26.40.32",
        "name": "Magnétophones et autres appareils d’enregistrement du son"
    },
    {
        "code": "26.40.33",
        "name": "Caméscopes et autres appareils d’enregistrement et de reproduction "
    },
    {
        "code": "26.40.34",
        "name": "Moniteurs et projecteurs, n’incorporant pas un récepteur de télévision "
    },
    {
        "code": "26.40.4",
        "name": "Microphones, haut-parleurs, récepteurs de radiotéléphonie ou de "
    },
    {
        "code": "26.40.41",
        "name": "Microphones et leurs supports"
    },
    {
        "code": "26.40.42",
        "name": "Haut-parleurs;  casques  d’écoute,  écouteurs,  et  ensembles "
    },
    {
        "code": "26.40.43",
        "name": "Ampliﬁcateurs électriques d’audiofréquence; appareils électriques"
    },
    {
        "code": "26.40.44",
        "name": "Récepteurs de radiotéléphonie ou de télégraphie n.c.a."
    },
    {
        "code": "26.40.5",
        "name": "Parties d’appareils de réception, enregistrement ou reproduction "
    },
    {
        "code": "26.40.51",
        "name": "Parties et accessoires d’appareils de réception, enregistrement ou "
    },
    {
        "code": "26.40.52",
        "name": "Parties d’émetteurs et de récepteurs radio"
    },
    {
        "code": "26.40.6",
        "name": "Jeux vidéo (utilisables avec un récepteur de télévision ou à écran "
    },
    {
        "code": "26.40.60",
        "name": "Jeux vidéo (utilisables avec un récepteur de télévision ou à écran "
    },
    {
        "code": "26.40.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "26.40.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de produits "
    },
    {
        "code": "26.5",
        "name": "Instruments et appareils de mesure, d’essai et de navigation; "
    },
    {
        "code": "26.51",
        "name": "Instruments et appareils de mesure, d’essai et de navigation"
    },
    {
        "code": "26.51.1",
        "name": "Instruments  et  appareils  d’aide  à  la  navigation  et  de  mesures "
    },
    {
        "code": "26.51.11",
        "name": "Boussoles et compas de navigation; autres instruments et appareils "
    },
    {
        "code": "26.51.12",
        "name": "Télémètres,  théodolites,  tachéomètres;  autres  équipements  de "
    },
    {
        "code": "26.51.2",
        "name": "Appareils radar et de radionavigation"
    },
    {
        "code": "26.51.20",
        "name": "Appareils radar et de radionavigation"
    },
    {
        "code": "26.51.3",
        "name": "Balances de précision; instruments de dessin, calcul et mesure des "
    },
    {
        "code": "26.51.31",
        "name": "Balances d’une sensibilité de 5 cg ou supérieure"
    },
    {
        "code": "26.51.32",
        "name": "Tables à dessin et autres instruments de dessin, traçage ou calcul"
    },
    {
        "code": "26.51.33",
        "name": "Instruments de mesure des longueurs, à main (y compris micromètres "
    },
    {
        "code": "26.51.4",
        "name": "Instruments de mesure de grandeurs électriques ou de radiations "
    },
    {
        "code": "26.51.41",
        "name": "Instruments et appareils de mesure et de détection des radiations "
    },
    {
        "code": "26.51.42",
        "name": "Oscilloscopes et oscillographes cathodiques"
    },
    {
        "code": "26.51.43",
        "name": "Instruments de contrôle et de mesure électriques"
    },
    {
        "code": "26.51.44",
        "name": "Instruments et appareils de contrôle en télécommunications"
    },
    {
        "code": "26.51.45",
        "name": "Instruments  et  appareils  de  mesure  ou  de  contrôle  de  grandeurs "
    },
    {
        "code": "26.51.5",
        "name": "Instruments de contrôle d’autres grandeurs physiques"
    },
    {
        "code": "26.51.51",
        "name": "Thermomètres,  densimètres,  pyromètres,  baromètres,  hygromètres "
    },
    {
        "code": "26.51.52",
        "name": "Instruments  de  mesure  ou  de  contrôle  du  débit,  du  niveau,  de  la "
    },
    {
        "code": "26.51.53",
        "name": "Instruments  et  appareils  pour  analyses  et  essais  physiques  ou "
    },
    {
        "code": "26.51.6",
        "name": "Autres instruments et appareils de mesure, de contrôle et d’essai"
    },
    {
        "code": "26.51.61",
        "name": "Microscopes  (à  l’exclusion  des  microscopes  optiques)  et "
    },
    {
        "code": "26.51.62",
        "name": "Appareils et dispositifs d’essais des matériaux"
    },
    {
        "code": "26.51.63",
        "name": "Compteurs de liquide, de gaz et d’électricité"
    },
    {
        "code": "26.51.64",
        "name": "Compte-tours,  taximètres;  compteurs  de  vitesse  et  tachymètres; "
    },
    {
        "code": "26.51.65",
        "name": "Instruments et appareils de régulation ou de contrôle automatiques, "
    },
    {
        "code": "26.51.66",
        "name": "Instruments et appareils de mesure ou de contrôle n.c.a."
    },
    {
        "code": "26.51.7",
        "name": "Thermostats,  manostats  et  autres  instruments  et  appareils  de "
    },
    {
        "code": "26.51.70",
        "name": "Thermostats,  manostats  et  autres  instruments  et  appareils  de "
    },
    {
        "code": "26.51.8",
        "name": "Parties  et  accessoires  des  instruments  et  appareils  de  mesure, "
    },
    {
        "code": "26.51.81",
        "name": "Parties des appareils radar et de radionavigation"
    },
    {
        "code": "26.51.82",
        "name": "Parties et accessoires des articles des catégories 26.51.12, 26.51.32, "
    },
    {
        "code": "26.51.33,",
        "name": "26.51.4 et 26.51.5; microtomes; parties n.c.a."
    },
    {
        "code": "26.51.83",
        "name": "Parties  et  accessoires  des  microscopes  (autres  qu’optiques)  et "
    },
    {
        "code": "26.51.84",
        "name": "Parties  et  accessoires  des  articles  des  catégories  26.51.63  et "
    },
    {
        "code": "26.51.85",
        "name": "Parties et accessoires des instruments et appareils des catégories "
    },
    {
        "code": "26.51.65,",
        "name": "26.51.66 et 26.51.70"
    },
    {
        "code": "26.51.86",
        "name": "Parties et accessoires des instruments et appareils des catégories "
    },
    {
        "code": "26.51.11",
        "name": "et 26.51.62"
    },
    {
        "code": "26.51.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "26.51.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "26.52",
        "name": "Articles d’horlogerie"
    },
    {
        "code": "26.52.1",
        "name": "Montres  et  autres  compteurs  de  temps,  à  l’exclusion  de  leurs "
    },
    {
        "code": "26.52.11",
        "name": "Montres-bracelets et montres de gousset, en métal précieux ou en "
    },
    {
        "code": "26.52.12",
        "name": "Autres  montres-bracelets,  montres  de  gousset,  y  compris "
    },
    {
        "code": "26.52.13",
        "name": "Pendulettes pour tableaux de bord"
    },
    {
        "code": "26.52.14",
        "name": "Pendules; réveils et horloges; autres compteurs de temps"
    },
    {
        "code": "26.52.2",
        "name": "Mouvements et éléments de montres"
    },
    {
        "code": "26.52.21",
        "name": "Mouvements de montres, complets et assemblés"
    },
    {
        "code": "26.52.22",
        "name": "Mouvements d’horlogerie, complets et assemblés"
    },
    {
        "code": "26.52.23",
        "name": "Mouvements de montres complets, non assemblés ou partiellement "
    },
    {
        "code": "26.52.24",
        "name": "Ébauches de montres"
    },
    {
        "code": "26.52.25",
        "name": "Mouvements  d’horlogerie  complets,  incomplets  et  ébauches,  non "
    },
    {
        "code": "26.52.26",
        "name": "Boîtiers de montres et leurs parties"
    },
    {
        "code": "26.52.27",
        "name": "Autres fournitures d’horlogerie"
    },
    {
        "code": "26.52.28",
        "name": "Registres  d’horloge,  horodateurs,  parcmètres;  minuteries  avec "
    },
    {
        "code": "26.52.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "26.52.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "26.6",
        "name": "Équipements  d’irradiation  médicale,  électromédicaux  et "
    },
    {
        "code": "26.60",
        "name": "Équipements  d’irradiation  médicale,  électromédicaux  et "
    },
    {
        "code": "26.60.1",
        "name": "Équipements  d’irradiation  médicale,  électromédicaux  et "
    },
    {
        "code": "26.60.11",
        "name": "Matériel  de  radiologie  utilisant  les  rayons  X,  alpha,  bêta  ou "
    },
    {
        "code": "26.60.12",
        "name": "Appareils d’électrodiagnostic utilisés en médecine"
    },
    {
        "code": "26.60.13",
        "name": "Appareils  à  rayonnements  ultraviolets  ou  infrarouges,  utilisés  en "
    },
    {
        "code": "26.60.14",
        "name": "Stimulateurs cardiaques: prothèses auditives"
    },
    {
        "code": "26.60.9",
        "name": "Appareils médicaux; opérations sous-traitées intervenant dans la "
    },
    {
        "code": "26.60.91",
        "name": "Appareils médicaux"
    },
    {
        "code": "26.60.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'équipements "
    },
    {
        "code": "26.7",
        "name": "Matériel optique et photographique"
    },
    {
        "code": "26.70",
        "name": "Matériel optique et photographique"
    },
    {
        "code": "26.70.1",
        "name": "Matériel photographique et parties"
    },
    {
        "code": "26.70.11",
        "name": "Objectifs  pour  appareils  de  prise  de  vue,  de  projection, "
    },
    {
        "code": "26.70.12",
        "name": "Chambres  spéciales  pour  photogravure  et  photocomposition; "
    },
    {
        "code": "26.70.13",
        "name": "Appareils photographiques numériques"
    },
    {
        "code": "26.70.14",
        "name": "Appareils photographiques, y compris appareils à développement "
    },
    {
        "code": "26.70.15",
        "name": "Caméras cinématographiques"
    },
    {
        "code": "26.70.16",
        "name": "Projecteurs  cinématographiques;  projecteurs  de  transparents; "
    },
    {
        "code": "26.70.17",
        "name": "Flashs électroniques; matériel pour agrandissement; matériel pour "
    },
    {
        "code": "26.70.18",
        "name": "Lecteurs de microﬁlms, microﬁches ou autres microformes"
    },
    {
        "code": "26.70.19",
        "name": "Parties et accessoires de matériel photographique"
    },
    {
        "code": "26.70.2",
        "name": "Autre matériel optique et parties"
    },
    {
        "code": "26.70.21",
        "name": "Feuilles et plaques polarisantes; lentilles, prismes, miroirs et autres "
    },
    {
        "code": "26.70.22",
        "name": "Jumelles,  longues-vues  et  autres  télescopes  optiques;  autres "
    },
    {
        "code": "26.70.23",
        "name": "Dispositifs à cristaux liquides; lasers, à l’exclusion de diodes laser, "
    },
    {
        "code": "26.70.24",
        "name": "Parties et accessoires de jumelles, longues-vues et autres télescopes "
    },
    {
        "code": "26.70.25",
        "name": "Parties  et  accessoires  de  dispositifs  à  cristaux  liquides,  de  lasers "
    },
    {
        "code": "26.70.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "26.70.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de matériel "
    },
    {
        "code": "26.8",
        "name": "Supports magnétiques et optiques"
    },
    {
        "code": "26.80",
        "name": "Supports magnétiques et optiques"
    },
    {
        "code": "26.80.1",
        "name": "Supports magnétiques et optiques"
    },
    {
        "code": "26.80.11",
        "name": "Supports  magnétiques  vierges,  à  l’exclusion  des  cartes  à  piste "
    },
    {
        "code": "26.80.12",
        "name": "Supports optiques vierges"
    },
    {
        "code": "26.80.13",
        "name": "Autres  supports  d’enregistrement,  y  compris  matrices  et  bandes "
    },
    {
        "code": "26.80.14",
        "name": "Cartes à piste magnétique"
    },
    {
        "code": "26.80.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "26.80.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de supports "
    },
    {
        "code": "27",
        "name": "Équipements électriques"
    },
    {
        "code": "27.1",
        "name": "Moteurs,  génératrices  et  transformateurs  électriques  et "
    },
    {
        "code": "27.11",
        "name": "Moteurs, génératrices et transformateurs électriques"
    },
    {
        "code": "27.11.1",
        "name": "Moteurs  d’une  puissance  inférieure  ou  égale  à  37,5  W;  autres "
    },
    {
        "code": "27.11.10",
        "name": "Moteurs  d’une  puissance  inférieure  ou  égale  à  37,5  W;  autres "
    },
    {
        "code": "27.11.2",
        "name": "Moteurs universels d’une puissance supérieure à 37,5 W; autres "
    },
    {
        "code": "27.11.21",
        "name": "Moteurs universels d’une puissance supérieure à 37,5 W"
    },
    {
        "code": "27.11.22",
        "name": "Moteurs à courant alternatif, monophasés"
    },
    {
        "code": "27.11.23",
        "name": "Moteurs à courant alternatif, polyphasés, d’une puissance inférieure "
    },
    {
        "code": "27.11.24",
        "name": "Moteurs à courant alternatif, polyphasés, d’une puissance comprise "
    },
    {
        "code": "27.11.25",
        "name": "Moteurs à courant alternatif, polyphasés, d’une puissance supérieure "
    },
    {
        "code": "27.11.26",
        "name": "Génératrices (alternateurs) à courant alternatif"
    },
    {
        "code": "27.11.3",
        "name": "Groupes électrogènes et convertisseurs rotatifs"
    },
    {
        "code": "27.11.31",
        "name": "Groupes électrogènes à moteur diesel"
    },
    {
        "code": "27.11.32",
        "name": "Groupes  électrogènes  à  moteur  à  explosion;  autres  groupes "
    },
    {
        "code": "27.11.4",
        "name": "Transformateurs électriques"
    },
    {
        "code": "27.11.41",
        "name": "Transformateurs à diélectrique liquide"
    },
    {
        "code": "27.11.42",
        "name": "Autres transformateurs, d’une puissance inférieure ou égale à "
    },
    {
        "code": "16",
        "name": "kVA"
    },
    {
        "code": "27.11.43",
        "name": "Autres transformateurs, d’une puissance supérieure à 16 kVA"
    },
    {
        "code": "27.11.5",
        "name": "Ballasts pour lampes ou tubes à décharge; convertisseurs statiques; "
    },
    {
        "code": "27.11.50",
        "name": "Ballasts pour lampes ou tubes à décharge; convertisseurs statiques; "
    },
    {
        "code": "27.11.6",
        "name": "Parties de moteurs, génératrices et transformateurs électriques"
    },
    {
        "code": "27.11.61",
        "name": "Parties de moteurs et génératrices électriques"
    },
    {
        "code": "27.11.62",
        "name": "Parties de transformateurs, bobines de réactance et convertisseurs "
    },
    {
        "code": "27.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "27.11.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de moteurs, "
    },
    {
        "code": "27.12",
        "name": "Matériel de distribution et de commande électrique"
    },
    {
        "code": "27.12.1",
        "name": "Matériel de commande et de protection de circuits électriques, "
    },
    {
        "code": "27.12.10",
        "name": "Matériel de commande et de protection de circuits électriques, pour "
    },
    {
        "code": "27.12.2",
        "name": "Matériel  de  commande  et  de  protection  de  circuits  électriques, "
    },
    {
        "code": "27.12.21",
        "name": "\"Fusibles et coupe-circuit à fusibles, pour une tension inférieure ou "
    },
    {
        "code": "27.12.22",
        "name": "Disjoncteurs, pour une tension inférieure ou égale à 1 000 V"
    },
    {
        "code": "27.12.23",
        "name": "Appareils  de  protection  des  circuits  électriques  n.c.a.,  pour  une "
    },
    {
        "code": "27.12.24",
        "name": "Relais, pour une tension inférieure ou égale à 1 000 V"
    },
    {
        "code": "27.12.3",
        "name": "Armoires de commande électrique"
    },
    {
        "code": "27.12.31",
        "name": "Armoires  et  autres  supports  de  commande  ou  de  protection "
    },
    {
        "code": "1",
        "name": "000 V"
    },
    {
        "code": "27.12.32",
        "name": "Armoires et autres supports de commande ou de protection "
    },
    {
        "code": "000",
        "name": "V"
    },
    {
        "code": "27.12.4",
        "name": "Parties de matériel de distribution et de commande électrique"
    },
    {
        "code": "27.12.40",
        "name": "Parties de matériel de distribution et de commande électrique"
    },
    {
        "code": "27.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "27.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de matériel "
    },
    {
        "code": "27.2",
        "name": "Piles et accumulateurs électriques"
    },
    {
        "code": "27.20",
        "name": "Piles et accumulateurs électriques"
    },
    {
        "code": "27.20.1",
        "name": "Piles et batteries de piles électriques et leurs parties"
    },
    {
        "code": "27.20.11",
        "name": "Piles et batteries de piles électriques"
    },
    {
        "code": "27.20.12",
        "name": "Parties de piles et batteries de piles électriques"
    },
    {
        "code": "27.20.2",
        "name": "Accumulateurs électriques et leurs parties"
    },
    {
        "code": "27.20.21",
        "name": "Accumulateurs au plomb, pour démarrage des moteurs"
    },
    {
        "code": "27.20.22",
        "name": "Accumulateurs au plomb, autres que pour démarrage des moteurs"
    },
    {
        "code": "27.20.23",
        "name": "Accumulateurs électriques au nickel-cadmium, à hydrure métallique "
    },
    {
        "code": "27.20.24",
        "name": "Parties  d’accumulateurs  électriques,  y  compris   les "
    },
    {
        "code": "27.20.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de piles et "
    },
    {
        "code": "27.20.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de piles et "
    },
    {
        "code": "27.3",
        "name": "Fils, câbles et matériel d’installation électrique"
    },
    {
        "code": "27.31",
        "name": "Câbles de ﬁbres optiques"
    },
    {
        "code": "27.31.1",
        "name": "Câbles de ﬁbres optiques"
    },
    {
        "code": "27.31.11",
        "name": "Câbles de ﬁbres optiques gainées individuellement"
    },
    {
        "code": "27.31.12",
        "name": "Fibres  optiques  et  faisceaux  de  ﬁbres optiques; câbles de ﬁbres"
    },
    {
        "code": "27.31.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de câbles "
    },
    {
        "code": "27.31.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de câbles "
    },
    {
        "code": "27.32",
        "name": "Autres ﬁls et câbles électroniques ou électriques"
    },
    {
        "code": "27.32.1",
        "name": "Autres ﬁls et câbles électroniques ou électriques"
    },
    {
        "code": "27.32.11",
        "name": "Fils pour bobinage isolé"
    },
    {
        "code": "27.32.12",
        "name": "Câbles et autres conducteurs électriques coaxiaux"
    },
    {
        "code": "27.32.13",
        "name": "Autres conducteurs électriques, pour une tension inférieure ou égale "
    },
    {
        "code": "27.32.14",
        "name": "Autres conducteurs électriques, pour une tension supérieure à 1 "
    },
    {
        "code": "000",
        "name": "V"
    },
    {
        "code": "27.32.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "27.32.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "27.33",
        "name": "Matériel d’installation électrique"
    },
    {
        "code": "27.33.1",
        "name": "Matériel d’installation électrique"
    },
    {
        "code": "27.33.11",
        "name": "Interrupteurs, pour une tension inférieure ou égale à 1 000 V"
    },
    {
        "code": "27.33.12",
        "name": "Douilles pour lampes, pour une tension inférieure ou égale à "
    },
    {
        "code": "1",
        "name": "000 V"
    },
    {
        "code": "27.33.13",
        "name": "Fiches, prises de courant et autres matériels de commande et de "
    },
    {
        "code": "27.33.14",
        "name": "Pièces isolantes en matières plastiques"
    },
    {
        "code": "27.33.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "27.33.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de matériel "
    },
    {
        "code": "27.4",
        "name": "Appareils d’éclairage électrique"
    },
    {
        "code": "27.40",
        "name": "Appareils d’éclairage électrique"
    },
    {
        "code": "27.40.1",
        "name": "Lampes électriques à incandescence ou à décharge; lampes à arc"
    },
    {
        "code": "27.40.11",
        "name": "Phares et projecteurs scellés"
    },
    {
        "code": "27.40.12",
        "name": "Lampes  tungstène-halogène,  à  l’exclusion  des  lampes  à  rayons "
    },
    {
        "code": "27.40.13",
        "name": "Lampes à incandescence, d’une puissance inférieure ou égale à 200 "
    },
    {
        "code": "27.40.14",
        "name": "Lampes à incandescence n.c.a."
    },
    {
        "code": "27.40.15",
        "name": "Lampes à décharge; lampes à rayons ultraviolets ou infrarouges; "
    },
    {
        "code": "27.40.2",
        "name": "Appareils d’éclairage"
    },
    {
        "code": "27.40.21",
        "name": "Appareils d’éclairage électriques portatifs fonctionnant sur piles, "
    },
    {
        "code": "27.40.22",
        "name": "Lampadaires, lampes de table, de bureau ou de chevet"
    },
    {
        "code": "27.40.23",
        "name": "Appareils d’éclairage non électriques"
    },
    {
        "code": "27.40.24",
        "name": "Enseignes et panneaux lumineux"
    },
    {
        "code": "27.40.25",
        "name": "Lustres, plafonniers et appliques"
    },
    {
        "code": "27.40.3",
        "name": "Autres appareils d’éclairage"
    },
    {
        "code": "27.40.31",
        "name": "Lampes ﬂash"
    },
    {
        "code": "27.40.32",
        "name": "Guirlandes électriques"
    },
    {
        "code": "27.40.33",
        "name": "Projecteurs et spots"
    },
    {
        "code": "27.40.39",
        "name": "Autres appareils d’éclairage électriques n.c.a."
    },
    {
        "code": "27.40.4",
        "name": "Parties de lampes et d’appareils d’éclairage"
    },
    {
        "code": "27.40.41",
        "name": "Parties de lampes à incandescence ou à décharge"
    },
    {
        "code": "27.40.42",
        "name": "Parties d’appareils d’éclairage"
    },
    {
        "code": "27.40.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’appareils "
    },
    {
        "code": "27.40.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’appareils "
    },
    {
        "code": "27.5",
        "name": "Appareils ménagers"
    },
    {
        "code": "27.51",
        "name": "Appareils électroménagers"
    },
    {
        "code": "27.51.1",
        "name": "Réfrigérateurs  et  congélateurs;  lave-vaisselle  et  lave-linge; "
    },
    {
        "code": "27.51.11",
        "name": "Réfrigérateurs et congélateurs à usage ménager"
    },
    {
        "code": "27.51.12",
        "name": "Lave-vaisselle à usage ménager"
    },
    {
        "code": "27.51.13",
        "name": "Lave-linge et sèche-linge à usage ménager"
    },
    {
        "code": "27.51.14",
        "name": "Couvertures chauffantes"
    },
    {
        "code": "27.51.15",
        "name": "Hottes aspirantes et ventilateurs à usage ménager"
    },
    {
        "code": "27.51.2",
        "name": "Autres appareils électroménagers n.c.a."
    },
    {
        "code": "27.51.21",
        "name": "Appareils  ménagers  électromécaniques,  à  moteur  électrique "
    },
    {
        "code": "27.51.22",
        "name": "Rasoirs,  appareils  à  épiler  et  tondeuses,  à  moteur  électrique "
    },
    {
        "code": "27.51.23",
        "name": "Sèche-cheveux  et  sèche-mains  électriques;  fers  à  repasser "
    },
    {
        "code": "27.51.24",
        "name": "Autres appareils électrothermiques"
    },
    {
        "code": "27.51.25",
        "name": "Chauffe-eau  électriques  à  accumulation  ou  instantanés  et "
    },
    {
        "code": "27.51.26",
        "name": "Radiateurs électriques"
    },
    {
        "code": "27.51.27",
        "name": "Fours à micro-ondes"
    },
    {
        "code": "27.51.28",
        "name": "Autres  fours;  cuisinières,  tables  de  cuisson,  réchaud;  grils, "
    },
    {
        "code": "27.51.29",
        "name": "Résistances chauffantes"
    },
    {
        "code": "27.51.3",
        "name": "Parties d’appareils électroménagers"
    },
    {
        "code": "27.51.30",
        "name": "Parties d’appareils électroménagers"
    },
    {
        "code": "27.51.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’appareils "
    },
    {
        "code": "27.51.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’appareils "
    },
    {
        "code": "27.52",
        "name": "Appareils ménagers non électriques"
    },
    {
        "code": "27.52.1",
        "name": "Appareils ménagers de cuisson et de chauffage, non électriques"
    },
    {
        "code": "27.52.11",
        "name": "Appareils  ménagers  de  cuisson  et  chauffe-plats,  en  fer,  acier  ou "
    },
    {
        "code": "27.52.12",
        "name": "Autres  appareils  ménagers  de  chauffage,  fonctionnant  au  gaz  ou "
    },
    {
        "code": "27.52.13",
        "name": "Générateurs et distributeurs d’air chaud n.c.a., en fer ou en acier, "
    },
    {
        "code": "27.52.14",
        "name": "Chauffe-eau à accumulation ou instantanés, non électriques"
    },
    {
        "code": "27.52.2",
        "name": "Parties d’appareils de cuisson ou de chauffage, non électriques"
    },
    {
        "code": "27.52.20",
        "name": "Parties d’appareils de cuisson ou de chauffage, non électriques"
    },
    {
        "code": "27.52.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’appareils "
    },
    {
        "code": "27.52.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’appareils "
    },
    {
        "code": "27.9",
        "name": "Autres matériels électriques"
    },
    {
        "code": "27.90",
        "name": "Autres matériels électriques"
    },
    {
        "code": "27.90.1",
        "name": "Autres matériels électriques et leurs parties"
    },
    {
        "code": "27.90.11",
        "name": "Machines et appareils électriques à fonctions spéciﬁques"
    },
    {
        "code": "27.90.12",
        "name": "Isolateurs  électriques;  pièces  isolantes  pour  machines  ou "
    },
    {
        "code": "27.90.13",
        "name": "Électrodes  en  carbone  et  autres  articles  en  graphite  ou  en  autre "
    },
    {
        "code": "27.90.2",
        "name": "Tableaux  d’afﬁchage équipés de dispositifs à cristaux liquides"
    },
    {
        "code": "27.90.20",
        "name": "Tableaux d’afﬁchage équipés de dispositifs à cristaux liquides ou de"
    },
    {
        "code": "27.90.3",
        "name": "Matériel  électrique  pour  le  soudage,  le  brasage,  la  trempe "
    },
    {
        "code": "27.90.31",
        "name": "Matériel  électrique  pour  le  soudage  et  le  brasage;  parties  de "
    },
    {
        "code": "27.90.32",
        "name": "Parties de matériel électrique pour le soudage et le brasage; parties "
    },
    {
        "code": "27.90.33",
        "name": "Parties  d’autres  matériels  électriques;  parties  électriques  de "
    },
    {
        "code": "27.90.4",
        "name": "Autres  matériels  électriques  n.c.a.  (y  compris  électro-aimants; "
    },
    {
        "code": "27.90.40",
        "name": "Autres  matériels  électriques  n.c.a.  (y  compris  électro-aimants; "
    },
    {
        "code": "27.90.5",
        "name": "Condensateurs"
    },
    {
        "code": "27.90.51",
        "name": "Condensateurs ﬁxes pour réseaux de 50/60 Hz capables d’absorber"
    },
    {
        "code": "27.90.52",
        "name": "Autres condensateurs ﬁxes"
    },
    {
        "code": "27.90.53",
        "name": "Condensateurs variables ou ajustables"
    },
    {
        "code": "27.90.6",
        "name": "Résistances électriques, à l’exclusion des résistances chauffantes"
    },
    {
        "code": "27.90.60",
        "name": "Résistances électriques, à l’exclusion des résistances chauffantes"
    },
    {
        "code": "27.90.7",
        "name": "Équipements électriques de signalisation, de sécurité ou de contrôle "
    },
    {
        "code": "27.90.70",
        "name": "Équipements électriques de signalisation, de sécurité ou de contrôle "
    },
    {
        "code": "27.90.8",
        "name": "Éléments pour condensateurs, résistances électriques, rhéostats et "
    },
    {
        "code": "27.90.81",
        "name": "Éléments pour condensateurs"
    },
    {
        "code": "27.90.82",
        "name": "Éléments pour résistances électriques, rhéostats et potentiomètres"
    },
    {
        "code": "27.90.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "27.90.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "28",
        "name": "Machines et équipements n.c.a."
    },
    {
        "code": "28.1",
        "name": "Machines d’usage général"
    },
    {
        "code": "28.11",
        "name": "Moteurs  et  turbines,  à  l’exclusion  des  moteurs  pour  avions, "
    },
    {
        "code": "28.11.1",
        "name": "Moteurs, à l’exclusion des moteurs pour avions, automobiles et "
    },
    {
        "code": "28.11.11",
        "name": "Moteurs hors-bord"
    },
    {
        "code": "28.11.12",
        "name": "Moteurs de marine à explosion; autres moteurs"
    },
    {
        "code": "28.11.13",
        "name": "Autres moteurs diesels"
    },
    {
        "code": "28.11.2",
        "name": "Turbines"
    },
    {
        "code": "28.11.21",
        "name": "Turbines à vapeur"
    },
    {
        "code": "28.11.22",
        "name": "Turbines et roues hydrauliques"
    },
    {
        "code": "28.11.23",
        "name": "Turbines à gaz, autres que turboréacteurs et turbopropulseurs"
    },
    {
        "code": "28.11.24",
        "name": "Turbines éoliennes"
    },
    {
        "code": "28.11.3",
        "name": "Parties de turbines"
    },
    {
        "code": "28.11.31",
        "name": "Parties de turbines à vapeur"
    },
    {
        "code": "28.11.32",
        "name": "Parties de turbines et roues hydrauliques, y compris régulateurs"
    },
    {
        "code": "28.11.33",
        "name": "Parties  de  turbines  à  gaz,  à  l’exclusion  des  turboréacteurs  et "
    },
    {
        "code": "28.11.4",
        "name": "Parties pour moteurs"
    },
    {
        "code": "28.11.41",
        "name": "Parties  pour  moteurs  à  explosion,  à  l’exclusion  des  parties  de "
    },
    {
        "code": "28.11.42",
        "name": "Parties pour autres moteurs n.c.a."
    },
    {
        "code": "28.11.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de moteurs "
    },
    {
        "code": "28.11.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de moteurs "
    },
    {
        "code": "28.12",
        "name": "Équipements hydrauliques et pneumatiques"
    },
    {
        "code": "28.12.1",
        "name": "Équipements hydrauliques et pneumatiques, à l’exclusion des parties"
    },
    {
        "code": "28.12.11",
        "name": "Moteurs  hydrauliques  et  pneumatiques  à  mouvement  rectiligne "
    },
    {
        "code": "28.12.12",
        "name": "Moteurs hydrauliques et pneumatiques rotatifs"
    },
    {
        "code": "28.12.13",
        "name": "Pompes hydrauliques"
    },
    {
        "code": "28.12.14",
        "name": "Soupapes hydrauliques et pneumatiques"
    },
    {
        "code": "28.12.15",
        "name": "Assemblages hydrauliques"
    },
    {
        "code": "28.12.16",
        "name": "Systèmes hydrauliques"
    },
    {
        "code": "28.12.2",
        "name": "Parties pour équipements hydrauliques et pneumatiques"
    },
    {
        "code": "28.12.20",
        "name": "Parties pour équipements hydrauliques et pneumatiques"
    },
    {
        "code": "28.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "28.12.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "28.13",
        "name": "Autres pompes et compresseurs"
    },
    {
        "code": "28.13.1",
        "name": "Pompes pour liquides; élévateurs à liquides"
    },
    {
        "code": "28.13.11",
        "name": "Pompes pour carburants, lubriﬁants, agents de refroidissement et"
    },
    {
        "code": "28.13.12",
        "name": "Autres pompes volumétriques alternatives pour liquides"
    },
    {
        "code": "28.13.13",
        "name": "Autres pompes volumétriques rotatives pour liquides"
    },
    {
        "code": "28.13.14",
        "name": "Autres pompes centrifuges pour liquides; autres pompes"
    },
    {
        "code": "28.13.2",
        "name": "Pompes à air ou à vide; compresseurs d’air ou d’autres gaz"
    },
    {
        "code": "28.13.21",
        "name": "Pompes à vide"
    },
    {
        "code": "28.13.22",
        "name": "Pompes à air, à main ou à pied"
    },
    {
        "code": "28.13.23",
        "name": "Compresseurs frigoriﬁques"
    },
    {
        "code": "28.13.24",
        "name": "Compresseurs d’air remorquables"
    },
    {
        "code": "28.13.25",
        "name": "Turbocompresseurs"
    },
    {
        "code": "28.13.26",
        "name": "Compresseurs volumétriques alternatifs"
    },
    {
        "code": "28.13.27",
        "name": "Compresseurs volumétriques rotatifs"
    },
    {
        "code": "28.13.28",
        "name": "Autres compresseurs"
    },
    {
        "code": "28.13.3",
        "name": "Parties de pompes et compresseurs"
    },
    {
        "code": "28.13.31",
        "name": "Parties de pompes; parties d’élévateurs à liquides"
    },
    {
        "code": "28.13.32",
        "name": "Parties de pompes à air ou à vide, de compresseurs d’air ou de gaz, "
    },
    {
        "code": "28.13.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "28.13.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "28.14",
        "name": "Autres articles de robinetterie"
    },
    {
        "code": "28.14.1",
        "name": "Articles  de  robinetterie  et  organes  similaires  pour  tuyauteries, "
    },
    {
        "code": "28.14.11",
        "name": "Détendeurs, réducteurs de pression, clapets et soupapes de sûreté"
    },
    {
        "code": "28.14.12",
        "name": "Articles  de  robinetterie  sanitaire;  robinets  pour  radiateurs  de "
    },
    {
        "code": "28.14.13",
        "name": "Vannes  de  commande,  robinets-valves,  clapets  à  bille  et  autres "
    },
    {
        "code": "28.14.2",
        "name": "Pièces de robinetterie et articles similaires"
    },
    {
        "code": "28.14.20",
        "name": "Pièces de robinetterie et articles similaires"
    },
    {
        "code": "28.14.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "28.14.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "28.15",
        "name": "Engrenages et organes mécaniques de transmission"
    },
    {
        "code": "28.15.1",
        "name": "Roulements à billes ou à rouleaux"
    },
    {
        "code": "28.15.10",
        "name": "Roulements à billes ou à rouleaux"
    },
    {
        "code": "28.15.2",
        "name": "Autres organes mécaniques de transmission"
    },
    {
        "code": "28.15.21",
        "name": "Chaînes mécaniques, en fer ou en acier"
    },
    {
        "code": "28.15.22",
        "name": "Arbres  de  transmission  (y  compris  à  cames  et  vilebrequin)  et "
    },
    {
        "code": "28.15.23",
        "name": "Paliers à roulements et coussinets"
    },
    {
        "code": "28.15.24",
        "name": "Engrenages  et  roues  de  friction;  broches  ﬁletées à billes ou à"
    },
    {
        "code": "28.15.25",
        "name": "Volants et poulies, y compris mouﬂes"
    },
    {
        "code": "28.15.26",
        "name": "Embrayages et organes d’accouplement, y compris joints universels"
    },
    {
        "code": "28.15.3",
        "name": "Parties d’organes mécaniques de transmission"
    },
    {
        "code": "28.15.31",
        "name": "Billes,  aiguilles  et  rouleaux;  parties  de  roulements  à  billes  ou  à "
    },
    {
        "code": "28.15.32",
        "name": "Maillons de chaînes mécaniques, en fer ou en acier"
    },
    {
        "code": "28.15.39",
        "name": "Parties d’organes mécaniques de transmission n.c.a."
    },
    {
        "code": "28.15.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "28.15.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "28.2",
        "name": "Autres machines d’usage général"
    },
    {
        "code": "28.21",
        "name": "Fours et brûleurs"
    },
    {
        "code": "28.21.1",
        "name": "Fours et brûleurs et leurs parties"
    },
    {
        "code": "28.21.11",
        "name": "Brûleurs;  foyers  automatiques  et  grilles  mécaniques;  dispositifs "
    },
    {
        "code": "28.21.12",
        "name": "Fours  industriels  ou  de  laboratoire,  non  électriques,  y  compris "
    },
    {
        "code": "28.21.13",
        "name": "Fours  industriels  ou  de  laboratoire,  électriques;  équipement  de "
    },
    {
        "code": "28.21.14",
        "name": "Parties de fours et de brûleurs"
    },
    {
        "code": "28.21.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de fours "
    },
    {
        "code": "28.21.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de  fours "
    },
    {
        "code": "28.22",
        "name": "Matériel de levage et de manutention"
    },
    {
        "code": "28.22.1",
        "name": "Équipements de levage et de manutention et leurs parties"
    },
    {
        "code": "28.22.11",
        "name": "Palans et monte-charges n.c.a."
    },
    {
        "code": "28.22.12",
        "name": "Treuils  de  puits  de  mine;  treuils  pour  usage  souterrain;  autres "
    },
    {
        "code": "28.22.13",
        "name": "Crics; vérins pour soulever des véhicules"
    },
    {
        "code": "28.22.14",
        "name": "Tours  de  forage;  grues;  ponts  roulants,  chariots  cavaliers  et "
    },
    {
        "code": "28.22.15",
        "name": "Chariots-gerbeurs,  autres  chariots  de  manutention;  chariots "
    },
    {
        "code": "28.22.16",
        "name": "Ascenseurs,  monte-charges,  escaliers  mécaniques  et  trottoirs "
    },
    {
        "code": "28.22.17",
        "name": "Appareils élévateurs ou convoyeurs pneumatiques ou de manutention "
    },
    {
        "code": "28.22.18",
        "name": "Autre matériel de levage et de manutention"
    },
    {
        "code": "28.22.19",
        "name": "Parties de matériel de levage et de manutention"
    },
    {
        "code": "28.22.2",
        "name": "Godets, bennes, pelles et pinces pour grues ou matériel de génie "
    },
    {
        "code": "28.22.20",
        "name": "Godets, bennes, pelles et pinces pour grues ou matériel de génie "
    },
    {
        "code": "28.22.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.22.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de matériel "
    },
    {
        "code": "28.23",
        "name": "Machines et équipements de bureau (à l’exclusion des ordinateurs "
    },
    {
        "code": "28.23.1",
        "name": "Machines à écrire et à calculer, machines de traitement de texte"
    },
    {
        "code": "28.23.11",
        "name": "Machines de traitement de texte"
    },
    {
        "code": "28.23.12",
        "name": "Machines à calculer électroniques et appareils de poche permettant "
    },
    {
        "code": "28.23.13",
        "name": "Machines comptables, caisses enregistreuses, machines à affranchir, "
    },
    {
        "code": "28.23.2",
        "name": "Machines de bureau et leurs parties"
    },
    {
        "code": "28.23.21",
        "name": "Machines  de  photocopie,  à  système  optique,  par  contact  ou "
    },
    {
        "code": "28.23.22",
        "name": "Matériel offset de bureau, à feuilles"
    },
    {
        "code": "28.23.23",
        "name": "Autres machines de bureau"
    },
    {
        "code": "28.23.24",
        "name": "Parties et accessoires de machines à écrire et à calculer"
    },
    {
        "code": "28.23.25",
        "name": "Parties et accessoires d’autres machines de bureau"
    },
    {
        "code": "28.23.26",
        "name": "Parties et accessoires d’appareils de photocopie"
    },
    {
        "code": "28.23.9",
        "name": "Machines  de  bureau  et  comptables;  opérations  sous-traitées "
    },
    {
        "code": "28.23.91",
        "name": "Machines de bureau et comptables (à l’exclusion des ordinateurs et "
    },
    {
        "code": "28.23.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.24",
        "name": "Outillage portatif à moteur incorporé"
    },
    {
        "code": "28.24.1",
        "name": "Outillage  manuel  électromécanique;  autre  outillage  manuel "
    },
    {
        "code": "28.24.11",
        "name": "Outillage manuel électromécanique, à moteur électrique incorporé"
    },
    {
        "code": "28.24.12",
        "name": "Autre outillage manuel électroportatif"
    },
    {
        "code": "28.24.2",
        "name": "Parties d’outillage portatif à moteur incorporé"
    },
    {
        "code": "28.24.21",
        "name": "Parties d’outillage manuel électromécanique, à moteur électrique "
    },
    {
        "code": "28.24.22",
        "name": "Parties d’autre outillage manuel électroportatif"
    },
    {
        "code": "28.24.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’outillage "
    },
    {
        "code": "28.24.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’outillage "
    },
    {
        "code": "28.25",
        "name": "Équipements aérauliques et frigoriﬁques industriels"
    },
    {
        "code": "28.25.1",
        "name": "Échangeurs de chaleur; climatiseurs, équipements de réfrigération, "
    },
    {
        "code": "28.25.11",
        "name": "Échangeurs  de  chaleur  et  dispositifs  de  liquéfaction  d’air  ou "
    },
    {
        "code": "28.25.12",
        "name": "Dispositifs de conditionnement de l’air"
    },
    {
        "code": "28.25.13",
        "name": "Équipements frigoriﬁques industriels et pompes à chaleur"
    },
    {
        "code": "28.25.14",
        "name": "Matériels de ﬁltrage et de dépoussiérage des gaz n.c.a."
    },
    {
        "code": "28.25.2",
        "name": "Appareils de ventilation non domestiques"
    },
    {
        "code": "28.25.20",
        "name": "Appareils de ventilation non domestiques"
    },
    {
        "code": "28.25.3",
        "name": "Parties  d’équipements  frigoriﬁques industriels et de pompes à"
    },
    {
        "code": "28.25.30",
        "name": "Parties  d’équipements  frigoriﬁques industriels et de pompes à"
    },
    {
        "code": "28.25.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "28.25.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "28.29",
        "name": "Autres machines d’usage général n.c.a."
    },
    {
        "code": "28.29.1",
        "name": "Générateurs de gaz, appareils de distillation et de ﬁltration"
    },
    {
        "code": "28.29.11",
        "name": "Générateurs  de  gaz  de  gazogène  ou  de  gaz  à  l’eau;  générateurs "
    },
    {
        "code": "28.29.12",
        "name": "Appareils pour la ﬁltration ou l’épuration des liquides"
    },
    {
        "code": "28.29.13",
        "name": "Filtres  à  huile,  ﬁltres à essence et ﬁltres à  air pour moteurs"
    },
    {
        "code": "28.29.2",
        "name": "Équipements  de   nettoyage,  remplissage,  emballage  ou "
    },
    {
        "code": "28.29.21",
        "name": "Équipements  de   nettoyage,  remplissage,  emballage  ou "
    },
    {
        "code": "28.29.22",
        "name": "Extincteurs,  pistolets  pulvérisateurs,  appareils  de  nettoyage  à  la "
    },
    {
        "code": "28.29.23",
        "name": "Joints métalloplastiques; joints d’étanchéité mécaniques"
    },
    {
        "code": "28.29.3",
        "name": "Appareils de pesage et de mesurage industriels, domestiques ou autres"
    },
    {
        "code": "28.29.31",
        "name": "Appareils de pesage pour usages industriels; bascules à pesage en "
    },
    {
        "code": "28.29.32",
        "name": "Balances de ménage et pèse-personnes"
    },
    {
        "code": "28.29.39",
        "name": "Autres appareils de pesage et de mesurage"
    },
    {
        "code": "28.29.4",
        "name": "Centrifugeuses,  appareils  de  calandrage  et  machines  de  vente "
    },
    {
        "code": "28.29.41",
        "name": "Centrifugeuses n.c.a."
    },
    {
        "code": "28.29.42",
        "name": "Calandres et autres laminoirs, à l’exclusion de ceux pour le métal "
    },
    {
        "code": "28.29.43",
        "name": "Machines automatiques de vente de produits"
    },
    {
        "code": "28.29.5",
        "name": "Machines à laver la vaisselle de type industriel"
    },
    {
        "code": "28.29.50",
        "name": "Machines à laver la vaisselle de type industriel"
    },
    {
        "code": "28.29.6",
        "name": "Matériel n.c.a. pour le traitement de matériaux fonctionnant sur "
    },
    {
        "code": "28.29.60",
        "name": "Matériel n.c.a. pour le traitement de matériaux fonctionnant sur la "
    },
    {
        "code": "28.29.7",
        "name": "Matériel non électrique pour le soudage et le brasage et ses parties; "
    },
    {
        "code": "28.29.70",
        "name": "Matériel non électrique pour le soudage et le brasage et ses parties; "
    },
    {
        "code": "28.29.8",
        "name": "Parties d’autres machines d’usage général n.c.a."
    },
    {
        "code": "28.29.81",
        "name": "Parties de générateurs de gaz"
    },
    {
        "code": "28.29.82",
        "name": "Parties  de  centrifugeuses;  parties  d’appareils  de  ﬁltration et"
    },
    {
        "code": "28.29.83",
        "name": "Parties  d’appareils  de  calandrage  ou  de  laminage;  parties  de "
    },
    {
        "code": "28.29.84",
        "name": "Parties de machines sans connecteurs électriques n.c.a."
    },
    {
        "code": "28.29.85",
        "name": "Pièces  de  machines  à  laver  la  vaisselle  et  d’équipements  de "
    },
    {
        "code": "28.29.86",
        "name": "Parties de matériel non électrique pour le soudage et le brasage et "
    },
    {
        "code": "28.29.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "28.29.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "28.3",
        "name": "Machines agricoles et forestières"
    },
    {
        "code": "28.30",
        "name": "Machines agricoles et forestières"
    },
    {
        "code": "28.30.1",
        "name": "Motoculteurs"
    },
    {
        "code": "28.30.10",
        "name": "Motoculteurs"
    },
    {
        "code": "28.30.2",
        "name": "Autres tracteurs agricoles"
    },
    {
        "code": "28.30.21",
        "name": "Tracteurs d’une puissance inférieure ou égale à 37 kW"
    },
    {
        "code": "28.30.22",
        "name": "Tracteurs d’une puissance comprise entre 37 kW et 59 kW"
    },
    {
        "code": "28.30.23",
        "name": "Tracteurs d’une puissance supérieure à 59 kW"
    },
    {
        "code": "28.30.3",
        "name": "Matériel agricole pour le travail du sol"
    },
    {
        "code": "28.30.31",
        "name": "Charrues"
    },
    {
        "code": "28.30.32",
        "name": "Herses, scariﬁcateurs, cultivateurs, herses à dents et motohoues"
    },
    {
        "code": "28.30.33",
        "name": "Semoirs, plantoirs et repiqueurs"
    },
    {
        "code": "28.30.34",
        "name": "Épandeurs de fumier et distributeurs d’engrais"
    },
    {
        "code": "28.30.39",
        "name": "Autre matériel pour le travail du sol"
    },
    {
        "code": "28.30.4",
        "name": "Tondeuses à gazon"
    },
    {
        "code": "28.30.40",
        "name": "Tondeuses à gazon"
    },
    {
        "code": "28.30.5",
        "name": "Matériel de récolte"
    },
    {
        "code": "28.30.51",
        "name": "Faucheuses (y compris barres de coupe à monter sur un tracteur) n.c.a."
    },
    {
        "code": "28.30.52",
        "name": "Appareils de fenaison"
    },
    {
        "code": "28.30.53",
        "name": "Ramasseuses-presses"
    },
    {
        "code": "28.30.54",
        "name": "Matériel pour la récolte des racines et tubercules"
    },
    {
        "code": "28.30.59",
        "name": "Matériel de récolte et de battage n.c.a."
    },
    {
        "code": "28.30.6",
        "name": "Pulvérisateurs et poudreuses agricoles et horticoles"
    },
    {
        "code": "28.30.60",
        "name": "Pulvérisateurs et poudreuses agricoles et horticoles"
    },
    {
        "code": "28.30.7",
        "name": "Remorques  autochargeuses  et  autodéchargeuses  et  semi-"
    },
    {
        "code": "28.30.70",
        "name": "Remorques autochargeuses et autodéchargeuses et semi-remorques "
    },
    {
        "code": "28.30.8",
        "name": "Autre matériel agricole"
    },
    {
        "code": "28.30.81",
        "name": "Matériel de nettoyage, tri et criblage des œufs, des fruits ou d’autres "
    },
    {
        "code": "28.30.82",
        "name": "Machines à traire"
    },
    {
        "code": "28.30.83",
        "name": "Matériel pour la préparation des aliments pour animaux"
    },
    {
        "code": "28.30.84",
        "name": "Incubateurs et couveuses"
    },
    {
        "code": "28.30.85",
        "name": "Matériel d’aviculture"
    },
    {
        "code": "28.30.86",
        "name": "Matériel agricole, horticole, forestier, avicole et apicole n.c.a."
    },
    {
        "code": "28.30.9",
        "name": "Parties de matériel agricole; opérations sous-traitées intervenant "
    },
    {
        "code": "28.30.91",
        "name": "Parties de matériel de récolte et de battage n.c.a."
    },
    {
        "code": "28.30.92",
        "name": "Parties de matériel pour le travail du sol"
    },
    {
        "code": "28.30.93",
        "name": "Parties d’autre matériel agricole"
    },
    {
        "code": "28.30.94",
        "name": "Parties de matériel de laiterie n.c.a."
    },
    {
        "code": "28.30.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.4",
        "name": "Machines de formage des métaux et machines-outils"
    },
    {
        "code": "28.41",
        "name": "Machines de formage des métaux"
    },
    {
        "code": "28.41.1",
        "name": "Machines-outils  d’usinage  des  métaux,  opérant  par  laser  ou "
    },
    {
        "code": "28.41.11",
        "name": "Machines-outils d’usinage des métaux opérant par enlèvement de "
    },
    {
        "code": "28.41.12",
        "name": "Centres  d’usinage,  machines  à  poste  ﬁxe et machines à stations"
    },
    {
        "code": "28.41.2",
        "name": "Tours, machines à percer et à fraiser, pour l’usinage des métaux"
    },
    {
        "code": "28.41.21",
        "name": "Tours opérant par enlèvement de métal"
    },
    {
        "code": "28.41.22",
        "name": "Perceuses,  aléseuses,  fraiseuses  pour  l’usinage  des  métaux; "
    },
    {
        "code": "28.41.23",
        "name": "Machines  à  ébarber, affûter, meuler  et  autres  machines-outils  de "
    },
    {
        "code": "28.41.24",
        "name": "Machines  à  raboter,  scier,  tronçonner  et  autres  machines-outils "
    },
    {
        "code": "28.41.3",
        "name": "Autres machines-outils pour l’usinage des métaux"
    },
    {
        "code": "28.41.31",
        "name": "Machines à rouler, cintrer, plier ou dresser les métaux"
    },
    {
        "code": "28.41.32",
        "name": "Machines à cisailler, poinçonner ou gruger les métaux"
    },
    {
        "code": "28.41.33",
        "name": "Machines  à  forger  ou  à  estamper  et  marteaux-pilons;  presses "
    },
    {
        "code": "28.41.34",
        "name": "Machines-outils n.c.a. pour l’usinage des métaux, carbures métalliques "
    },
    {
        "code": "28.41.4",
        "name": "Parties et accessoires de machines-outils à métaux"
    },
    {
        "code": "28.41.40",
        "name": "Parties et accessoires de machines-outils à métaux"
    },
    {
        "code": "28.41.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.41.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.49",
        "name": "Autres machines-outils"
    },
    {
        "code": "28.49.1",
        "name": "Machines-outils pour le travail de la pierre, du bois et d’autres "
    },
    {
        "code": "28.49.11",
        "name": "Machines-outils pour le travail de la pierre, des produits céramiques, "
    },
    {
        "code": "28.49.12",
        "name": "Machines-outils  pour  le  travail  du  bois,  du  liège,  de  l’os,  du "
    },
    {
        "code": "28.49.2",
        "name": "Porte-outils"
    },
    {
        "code": "28.49.21",
        "name": "Porte-outils et ﬁlières à déclenchement automatique, pour machines-"
    },
    {
        "code": "28.49.22",
        "name": "Porte-pièces, pour machines-outils"
    },
    {
        "code": "28.49.23",
        "name": "Plateaux  diviseurs  et  autres  dispositifs  spéciaux  se  montant  sur "
    },
    {
        "code": "28.49.24",
        "name": "Parties et accessoires pour machines-outils pour le travail du bois, du "
    },
    {
        "code": "28.49.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "28.49.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "28.9",
        "name": "Autres machines d’usage spéciﬁque"
    },
    {
        "code": "28.91",
        "name": "Machines pour la métallurgie"
    },
    {
        "code": "28.91.1",
        "name": "Machines pour la métallurgie et leurs parties"
    },
    {
        "code": "28.91.11",
        "name": "Convertisseurs, poches de coulée, lingotières, machines à couler; "
    },
    {
        "code": "28.91.12",
        "name": "Parties de machines pour la métallurgie; parties de laminoirs à métaux"
    },
    {
        "code": "28.91.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.91.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.92",
        "name": "Machines pour l’extraction ou la construction"
    },
    {
        "code": "28.92.1",
        "name": "Matériel de mines"
    },
    {
        "code": "28.92.11",
        "name": "Élévateurs, transporteurs et convoyeurs continus, pour mines"
    },
    {
        "code": "28.92.12",
        "name": "Haveuses,  abatteuses  et  tunneliers;  autres  matériels  de  forage  et "
    },
    {
        "code": "28.92.2",
        "name": "Autres  machines  et  appareils  de  terrassement,  nivellement, "
    },
    {
        "code": "28.92.21",
        "name": "Bouteurs et bouteurs-biais autopropulsés"
    },
    {
        "code": "28.92.22",
        "name": "Niveleuses et proﬁleurs autopropulsés"
    },
    {
        "code": "28.92.23",
        "name": "Décapeuses autopropulsées"
    },
    {
        "code": "28.92.24",
        "name": "Compacteuses et rouleaux compresseurs autopropulsés"
    },
    {
        "code": "28.92.25",
        "name": "Chargeuses-pelleteuses frontales autopropulsées"
    },
    {
        "code": "28.92.26",
        "name": "Pelles  mécaniques,  excavateurs  et  chargeuses-pelleteuses  rotatifs "
    },
    {
        "code": "28.92.27",
        "name": "Autres  pelles  mécaniques,  excavateurs  et  chargeuses-pelleteuses "
    },
    {
        "code": "28.92.28",
        "name": "Lames pour bouteurs et bouteurs-biais"
    },
    {
        "code": "28.92.29",
        "name": "Tombereaux automoteurs"
    },
    {
        "code": "28.92.3",
        "name": "Autres matériels de travaux publics"
    },
    {
        "code": "28.92.30",
        "name": "Autres matériels de travaux publics"
    },
    {
        "code": "28.92.4",
        "name": "Machines à trier, broyer, mélanger la terre, la pierre, les minerais "
    },
    {
        "code": "28.92.40",
        "name": "Machines à trier, broyer, mélanger la terre, la pierre, les minerais et "
    },
    {
        "code": "28.92.5",
        "name": "Tracteurs de chantier"
    },
    {
        "code": "28.92.50",
        "name": "Tracteurs de chantier"
    },
    {
        "code": "28.92.6",
        "name": "Parties de machines pour l’extraction ou la construction"
    },
    {
        "code": "28.92.61",
        "name": "Parties  de  machines  de  forage,  havage  ou  excavation;  parties  de "
    },
    {
        "code": "28.92.62",
        "name": "Parties de machines à trier, broyer, mélanger la terre, la pierre et "
    },
    {
        "code": "28.92.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.92.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.93",
        "name": "Machines pour l’industrie agroalimentaire"
    },
    {
        "code": "28.93.1",
        "name": "Machines pour l’industrie agroalimentaire, à l’exclusion de leurs "
    },
    {
        "code": "28.93.11",
        "name": "Écrémeuses"
    },
    {
        "code": "28.93.12",
        "name": "Machines et appareils de laiterie"
    },
    {
        "code": "28.93.13",
        "name": "Machines et appareils pour la minoterie ou le traitement des céréales "
    },
    {
        "code": "28.93.14",
        "name": "Machines et appareils pour la préparation du vin, du cidre, des jus "
    },
    {
        "code": "28.93.15",
        "name": "Fours de boulangerie non électriques; matériels de cuisson ou de "
    },
    {
        "code": "28.93.16",
        "name": "Séchoirs agroalimentaires"
    },
    {
        "code": "28.93.17",
        "name": "Machines et appareils n.c.a. pour l’industrie agroalimentaire"
    },
    {
        "code": "28.93.19",
        "name": "Machines et appareils pour la préparation du tabac n.c.a."
    },
    {
        "code": "28.93.2",
        "name": "Machines pour le nettoyage, le tri ou le criblage des grains ou des "
    },
    {
        "code": "28.93.20",
        "name": "Machines pour le nettoyage, le tri ou le criblage des grains ou des "
    },
    {
        "code": "28.93.3",
        "name": "Parties de machines pour l’industrie agroalimentaire"
    },
    {
        "code": "28.93.31",
        "name": "Parties de machines pour la préparation de boissons"
    },
    {
        "code": "28.93.32",
        "name": "Parties de machines pour l’industrie alimentaire"
    },
    {
        "code": "28.93.33",
        "name": "Parties de machines pour la préparation du tabac"
    },
    {
        "code": "28.93.34",
        "name": "Parties  de  machines  pour  le  nettoyage,  le  tri  ou  le  criblage  des "
    },
    {
        "code": "28.93.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.93.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.94",
        "name": "Machines pour les industries textiles"
    },
    {
        "code": "28.94.1",
        "name": "Machines de ﬁlature, tissage et tricotage"
    },
    {
        "code": "28.94.11",
        "name": "Machines  pour  le  ﬁlage (extrusion), l’étirage, la texturation ou"
    },
    {
        "code": "28.94.12",
        "name": "Métiers à ﬁler; machines pour le doublage, le retordage, le bobinage"
    },
    {
        "code": "28.94.13",
        "name": "Métiers à tisser"
    },
    {
        "code": "28.94.14",
        "name": "Machines  et  métiers  à  tricoter;  machines  de  couture-tricotage  et "
    },
    {
        "code": "28.94.15",
        "name": "Machines et matériels auxiliaires pour l’industrie textile; machines "
    },
    {
        "code": "28.94.2",
        "name": "Autres machines pour l’industrie textile et la confection, y compris "
    },
    {
        "code": "28.94.21",
        "name": "Machines pour le lavage, le nettoyage, l’essorage, le repassage, le "
    },
    {
        "code": "28.94.22",
        "name": "Machines à laver de type industriel; machines pour le nettoyage à "
    },
    {
        "code": "28.94.23",
        "name": "Essoreuses à linge"
    },
    {
        "code": "28.94.24",
        "name": "Machines à coudre industrielles"
    },
    {
        "code": "28.94.3",
        "name": "Machines  pour  le  travail  du  cuir  ou  pour  la  fabrication  ou "
    },
    {
        "code": "28.94.30",
        "name": "Machines pour le travail du cuir ou pour la fabrication ou réparation "
    },
    {
        "code": "28.94.4",
        "name": "Machines à coudre de type ménager"
    },
    {
        "code": "28.94.40",
        "name": "Machines à coudre de type ménager"
    },
    {
        "code": "28.94.5",
        "name": "Parties et accessoires de machines de ﬁlature, tissage et tricotage"
    },
    {
        "code": "28.94.51",
        "name": "Parties  et  accessoires  de  machines  de  ﬁlature, tissage et"
    },
    {
        "code": "28.94.52",
        "name": "Parties d’autres machines pour l’industrie textile et la confection"
    },
    {
        "code": "28.94.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.94.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.95",
        "name": "Machines pour les industries du papier et du carton"
    },
    {
        "code": "28.95.1",
        "name": "Machines  pour  les  industries  du  papier  et  du  carton  et  leurs "
    },
    {
        "code": "28.95.11",
        "name": "Machines pour les industries du papier et du carton, à l’exclusion "
    },
    {
        "code": "28.95.12",
        "name": "Parties de machines pour les industries du papier et du carton"
    },
    {
        "code": "28.95.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.95.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.96",
        "name": "Machines  pour  le  travail  du  caoutchouc  ou  des  matières "
    },
    {
        "code": "28.96.1",
        "name": "Machines  n.c.a.  pour  le  travail  du  caoutchouc  ou  des "
    },
    {
        "code": "28.96.10",
        "name": "Machines  n.c.a.  pour  le  travail  du  caoutchouc  ou  des  matières "
    },
    {
        "code": "28.96.2",
        "name": "Parties  de  machines  n.c.a.  pour  le  travail  du  caoutchouc  ou "
    },
    {
        "code": "28.96.20",
        "name": "Parties  de  machines  n.c.a.  pour  le  travail  du  caoutchouc  ou  des "
    },
    {
        "code": "28.96.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "28.96.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de machines "
    },
    {
        "code": "28.99",
        "name": "Autres machines d’usage spéciﬁque n.c.a."
    },
    {
        "code": "28.99.1",
        "name": "Machines  d’imprimerie  et  machines  pour  le  brochage  et  la "
    },
    {
        "code": "28.99.11",
        "name": "Machines  pour  le  brochage  et  la  reliure,  y  compris  machines  à "
    },
    {
        "code": "28.99.12",
        "name": "Machines pour la composition ou pour la préparation de clichés ou "
    },
    {
        "code": "28.99.13",
        "name": "Machines d’impression offset, à l’exclusion des machines offset de "
    },
    {
        "code": "28.99.14",
        "name": "Autres  machines  d’impression,  à  l’exclusion  des  machines  de "
    },
    {
        "code": "28.99.2",
        "name": "Machines et appareils utilisés uniquement ou principalement pour "
    },
    {
        "code": "28.99.20",
        "name": "Machines et appareils utilisés uniquement ou principalement pour "
    },
    {
        "code": "28.99.3",
        "name": "Machines d’usage spéciﬁque n.c.a."
    },
    {
        "code": "28.99.31",
        "name": "Séchoirs à bois, pâte à papier, papier et carton; séchoirs industriels "
    },
    {
        "code": "28.99.32",
        "name": "Manèges, balançoires, stands de tir et autres attractions foraines"
    },
    {
        "code": "28.99.39",
        "name": "Dispositifs  de  lancement  d’aéronefs;  dispositifs  d’appontage  ou "
    },
    {
        "code": "28.99.4",
        "name": "Parties de machines d’imprimerie et de machines pour le brochage "
    },
    {
        "code": "28.99.40",
        "name": "Parties de machines d'imprimerie et de machines pour le brochage "
    },
    {
        "code": "28.99.5",
        "name": "Parties  de  machines  et  d’appareils  utilisés  uniquement  ou "
    },
    {
        "code": "28.99.51",
        "name": "Parties de machines et d’appareils utilisés uniquement "
    },
    {
        "code": "28.99.52",
        "name": "Parties de machines d’usage spéciﬁque n.c.a."
    },
    {
        "code": "28.99.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "28.99.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "29",
        "name": "Véhicules automobiles, remorques et semi-remorques"
    },
    {
        "code": "29.1",
        "name": "Véhicules automobiles"
    },
    {
        "code": "29.10",
        "name": "Véhicules automobiles"
    },
    {
        "code": "29.10.1",
        "name": "Moteurs pour véhicules automobiles"
    },
    {
        "code": "29.10.11",
        "name": "Moteurs à explosion pour véhicules, d'une cylindrée inférieure ou "
    },
    {
        "code": "29.10.12",
        "name": "Moteurs à explosion pour véhicules, d'une cylindrée supérieure à "
    },
    {
        "code": "1000",
        "name": "cm³"
    },
    {
        "code": "29.10.13",
        "name": "Moteurs diesels pour véhicules"
    },
    {
        "code": "29.10.2",
        "name": "Voitures particulières"
    },
    {
        "code": "29.10.21",
        "name": "Voitures particulières à moteur à explosion d'une cylindrée inférieure "
    },
    {
        "code": "29.10.22",
        "name": "Voitures  particulières  à  moteur  à  explosion  d'une  cylindrée "
    },
    {
        "code": "29.10.23",
        "name": "Voitures particulières à moteur diesel, neuves"
    },
    {
        "code": "29.10.24",
        "name": "Autres voitures particulières"
    },
    {
        "code": "29.10.3",
        "name": "Autobus et autocars"
    },
    {
        "code": "29.10.30",
        "name": "Autobus et autocars"
    },
    {
        "code": "29.10.4",
        "name": "Véhicules utilitaires pour le transport de marchandises"
    },
    {
        "code": "29.10.41",
        "name": "Véhicules utilitaires à moteur diesel, neufs"
    },
    {
        "code": "29.10.42",
        "name": "Véhicules  utilitaires  à  moteur  à  explosion  et  autres  véhicules "
    },
    {
        "code": "29.10.43",
        "name": "Tracteurs routiers pour semi-remorques"
    },
    {
        "code": "29.10.44",
        "name": "Châssis complets de véhicules automobiles"
    },
    {
        "code": "29.10.5",
        "name": "Véhicules utilitaires spéciﬁques"
    },
    {
        "code": "29.10.51",
        "name": "Camions-grues"
    },
    {
        "code": "29.10.52",
        "name": "Véhicules à moteur pour le transport sur la neige, les terrains de "
    },
    {
        "code": "29.10.59",
        "name": "Véhicules utilitaires à usages spéciaux n.c.a."
    },
    {
        "code": "29.10.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "29.10.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de véhicules "
    },
    {
        "code": "29.2",
        "name": "Carrosseries automobiles; remorques et semi-remorques"
    },
    {
        "code": "29.20",
        "name": "Carrosseries automobiles; remorques et semi-remorques"
    },
    {
        "code": "29.20.1",
        "name": "Carrosseries automobiles"
    },
    {
        "code": "29.20.10",
        "name": "Carrosseries automobiles"
    },
    {
        "code": "29.20.2",
        "name": "Remorques et semi-remorques; conteneurs"
    },
    {
        "code": "29.20.21",
        "name": "Conteneurs conçus spécialement pour un ou plusieurs modes de transport"
    },
    {
        "code": "29.20.22",
        "name": "Remorques et semi-remorques de type caravane"
    },
    {
        "code": "29.20.23",
        "name": "Autres remorques et semi-remorques"
    },
    {
        "code": "29.20.3",
        "name": "Parties  de  remorques,  semi-remorques  et  autres  véhicules,  sans "
    },
    {
        "code": "29.20.30",
        "name": "Parties  de  remorques,  semi-remorques  et  autres  véhicules,  sans "
    },
    {
        "code": "29.20.4",
        "name": "Travaux de reconditionnement, de montage, d’équipement et de "
    },
    {
        "code": "29.20.40",
        "name": "Travaux  de  reconditionnement,  de  montage,  d’équipement  et  de "
    },
    {
        "code": "29.20.5",
        "name": "Aménagement et équipement de caravanes et d’autocaravanes"
    },
    {
        "code": "29.20.50",
        "name": "Aménagement et équipement de caravanes et d’autocaravanes"
    },
    {
        "code": "29.20.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "29.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "29.3",
        "name": "Équipements automobiles"
    },
    {
        "code": "29.31",
        "name": "Équipements électriques et électroniques automobiles"
    },
    {
        "code": "29.31.1",
        "name": "Faisceaux d’allumage et autres jeux de ﬁls pour véhicules, avions"
    },
    {
        "code": "29.31.10",
        "name": "Faisceaux d’allumage et autres jeux de ﬁls pour véhicules, avions"
    },
    {
        "code": "29.31.2",
        "name": "Autres équipements électriques automobiles et leurs parties"
    },
    {
        "code": "29.31.21",
        "name": "Bougies  d’allumage;  magnétos  d’allumage;  magnétos-dynamos; "
    },
    {
        "code": "29.31.22",
        "name": "Démarreurs  et  démarreurs-alternateurs;  autres  générateurs  et "
    },
    {
        "code": "29.31.23",
        "name": "Appareils  électriques  de  signalisation,  essuie-glaces,  systèmes "
    },
    {
        "code": "29.31.3",
        "name": "Parties d’équipements électriques pour véhicules automobiles et "
    },
    {
        "code": "29.31.30",
        "name": "Parties  d’équipements  électriques  pour  véhicules  automobiles  et "
    },
    {
        "code": "29.31.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "29.31.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "29.32",
        "name": "Autres parties et accessoires pour véhicules automobiles"
    },
    {
        "code": "29.32.1",
        "name": "Sièges pour véhicules automobiles"
    },
    {
        "code": "29.32.10",
        "name": "Sièges pour véhicules automobiles"
    },
    {
        "code": "29.32.2",
        "name": "Ceintures  de  sécurité,  airbags  et  parties  et  accessoires  de "
    },
    {
        "code": "29.32.20",
        "name": "Ceintures  de  sécurité,  airbags  et  parties  et  accessoires  de "
    },
    {
        "code": "29.32.3",
        "name": "Parties et accessoires n.c.a. pour véhicules automobiles"
    },
    {
        "code": "29.32.30",
        "name": "Parties et accessoires n.c.a. pour véhicules automobiles"
    },
    {
        "code": "29.32.9",
        "name": "Assemblage de parties et accessoires pour véhicules automobiles, "
    },
    {
        "code": "29.32.91",
        "name": "Assemblage  sous-traité  de  sous-ensembles  complets  de  véhicules "
    },
    {
        "code": "29.32.92",
        "name": "Assemblage de parties et accessoires pour véhicules automobiles, "
    },
    {
        "code": "29.32.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "30",
        "name": "Autres matériels de transport"
    },
    {
        "code": "30.1",
        "name": "Navires et bateaux"
    },
    {
        "code": "30.11",
        "name": "Navires et structures ﬂottantes"
    },
    {
        "code": "30.11.1",
        "name": "Bâtiments de guerre"
    },
    {
        "code": "30.11.10",
        "name": "Bâtiments de guerre"
    },
    {
        "code": "30.11.2",
        "name": "Navires et vaisseaux similaires pour le transport de passagers et de "
    },
    {
        "code": "30.11.21",
        "name": "Paquebots,  bateaux  de  croisière  et  vaisseaux  similaires  pour  le "
    },
    {
        "code": "30.11.22",
        "name": "Pétroliers,  chimiquiers,  méthaniers  et  autres  navires-"
    },
    {
        "code": "30.11.23",
        "name": "Bateaux frigoriﬁques, à l’exclusion des navires-citernes"
    },
    {
        "code": "30.11.24",
        "name": "Cargos secs"
    },
    {
        "code": "30.11.3",
        "name": "Bateaux de pêche et autres bateaux spéciaux"
    },
    {
        "code": "30.11.31",
        "name": "Bateaux de pêche; navires-usines et autres bateaux équipés "
    },
    {
        "code": "30.11.32",
        "name": "Remorqueurs et pousseurs"
    },
    {
        "code": "30.11.33",
        "name": "Dragueurs; bateaux-phares, bateaux-grues; autres bateaux"
    },
    {
        "code": "30.11.4",
        "name": "Plates-formes de forage en mer"
    },
    {
        "code": "30.11.40",
        "name": "Plates-formes de forage en mer"
    },
    {
        "code": "30.11.5",
        "name": "Autres  structures  ﬂottantes (y compris radeaux, caissons,"
    },
    {
        "code": "30.11.50",
        "name": "Autres structures ﬂottantes(ycomprisradeaux,caissons,batardeaux,"
    },
    {
        "code": "30.11.9",
        "name": "Transformation,  reconstruction  et  équipement  de  navires  et "
    },
    {
        "code": "30.11.91",
        "name": "Transformation et reconstruction de navires et de plates-formes et "
    },
    {
        "code": "30.11.92",
        "name": "Équipement de navires et de plates-formes et structures ﬂottantes"
    },
    {
        "code": "30.11.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de navires "
    },
    {
        "code": "30.12",
        "name": "Bateaux de plaisance"
    },
    {
        "code": "30.12.1",
        "name": "Bateaux de plaisance"
    },
    {
        "code": "30.12.11",
        "name": "Bateaux  de  plaisance  à  voile  (à  l’exclusion  des  bateaux "
    },
    {
        "code": "30.12.12",
        "name": "Bateaux de plaisance pneumatiques"
    },
    {
        "code": "30.12.19",
        "name": "Autres bateaux de plaisance; bateaux à rames et canoës"
    },
    {
        "code": "30.12.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "30.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de bateaux "
    },
    {
        "code": "30.2",
        "name": "Locomotives et autre matériel ferroviaire roulant"
    },
    {
        "code": "30.20",
        "name": "Locomotives et autre matériel ferroviaire roulant"
    },
    {
        "code": "30.20.1",
        "name": "Motrices et tenders"
    },
    {
        "code": "30.20.11",
        "name": "Motrices électriques"
    },
    {
        "code": "30.20.12",
        "name": "Motrices diesels"
    },
    {
        "code": "30.20.13",
        "name": "Autres motrices; tenders"
    },
    {
        "code": "30.20.2",
        "name": "Automotrices, à l’exclusion des véhicules d’entretien ou de service"
    },
    {
        "code": "30.20.20",
        "name": "Automotrices, à l’exclusion des véhicules d’entretien ou de service"
    },
    {
        "code": "30.20.3",
        "name": "Autre matériel ferroviaire roulant"
    },
    {
        "code": "30.20.31",
        "name": "Véhicules d’entretien et de service des voies"
    },
    {
        "code": "30.20.32",
        "name": "Voitures  de  voyageurs  remorquées;  fourgons  à  bagages  et  autres "
    },
    {
        "code": "30.20.33",
        "name": "Wagons de marchandises remorqués"
    },
    {
        "code": "30.20.4",
        "name": "Parties  de  matériel  de  traction  et  de  matériel  roulant;  châssis  et "
    },
    {
        "code": "30.20.40",
        "name": "Parties  de  matériel  de  traction  et  de  matériel  roulant;  châssis  et "
    },
    {
        "code": "30.20.9",
        "name": "Reconditionnement et équipement de matériel ferroviaire roulant; "
    },
    {
        "code": "30.20.91",
        "name": "Reconditionnement et équipement de matériel ferroviaire roulant"
    },
    {
        "code": "30.20.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de matériel "
    },
    {
        "code": "30.3",
        "name": "Aéronefs et engins spatiaux"
    },
    {
        "code": "30.30",
        "name": "Aéronefs et engins spatiaux"
    },
    {
        "code": "30.30.1",
        "name": "Moteurs pour aéronefs et engins spatiaux, simulateurs de vol, et "
    },
    {
        "code": "30.30.11",
        "name": "Moteurs à explosion pour avions"
    },
    {
        "code": "30.30.12",
        "name": "Turbopropulseurs et turboréacteurs"
    },
    {
        "code": "30.30.13",
        "name": "Propulseurs à réaction, à l’exclusion des turbopropulseurs"
    },
    {
        "code": "30.30.14",
        "name": "Simulateurs de vol pour entraînement au sol et leurs parties"
    },
    {
        "code": "30.30.15",
        "name": "Parties de moteurs à explosion pour avions"
    },
    {
        "code": "30.30.16",
        "name": "Parties de turbopropulseurs et turboréacteurs"
    },
    {
        "code": "30.30.2",
        "name": "Ballons et dirigeables; planeurs, ailes delta et autres aéronefs sans "
    },
    {
        "code": "30.30.20",
        "name": "Ballons et dirigeables; planeurs, ailes delta et autres aéronefs sans "
    },
    {
        "code": "30.30.3",
        "name": "Avions et hélicoptères"
    },
    {
        "code": "30.30.31",
        "name": "Hélicoptères"
    },
    {
        "code": "30.30.32",
        "name": "Avions et autres aéronefs, d’un poids à vide inférieur ou égal à 2 000 kg"
    },
    {
        "code": "30.30.33",
        "name": "Avions et autres aéronefs, d’un poids à vide compris entre 2 000 kg "
    },
    {
        "code": "30.30.34",
        "name": "Avions et autres aéronefs, d’un poids à vide supérieur à 15 000 kg"
    },
    {
        "code": "30.30.4",
        "name": "Engins spatiaux (y compris satellites) et lanceurs"
    },
    {
        "code": "30.30.40",
        "name": "Engins spatiaux (y compris satellites) et lanceurs"
    },
    {
        "code": "30.30.5",
        "name": "Autres parties des aéronefs et engins spatiaux"
    },
    {
        "code": "30.30.50",
        "name": "Autres parties des aéronefs et engins spatiaux"
    },
    {
        "code": "30.30.6",
        "name": "Révision et transformation d’aéronefs et de moteurs d’aéronefs"
    },
    {
        "code": "30.30.60",
        "name": "Révision et transformation d’aéronefs et de moteurs d’aéronefs"
    },
    {
        "code": "30.30.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’aéronefs "
    },
    {
        "code": "30.30.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’aéronefs "
    },
    {
        "code": "30.4",
        "name": "Véhicules militaires de combat"
    },
    {
        "code": "30.40",
        "name": "Véhicules militaires de combat"
    },
    {
        "code": "30.40.1",
        "name": "Chars et autres véhicules blindés de combat, et leurs parties"
    },
    {
        "code": "30.40.10",
        "name": "Chars et autres véhicules blindés de combat, et leurs parties"
    },
    {
        "code": "30.40.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "30.40.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de véhicules "
    },
    {
        "code": "30.9",
        "name": "Matériels de transport n.c.a."
    },
    {
        "code": "30.91",
        "name": "Motocycles"
    },
    {
        "code": "30.91.1",
        "name": "Motocycles et side-cars"
    },
    {
        "code": "30.91.11",
        "name": "Motocycles et cyclomoteurs à moteur à explosion auxiliaire d'une "
    },
    {
        "code": "30.91.12",
        "name": "Motocycles  à  moteur  à  explosion  d'une  cylindrée  supérieure  à "
    },
    {
        "code": "50",
        "name": "cm³"
    },
    {
        "code": "30.91.13",
        "name": "Motocycles n.c.a.; side-cars"
    },
    {
        "code": "30.91.2",
        "name": "Parties et accessoires pour motocycles et side-cars"
    },
    {
        "code": "30.91.20",
        "name": "Parties et accessoires pour motocycles et side-cars"
    },
    {
        "code": "30.91.3",
        "name": "Moteurs à explosion pour motocycles"
    },
    {
        "code": "30.91.31",
        "name": "\"Moteurs à explosion pour motocycles, d’une cylindrée inférieure "
    },
    {
        "code": "30.91.32",
        "name": "Moteurs à explosion pour motocycles, d’une cylindrée supérieure "
    },
    {
        "code": "30.91.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de motocycles"
    },
    {
        "code": "30.91.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de motocycles"
    },
    {
        "code": "30.92",
        "name": "Cycles et véhicules pour invalides"
    },
    {
        "code": "30.92.1",
        "name": "Bicyclettes et autres cycles, non motorisés"
    },
    {
        "code": "30.92.10",
        "name": "Bicyclettes et autres cycles, non motorisés"
    },
    {
        "code": "30.92.2",
        "name": "Véhicules pour invalides, à l’exclusion des parties et accessoires"
    },
    {
        "code": "30.92.20",
        "name": "Véhicules pour invalides, à l’exclusion des parties et accessoires"
    },
    {
        "code": "30.92.3",
        "name": "Parties et accessoires pour bicyclettes et autres cycles non motorisés "
    },
    {
        "code": "30.92.30",
        "name": "Parties et accessoires pour bicyclettes et autres cycles non motorisés "
    },
    {
        "code": "30.92.4",
        "name": "Landaus et poussettes, et leurs parties"
    },
    {
        "code": "30.92.40",
        "name": "Landaus et poussettes, et leurs parties"
    },
    {
        "code": "30.92.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de cycles "
    },
    {
        "code": "30.92.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de cycles "
    },
    {
        "code": "30.99",
        "name": "Autres équipements de transport n.c.a."
    },
    {
        "code": "30.99.1",
        "name": "Autres équipements de transport n.c.a."
    },
    {
        "code": "30.99.10",
        "name": "Autres équipements de transport n.c.a."
    },
    {
        "code": "30.99.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "30.99.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "31",
        "name": "Meubles"
    },
    {
        "code": "31.0",
        "name": "Meubles"
    },
    {
        "code": "31.00",
        "name": "Sièges et leurs parties; parties de meubles"
    },
    {
        "code": "31.00.1",
        "name": "Sièges et leurs parties"
    },
    {
        "code": "31.00.11",
        "name": "Sièges avec bâti en métal"
    },
    {
        "code": "31.00.12",
        "name": "Sièges avec bâti en bois"
    },
    {
        "code": "31.00.13",
        "name": "Autres sièges"
    },
    {
        "code": "31.00.14",
        "name": "Parties de sièges"
    },
    {
        "code": "31.00.2",
        "name": "Parties de meubles (à l’exclusion des sièges)"
    },
    {
        "code": "31.00.20",
        "name": "Parties de meubles (à l’exclusion des sièges)"
    },
    {
        "code": "31.00.9",
        "name": "Garnissage de sièges; opérations sous-traitées intervenant dans la "
    },
    {
        "code": "31.00.91",
        "name": "Garnissage de sièges"
    },
    {
        "code": "31.00.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de sièges, "
    },
    {
        "code": "31.01",
        "name": "Meubles de bureau et de magasin"
    },
    {
        "code": "31.01.1",
        "name": "Meubles de bureau et de magasin"
    },
    {
        "code": "31.01.11",
        "name": "Mobilier métallique de bureau"
    },
    {
        "code": "31.01.12",
        "name": "Mobilier de bureau en bois"
    },
    {
        "code": "31.01.13",
        "name": "Mobilier en bois pour magasins"
    },
    {
        "code": "31.01.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "31.01.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de meubles "
    },
    {
        "code": "31.02",
        "name": "Meubles de cuisine"
    },
    {
        "code": "31.02.1",
        "name": "Meubles de cuisine"
    },
    {
        "code": "31.02.10",
        "name": "Meubles de cuisine"
    },
    {
        "code": "31.02.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "31.02.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de meubles "
    },
    {
        "code": "31.03",
        "name": "Sommiers et matelas"
    },
    {
        "code": "31.03.1",
        "name": "Sommiers et matelas"
    },
    {
        "code": "31.03.11",
        "name": "Sommiers"
    },
    {
        "code": "31.03.12",
        "name": "Matelas"
    },
    {
        "code": "31.03.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "31.03.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "31.08",
        "name": "Industries connexes de l'ameublement"
    },
    {
        "code": "31.08.1",
        "name": "Finition de meubles neufs (à l'exclusion du garnissage des sièges)"
    },
    {
        "code": "31.08.10",
        "name": "Finition de meubles neufs (à l’exclusion du garnissage des sièges)"
    },
    {
        "code": "31.09",
        "name": "Autres meubles"
    },
    {
        "code": "31.09.1",
        "name": "Autres meubles"
    },
    {
        "code": "31.09.11",
        "name": "Autres meubles métalliques n.c.a."
    },
    {
        "code": "31.09.12",
        "name": "Meubles en bois pour chambres à coucher, salles à manger ou salles de séjour"
    },
    {
        "code": "31.09.13",
        "name": "Autres meubles en bois n.c.a."
    },
    {
        "code": "31.09.14",
        "name": "Autres meubles en matières plastiques"
    },
    {
        "code": "31.09.19",
        "name": "Meubles en autres matières (bambou, rotin, etc.)"
    },
    {
        "code": "31.09.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'autres "
    },
    {
        "code": "31.09.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d'autres "
    },
    {
        "code": "32",
        "name": "Autres produits manufacturés"
    },
    {
        "code": "32.1",
        "name": "Articles de joaillerie et bijouterie et articles similaires"
    },
    {
        "code": "32.11",
        "name": "Monnaies"
    },
    {
        "code": "32.11.1",
        "name": "Monnaies"
    },
    {
        "code": "32.11.10",
        "name": "Monnaies"
    },
    {
        "code": "32.11.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "32.11.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  de "
    },
    {
        "code": "32.12",
        "name": "Articles de joaillerie et bijouterie"
    },
    {
        "code": "32.12.1",
        "name": "Articles de joaillerie et bijouterie"
    },
    {
        "code": "32.12.11",
        "name": "Perles de culture, pierres précieuses et semi-précieuses, y compris "
    },
    {
        "code": "32.12.12",
        "name": "Diamants  industriels,  travaillés;  poussière  et  poudres  de  pierres "
    },
    {
        "code": "32.12.13",
        "name": "Articles de joaillerie et leurs parties; articles d’orfèvrerie et leurs "
    },
    {
        "code": "32.12.14",
        "name": "Autres articles en métaux précieux; articles de perles naturelles ou "
    },
    {
        "code": "32.12.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.12.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.13",
        "name": "Articles de bijouterie fantaisie et articles similaires"
    },
    {
        "code": "32.13.1",
        "name": "Articles de bijouterie fantaisie et articles similaires"
    },
    {
        "code": "32.13.10",
        "name": "Articles de bijouterie fantaisie et articles similaires"
    },
    {
        "code": "32.13.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.13.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.2",
        "name": "Instruments de musique"
    },
    {
        "code": "32.20",
        "name": "Instruments de musique"
    },
    {
        "code": "32.20.1",
        "name": "Pianos,  orgues  et  autres  instruments  de  musique  à  cordes  et  à "
    },
    {
        "code": "32.20.11",
        "name": "Pianos et autres instruments à cordes à clavier"
    },
    {
        "code": "32.20.12",
        "name": "Autres instruments à cordes"
    },
    {
        "code": "32.20.13",
        "name": "Orgues à tuyaux, harmoniums et instruments similaires; accordéons "
    },
    {
        "code": "32.20.14",
        "name": "Instruments de musique électriques et électroniques"
    },
    {
        "code": "32.20.15",
        "name": "Autres instruments de musique"
    },
    {
        "code": "32.20.16",
        "name": "Métronomes et diapasons; mécanismes de boîtes à musique; cordes "
    },
    {
        "code": "32.20.2",
        "name": "Parties et accessoires d’instruments de musique"
    },
    {
        "code": "32.20.20",
        "name": "Parties et accessoires d’instruments de musique"
    },
    {
        "code": "32.20.9",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "32.20.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication "
    },
    {
        "code": "32.3",
        "name": "Articles de sport"
    },
    {
        "code": "32.30",
        "name": "Articles de sport"
    },
    {
        "code": "32.30.1",
        "name": "Articles de sport"
    },
    {
        "code": "32.30.11",
        "name": "Skis et autres équipements pour sports de neige, à l’exclusion des "
    },
    {
        "code": "32.30.12",
        "name": "Chaussures de ski et de sports de neige"
    },
    {
        "code": "32.30.13",
        "name": "Skis nautiques, planches de surf, planches à voiles et autres matériels "
    },
    {
        "code": "32.30.14",
        "name": "Matériels pour la gymnastique, la culture physique ou l’athlétisme"
    },
    {
        "code": "32.30.15",
        "name": "Autres articles et matériels de sports et de jeux en extérieur; piscines "
    },
    {
        "code": "32.30.16",
        "name": "Cannes à pêche, autres articles de pêche; articles pour la chasse ou "
    },
    {
        "code": "32.30.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.30.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.4",
        "name": "Jeux et jouets"
    },
    {
        "code": "32.40",
        "name": "Jeux et jouets"
    },
    {
        "code": "32.40.1",
        "name": "Poupées  représentant  uniquement  des  êtres  humains;  jouets "
    },
    {
        "code": "32.40.11",
        "name": "Poupées représentant uniquement des êtres humains"
    },
    {
        "code": "32.40.12",
        "name": "Jouets représentant des animaux ou des créatures non humaines"
    },
    {
        "code": "32.40.13",
        "name": "Parties  et  accessoires  pour  poupées  représentant  des  êtres "
    },
    {
        "code": "32.40.2",
        "name": "Trains-jouets  et  accessoires;  autres  modèles  réduits  et  jeux  de "
    },
    {
        "code": "32.40.20",
        "name": "Trains-jouets  et  accessoires;  autres  modèles  réduits  et  jeux  de "
    },
    {
        "code": "32.40.3",
        "name": "Autres jouets, y compris jouets musicaux"
    },
    {
        "code": "32.40.31",
        "name": "Jouets à roues pour enfants; poussettes et landaus de poupées"
    },
    {
        "code": "32.40.32",
        "name": "Puzzles"
    },
    {
        "code": "32.40.39",
        "name": "Jeux et jouets n.c.a."
    },
    {
        "code": "32.40.4",
        "name": "Autres jeux"
    },
    {
        "code": "32.40.41",
        "name": "Jeux de cartes"
    },
    {
        "code": "32.40.42",
        "name": "Articles de billard, jeux de table et de société; autres jeux, à pièces "
    },
    {
        "code": "32.40.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication de jeux "
    },
    {
        "code": "32.40.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication de jeux et "
    },
    {
        "code": "32.5",
        "name": "Instruments et fournitures à usage médical et dentaire"
    },
    {
        "code": "32.50",
        "name": "Instruments et fournitures à usage médical et dentaire"
    },
    {
        "code": "32.50.1",
        "name": "Instruments et appareils médicaux, chirurgicaux et dentaires"
    },
    {
        "code": "32.50.11",
        "name": "Instruments et appareils utilisés dans les traitements dentaires"
    },
    {
        "code": "32.50.12",
        "name": "Stérilisateurs médicaux, chirurgicaux ou de laboratoire"
    },
    {
        "code": "32.50.13",
        "name": "Seringues,  aiguilles,  cathéters,  canules  et  articles  similaires; "
    },
    {
        "code": "32.50.2",
        "name": "Instruments et appareils thérapeutiques; accessoires, prothèses et "
    },
    {
        "code": "32.50.21",
        "name": "Instruments et appareils thérapeutiques; appareils respiratoires"
    },
    {
        "code": "32.50.22",
        "name": "Articulations  artiﬁcielles; appareils orthopédiques; dents"
    },
    {
        "code": "32.50.23",
        "name": "Parties et accessoires de prothèses et appareils orthopédiques"
    },
    {
        "code": "32.50.3",
        "name": "Articles  médicaux,  chirurgicaux,  dentaires  ou  vétérinaires  ; "
    },
    {
        "code": "32.50.30",
        "name": "Articles médicaux, chirurgicaux, dentaires ou vétérinaires; fauteuils "
    },
    {
        "code": "32.50.4",
        "name": "Lunettes, verres et lentilles, et leurs parties"
    },
    {
        "code": "32.50.41",
        "name": "Lentilles de contact; verres de lunettes de tous matériaux"
    },
    {
        "code": "32.50.42",
        "name": "Lunettes, correctrices, protectrices ou autres"
    },
    {
        "code": "32.50.43",
        "name": "Montures de lunettes ou articles similaires"
    },
    {
        "code": "32.50.44",
        "name": "Parties et accessoires de montures de lunettes"
    },
    {
        "code": "32.50.5",
        "name": "Autres articles utilisés à des ﬁns médicales ou chirurgicales"
    },
    {
        "code": "32.50.50",
        "name": "Autres articles utilisés à des ﬁns médicales ou chirurgicales"
    },
    {
        "code": "32.50.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'équipements "
    },
    {
        "code": "32.50.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d'équipements "
    },
    {
        "code": "32.9",
        "name": "Produits manufacturés n.c.a."
    },
    {
        "code": "32.91",
        "name": "Articles de brosserie"
    },
    {
        "code": "32.91.1",
        "name": "Articles de brosserie"
    },
    {
        "code": "32.91.11",
        "name": "Balais et brosses pour nettoyage"
    },
    {
        "code": "32.91.12",
        "name": "Brosses à dents, à cheveux et autres brosses de toilette pour usage "
    },
    {
        "code": "32.91.19",
        "name": "Autres brosses n.c.a."
    },
    {
        "code": "32.91.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.91.99",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’articles "
    },
    {
        "code": "32.99",
        "name": "Autres produits manufacturés n.c.a."
    },
    {
        "code": "32.99.1",
        "name": "Casques de sécurité; stylos et crayons, tableaux à écrire, cachets à "
    },
    {
        "code": "32.99.11",
        "name": "Casques de sécurité et autres produits de sécurité"
    },
    {
        "code": "32.99.12",
        "name": "Stylos; stylos et marqueurs à feutre; porte-mines"
    },
    {
        "code": "32.99.13",
        "name": "Stylos à dessiner; stylos à plumes et autres stylos"
    },
    {
        "code": "32.99.14",
        "name": "Assortiments d’articles pour écriture, porte-stylos, porte-crayons et "
    },
    {
        "code": "32.99.15",
        "name": "Crayons  noirs  ou  de  couleur,  mines  de  crayon,  pastels,  fusains, "
    },
    {
        "code": "32.99.16",
        "name": "Ardoises et tableaux à écrire; cachets à dater, sceller ou numéroter "
    },
    {
        "code": "32.99.2",
        "name": "Parapluies; cannes; boutons; formes pour boutons; fermetures à "
    },
    {
        "code": "32.99.21",
        "name": "Parapluies, parasols et ombrelles; cannes, cannes-sièges, fouets et "
    },
    {
        "code": "32.99.22",
        "name": "Parties,  garnitures  et  accessoires  pour  parapluies,  parasols, "
    },
    {
        "code": "32.99.23",
        "name": "Boutons et boutons-pression et leurs parties"
    },
    {
        "code": "32.99.24",
        "name": "Fermetures à glissière"
    },
    {
        "code": "32.99.25",
        "name": "Formes  pour  boutons  et  autres  parties  de  boutons;  ébauches  de "
    },
    {
        "code": "32.99.3",
        "name": "Produits en cheveux ou en poils d’animaux; articles similaires en "
    },
    {
        "code": "32.99.30",
        "name": "Produits en cheveux ou en poils d’animaux; articles similaires en "
    },
    {
        "code": "32.99.4",
        "name": "Briquets, pipes et leurs parties; articles en matières combustibles; "
    },
    {
        "code": "32.99.41",
        "name": "Briquets et autres allumeurs; pipes, fume-cigare et fume-cigarette, "
    },
    {
        "code": "32.99.42",
        "name": "Parties  de  briquets;  alliages  pyrophoriques;  articles  en  matières "
    },
    {
        "code": "32.99.43",
        "name": "Recharges de gaz liquide ou liquéﬁé pour briquets, d'une capacité"
    },
    {
        "code": "32.99.5",
        "name": "Autres articles n.c.a."
    },
    {
        "code": "32.99.51",
        "name": "Articles  pour  fêtes  et  divertissements,  y  compris  matériel  de "
    },
    {
        "code": "32.99.52",
        "name": "Peignes,  barrettes  et  articles  similaires;  épingles  à  cheveux; "
    },
    {
        "code": "32.99.53",
        "name": "Matériels de démonstration"
    },
    {
        "code": "32.99.54",
        "name": "Bougies, chandelles, cierges et articles similaires"
    },
    {
        "code": "32.99.55",
        "name": "Fleurs, feuillages et fruits artiﬁciels, et leurs parties"
    },
    {
        "code": "32.99.59",
        "name": "Autres articles divers n.c.a."
    },
    {
        "code": "32.99.6",
        "name": "Travaux de taxidermie"
    },
    {
        "code": "32.99.60",
        "name": "Travaux de taxidermie"
    },
    {
        "code": "32.99.9",
        "name": "Opérations sous-traitées intervenant dans la fabrication d’autres "
    },
    {
        "code": "32.99.99",
        "name": "Opérations  sous-traitées  intervenant  dans  la  fabrication  d’autres "
    },
    {
        "code": "33",
        "name": "Réparation et installation de machines et d’équipements"
    },
    {
        "code": "33.1",
        "name": "Réparation  d’ouvrages  en  métaux,  de  machines  et "
    },
    {
        "code": "33.11",
        "name": "Réparation d’ouvrages en métaux"
    },
    {
        "code": "33.11.1",
        "name": "Réparation et entretien d’ouvrages en métaux"
    },
    {
        "code": "33.11.11",
        "name": "Réparation et entretien de structures métalliques"
    },
    {
        "code": "33.11.12",
        "name": "Réparation  et  entretien  de  réservoirs,  citernes  et  conteneurs "
    },
    {
        "code": "33.11.13",
        "name": "Réparation et entretien de générateurs de vapeur, à l’exclusion des "
    },
    {
        "code": "33.11.14",
        "name": "Réparation et entretien d’armes et de munitions"
    },
    {
        "code": "33.11.19",
        "name": "Réparation et entretien d’autres ouvrages en métaux"
    },
    {
        "code": "33.12",
        "name": "Réparation de machines et équipements mécaniques"
    },
    {
        "code": "33.12.1",
        "name": "Réparation et entretien de machines et équipements mécaniques "
    },
    {
        "code": "33.12.11",
        "name": "Réparation  et  entretien  de  moteurs  et  turbines,  à  l’exclusion  des "
    },
    {
        "code": "33.12.12",
        "name": "Réparation  et  entretien  d’équipements  hydrauliques  et "
    },
    {
        "code": "33.12.13",
        "name": "Réparation et entretien d’engrenages et d’organes mécaniques de "
    },
    {
        "code": "33.12.14",
        "name": "Réparation et entretien de fours et brûleurs"
    },
    {
        "code": "33.12.15",
        "name": "Réparation  et  entretien  d’équipements  de  levage  et  de "
    },
    {
        "code": "33.12.16",
        "name": "Réparation et entretien de machines et d’équipements de bureau (à "
    },
    {
        "code": "33.12.17",
        "name": "Réparation et entretien d’outillage portatif à moteur incorporé"
    },
    {
        "code": "33.12.18",
        "name": "Réparation et entretien d’équipements aérauliques et frigoriﬁques"
    },
    {
        "code": "33.12.19",
        "name": "Réparation  et  entretien  d’autres  machines  et  équipements "
    },
    {
        "code": "33.12.2",
        "name": "Réparation et entretien de machines et équipements mécaniques "
    },
    {
        "code": "33.12.21",
        "name": "Réparation et entretien de machines agricoles et forestières"
    },
    {
        "code": "33.12.22",
        "name": "Réparation et entretien de machines de formage des métaux et de "
    },
    {
        "code": "33.12.23",
        "name": "Réparation et entretien de machines pour la métallurgie"
    },
    {
        "code": "33.12.24",
        "name": "Réparation  et  entretien  de  matériels  pour  l’extraction  ou  la "
    },
    {
        "code": "33.12.25",
        "name": "Réparation  et  entretien  de  machines  pour  l’industrie "
    },
    {
        "code": "33.12.26",
        "name": "Réparation et entretien de machines pour les industries textiles"
    },
    {
        "code": "33.12.27",
        "name": "Réparation et entretien de machines pour les industries du papier "
    },
    {
        "code": "33.12.28",
        "name": "Réparation et entretien de machines pour le travail du caoutchouc "
    },
    {
        "code": "33.12.29",
        "name": "Réparation  et  entretien  d’autres  machines  et  équipements "
    },
    {
        "code": "33.13",
        "name": "Réparation de matériels électroniques et optiques"
    },
    {
        "code": "33.13.1",
        "name": "Réparation et entretien de matériels électroniques et optiques"
    },
    {
        "code": "33.13.11",
        "name": "Réparation  et  entretien  d’instruments  et  d’appareils  de  mesure, "
    },
    {
        "code": "33.13.12",
        "name": "Réparation  et  entretien  d’équipements  d’irradiation  médicale, "
    },
    {
        "code": "33.13.13",
        "name": "Réparation  et  entretien  de  matériel  optique  et  photographique "
    },
    {
        "code": "33.13.19",
        "name": "Réparation  et  entretien  d’autres  équipements  électroniques "
    },
    {
        "code": "33.14",
        "name": "Réparation d’équipements électriques"
    },
    {
        "code": "33.14.1",
        "name": "Réparation et entretien d’équipements électriques"
    },
    {
        "code": "33.14.11",
        "name": "Réparation et entretien de moteurs, génératrices et transformateurs "
    },
    {
        "code": "33.14.19",
        "name": "Réparation  et  entretien  d’autres  équipements  électriques "
    },
    {
        "code": "33.15",
        "name": "Réparation et entretien de navires et bateaux"
    },
    {
        "code": "33.15.1",
        "name": "Réparation et entretien de navires et bateaux"
    },
    {
        "code": "33.15.10",
        "name": "Réparation et entretien de navires et bateaux"
    },
    {
        "code": "33.16",
        "name": "Réparation et entretien d’aéronefs et d’engins spatiaux"
    },
    {
        "code": "33.16.1",
        "name": "Réparation et entretien d’aéronefs et d’engins spatiaux"
    },
    {
        "code": "33.16.10",
        "name": "Réparation et entretien d’aéronefs et d’engins spatiaux"
    },
    {
        "code": "33.17",
        "name": "Réparation et entretien d’autres équipements de transport"
    },
    {
        "code": "33.17.1",
        "name": "Réparation et entretien d’autres équipements de transport"
    },
    {
        "code": "33.17.11",
        "name": "Réparation et entretien de matériel ferroviaire roulant"
    },
    {
        "code": "33.17.19",
        "name": "Réparation et entretien d’autres matériels de transport n.c.a."
    },
    {
        "code": "33.19",
        "name": "Réparation d’autres équipements"
    },
    {
        "code": "33.19.1",
        "name": "Réparation d’autres équipements"
    },
    {
        "code": "33.19.10",
        "name": "Réparation d’autres équipements"
    },
    {
        "code": "33.2",
        "name": "Installation de machines et d’équipements industriels"
    },
    {
        "code": "33.20",
        "name": "Installation de machines et d’équipements industriels"
    },
    {
        "code": "33.20.1",
        "name": "Installation d’ouvrages métalliques, à l’exclusion de machines et "
    },
    {
        "code": "33.20.11",
        "name": "Installation de générateurs de vapeur, à l’exclusion des chaudières "
    },
    {
        "code": "33.20.12",
        "name": "Installation  d’autres  ouvrages  métalliques,  à  l’exclusion  de "
    },
    {
        "code": "33.20.2",
        "name": "Installation de machines d’usage général"
    },
    {
        "code": "33.20.21",
        "name": "Installation de machines de bureau et comptables"
    },
    {
        "code": "33.20.29",
        "name": "Installation d’autres machines d’usage général n.c.a."
    },
    {
        "code": "33.20.3",
        "name": "Installation de machines d’usage spéciﬁque"
    },
    {
        "code": "33.20.31",
        "name": "Installation  de  machines  et  d’équipements  industriels  pour "
    },
    {
        "code": "33.20.32",
        "name": "Installation de machines de formage des métaux"
    },
    {
        "code": "33.20.33",
        "name": "Installation  de  machines  et  d’équipements  industriels  pour  la "
    },
    {
        "code": "33.20.34",
        "name": "Installation  de  machines  et  d’équipements  industriels  pour "
    },
    {
        "code": "33.20.35",
        "name": "Installation  de  machines  et  d’équipements  industriels  pour "
    },
    {
        "code": "33.20.36",
        "name": "Installation  de  machines  et  d’équipements  industriels  pour  les "
    },
    {
        "code": "33.20.37",
        "name": "Installation  de  machines  et  d’équipements  industriels  pour  les "
    },
    {
        "code": "33.20.38",
        "name": "Installation de machines et d’équipements industriels pour le travail "
    },
    {
        "code": "33.20.39",
        "name": "Installation d’autres machines d’usage spéciﬁque"
    },
    {
        "code": "33.20.4",
        "name": "Installation de matériels électroniques et optiques"
    },
    {
        "code": "33.20.41",
        "name": "Installation de machines médicales professionnelles et d’instruments "
    },
    {
        "code": "33.20.42",
        "name": "Installation de matériels électroniques professionnels"
    },
    {
        "code": "33.20.5",
        "name": "Installation d’équipements électriques"
    },
    {
        "code": "33.20.50",
        "name": "Installation d’équipements électriques"
    },
    {
        "code": "33.20.6",
        "name": "Installation d’équipements de contrôle automatique de processus "
    },
    {
        "code": "33.20.60",
        "name": "Installation  d’équipements  de  contrôle  automatique  de  processus "
    },
    {
        "code": "33.20.7",
        "name": "Installation d’autres produits n.c.a."
    },
    {
        "code": "33.20.70",
        "name": "Installation d’autres produits n.c.a."
    },
    {
        "code": "35",
        "name": "Électricité, gaz, vapeur et air conditionné"
    },
    {
        "code": "35.1",
        "name": "Électricité, transport et distribution d'électricité"
    },
    {
        "code": "35.11",
        "name": "Électricité"
    },
    {
        "code": "35.11.1",
        "name": "Électricité"
    },
    {
        "code": "35.11.10",
        "name": "Électricité"
    },
    {
        "code": "35.12",
        "name": "Transport d’électricité"
    },
    {
        "code": "35.12.1",
        "name": "Transport d’électricité"
    },
    {
        "code": "35.12.10",
        "name": "Transport d’électricité"
    },
    {
        "code": "35.13",
        "name": "Distribution d’électricité"
    },
    {
        "code": "35.13.1",
        "name": "Distribution d’électricité"
    },
    {
        "code": "35.13.11",
        "name": "Distribution d'électricité haute tension"
    },
    {
        "code": "35.13.12",
        "name": "Distribution d'électricité moyenne tension"
    },
    {
        "code": "35.13.13",
        "name": "Distribution d'électricité basse tension"
    },
    {
        "code": "35.14",
        "name": "Commerce de l’électricité"
    },
    {
        "code": "35.14.1",
        "name": "Commerce de l’électricité"
    },
    {
        "code": "35.14.10",
        "name": "Commerce de l’électricité"
    },
    {
        "code": "35.2",
        "name": "Gaz manufacturé; distribution de combustibles gazeux par "
    },
    {
        "code": "35.21",
        "name": "Gaz manufacturé"
    },
    {
        "code": "35.21.1",
        "name": "Gaz  de  houille,  gaz  à  l’eau,  gaz  de  gazogène  et  gaz  similaires, "
    },
    {
        "code": "35.21.10",
        "name": "Gaz de houille, gaz à l’eau, gaz de gazogène et gaz similaires, autres "
    },
    {
        "code": "35.22",
        "name": "Distribution de combustibles gazeux par conduites"
    },
    {
        "code": "35.22.1",
        "name": "Distribution de combustibles gazeux par conduites"
    },
    {
        "code": "35.22.11",
        "name": "Distribution de combustibles gazeux haute pression par conduites"
    },
    {
        "code": "35.22.12",
        "name": "Distribution  de  combustibles  gazeux  moyenne  pression  par "
    },
    {
        "code": "35.22.13",
        "name": "Distribution de combustibles gazeux basse pression par conduites"
    },
    {
        "code": "35.23",
        "name": "Commerce du gaz par conduites"
    },
    {
        "code": "35.23.1",
        "name": "Commerce du gaz par conduites"
    },
    {
        "code": "35.23.10",
        "name": "Commerce du gaz par conduites"
    },
    {
        "code": "35.3",
        "name": "Production et distribution de vapeur et d’air conditionné"
    },
    {
        "code": "35.30",
        "name": "Production et distribution de vapeur et d’air conditionné"
    },
    {
        "code": "35.30.1",
        "name": "Vapeur et  eau  chaude  ;  production  et  distribution  de  vapeur  et "
    },
    {
        "code": "35.30.11",
        "name": "Vapeur et eau chaude"
    },
    {
        "code": "35.30.12",
        "name": "Production et distribution de vapeur et d’eau chaude par réseau"
    },
    {
        "code": "35.30.2",
        "name": "Glace; production et distribution d’air et d’eau refroidis"
    },
    {
        "code": "35.30.21",
        "name": "Glace,  y  compris  glace  pour  usages  frigoriﬁques (non"
    },
    {
        "code": "35.30.22",
        "name": "Production et distribution d’air et d’eau refroidis"
    },
    {
        "code": "36",
        "name": "Eau naturelle; traitement et distribution d’eau"
    },
    {
        "code": "36.0",
        "name": "Eau naturelle; traitement et distribution d’eau"
    },
    {
        "code": "36.00",
        "name": "Eau naturelle; traitement et distribution d’eau"
    },
    {
        "code": "36.00.1",
        "name": "Eau naturelle"
    },
    {
        "code": "36.00.11",
        "name": "Eau potable"
    },
    {
        "code": "36.00.12",
        "name": "Eaux non potables"
    },
    {
        "code": "36.00.2",
        "name": "Traitement et distribution de l’eau par conduites"
    },
    {
        "code": "36.00.20",
        "name": "Traitement et distribution de l’eau par conduites"
    },
    {
        "code": "36.00.3",
        "name": "Commerce de l’eau par conduites"
    },
    {
        "code": "36.00.30",
        "name": "Commerce de l’eau par conduites"
    },
    {
        "code": "37",
        "name": "Collecte et traitement des eaux usées; boues d’épuration"
    },
    {
        "code": "37.0",
        "name": "Collecte et traitement des eaux usées; boues d’épuration"
    },
    {
        "code": "37.00",
        "name": "Collecte et traitement des eaux usées; boues d’épuration"
    },
    {
        "code": "37.00.1",
        "name": "Collecte et traitement des eaux usées"
    },
    {
        "code": "37.00.11",
        "name": "Évacuation et traitement des eaux usées"
    },
    {
        "code": "37.00.12",
        "name": "Vidange et nettoyage des puisards et fosses septiques"
    },
    {
        "code": "37.00.13",
        "name": "Traitement des boues d'épuration"
    },
    {
        "code": "37.00.2",
        "name": "Boues d'épuration, traitées"
    },
    {
        "code": "37.00.20",
        "name": "Boues d'épuration, traitées"
    },
    {
        "code": "38",
        "name": "Collecte,  traitement  et  élimination  des  déchets; "
    },
    {
        "code": "38.1",
        "name": "Déchets; collecte des déchets"
    },
    {
        "code": "38.11",
        "name": "Déchets non dangereux; collecte des déchets non dangereux"
    },
    {
        "code": "38.11.1",
        "name": "Collecte des déchets recyclables non dangereux"
    },
    {
        "code": "38.11.11",
        "name": "Collecte des déchets municipaux recyclables non dangereux"
    },
    {
        "code": "38.11.19",
        "name": "Collecte des autres déchets recyclables non dangereux"
    },
    {
        "code": "38.11.2",
        "name": "Collecte des déchets non recyclables non dangereux"
    },
    {
        "code": "38.11.21",
        "name": "Collecte des déchets municipaux non recyclables non dangereux"
    },
    {
        "code": "38.11.29",
        "name": "Collecte des autres déchets non recyclables non dangereux"
    },
    {
        "code": "38.11.3",
        "name": "Déchets non recyclables non dangereux collectés"
    },
    {
        "code": "38.11.31",
        "name": "Déchets municipaux non recyclables non dangereux"
    },
    {
        "code": "38.11.39",
        "name": "Autres déchets non recyclables non dangereux"
    },
    {
        "code": "38.11.4",
        "name": "Épaves, à démanteler"
    },
    {
        "code": "38.11.41",
        "name": "Navires et autres structures ﬂottantes, à démolir"
    },
    {
        "code": "38.11.49",
        "name": "Épaves, autres que navires et structures ﬂottantes, à démanteler"
    },
    {
        "code": "38.11.5",
        "name": "Autres déchets recyclables non dangereux collectés"
    },
    {
        "code": "38.11.51",
        "name": "Déchets de verre"
    },
    {
        "code": "38.11.52",
        "name": "Déchets de papiers et cartons"
    },
    {
        "code": "38.11.53",
        "name": "Pneumatiques usagés"
    },
    {
        "code": "38.11.54",
        "name": "Autres déchets de caoutchouc"
    },
    {
        "code": "38.11.55",
        "name": "Déchets de matières plastiques"
    },
    {
        "code": "38.11.56",
        "name": "Déchets de matières textiles"
    },
    {
        "code": "38.11.57",
        "name": "Déchets de cuir"
    },
    {
        "code": "38.11.58",
        "name": "Déchets métalliques non dangereux"
    },
    {
        "code": "38.11.59",
        "name": "Autres déchets recyclables non dangereux n.c.a."
    },
    {
        "code": "38.11.6",
        "name": "Services des installations de transfert de déchets non dangereux"
    },
    {
        "code": "38.11.61",
        "name": "Services des installations de transfert de déchets recyclables non "
    },
    {
        "code": "38.11.69",
        "name": "Services  des  installations  de  transfert  d’autres  déchets  non "
    },
    {
        "code": "38.12",
        "name": "Déchets dangereux; collecte des déchets dangereux"
    },
    {
        "code": "38.12.1",
        "name": "Collecte des déchets dangereux"
    },
    {
        "code": "38.12.11",
        "name": "Collecte  de  déchets  médicaux  dangereux  et  d’autres  déchets "
    },
    {
        "code": "38.12.12",
        "name": "Collecte d’autres déchets industriels dangereux"
    },
    {
        "code": "38.12.13",
        "name": "Collecte des déchets municipaux dangereux"
    },
    {
        "code": "38.12.2",
        "name": "Déchets dangereux collectés"
    },
    {
        "code": "38.12.21",
        "name": "Combustibles nucléaires irradiés"
    },
    {
        "code": "38.12.22",
        "name": "Déchets pharmaceutiques"
    },
    {
        "code": "38.12.23",
        "name": "Autres déchets médicaux dangereux"
    },
    {
        "code": "38.12.24",
        "name": "Déchets chimiques dangereux"
    },
    {
        "code": "38.12.25",
        "name": "Huiles usagées"
    },
    {
        "code": "38.12.26",
        "name": "Déchets métalliques dangereux"
    },
    {
        "code": "38.12.27",
        "name": "Déchets et débris de piles, batteries et accumulateurs électriques"
    },
    {
        "code": "38.12.29",
        "name": "Autres déchets dangereux"
    },
    {
        "code": "38.12.3",
        "name": "Services des installations de transfert de déchets dangereux"
    },
    {
        "code": "38.12.30",
        "name": "Services des installations de transfert de déchets dangereux"
    },
    {
        "code": "38.2",
        "name": "Traitement et élimination des déchets"
    },
    {
        "code": "38.21",
        "name": "Traitement et élimination des déchets non dangereux"
    },
    {
        "code": "38.21.1",
        "name": "Traitement des déchets non dangereux pour élimination ﬁnale"
    },
    {
        "code": "38.21.10",
        "name": "Traitement des déchets non dangereux pour élimination ﬁnale"
    },
    {
        "code": "38.21.2",
        "name": "Élimination des déchets non dangereux"
    },
    {
        "code": "38.21.21",
        "name": "Enfouissement sanitaire"
    },
    {
        "code": "38.21.22",
        "name": "Autre enfouissement"
    },
    {
        "code": "38.21.23",
        "name": "Incinération des déchets non dangereux"
    },
    {
        "code": "38.21.29",
        "name": "Élimination d’autres déchets non dangereux"
    },
    {
        "code": "38.21.3",
        "name": "Déchets de solvants organiques"
    },
    {
        "code": "38.21.30",
        "name": "Déchets de solvants organiques"
    },
    {
        "code": "38.21.4",
        "name": "Cendres et résidus issus de l’incinération des déchets"
    },
    {
        "code": "38.21.40",
        "name": "Cendres et résidus issus de l’incinération des déchets"
    },
    {
        "code": "38.22",
        "name": "Traitement et élimination des déchets dangereux"
    },
    {
        "code": "38.22.1",
        "name": "Traitement des déchets nucléaires et d’autres déchets dangereux"
    },
    {
        "code": "38.22.11",
        "name": "Traitement des déchets nucléaires"
    },
    {
        "code": "38.22.19",
        "name": "Traitement d’autres déchets dangereux"
    },
    {
        "code": "38.22.2",
        "name": "Élimination des déchets nucléaires et d’autres déchets dangereux"
    },
    {
        "code": "38.22.21",
        "name": "Élimination des déchets nucléaires"
    },
    {
        "code": "38.22.29",
        "name": "Élimination d’autres déchets dangereux"
    },
    {
        "code": "38.3",
        "name": "Récupération    de   matériaux;    matières   premières "
    },
    {
        "code": "38.31",
        "name": "Démantèlement d’épaves"
    },
    {
        "code": "38.31.1",
        "name": "Démantèlement d’épaves"
    },
    {
        "code": "38.31.11",
        "name": "Démolition navale"
    },
    {
        "code": "38.31.12",
        "name": "Démantèlement d’épaves, autres que navires et structures ﬂottantes"
    },
    {
        "code": "38.32",
        "name": "Récupération  de  matériaux  triés;  matières  premières "
    },
    {
        "code": "38.32.1",
        "name": "Récupération de matériaux triés"
    },
    {
        "code": "38.32.11",
        "name": "Récupération de matériaux métalliques triés"
    },
    {
        "code": "38.32.12",
        "name": "Récupération de matériaux non métalliques triés"
    },
    {
        "code": "38.32.2",
        "name": "Matières premières secondaires métalliques"
    },
    {
        "code": "38.32.21",
        "name": "Métaux  précieux,  sous  forme  de  matières  premières "
    },
    {
        "code": "38.32.22",
        "name": "Métaux ferreux, sous forme de matières premières secondaires"
    },
    {
        "code": "38.32.23",
        "name": "Cuivre, sous forme de matière première secondaire"
    },
    {
        "code": "38.32.24",
        "name": "Nickel, sous forme de matière première secondaire"
    },
    {
        "code": "38.32.25",
        "name": "Aluminium, sous forme de matière première secondaire"
    },
    {
        "code": "38.32.29",
        "name": "Autres métaux, sous forme de matières premières secondaires"
    },
    {
        "code": "38.32.3",
        "name": "Matières premières secondaires non métalliques"
    },
    {
        "code": "38.32.31",
        "name": "Verre, sous forme de matière première secondaire"
    },
    {
        "code": "38.32.32",
        "name": "Papier et carton, sous forme de matière première secondaire"
    },
    {
        "code": "38.32.33",
        "name": "Plastiques, sous forme de matières premières secondaires"
    },
    {
        "code": "38.32.34",
        "name": "Caoutchouc, sous forme de matière première secondaire"
    },
    {
        "code": "38.32.35",
        "name": "Textiles, sous forme de matières premières secondaires"
    },
    {
        "code": "38.32.39",
        "name": "Autres matières premières secondaires non métalliques"
    },
    {
        "code": "39",
        "name": "Dépollution et autres services de gestion des déchets"
    },
    {
        "code": "39.0",
        "name": "Dépollution et autres services de gestion des déchets"
    },
    {
        "code": "39.00",
        "name": "Dépollution et autres services de gestion des déchets"
    },
    {
        "code": "39.00.1",
        "name": "Dépollution et nettoyage"
    },
    {
        "code": "39.00.11",
        "name": "Dépollution et nettoyage des sols et eaux souterraines"
    },
    {
        "code": "39.00.12",
        "name": "Dépollution et nettoyage des eaux de surface"
    },
    {
        "code": "39.00.13",
        "name": "Dépollution et nettoyage de l’air"
    },
    {
        "code": "39.00.14",
        "name": "Dépollution des bâtiments"
    },
    {
        "code": "39.00.2",
        "name": "Autres  services  de  dépollution  et  de  contrôle  spécialisé  de  la "
    },
    {
        "code": "39.00.21",
        "name": "Conﬁnement, contrôle et suivi de la dépollution de sites et autres"
    },
    {
        "code": "39.00.22",
        "name": "Autres services de dépollution"
    },
    {
        "code": "39.00.23",
        "name": "Autres contrôles spécialisés de la pollution"
    },
    {
        "code": "41",
        "name": "Bâtiments et travaux de construction de bâtiments"
    },
    {
        "code": "41.0",
        "name": "Bâtiments et travaux de construction de bâtiments"
    },
    {
        "code": "41.00",
        "name": "Bâtiments et travaux de construction de bâtiments"
    },
    {
        "code": "41.00.1",
        "name": "Bâtiments résidentiels"
    },
    {
        "code": "41.00.10",
        "name": "Bâtiments résidentiels"
    },
    {
        "code": "41.00.2",
        "name": "Bâtiments non résidentiels"
    },
    {
        "code": "41.00.20",
        "name": "Bâtiments non résidentiels"
    },
    {
        "code": "41.00.3",
        "name": "Travaux  de  construction  relatifs  aux  bâtiments  résidentiels "
    },
    {
        "code": "41.00.30",
        "name": "Travaux  de  construction  relatifs  aux  bâtiments  résidentiels "
    },
    {
        "code": "41.00.4",
        "name": "Travaux  de  construction  relatifs  aux  bâtiments  non  résidentiels "
    },
    {
        "code": "41.00.40",
        "name": "Travaux  de  construction  relatifs  aux  bâtiments  non  résidentiels "
    },
    {
        "code": "42",
        "name": "Ouvrages et travaux de construction relatifs au génie civil"
    },
    {
        "code": "42.1",
        "name": "Routes et voies ferrées ; travaux de construction relatifs aux "
    },
    {
        "code": "42.11",
        "name": "Routes  et  autoroutes  ;  travaux  de  construction  relatifs  aux "
    },
    {
        "code": "42.11.1",
        "name": "Autoroutes, routes, rues, autres chemins pour véhicules et piétons "
    },
    {
        "code": "42.11.10",
        "name": "Autoroutes, routes, rues, autres chemins pour véhicules et piétons "
    },
    {
        "code": "42.11.2",
        "name": "Travaux de construction relatifs aux autoroutes, routes, rues, autres "
    },
    {
        "code": "42.11.20",
        "name": "Travaux de construction relatifs aux autoroutes, routes, rues, autres "
    },
    {
        "code": "42.12",
        "name": "Voies ferrées de surface et souterraines; travaux de construction "
    },
    {
        "code": "42.12.1",
        "name": "Voies ferrées de surface et souterraines"
    },
    {
        "code": "42.12.10",
        "name": "Voies ferrées de surface et souterraines"
    },
    {
        "code": "42.12.2",
        "name": "Travaux de construction relatifs aux voies ferrées de surface et "
    },
    {
        "code": "42.12.20",
        "name": "Travaux  de  construction  relatifs  aux  voies  ferrées  de  surface  et "
    },
    {
        "code": "42.13",
        "name": "Ponts et tunnels; travaux de construction relatifs aux ponts et tunnels"
    },
    {
        "code": "42.13.1",
        "name": "Ponts et tunnels"
    },
    {
        "code": "42.13.10",
        "name": "Ponts et tunnels"
    },
    {
        "code": "42.13.2",
        "name": "Travaux de construction relatifs aux ponts et tunnels"
    },
    {
        "code": "42.13.20",
        "name": "Travaux de construction relatifs aux ponts et tunnels"
    },
    {
        "code": "42.2",
        "name": "Ouvrages et travaux de construction relatifs aux réseaux"
    },
    {
        "code": "42.21",
        "name": "Ouvrages et travaux de construction relatifs aux réseaux pour ﬂuides"
    },
    {
        "code": "42.21.1",
        "name": "Ouvrages de réseaux pour ﬂuides"
    },
    {
        "code": "42.21.11",
        "name": "Réseaux longue distance pour ﬂuides"
    },
    {
        "code": "42.21.12",
        "name": "Réseaux locaux pour ﬂuides"
    },
    {
        "code": "42.21.13",
        "name": "Systèmes  d’irrigation  (canaux);  conduites  principales  et "
    },
    {
        "code": "42.21.2",
        "name": "Travaux de construction relatifs aux réseaux pour ﬂuides"
    },
    {
        "code": "42.21.21",
        "name": "Travaux  de  construction  relatifs  aux  réseaux  longue "
    },
    {
        "code": "42.21.22",
        "name": "Travaux  de  construction  relatifs  aux  réseaux  locaux,  y  compris "
    },
    {
        "code": "42.21.23",
        "name": "Travaux de construction relatifs aux systèmes d’irrigation (canaux), "
    },
    {
        "code": "42.21.24",
        "name": "Forage  de  puits  à  eau  et  travaux  d’installation  de  fosses "
    },
    {
        "code": "42.22",
        "name": "Ouvrages  et  travaux  de  construction  relatifs  aux  réseaux "
    },
    {
        "code": "42.22.1",
        "name": "Ouvrages de réseaux d’électricité et de télécommunications"
    },
    {
        "code": "42.22.11",
        "name": "Réseaux longue distance d’électricité et de communications"
    },
    {
        "code": "42.22.12",
        "name": "Réseaux locaux d’électricité et de communications"
    },
    {
        "code": "42.22.13",
        "name": "Centrales électriques"
    },
    {
        "code": "42.22.2",
        "name": "Travaux  de  construction  relatifs  aux  réseaux  d’électricité  et  de "
    },
    {
        "code": "42.22.21",
        "name": "Travaux  de  construction  relatifs  aux  réseaux  longue  distance "
    },
    {
        "code": "42.22.22",
        "name": "Travaux de construction relatifs aux réseaux locaux d’électricité et "
    },
    {
        "code": "42.22.23",
        "name": "Travaux de construction relatifs aux centrales électriques"
    },
    {
        "code": "42.9",
        "name": "Ouvrages  et  travaux  de  construction  relatifs  à  d’autres "
    },
    {
        "code": "42.91",
        "name": "Ouvrages et travaux de construction relatifs aux projets liés à "
    },
    {
        "code": "42.91.1",
        "name": "Ouvrages  côtiers  et  portuaires,  barrages,  écluses  et  autres "
    },
    {
        "code": "42.91.10",
        "name": "Ouvrages côtiers et portuaires, barrages, écluses et autres structures "
    },
    {
        "code": "42.91.2",
        "name": "Travaux de construction d’ouvrages côtiers et portuaires, barrages, "
    },
    {
        "code": "42.91.20",
        "name": "Travaux de construction d’ouvrages côtiers et portuaires, barrages, "
    },
    {
        "code": "42.99",
        "name": "Ouvrages et travaux de construction relatifs aux autres projets "
    },
    {
        "code": "42.99.1",
        "name": "Autres ouvrages de génie civil"
    },
    {
        "code": "42.99.11",
        "name": "Ouvrages miniers et industriels"
    },
    {
        "code": "42.99.12",
        "name": "Installations sportives ou récréatives"
    },
    {
        "code": "42.99.19",
        "name": "Autres ouvrages de génie civil n.c.a."
    },
    {
        "code": "42.99.2",
        "name": "Travaux  de  construction  relatifs  aux  autres  ouvrages  de "
    },
    {
        "code": "42.99.21",
        "name": "Travaux  de  construction  relatifs  aux  ouvrages  miniers  et "
    },
    {
        "code": "42.99.22",
        "name": "Travaux de construction relatifs aux stades et installations sportives "
    },
    {
        "code": "42.99.29",
        "name": "Travaux  de  construction  relatifs  aux  ouvrages  de  génie "
    },
    {
        "code": "43",
        "name": "Travaux de construction spécialisés"
    },
    {
        "code": "43.1",
        "name": "Travaux de démolition et de préparation de sites"
    },
    {
        "code": "43.11",
        "name": "Travaux de démolition"
    },
    {
        "code": "43.11.1",
        "name": "Travaux de démolition"
    },
    {
        "code": "43.11.10",
        "name": "Travaux de démolition"
    },
    {
        "code": "43.12",
        "name": "Travaux de préparation de sites"
    },
    {
        "code": "43.12.1",
        "name": "Travaux de préparation de sites"
    },
    {
        "code": "43.12.11",
        "name": "Travaux de préparation de sites; travaux de déblaiement"
    },
    {
        "code": "43.12.12",
        "name": "Travaux de terrassement"
    },
    {
        "code": "43.13",
        "name": "Travaux de forage et de sondage"
    },
    {
        "code": "43.13.1",
        "name": "Travaux de forage et de sondage"
    },
    {
        "code": "43.13.10",
        "name": "Travaux de forage et de sondage"
    },
    {
        "code": "43.2",
        "name": "Travaux d’installation électrique, plomberie et autres travaux "
    },
    {
        "code": "43.21",
        "name": "Travaux d’installation électrique"
    },
    {
        "code": "43.21.1",
        "name": "Travaux d’installation électrique"
    },
    {
        "code": "43.21.10",
        "name": "Travaux d’installation électrique"
    },
    {
        "code": "43.22",
        "name": "Travaux  de  plomberie  et  d’installation  de  chauffage  et  de "
    },
    {
        "code": "43.22.1",
        "name": "Travaux d’installation de distribution d’eau, de pose de conduites "
    },
    {
        "code": "43.22.11",
        "name": "Travaux d’installation de distribution d’eau et de pose de conduites "
    },
    {
        "code": "43.22.12",
        "name": "Travaux  d’installation  de  chauffage,  de  ventilation  et  de "
    },
    {
        "code": "43.22.2",
        "name": "Travaux d’installation de distribution de gaz"
    },
    {
        "code": "43.22.20",
        "name": "Travaux d’installation de distribution de gaz"
    },
    {
        "code": "43.29",
        "name": "Autres travaux d’installation"
    },
    {
        "code": "43.29.1",
        "name": "Autres travaux d’installation"
    },
    {
        "code": "43.29.11",
        "name": "Travaux d’isolation"
    },
    {
        "code": "43.29.12",
        "name": "Travaux d’installation de clôtures et de grilles"
    },
    {
        "code": "43.29.19",
        "name": "Autres travaux d’installation n.c.a."
    },
    {
        "code": "43.3",
        "name": "Travaux de ﬁnition"
    },
    {
        "code": "43.31",
        "name": "Travaux de plâtrerie"
    },
    {
        "code": "43.31.1",
        "name": "Travaux de plâtrerie"
    },
    {
        "code": "43.31.10",
        "name": "Travaux de plâtrerie"
    },
    {
        "code": "43.32",
        "name": "Travaux de menuiserie"
    },
    {
        "code": "43.32.1",
        "name": "Travaux de menuiserie"
    },
    {
        "code": "43.32.11",
        "name": "Travaux et montage de menuiserie en bois ou en matière plastique"
    },
    {
        "code": "43.32.12",
        "name": "Travaux et montage de menuiserie métallique"
    },
    {
        "code": "43.33",
        "name": "Travaux de revêtement des sols et des murs"
    },
    {
        "code": "43.33.1",
        "name": "Travaux de carrelage"
    },
    {
        "code": "43.33.10",
        "name": "Travaux de carrelage"
    },
    {
        "code": "43.33.2",
        "name": "Autres travaux de revêtement intérieur des sols et des murs"
    },
    {
        "code": "43.33.21",
        "name": "Travaux de revêtements en granito, marbre, granit et ardoise"
    },
    {
        "code": "43.33.29",
        "name": "Autres travaux de revêtement intérieur des sols et des murs n.c.a."
    },
    {
        "code": "43.34",
        "name": "Travaux de miroiterie de bâtiments; vitrerie"
    },
    {
        "code": "43.34.1",
        "name": "Travaux de miroiterie de bâtiments; vitrerie"
    },
    {
        "code": "43.34.10",
        "name": "Travaux de miroiterie de bâtiments; vitrerie"
    },
    {
        "code": "43.35",
        "name": "Travaux de peinture en bâtiment"
    },
    {
        "code": "43.35.1",
        "name": "Travaux de peinture en bâtiment"
    },
    {
        "code": "43.35.10",
        "name": "Travaux de peinture en bâtiment"
    },
    {
        "code": "43.39",
        "name": "Autres travaux de ﬁnition"
    },
    {
        "code": "43.39.1",
        "name": "Autres travaux de ﬁnition"
    },
    {
        "code": "43.39.11",
        "name": "Travaux de ferronnerie décorative"
    },
    {
        "code": "43.39.19",
        "name": "Autres travaux de ﬁnition n.c.a."
    },
    {
        "code": "43.9",
        "name": "Autres travaux de construction spécialisés"
    },
    {
        "code": "43.91",
        "name": "Travaux de couverture"
    },
    {
        "code": "43.91.1",
        "name": "Travaux de couverture"
    },
    {
        "code": "43.91.11",
        "name": "Travaux de charpente"
    },
    {
        "code": "43.91.19",
        "name": "Autres travaux de couverture"
    },
    {
        "code": "43.99",
        "name": "Autres travaux de construction spécialisés n.c.a."
    },
    {
        "code": "43.99.1",
        "name": "Travaux d’étanchéiﬁcation"
    },
    {
        "code": "43.99.10",
        "name": "Travaux d’étanchéiﬁcation"
    },
    {
        "code": "43.99.2",
        "name": "Travaux d’échafaudage"
    },
    {
        "code": "43.99.20",
        "name": "Travaux d’échafaudage"
    },
    {
        "code": "43.99.3",
        "name": "Travaux de battage de pieux; travaux de fondation"
    },
    {
        "code": "43.99.30",
        "name": "Travaux de battage de pieux; travaux de fondation"
    },
    {
        "code": "43.99.4",
        "name": "Travaux de béton"
    },
    {
        "code": "43.99.40",
        "name": "Travaux de béton"
    },
    {
        "code": "43.99.5",
        "name": "Travaux de montage d’ossatures métalliques"
    },
    {
        "code": "43.99.50",
        "name": "Travaux de montage d’ossatures métalliques"
    },
    {
        "code": "43.99.6",
        "name": "Travaux de maçonnerie"
    },
    {
        "code": "43.99.60",
        "name": "Travaux de maçonnerie"
    },
    {
        "code": "43.99.7",
        "name": "Travaux de montage sur chantier d’éléments préfabriqués"
    },
    {
        "code": "43.99.70",
        "name": "Travaux de montage sur chantier d’éléments préfabriqués"
    },
    {
        "code": "43.99.9",
        "name": "Travaux de construction spécialisés n.c.a."
    },
    {
        "code": "43.99.90",
        "name": "Travaux de construction spécialisés n.c.a."
    },
    {
        "code": "45",
        "name": "Vente et réparation d'automobiles et de motocycles"
    },
    {
        "code": "45.1",
        "name": "Vente de véhicules automobiles"
    },
    {
        "code": "45.11",
        "name": "Vente de voitures et de véhicules automobiles légers"
    },
    {
        "code": "45.11.1",
        "name": "Vente en gros de voitures et de véhicules automobiles légers"
    },
    {
        "code": "45.11.11",
        "name": "Vente en gros de voitures particulières"
    },
    {
        "code": "45.11.12",
        "name": "Vente  en  gros  de  voitures  particulières  spécialisées  telles "
    },
    {
        "code": "45.11.2",
        "name": "Vente au détail de voitures et de véhicules automobiles légers en "
    },
    {
        "code": "45.11.21",
        "name": "Vente  au  détail  de  voitures  particulières  neuves  en  magasin "
    },
    {
        "code": "45.11.22",
        "name": "Vente  au  détail  de  voitures  particulières  d'occasion  en  magasin "
    },
    {
        "code": "45.11.23",
        "name": "Vente au détail de voitures particulières spécialisées neuves telles "
    },
    {
        "code": "45.11.24",
        "name": "Vente au détail de voitures particulières spécialisées d'occasion telles "
    },
    {
        "code": "45.11.3",
        "name": "Autre vente au détail de voitures et de véhicules automobiles légers"
    },
    {
        "code": "45.11.31",
        "name": "Vente au détail de voitures et de véhicules automobiles légers sur "
    },
    {
        "code": "45.11.39",
        "name": "Autre vente au détail de voitures et de véhicules automobiles légers "
    },
    {
        "code": "45.11.4",
        "name": "Services  d'intermédiaire  du  commerce  de  gros  de  voitures  et "
    },
    {
        "code": "45.11.41",
        "name": "Services  d'intermédiaire  du  commerce  de  gros  de  voitures  et "
    },
    {
        "code": "45.11.49",
        "name": "Autres services d'intermédiaire du commerce de gros de voitures et "
    },
    {
        "code": "45.19",
        "name": "vente d'autres véhicules automobiles"
    },
    {
        "code": "45.19.1",
        "name": "Vente en gros d'autres véhicules automobiles"
    },
    {
        "code": "45.19.11",
        "name": "Vente en gros de poids lourds, camions, remorques, semi-remorques "
    },
    {
        "code": "45.19.12",
        "name": "Vente  en  gros  de  véhicules  de  camping  tels  que  caravanes  et "
    },
    {
        "code": "45.19.2",
        "name": "Vente  au  détail  d'autres  véhicules  automobiles  en  magasin "
    },
    {
        "code": "45.19.21",
        "name": "Vente au détail de poids lourds, camions, remorques, semi-remorques "
    },
    {
        "code": "45.19.22",
        "name": "Vente  au  détail  de  véhicules  de  camping  tels  que  caravanes  et "
    },
    {
        "code": "45.19.3",
        "name": "Autre vente au détail d'autres véhicules automobiles"
    },
    {
        "code": "45.19.31",
        "name": "Vente au détail d'autres véhicules automobiles sur Internet"
    },
    {
        "code": "45.19.39",
        "name": "Autre vente au détail d'autres véhicules automobiles n.c.a."
    },
    {
        "code": "45.19.4",
        "name": "Services d'intermédiaire du commerce de gros d'autres véhicules "
    },
    {
        "code": "45.19.41",
        "name": "Services  d'intermédiaire  du  commerce  de  gros  d'autres  véhicules "
    },
    {
        "code": "45.19.49",
        "name": "Autres  services  d'intermédiaire  du  commerce  de  gros  d'autres "
    },
    {
        "code": "45.2",
        "name": "Entretien et réparation de véhicules automobiles"
    },
    {
        "code": "45.20",
        "name": "Entretien et réparation de véhicules automobiles"
    },
    {
        "code": "45.20.1",
        "name": "Entretien et réparation de voitures et véhicules utilitaires légers"
    },
    {
        "code": "45.20.11",
        "name": "Entretien et réparation mécaniques (à l’exclusion des réparations "
    },
    {
        "code": "45.20.12",
        "name": "Réparation du système électrique de voitures et véhicules utilitaires "
    },
    {
        "code": "45.20.13",
        "name": "Réparation des pneumatiques, y compris réglage et équilibrage des "
    },
    {
        "code": "45.20.14",
        "name": "Réparation  de  la  carrosserie  et  d’autres  éléments  similaires "
    },
    {
        "code": "45.20.2",
        "name": "Entretien et réparation d’autres véhicules automobiles"
    },
    {
        "code": "45.20.21",
        "name": "Entretien et réparation mécaniques (à l’exclusion des réparations "
    },
    {
        "code": "45.20.22",
        "name": "Réparation du système électrique d’autres véhicules automobiles"
    },
    {
        "code": "45.20.23",
        "name": "Réparation  de  la  carrosserie  et  d’autres  éléments  similaires "
    },
    {
        "code": "45.20.3",
        "name": "Lavage, nettoyage et lustrage de véhicules automobiles"
    },
    {
        "code": "45.20.30",
        "name": "Lavage, nettoyage et lustrage de véhicules automobiles"
    },
    {
        "code": "45.3",
        "name": "Vente d'équipements automobiles"
    },
    {
        "code": "45.31",
        "name": "Vente en gros de pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.31.1",
        "name": "Vente en gros de pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.31.11",
        "name": "Vente en gros de pneumatiques et chambres à air en caoutchouc"
    },
    {
        "code": "45.31.12",
        "name": "Vente en gros d’autres pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.31.2",
        "name": "Services d'intermédiaire du commerce de gros de pièces détachées "
    },
    {
        "code": "45.31.20",
        "name": "Services d'intermédiaire du commerce de gros de pièces détachées "
    },
    {
        "code": "45.32",
        "name": "Vente au détail de pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.32.1",
        "name": "Vente au détail de pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.32.11",
        "name": "Vente au détail de pneumatiques en magasin spécialisé"
    },
    {
        "code": "45.32.12",
        "name": "Vente  au  détail  d’autres  pièces  détachées  et  accessoires  pour "
    },
    {
        "code": "45.32.2",
        "name": "Autre commerce de détail de pièces détachées et accessoires pour "
    },
    {
        "code": "45.32.21",
        "name": "Vente au détail de pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.32.22",
        "name": "Vente au détail de pièces détachées et accessoires pour véhicules "
    },
    {
        "code": "45.32.29",
        "name": "Autre  vente  au  détail  de  pièces  détachées  et  accessoires  pour "
    },
    {
        "code": "45.4",
        "name": "Vente et réparation de motocycles"
    },
    {
        "code": "45.41",
        "name": "Vente et réparation de motocycles"
    },
    {
        "code": "45.41.1",
        "name": "Vente en gros de motocycles, d’accessoires et d’équipements pour "
    },
    {
        "code": "45.41.10",
        "name": "Vente en gros de motocycles, d’accessoires et d’équipements pour "
    },
    {
        "code": "45.41.2",
        "name": "Vente au détail de motocycles, d’accessoires et d’équipements pour "
    },
    {
        "code": "45.41.20",
        "name": "Vente au détail de motocycles, d’accessoires et d’équipements pour "
    },
    {
        "code": "45.41.3",
        "name": "Autre vente au détail de motocycles, d’accessoires et d’équipements "
    },
    {
        "code": "45.41.30",
        "name": "Autre vente au détail de motocycles, d’accessoires et d’équipements "
    },
    {
        "code": "45.41.4",
        "name": "Services  d'intermédiaire  du  commerce  de  gros  de  motocycles, "
    },
    {
        "code": "45.41.40",
        "name": "Services  d'intermédiaire  du  commerce  de  gros  de  motocycles, "
    },
    {
        "code": "45.42",
        "name": "Réparation de motocycles"
    },
    {
        "code": "45.42.1",
        "name": "Entretien et réparation de motocycles"
    },
    {
        "code": "45.42.10",
        "name": "Entretien et réparation de motocycles"
    },
    {
        "code": "46",
        "name": "Vente  en  gros,  à  l’exclusion  des  automobiles  et  des "
    },
    {
        "code": "46.1",
        "name": "Services d’intermédiaire du commerce de gros"
    },
    {
        "code": "46.11",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  matières "
    },
    {
        "code": "46.11.1",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  matières "
    },
    {
        "code": "46.11.11",
        "name": "Services d’intermédiaire du commerce de gros d’animaux vivants"
    },
    {
        "code": "46.11.12",
        "name": "Services d’intermédiaire du commerce de gros de ﬂeurs et plantes"
    },
    {
        "code": "46.11.19",
        "name": "Services d’intermédiaire du commerce de gros de matières premières "
    },
    {
        "code": "46.12",
        "name": "Services d’intermédiaire du commerce de gros de combustibles, "
    },
    {
        "code": "46.12.1",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  combustibles, "
    },
    {
        "code": "46.12.11",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  combustibles "
    },
    {
        "code": "46.12.12",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  minerais "
    },
    {
        "code": "46.12.13",
        "name": "Services d’intermédiaire du commerce de gros de produits chimiques "
    },
    {
        "code": "46.13",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  bois  et  de "
    },
    {
        "code": "46.13.1",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  bois  et  de "
    },
    {
        "code": "46.13.11",
        "name": "Services d’intermédiaire du commerce de gros de bois et produits "
    },
    {
        "code": "46.13.12",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  matériaux  de "
    },
    {
        "code": "46.14",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  machines, "
    },
    {
        "code": "46.14.1",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  machines, "
    },
    {
        "code": "46.14.11",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  d’ordinateurs, "
    },
    {
        "code": "46.14.12",
        "name": "Services d’intermédiaire du commerce de gros de navires, aéronefs "
    },
    {
        "code": "46.14.19",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  machines  et "
    },
    {
        "code": "46.15",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  meubles, "
    },
    {
        "code": "46.15.1",
        "name": "Services d’intermédiaire du commerce de gros de meubles, articles "
    },
    {
        "code": "46.15.11",
        "name": "Services d’intermédiaire du commerce de gros de meubles"
    },
    {
        "code": "46.15.12",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  d’équipements  de "
    },
    {
        "code": "46.15.13",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  d’articles  de "
    },
    {
        "code": "46.15.19",
        "name": "Services d’intermédiaire du commerce de gros d’articles ménagers "
    },
    {
        "code": "46.16",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  textiles, "
    },
    {
        "code": "46.16.1",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  textiles, "
    },
    {
        "code": "46.16.11",
        "name": "Services d’intermédiaire du commerce de gros de textiles"
    },
    {
        "code": "46.16.12",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  d’habillement, "
    },
    {
        "code": "46.16.13",
        "name": "Services d’intermédiaire du commerce de gros d’articles de voyage "
    },
    {
        "code": "46.17",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  denrées "
    },
    {
        "code": "46.17.1",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  denrées "
    },
    {
        "code": "46.17.11",
        "name": "Services d’intermédiaire du commerce de gros de denrées alimentaires"
    },
    {
        "code": "46.17.12",
        "name": "Services d’intermédiaire du commerce de gros de boissons"
    },
    {
        "code": "46.17.13",
        "name": "Services d’intermédiaire du commerce de gros de tabac"
    },
    {
        "code": "46.18",
        "name": "Services d’intermédiaire du commerce de gros d’autres produits "
    },
    {
        "code": "46.18.1",
        "name": "Services d’intermédiaire du commerce de gros d’autres produits "
    },
    {
        "code": "46.18.11",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  produits "
    },
    {
        "code": "46.18.12",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  jeux  et  jouets, "
    },
    {
        "code": "46.18.19",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  d’autres  produits "
    },
    {
        "code": "46.19",
        "name": "Services  d’intermédiaire  du  commerce  de  gros  de  produits "
    },
    {
        "code": "46.19.1",
        "name": "Services d’intermédiaire du commerce de gros de produits divers"
    },
    {
        "code": "46.19.10",
        "name": "Services d’intermédiaire du commerce de gros de produits divers"
    },
    {
        "code": "46.2",
        "name": "Vente  en  gros  de  matières  premières  agricoles  et  animaux "
    },
    {
        "code": "46.21",
        "name": "Vente en gros de céréales, tabac non manufacturé, semences et "
    },
    {
        "code": "46.21.1",
        "name": "Vente en gros de céréales, semences et aliments pour le bétail"
    },
    {
        "code": "46.21.11",
        "name": "Vente en gros de céréales"
    },
    {
        "code": "46.21.12",
        "name": "Vente en gros de semences (autres qu'oléagineux)"
    },
    {
        "code": "46.21.13",
        "name": "Vente en gros de graines et fruits oléagineux"
    },
    {
        "code": "46.21.14",
        "name": "Vente en gros d'aliments pour le bétail"
    },
    {
        "code": "46.21.19",
        "name": "Vente en gros d'autres produits agricoles bruts n.c.a.."
    },
    {
        "code": "46.21.2",
        "name": "Vente en gros de tabac non manufacturé"
    },
    {
        "code": "46.21.20",
        "name": "Vente en gros de tabac non manufacturé"
    },
    {
        "code": "46.22",
        "name": "Vente en gros de ﬂeurs et plantes"
    },
    {
        "code": "46.22.1",
        "name": "Vente en gros de ﬂeurs et plantes"
    },
    {
        "code": "46.22.10",
        "name": "Vente en gros de ﬂeurs et plantes"
    },
    {
        "code": "46.23",
        "name": "Vente en gros d'animaux vivants"
    },
    {
        "code": "46.23.1",
        "name": "Vente en gros d'animaux vivants"
    },
    {
        "code": "46.23.10",
        "name": "Vente en gros d'animaux vivants"
    },
    {
        "code": "46.24",
        "name": "Vente en gros de cuirs et peaux"
    },
    {
        "code": "46.24.1",
        "name": "Vente en gros de cuirs et peaux"
    },
    {
        "code": "46.24.10",
        "name": "Vente en gros de cuirs et peaux"
    },
    {
        "code": "46.3",
        "name": "Vente en gros de produits alimentaires, boissons et de tabac"
    },
    {
        "code": "46.31",
        "name": "Vente en gros de fruits et légumes"
    },
    {
        "code": "46.31.1",
        "name": "Vente en gros de fruits et légumes"
    },
    {
        "code": "46.31.11",
        "name": "Vente en gros d'agrumes"
    },
    {
        "code": "46.31.12",
        "name": "Vente en gros d'autres fruits et légumes frais"
    },
    {
        "code": "46.31.13",
        "name": "Vente en gros de fruits et légumes en conserves"
    },
    {
        "code": "46.32",
        "name": "Vente en gros de viandes et produits à base de viande"
    },
    {
        "code": "46.32.1",
        "name": "Vente en gros de viandes et produits à base de viande"
    },
    {
        "code": "46.32.11",
        "name": "Vente en gros de viandes (y compris de volaille)"
    },
    {
        "code": "46.32.12",
        "name": "Vente en gros de produits à base de viande (y compris de volaille)"
    },
    {
        "code": "46.33",
        "name": "Vente en gros de produits laitiers, œufs, huiles et matières grasses "
    },
    {
        "code": "46.33.1",
        "name": "Vente en gros de produits laitiers, œufs, huiles et matières grasses "
    },
    {
        "code": "46.33.11",
        "name": "Vente en gros de produits laitiers"
    },
    {
        "code": "46.33.12",
        "name": "Vente en gros d'œufs"
    },
    {
        "code": "46.33.13",
        "name": "Vente en gros d'huiles et de matières grasses comestibles"
    },
    {
        "code": "46.34",
        "name": "Vente en gros de boissons"
    },
    {
        "code": "46.34.1",
        "name": "Vente en gros de boissons"
    },
    {
        "code": "46.34.11",
        "name": "Vente en gros de jus, eaux minérales, boissons rafraîchissantes et "
    },
    {
        "code": "46.34.12",
        "name": "Vente en gros de boissons alcoolisées"
    },
    {
        "code": "46.35",
        "name": "Vente en gros de produits à base de tabac"
    },
    {
        "code": "46.35.1",
        "name": "Vente en gros de produits à base de tabac"
    },
    {
        "code": "46.35.10",
        "name": "Vente en gros de produits à base de tabac"
    },
    {
        "code": "46.36",
        "name": "Vente en gros de sucre, produits de la chocolaterie et conﬁseries"
    },
    {
        "code": "46.36.1",
        "name": "Vente en gros de sucre, chocolat et conﬁserie"
    },
    {
        "code": "46.36.11",
        "name": "Vente en gros de sucre"
    },
    {
        "code": "46.36.12",
        "name": "Vente en gros de produits de boulangerie-pâtisserie"
    },
    {
        "code": "46.36.13",
        "name": "Vente en gros de produits de chocolat et conﬁserie"
    },
    {
        "code": "46.36.2",
        "name": "Vente en gros de café, thé, cacao et épices"
    },
    {
        "code": "46.36.21",
        "name": "Vente en gros d'épices"
    },
    {
        "code": "46.36.22",
        "name": "Vente en gros de café, thé et cacao"
    },
    {
        "code": "46.37",
        "name": "Vente en gros de poissons, crustacés et mollusques"
    },
    {
        "code": "46.37.1",
        "name": "Vente en gros de poissons, crustacés et mollusques"
    },
    {
        "code": "46.37.10",
        "name": "Vente en gros de poissons, crustacés et mollusques"
    },
    {
        "code": "46.38",
        "name": "Vente en gros spécialisé d'autres produits alimentaires"
    },
    {
        "code": "46.38.1",
        "name": "Vente en gros spécialisée d'autres produits alimentaires"
    },
    {
        "code": "46.38.11",
        "name": "Vente  en  gros  de  préparations  alimentaires  homogénéisées  et "
    },
    {
        "code": "46.38.19",
        "name": "Vente en gros d'autres produits alimentaires n.c.a."
    },
    {
        "code": "46.39",
        "name": "Vente en gros non spécialisé de denrées alimentaires, de boissons "
    },
    {
        "code": "46.39.1",
        "name": "Vente en gros non spécialisée de denrées alimentaires, boissons "
    },
    {
        "code": "46.39.11",
        "name": "Vente en gros non spécialisé de produits surgelés"
    },
    {
        "code": "46.39.12",
        "name": "Vente en gros non spécialisé de denrées alimentaires non surgelées, "
    },
    {
        "code": "46.4",
        "name": "Vente en gros d'articles ménagers"
    },
    {
        "code": "46.41",
        "name": "Vente en gros de textiles"
    },
    {
        "code": "46.41.1",
        "name": "Vente en gros de textiles"
    },
    {
        "code": "46.41.11",
        "name": "Vente en gros de ﬁls"
    },
    {
        "code": "46.41.12",
        "name": "Vente en gros de tissus"
    },
    {
        "code": "46.41.13",
        "name": "Vente en gros de linge de maison, rideaux et autres articles ménagers "
    },
    {
        "code": "46.41.14",
        "name": "Vente en gros d'articles de mercerie"
    },
    {
        "code": "46.42",
        "name": "Vente en gros de vêtements et de chaussures"
    },
    {
        "code": "46.42.1",
        "name": "Vente en gros de vêtements et de chaussures"
    },
    {
        "code": "46.42.11",
        "name": "Vente en gros de vêtements"
    },
    {
        "code": "46.42.12",
        "name": "Vente en gros de chaussures"
    },
    {
        "code": "46.43",
        "name": "Vente en gros d'appareils électroménagers"
    },
    {
        "code": "46.43.1",
        "name": "Vente en gros d'appareils électroménagers"
    },
    {
        "code": "46.43.11",
        "name": "Vente en gros d'appareils électroménagers à l'exclusion d'équipements "
    },
    {
        "code": "46.43.12",
        "name": "Vente en gros d'équipements de radio, télévision, vidéo et DVD"
    },
    {
        "code": "46.43.13",
        "name": "Vente en gros de disques, cassettes audio et vidéo, CD et DVD (à "
    },
    {
        "code": "46.43.14",
        "name": "Vente en gros de matériels photographiques et optiques"
    },
    {
        "code": "46.44",
        "name": "Vente en gros de vaisselle, verrerie et de produits d'entretien"
    },
    {
        "code": "46.44.1",
        "name": "Vente en gros de vaisselle, verrerie et de produits d'entretien"
    },
    {
        "code": "46.44.11",
        "name": "Vente en gros de vaisselle et de verrerie"
    },
    {
        "code": "46.44.12",
        "name": "Vente en gros de produits d'entretien"
    },
    {
        "code": "46.45",
        "name": "Vente en gros de parfums et de produits de beauté"
    },
    {
        "code": "46.45.1",
        "name": "Vente en gros de parfums et de produits de beauté"
    },
    {
        "code": "46.45.10",
        "name": "Vente en gros de parfums et de produits de beauté"
    },
    {
        "code": "46.46",
        "name": "Vente en gros de produits pharmaceutiques"
    },
    {
        "code": "46.46.1",
        "name": "Vente en gros de produits pharmaceutiques"
    },
    {
        "code": "46.46.11",
        "name": "Vente en gros de produits pharmaceutiques de base et de préparations "
    },
    {
        "code": "46.46.12",
        "name": "Vente en gros d'instruments et appareils chirurgicaux, médicaux et "
    },
    {
        "code": "46.47",
        "name": "Vente en gros de meubles, de tapis et d'appareils d'éclairage"
    },
    {
        "code": "46.47.1",
        "name": "Vente en gros de meubles, de tapis et d'appareils d'éclairage"
    },
    {
        "code": "46.47.11",
        "name": "Vente en gros de meubles"
    },
    {
        "code": "46.47.12",
        "name": "Vente en gros d'appareils d'éclairage"
    },
    {
        "code": "46.47.13",
        "name": "Vente en gros de tapis et carpettes"
    },
    {
        "code": "46.48",
        "name": "Vente en gros d’articles d’horlogerie et de bijouterie"
    },
    {
        "code": "46.48.1",
        "name": "Vente en gros d’articles d’horlogerie et de bijouterie"
    },
    {
        "code": "46.48.10",
        "name": "Vente en gros d’articles d’horlogerie et de bijouterie"
    },
    {
        "code": "46.49",
        "name": "Vente en gros d'autres articles ménagers"
    },
    {
        "code": "46.49.1",
        "name": "Vente  en  gros  d'articles  de  coutellerie  et  d'articles  métalliques "
    },
    {
        "code": "46.49.11",
        "name": "Vente en  gros  d'articles  de  coutellerie  et  d'articles  métalliques  à "
    },
    {
        "code": "46.49.12",
        "name": "Vente en gros d'articles en vannerie, sparterie, liège et bois"
    },
    {
        "code": "46.49.19",
        "name": "Vente en gros d'articles et équipements ménagers n.c.a."
    },
    {
        "code": "46.49.2",
        "name": "Vente en gros de livres, magazines et articles de papeterie"
    },
    {
        "code": "46.49.21",
        "name": "Vente en gros de livres"
    },
    {
        "code": "46.49.22",
        "name": "Vente en gros de magazines et journaux"
    },
    {
        "code": "46.49.23",
        "name": "Vente en gros d'articles de papeterie"
    },
    {
        "code": "46.49.3",
        "name": "Vente en gros d'autres biens de consommation"
    },
    {
        "code": "46.49.31",
        "name": "Vente en gros d'instruments de musique"
    },
    {
        "code": "46.49.32",
        "name": "Vente en gros de jeux et jouets"
    },
    {
        "code": "46.49.33",
        "name": "Vente en gros d'articles de sports (y compris de cycles)"
    },
    {
        "code": "46.49.34",
        "name": "Vente en gros d'articles de voyage et de maroquinerie"
    },
    {
        "code": "46.49.35",
        "name": "Vente en gros de timbres et de pièces"
    },
    {
        "code": "46.49.36",
        "name": "Vente en gros d'articles souvenirs et d'œuvres d'art"
    },
    {
        "code": "46.49.39",
        "name": "Vente en gros d'autres biens de consommation n.c.a."
    },
    {
        "code": "46.5",
        "name": "Vente  en  gros  d'équipements  d'information  et  de "
    },
    {
        "code": "46.51",
        "name": "Vente en gros d'ordinateurs, de périphériques et de logiciels"
    },
    {
        "code": "46.51.1",
        "name": "Vente en gros d'ordinateurs, de périphériques et de logiciels"
    },
    {
        "code": "46.51.10",
        "name": "Vente en gros d'ordinateurs, de périphériques et de logiciels"
    },
    {
        "code": "46.52",
        "name": "Vente en gros d'équipements et composants électroniques et de "
    },
    {
        "code": "46.52.1",
        "name": "Vente en  gros  d'équipements  et  composants  électroniques  et  de "
    },
    {
        "code": "46.52.11",
        "name": "Vente en gros d'équipements de télécommunications et de parties"
    },
    {
        "code": "46.52.12",
        "name": "Vente en gros d'équipements et composants électroniques"
    },
    {
        "code": "46.52.13",
        "name": "Vente  en  gros  de  cassettes  audio  et  vidéo,  disquettes,  disques "
    },
    {
        "code": "46.6",
        "name": "Vente en gros d'autres machines, équipements et matériels"
    },
    {
        "code": "46.61",
        "name": "Vente en gros de matériel agricole"
    },
    {
        "code": "46.61.1",
        "name": "Vente en gros de matériel agricole"
    },
    {
        "code": "46.61.11",
        "name": "Vente en gros de matériel agricole et forestier, y compris tracteurs"
    },
    {
        "code": "46.61.12",
        "name": "Vente en gros de matériel pour le gazon et le jardin"
    },
    {
        "code": "46.62",
        "name": "Vente en gros de machines-outils"
    },
    {
        "code": "46.62.1",
        "name": "Vente en gros de machines-outils"
    },
    {
        "code": "46.62.11",
        "name": "Vente en gros de machines-outils pour le travail du bois"
    },
    {
        "code": "46.62.12",
        "name": "Vente en gros de machines-outils pour le travail des métaux"
    },
    {
        "code": "46.62.19",
        "name": "Vente  en  gros  de  machines-outils  pour  le  travail  d'autres "
    },
    {
        "code": "46.63",
        "name": "Vente en gros de machines pour l'extraction, la construction et "
    },
    {
        "code": "46.63.1",
        "name": "Vente en gros de machines pour l'extraction, la construction et le "
    },
    {
        "code": "46.63.10",
        "name": "Vente en gros de machines pour l'extraction, la construction et le "
    },
    {
        "code": "46.64",
        "name": "Vente  en  gros  de  machines  pour  l'industrie  textile  et "
    },
    {
        "code": "46.64.1",
        "name": "Vente  en  gros  de  machines  pour  l'industrie  textile  et "
    },
    {
        "code": "46.64.10",
        "name": "Vente  en  gros  de  machines  pour  l'industrie  textile  et "
    },
    {
        "code": "46.65",
        "name": "Vente en gros de mobilier de bureau"
    },
    {
        "code": "46.65.1",
        "name": "Vente en gros de mobilier de bureau"
    },
    {
        "code": "46.65.10",
        "name": "Vente en gros de mobilier de bureau"
    },
    {
        "code": "46.66",
        "name": "Vente en gros d'autres machines et équipements de bureau"
    },
    {
        "code": "46.66.1",
        "name": "Vente en gros d'autres machines et équipements de bureau"
    },
    {
        "code": "46.66.10",
        "name": "Vente en gros d'autres machines et équipements de bureau"
    },
    {
        "code": "46.67",
        "name": "Vente  en   gros  d’appareils  et  matériels  électriques "
    },
    {
        "code": "46.67.1",
        "name": "Vente en gros d’appareils et matériels électriques professionnels"
    },
    {
        "code": "46.67.10",
        "name": "Vente en gros d’appareils et matériels électriques professionnels"
    },
    {
        "code": "46.69",
        "name": "Vente en gros d'autres machines et équipements"
    },
    {
        "code": "46.69.1",
        "name": "Vente en gros d'autres machines et équipements"
    },
    {
        "code": "46.69.11",
        "name": "Vente en  gros  de  matériels  de  transport,  autres  que  les  véhicules "
    },
    {
        "code": "46.69.12",
        "name": "Vente en gros de fournitures industrielles"
    },
    {
        "code": "46.69.13",
        "name": "Vente en gros de matériel de manutention et de levage"
    },
    {
        "code": "46.69.14",
        "name": "Vente en gros d’équipements pour l’industrie agroalimentaire"
    },
    {
        "code": "46.69.15",
        "name": "Vente en gros d’armes et de munitions"
    },
    {
        "code": "46.69.19",
        "name": "Vente en gros d’autres machines, appareils et équipements d’usage "
    },
    {
        "code": "46.7",
        "name": "Autres ventes en gros spécialisés"
    },
    {
        "code": "46.71",
        "name": "Vente en gros de combustibles solides, liquides et gazeux et de "
    },
    {
        "code": "46.71.1",
        "name": "Vente en  gros  de  combustibles  solides,  liquides  et  gazeux  et  de "
    },
    {
        "code": "46.71.11",
        "name": "Vente en gros de combustibles solides"
    },
    {
        "code": "46.71.12",
        "name": "Vente en gros de carburants, y compris pour l'aviation"
    },
    {
        "code": "46.71.13",
        "name": "Vente en gros d'autres combustibles liquides ou gazeux et de produits "
    },
    {
        "code": "46.72",
        "name": "Vente en gros de minerais et métaux"
    },
    {
        "code": "46.72.1",
        "name": "Vente en gros de minerais et métaux"
    },
    {
        "code": "46.72.11",
        "name": "Vente en gros de minerais de métaux ferreux"
    },
    {
        "code": "46.72.12",
        "name": "Vente en gros de minerais de métaux non ferreux"
    },
    {
        "code": "46.72.13",
        "name": "Vente en gros de fer et d'acier sous formes primaires"
    },
    {
        "code": "46.72.14",
        "name": "Vente en gros de métaux non ferreux sous formes primaires"
    },
    {
        "code": "46.73",
        "name": "Vente en gros de bois et de produits dérivés"
    },
    {
        "code": "46.73.1",
        "name": "Vente en gros de bois et de produits dérivés"
    },
    {
        "code": "46.73.11",
        "name": "Vente en gros de bois bruts"
    },
    {
        "code": "46.73.12",
        "name": "Vente en gros des produits de la première transformation du bois"
    },
    {
        "code": "46.74",
        "name": "Vente en gros de matériaux de construction et d'appareils sanitaires"
    },
    {
        "code": "46.74.1",
        "name": "Vente en gros de matériaux de construction et d'appareils sanitaires"
    },
    {
        "code": "46.74.11",
        "name": "Vente en gros d’appareils sanitaires"
    },
    {
        "code": "46.74.12",
        "name": "Vente en gros de peintures, vernis et laques"
    },
    {
        "code": "46.74.13",
        "name": "Vente en gros de verre plat"
    },
    {
        "code": "46.74.14",
        "name": "Vente en gros d’autres matériaux de construction"
    },
    {
        "code": "46.74.15",
        "name": "Vente en gros de revêtements muraux"
    },
    {
        "code": "46.74.16",
        "name": "Vente en gros de revêtements de sol (à l’exclusion des tapis)"
    },
    {
        "code": "46.75",
        "name": "Vente  en  gros  d'articles  de  quincaillerie  et  fournitures  pour "
    },
    {
        "code": "46.75.1",
        "name": "Vente  en  gros  d'articles  de  quincaillerie  et  fournitures  pour "
    },
    {
        "code": "46.75.11",
        "name": "Vente en gros de quincaillerie"
    },
    {
        "code": "46.75.12",
        "name": "Vente en gros de fournitures pour plomberie et chauffage"
    },
    {
        "code": "46.75.13",
        "name": "Vente en gros d'outillage manuel"
    },
    {
        "code": "46.76",
        "name": "Vente en gros de produits chimiques"
    },
    {
        "code": "46.76.1",
        "name": "Vente en gros de produits chimiques"
    },
    {
        "code": "46.76.11",
        "name": "Vente en gros d'engrais et de produits agrochimiques"
    },
    {
        "code": "46.76.12",
        "name": "Vente en gros de produits chimiques industriels"
    },
    {
        "code": "46.77",
        "name": "Vente en gros d'autres produits intermédiaires"
    },
    {
        "code": "46.77.1",
        "name": "Vente en gros d'autres produits intermédiaires"
    },
    {
        "code": "46.77.11",
        "name": "Vente en gros de papier et carton"
    },
    {
        "code": "46.77.12",
        "name": "Vente en gros de ﬁbres textiles"
    },
    {
        "code": "46.77.13",
        "name": "Vente  en  gros  de  matières  plastiques  et  caoutchouc  sous  formes "
    },
    {
        "code": "46.77.19",
        "name": "Vente en gros de produits intermédiaires autres qu'agricoles n.c.a."
    },
    {
        "code": "46.78",
        "name": "Vente en gros de déchets et débris"
    },
    {
        "code": "46.78.1",
        "name": "Vente en gros de déchets et débris"
    },
    {
        "code": "46.78.10",
        "name": "Vente en gros de déchets et débris"
    },
    {
        "code": "46.9",
        "name": "Vente en gros non spécialisé"
    },
    {
        "code": "46.90",
        "name": "Vente en gros non spécialisé"
    },
    {
        "code": "46.90.1",
        "name": "Vente en gros non spécialisé"
    },
    {
        "code": "46.90.10",
        "name": "Vente en gros non spécialisé"
    },
    {
        "code": "47",
        "name": "Vente  au  détail,  à  l’exclusion  des  automobiles  et  des "
    },
    {
        "code": "47.0",
        "name": "Vente  au  détail,  à  l’exclusion  des  automobiles  et  des "
    },
    {
        "code": "47.00",
        "name": "Vente  au  détail,  à  l’exclusion  des  automobiles  et  des "
    },
    {
        "code": "47.00.1",
        "name": "Vente au détail de fruits, légumes, viandes, poissons, produits de "
    },
    {
        "code": "47.00.11",
        "name": "Vente au détail de fruits et légumes frais"
    },
    {
        "code": "47.00.12",
        "name": "Vente au détail de fruits et légumes en conserves"
    },
    {
        "code": "47.00.13",
        "name": "Vente au détail de viandes"
    },
    {
        "code": "47.00.14",
        "name": "Vente au détail de produits à base de viande"
    },
    {
        "code": "47.00.15",
        "name": "Vente au détail de poissons, crustacés et mollusques"
    },
    {
        "code": "47.00.16",
        "name": "Vente au détail de produits de boulangerie-pâtisserie"
    },
    {
        "code": "47.00.17",
        "name": "Vente au détail de conﬁseries"
    },
    {
        "code": "47.00.18",
        "name": "Vente au détail de produits laitiers"
    },
    {
        "code": "47.00.19",
        "name": "Vente au détail d'œufs"
    },
    {
        "code": "47.00.2",
        "name": "Vente au détail d’autres produits alimentaires, de boissons et de "
    },
    {
        "code": "47.00.21",
        "name": "Vente au détail de café, thé, cacao et épices"
    },
    {
        "code": "47.00.22",
        "name": "Vente au détail d’huiles et matières grasses comestibles"
    },
    {
        "code": "47.00.23",
        "name": "Vente  au  détail  de  préparations  alimentaires  homogénéisées  et "
    },
    {
        "code": "47.00.24",
        "name": "Vente au détail de grains, légumes secs et produits d'épicerie"
    },
    {
        "code": "47.00.25",
        "name": "Vente au détail d'autres produits alimentaires n.c.a."
    },
    {
        "code": "47.00.26",
        "name": "Vente au détail de boissons alcoolisées"
    },
    {
        "code": "47.00.27",
        "name": "Vente au détail d'autres boissons"
    },
    {
        "code": "47.00.28",
        "name": "Vente au détail de produits à base de tabac"
    },
    {
        "code": "47.00.3",
        "name": "Vente  au  détail  d'équipements  d'information  et  de "
    },
    {
        "code": "47.00.31",
        "name": "Vente au détail d'ordinateurs, de périphériques et de logiciels"
    },
    {
        "code": "47.00.32",
        "name": "Vente au détail d'équipements de télécommunications"
    },
    {
        "code": "47.00.33",
        "name": "Vente au détail d'équipements audio et vidéo"
    },
    {
        "code": "47.00.4",
        "name": "Vente  au  détail  de  matériaux  de  construction  et  d'articles  de "
    },
    {
        "code": "47.00.41",
        "name": "Vente au détail d'articles de quincaillerie"
    },
    {
        "code": "47.00.42",
        "name": "Vente au détail de peintures, vernis et laques"
    },
    {
        "code": "47.00.43",
        "name": "Vente au détail de verre plat"
    },
    {
        "code": "47.00.44",
        "name": "Vente au détail de matériels pour le gazon et le jardin"
    },
    {
        "code": "47.00.45",
        "name": "Vente au détail de fournitures pour plomberie et chauffage"
    },
    {
        "code": "47.00.46",
        "name": "Vente au détail d’appareils sanitaires"
    },
    {
        "code": "47.00.47",
        "name": "Vente au détail d'outillage manuel"
    },
    {
        "code": "47.00.49",
        "name": "Vente au détail de matériaux de construction n.c.a."
    },
    {
        "code": "47.00.5",
        "name": "Vente au détail d'articles ménagers"
    },
    {
        "code": "47.00.51",
        "name": "Vente au détail de textiles"
    },
    {
        "code": "47.00.52",
        "name": "Vente au détail de rideaux et voilages"
    },
    {
        "code": "47.00.53",
        "name": "Vente  au  détail  de  revêtements  muraux  et  de  sol,  de  tapis  et "
    },
    {
        "code": "47.00.54",
        "name": "Vente au détail d'appareils électroménagers"
    },
    {
        "code": "47.00.55",
        "name": "Vente au détail de meubles"
    },
    {
        "code": "47.00.56",
        "name": "Vente au détail d'articles d'éclairage"
    },
    {
        "code": "47.00.57",
        "name": "Vente au détail d'articles en bois, liège, vannerie et sparterie"
    },
    {
        "code": "47.00.58",
        "name": "Vente au détail d’instruments de musique et de partitions musicales"
    },
    {
        "code": "47.00.59",
        "name": "Vente  au  détail  d'articles  de  vaisselle,  verrerie,  poterie, "
    },
    {
        "code": "47.00.6",
        "name": "Vente au détail d'articles culturels et récréatifs"
    },
    {
        "code": "47.00.61",
        "name": "Vente au détail de livres"
    },
    {
        "code": "47.00.62",
        "name": "Vente au détail de journaux et magazines"
    },
    {
        "code": "47.00.63",
        "name": "Vente au détail d'articles de papeterie"
    },
    {
        "code": "47.00.64",
        "name": "Vente au détail d'enregistrements musicaux et vidéo"
    },
    {
        "code": "47.00.65",
        "name": "Vente au détail d'équipements sportifs"
    },
    {
        "code": "47.00.66",
        "name": "Vente au détail d'équipements de camping"
    },
    {
        "code": "47.00.67",
        "name": "Vente au détail de jeux et jouets"
    },
    {
        "code": "47.00.68",
        "name": "Vente au détail d’articles de souvenirs et d’œuvres d’art"
    },
    {
        "code": "47.00.69",
        "name": "Vente au détail de produits divers de l'artisanat"
    },
    {
        "code": "47.00.7",
        "name": "Vente  au  détail  d’habillement,  de  produits  pharmaceutiques  et "
    },
    {
        "code": "47.00.71",
        "name": "Vente au détail d’habillement"
    },
    {
        "code": "47.00.72",
        "name": "Vente au détail de chaussures"
    },
    {
        "code": "47.00.73",
        "name": "Vente au détail d'articles de voyage et de maroquinerie"
    },
    {
        "code": "47.00.74",
        "name": "Vente au détail de produits pharmaceutiques"
    },
    {
        "code": "47.00.75",
        "name": "Vente au détail d'articles médicaux et orthopédiques"
    },
    {
        "code": "47.00.76",
        "name": "Vente au détail de parfums et de produits de beauté"
    },
    {
        "code": "47.00.77",
        "name": "Vente au détail de ﬂeurs, plantes et graines"
    },
    {
        "code": "47.00.78",
        "name": "Vente au détail d’engrais et de produits agrochimiques"
    },
    {
        "code": "47.00.79",
        "name": "Vente au détail d'animaux de compagnie et d'aliments pour animaux "
    },
    {
        "code": "47.00.8",
        "name": "Vente  au  détail  de  carburants  automobiles  et  d’autres  articles "
    },
    {
        "code": "47.00.81",
        "name": "Vente au détail de carburants automobiles"
    },
    {
        "code": "47.00.82",
        "name": "Vente au détail d’articles d’horlogerie et de bijouterie"
    },
    {
        "code": "47.00.83",
        "name": "Vente  au  détail  d'équipements  photographiques,  optiques  et  de "
    },
    {
        "code": "47.00.84",
        "name": "Vente au détail de produits d'entretien"
    },
    {
        "code": "47.00.85",
        "name": "Vente au détail de ﬁoul domestique, de gaz en bouteilles, de charbon"
    },
    {
        "code": "47.00.86",
        "name": "Vente au détail d'autres biens de consommation non alimentaires "
    },
    {
        "code": "47.00.87",
        "name": "Vente au détail de produits agricoles bruts n.c.a."
    },
    {
        "code": "47.00.88",
        "name": "Vente au détail de machines et équipements n.c.a."
    },
    {
        "code": "47.00.89",
        "name": "Vente  au  détail  de  biens  non  alimentaires  non  destinés  à  la "
    },
    {
        "code": "47.00.9",
        "name": "Vente au détail de biens d'occasion"
    },
    {
        "code": "47.00.91",
        "name": "Vente au détail de fripe"
    },
    {
        "code": "47.00.92",
        "name": "Vente au détail d'antiquités et de brocante"
    },
    {
        "code": "47.00.93",
        "name": "Vente au détail de livres d'occasion"
    },
    {
        "code": "47.00.99",
        "name": "Vente au détail d'autres biens d'occasion"
    },
    {
        "code": "49",
        "name": "Transports terrestres et transports par conduites"
    },
    {
        "code": "49.1",
        "name": "Transport ferroviaire interurbain de voyageurs"
    },
    {
        "code": "49.10",
        "name": "Transport ferroviaire interurbain de voyageurs"
    },
    {
        "code": "49.10.1",
        "name": "Transport ferroviaire interurbain de voyageurs"
    },
    {
        "code": "49.10.11",
        "name": "Transport ferroviaire de voyageurs, à des ﬁns d’excursion"
    },
    {
        "code": "49.10.19",
        "name": "Autres transports ferroviaires interurbains de voyageurs"
    },
    {
        "code": "49.2",
        "name": "Transport ferroviaire de fret"
    },
    {
        "code": "49.20",
        "name": "Transport ferroviaire de fret"
    },
    {
        "code": "49.20.1",
        "name": "Transport ferroviaire de fret"
    },
    {
        "code": "49.20.11",
        "name": "Transport ferroviaire de fret par wagons frigoriﬁques"
    },
    {
        "code": "49.20.12",
        "name": "Transport  ferroviaire  de  fret  par  wagons-citernes,  produits "
    },
    {
        "code": "49.20.13",
        "name": "Transport ferroviaire de fret par wagons-citernes, vracs liquides et "
    },
    {
        "code": "49.20.14",
        "name": "Transport ferroviaire de conteneurs intermodaux"
    },
    {
        "code": "49.20.15",
        "name": "Transport ferroviaire de lettres et colis"
    },
    {
        "code": "49.20.16",
        "name": "Transport ferroviaire de vracs secs"
    },
    {
        "code": "49.20.17",
        "name": "Transport ferroviaires de phosphates"
    },
    {
        "code": "49.20.19",
        "name": "Autres transports ferroviaires de fret"
    },
    {
        "code": "49.3",
        "name": "Autres transports terrestres de voyageurs"
    },
    {
        "code": "49.31",
        "name": "Transport terrestre urbain et suburbain de voyageurs"
    },
    {
        "code": "49.31.1",
        "name": "Transport ferroviaire urbain et suburbain de voyageurs"
    },
    {
        "code": "49.31.10",
        "name": "Transport ferroviaire urbain et suburbain de voyageurs"
    },
    {
        "code": "49.31.2",
        "name": "Autres transports terrestres urbains et suburbains de voyageurs"
    },
    {
        "code": "49.31.21",
        "name": "Transport routier régulier urbain et suburbain de voyageurs"
    },
    {
        "code": "49.31.22",
        "name": "Transport  régulier  urbain  et  suburbain  de  voyageurs,  combinant "
    },
    {
        "code": "49.32",
        "name": "Services de taxi et de louage"
    },
    {
        "code": "49.32.1",
        "name": "Services de taxi et de louage"
    },
    {
        "code": "49.32.11",
        "name": "Services de taxi et de louage"
    },
    {
        "code": "49.32.12",
        "name": "Location de voitures avec chauffeur"
    },
    {
        "code": "49.33",
        "name": "Autres transports terrestres réguliers interurbain de voyageurs"
    },
    {
        "code": "49.33.1",
        "name": "Autres transports terrestres réguliers interurbain de voyageurs"
    },
    {
        "code": "49.33.11",
        "name": "Transport routier régulier interurbain de voyageurs"
    },
    {
        "code": "49.33.12",
        "name": "Transport routier régulier spécial interurbain de voyageurs"
    },
    {
        "code": "49.33.13",
        "name": "Autres transports routiers réguliers spéciaux de voyageurs"
    },
    {
        "code": "49.39",
        "name": "Autres transports terrestres de voyageurs n.c.a."
    },
    {
        "code": "49.39.1",
        "name": "Autres transports terrestres de voyageurs n.c.a."
    },
    {
        "code": "49.39.10",
        "name": "Autres transports terrestres de voyageurs n.c.a."
    },
    {
        "code": "49.39.2",
        "name": "Transport terrestre non régulier de voyageurs"
    },
    {
        "code": "49.39.21",
        "name": "Location d'autocars avec conducteur"
    },
    {
        "code": "49.39.22",
        "name": "Transport routier de voyageurs, à des ﬁns d'excursion"
    },
    {
        "code": "49.39.23",
        "name": "Services non réguliers de navettes par autocars"
    },
    {
        "code": "49.39.24",
        "name": "Services non réguliers de navettes à longue distance par autocars"
    },
    {
        "code": "49.39.25",
        "name": "Transport routier de voyageurs par véhicules à traction humaine "
    },
    {
        "code": "49.39.29",
        "name": "Transports terrestres de voyageurs n.c.a."
    },
    {
        "code": "49.4",
        "name": "Transport routier de fret et services de déménagement"
    },
    {
        "code": "49.41",
        "name": "Transport routier de fret"
    },
    {
        "code": "49.41.1",
        "name": "Transport routier de fret"
    },
    {
        "code": "49.41.11",
        "name": "Transport routier de fret, par camions frigoriﬁques"
    },
    {
        "code": "49.41.12",
        "name": "Transport routier de fret, par camions-citernes ou semi-remorques, "
    },
    {
        "code": "49.41.13",
        "name": "Transport routier de fret, par camions-citernes ou semi-remorques, "
    },
    {
        "code": "49.41.14",
        "name": "Transport routier de conteneurs intermodaux"
    },
    {
        "code": "49.41.15",
        "name": "Transport routier de vracs secs"
    },
    {
        "code": "49.41.16",
        "name": "Transport routier d’animaux vivants"
    },
    {
        "code": "49.41.17",
        "name": "Transport routier de fret par véhicules à traction humaine ou animale"
    },
    {
        "code": "49.41.18",
        "name": "Transport routier de lettres et colis"
    },
    {
        "code": "49.41.19",
        "name": "Autres transports routiers de fret"
    },
    {
        "code": "49.41.2",
        "name": "Location de camions avec conducteur"
    },
    {
        "code": "49.41.20",
        "name": "Location de camions avec conducteur"
    },
    {
        "code": "49.42",
        "name": "Services de déménagement"
    },
    {
        "code": "49.42.1",
        "name": "Services de déménagement"
    },
    {
        "code": "49.42.11",
        "name": "Services de déménagement pour particuliers"
    },
    {
        "code": "49.42.19",
        "name": "Autres services de déménagement"
    },
    {
        "code": "49.5",
        "name": "Transport par conduites"
    },
    {
        "code": "49.50",
        "name": "Transport par conduites"
    },
    {
        "code": "49.50.1",
        "name": "Transport par conduites"
    },
    {
        "code": "49.50.11",
        "name": "Transport par conduites de pétrole et produits pétroliers bruts et rafﬁnés"
    },
    {
        "code": "49.50.12",
        "name": "Transport par conduites de gaz naturel"
    },
    {
        "code": "49.50.19",
        "name": "Transport par conduites d’autres produits"
    },
    {
        "code": "50",
        "name": "Transport par eau"
    },
    {
        "code": "50.1",
        "name": "Transport maritime et côtier de passagers"
    },
    {
        "code": "50.10",
        "name": "Transport maritime et côtier de passagers"
    },
    {
        "code": "50.10.1",
        "name": "Transport maritime et côtier de passagers"
    },
    {
        "code": "50.10.11",
        "name": "Transport maritime et côtier de passagers par transbordeurs"
    },
    {
        "code": "50.10.12",
        "name": "Transport maritime et côtier de passagers par paquebots; croisières"
    },
    {
        "code": "50.10.19",
        "name": "Autres transports maritimes et côtiers de passagers"
    },
    {
        "code": "50.10.2",
        "name": "Location de bateaux maritimes et côtiers pour passagers avec pilote"
    },
    {
        "code": "50.10.20",
        "name": "Location de bateaux maritimes et côtiers pour passagers avec pilote"
    },
    {
        "code": "50.2",
        "name": "Transport maritime et côtier de fret"
    },
    {
        "code": "50.20",
        "name": "Transport maritime et côtier de fret"
    },
    {
        "code": "50.20.1",
        "name": "Transport maritime et côtier de fret"
    },
    {
        "code": "50.20.11",
        "name": "Transport maritime et côtier de produits surgelés ou réfrigérés par "
    },
    {
        "code": "50.20.12",
        "name": "Transport maritime et côtier de pétrole brut par navires-citernes"
    },
    {
        "code": "50.20.13",
        "name": "Transport maritime et côtier d’autres vracs liquides ou gazeux par "
    },
    {
        "code": "50.20.14",
        "name": "Transport maritime et côtier de conteneurs intermodaux par porte-"
    },
    {
        "code": "50.20.15",
        "name": "Transport maritime et côtier de fret en vrac sec"
    },
    {
        "code": "50.20.19",
        "name": "Autres transports maritimes et côtiers de fret"
    },
    {
        "code": "50.20.2",
        "name": "Location de bateaux maritimes et côtiers pour fret avec pilote ; "
    },
    {
        "code": "50.20.21",
        "name": "Location de bateaux maritimes et côtiers pour fret avec équipages"
    },
    {
        "code": "50.20.22",
        "name": "Services de remorquage et poussage en mer"
    },
    {
        "code": "50.3",
        "name": "Transport ﬂuvial de passagers"
    },
    {
        "code": "50.30",
        "name": "Transport ﬂuvial de passagers"
    },
    {
        "code": "50.30.1",
        "name": "Transport ﬂuvial de passagers"
    },
    {
        "code": "50.30.11",
        "name": "Transport ﬂuvial de passagers par transbordeurs"
    },
    {
        "code": "50.30.12",
        "name": "Transport ﬂuvial de passagers sous forme de croisières"
    },
    {
        "code": "50.30.13",
        "name": "Services d’excursions en bateau"
    },
    {
        "code": "50.30.19",
        "name": "Autres transports ﬂuviaux de passagers"
    },
    {
        "code": "50.30.2",
        "name": "Location de bateaux ﬂuviaux pour passagers avec pilote"
    },
    {
        "code": "50.30.20",
        "name": "Location de bateaux ﬂuviaux pour passagers avec pilote"
    },
    {
        "code": "50.4",
        "name": "Transport ﬂuvial de fret"
    },
    {
        "code": "50.40",
        "name": "Transport ﬂuvial de fret"
    },
    {
        "code": "50.40.1",
        "name": "Transport ﬂuvial de fret"
    },
    {
        "code": "50.40.11",
        "name": "Transport  ﬂuvial de produits surgelés ou réfrigérés par navires"
    },
    {
        "code": "50.40.12",
        "name": "Transport ﬂuvial de pétrole brut par navires-citernes"
    },
    {
        "code": "50.40.13",
        "name": "Transport  ﬂuvial d’autres vracs liquides ou gazeux par navires-"
    },
    {
        "code": "50.40.14",
        "name": "Transport ﬂuvial de conteneurs intermodaux par porte-conteneurs"
    },
    {
        "code": "50.40.19",
        "name": "Autres transports ﬂuviaux de fret"
    },
    {
        "code": "50.40.2",
        "name": "Location de bateaux ﬂuviaux pour fret avec pilote ; services de"
    },
    {
        "code": "50.40.21",
        "name": "Location de bateaux ﬂuviaux pour fret avec pilote"
    },
    {
        "code": "50.40.22",
        "name": "Services de poussage et remorquage ﬂuvial"
    },
    {
        "code": "51",
        "name": "Transports aériens"
    },
    {
        "code": "51.1",
        "name": "Transport aérien de passagers"
    },
    {
        "code": "51.10",
        "name": "Transport aérien de passagers"
    },
    {
        "code": "51.10.1",
        "name": "Transport aérien de passagers"
    },
    {
        "code": "51.10.11",
        "name": "Transport aérien intérieur régulier de passagers"
    },
    {
        "code": "51.10.12",
        "name": "Transport aérien intérieur non régulier par charter de passagers, "
    },
    {
        "code": "51.10.13",
        "name": "Transport aérien international régulier de passagers"
    },
    {
        "code": "51.10.14",
        "name": "Transport aérien international non régulier par charter de passagers"
    },
    {
        "code": "51.10.15",
        "name": "Transport aérien non régulier de passagers à des ﬁns d'excursion"
    },
    {
        "code": "51.10.2",
        "name": "Location d’appareils de transport aérien de passagers avec pilote"
    },
    {
        "code": "51.10.20",
        "name": "Location d’appareils de transport aérien de passagers avec pilote"
    },
    {
        "code": "51.2",
        "name": "Transport aérien de fret et transport spatial"
    },
    {
        "code": "51.21",
        "name": "Transport aérien de fret"
    },
    {
        "code": "51.21.1",
        "name": "Transport aérien de fret"
    },
    {
        "code": "51.21.11",
        "name": "Transport aérien régulier de conteneurs intermodaux"
    },
    {
        "code": "51.21.12",
        "name": "Transport aérien de lettres et colis"
    },
    {
        "code": "51.21.13",
        "name": "Transport aérien régulier d’autre fret"
    },
    {
        "code": "51.21.14",
        "name": "Transport aérien non régulier d’autre fret"
    },
    {
        "code": "51.21.2",
        "name": "Location d’appareils de transport aérien de fret avec pilote"
    },
    {
        "code": "51.21.20",
        "name": "Location d’appareils de transport aérien de fret avec pilote"
    },
    {
        "code": "51.22",
        "name": "Transport spatial"
    },
    {
        "code": "51.22.1",
        "name": "Transport spatial"
    },
    {
        "code": "51.22.11",
        "name": "Transport spatial de passagers"
    },
    {
        "code": "51.22.12",
        "name": "Transport spatial de fret"
    },
    {
        "code": "52",
        "name": "Entreposage et services auxiliaires des transports"
    },
    {
        "code": "52.1",
        "name": "Entreposage et stockage"
    },
    {
        "code": "52.11",
        "name": "Entreposage et stockage frigoriﬁque"
    },
    {
        "code": "52.11.1",
        "name": "Entreposage et stockage frigoriﬁque"
    },
    {
        "code": "52.11.11",
        "name": "Entreposage et stockage frigoriﬁque pour produits alimentaires"
    },
    {
        "code": "52.11.19",
        "name": "Autres services d’entreposage et de stockage frigoriﬁque"
    },
    {
        "code": "52.12",
        "name": "Entreposage et stockage non frigoriﬁque"
    },
    {
        "code": "52.12.1",
        "name": "Entreposage et stockage non frigoriﬁque"
    },
    {
        "code": "52.12.11",
        "name": "Entreposage en vrac de liquides et de gaz"
    },
    {
        "code": "52.12.12",
        "name": "Entreposage en silo"
    },
    {
        "code": "52.12.19",
        "name": "Autres services d’entreposage et de stockage non frigoriﬁque"
    },
    {
        "code": "52.2",
        "name": "Services auxiliaires des transports"
    },
    {
        "code": "52.21",
        "name": "Services auxiliaires des transports terrestres"
    },
    {
        "code": "52.21.1",
        "name": "Services auxiliaires des transports ferroviaires"
    },
    {
        "code": "52.21.11",
        "name": "Services de poussage ou de remorquage ferroviaire"
    },
    {
        "code": "52.21.19",
        "name": "Autres services auxiliaires des transports ferroviaires"
    },
    {
        "code": "52.21.2",
        "name": "Services auxiliaires des transports routiers"
    },
    {
        "code": "52.21.21",
        "name": "Services des gares routières de voyageurs"
    },
    {
        "code": "52.21.22",
        "name": "Services donnant lieu à des péages autoroutiers"
    },
    {
        "code": "52.21.23",
        "name": "Services donnant lieu à des péages relatifs à des ouvrages d’art"
    },
    {
        "code": "52.21.24",
        "name": "Services des parcs de stationnement"
    },
    {
        "code": "52.21.25",
        "name": "Services de remorquage de véhicules privés et commerciaux"
    },
    {
        "code": "52.21.29",
        "name": "Autres services auxiliaires des transports routiers"
    },
    {
        "code": "52.21.3",
        "name": "Services auxiliaires des transports par conduites"
    },
    {
        "code": "52.21.30",
        "name": "Services auxiliaires des transports par conduites"
    },
    {
        "code": "52.22",
        "name": "Services auxiliaires des transports par eau"
    },
    {
        "code": "52.22.1",
        "name": "Services auxiliaires des transports par eau"
    },
    {
        "code": "52.22.11",
        "name": "Services  des  installations  portuaires  maritimes  et  côtières  (à "
    },
    {
        "code": "52.22.12",
        "name": "Services des installations portuaires ﬂuviales (à l’exclusion de la"
    },
    {
        "code": "52.22.13",
        "name": "Services de pilotage et de remorquage portuaire en eaux maritimes "
    },
    {
        "code": "52.22.14",
        "name": "Services de pilotage et de remorquage portuaire en eaux ﬂuviales"
    },
    {
        "code": "52.22.15",
        "name": "Services  de  sauvetage  et  de  renﬂouement de navires en eaux"
    },
    {
        "code": "52.22.16",
        "name": "Services  de  sauvetage  et  de  renﬂouement de navires en eaux"
    },
    {
        "code": "52.22.19",
        "name": "Autres services auxiliaires des transports par eau"
    },
    {
        "code": "52.23",
        "name": "Services auxiliaires des transports aériens"
    },
    {
        "code": "52.23.1",
        "name": "Services  des  installations  aéroportuaires  (à  l’exclusion  de  la "
    },
    {
        "code": "52.23.11",
        "name": "Services  des  installations  aéroportuaires,  à  l’exclusion  de  la "
    },
    {
        "code": "52.23.12",
        "name": "Services de contrôle de l’espace aérien"
    },
    {
        "code": "52.23.19",
        "name": "Autres services auxiliaires des transports aériens"
    },
    {
        "code": "52.23.2",
        "name": "Services auxiliaires des transports spatiaux"
    },
    {
        "code": "52.23.20",
        "name": "Services auxiliaires des transports spatiaux"
    },
    {
        "code": "52.24",
        "name": "Services de manutention"
    },
    {
        "code": "52.24.1",
        "name": "Services de manutention"
    },
    {
        "code": "52.24.11",
        "name": "Services de manutention de fret conteneurisé dans les ports"
    },
    {
        "code": "52.24.12",
        "name": "Autres services de manutention de fret conteneurisé"
    },
    {
        "code": "52.24.13",
        "name": "Services de manutention d’autre fret dans les ports"
    },
    {
        "code": "52.24.19",
        "name": "Services de manutention d’autre fret"
    },
    {
        "code": "52.29",
        "name": "Autres services auxiliaires des transports"
    },
    {
        "code": "52.29.1",
        "name": "Organisation du transport de fret"
    },
    {
        "code": "52.29.11",
        "name": "Courtage maritime"
    },
    {
        "code": "52.29.12",
        "name": "Autres services de courtage de fret"
    },
    {
        "code": "52.29.19",
        "name": "Autres services d’organisation du transport de fret"
    },
    {
        "code": "52.29.2",
        "name": "Autres services auxiliaires des transports n.c.a."
    },
    {
        "code": "52.29.20",
        "name": "Autres services auxiliaires des transports n.c.a."
    },
    {
        "code": "53",
        "name": "Services de poste et de courrier"
    },
    {
        "code": "53.1",
        "name": "Services de poste dans le cadre d’une obligation de service "
    },
    {
        "code": "53.10",
        "name": "Services  de  poste  dans  le  cadre  d’une  obligation  de  service "
    },
    {
        "code": "53.10.1",
        "name": "Services  de  poste  dans  le  cadre  d’une  obligation  de  service "
    },
    {
        "code": "53.10.11",
        "name": "Acheminement de journaux et revues dans le cadre d’une obligation "
    },
    {
        "code": "53.10.12",
        "name": "Acheminement de lettres dans le cadre d’une obligation de service "
    },
    {
        "code": "53.10.13",
        "name": "Acheminement de colis dans le cadre d’une obligation de service "
    },
    {
        "code": "53.10.14",
        "name": "Services de guichet postal"
    },
    {
        "code": "53.10.19",
        "name": "Autres services de poste dans le cadre d’une obligation de service "
    },
    {
        "code": "53.2",
        "name": "Autres services de poste et de courrier"
    },
    {
        "code": "53.20",
        "name": "Autres services de poste et de courrier"
    },
    {
        "code": "53.20.1",
        "name": "Autres services de poste et de courrier"
    },
    {
        "code": "53.20.11",
        "name": "Acheminement multimodal de courrier (\"Rapid poste\")"
    },
    {
        "code": "53.20.12",
        "name": "Services de livraison à domicile de produits alimentaires"
    },
    {
        "code": "53.20.19",
        "name": "Autres services de poste et de courrier n.c.a."
    },
    {
        "code": "55",
        "name": "Services d’hébergement"
    },
    {
        "code": "55.1",
        "name": "Hôtellerie et hébergement similaire"
    },
    {
        "code": "55.10",
        "name": "Hôtellerie et hébergement similaire"
    },
    {
        "code": "55.10.1",
        "name": "Hébergement  hôtelier  en  chambre  ou  unité  d’habitation, "
    },
    {
        "code": "55.10.10",
        "name": "Hébergement  hôtelier  en  chambre  ou  unité  d’habitation,  avec "
    },
    {
        "code": "55.2",
        "name": "Hébergement  touristique  et  autres  services  d’hébergement "
    },
    {
        "code": "55.20",
        "name": "Hébergement  touristique  et  autres  services  d’hébergement  de "
    },
    {
        "code": "55.20.1",
        "name": "Hébergement  touristique  et  autres  services  d’hébergement  de "
    },
    {
        "code": "55.20.11",
        "name": "Hébergement  en  chambre  ou  unité  d’habitation,  en  auberges  de "
    },
    {
        "code": "55.20.12",
        "name": "Hébergement en chambre ou unité d’habitation, dans un immeuble "
    },
    {
        "code": "55.20.19",
        "name": "Autres services d’hébergement en chambre ou unité d’habitation, "
    },
    {
        "code": "55.3",
        "name": "Services des terrains de camping et parcs pour caravanes et "
    },
    {
        "code": "55.30",
        "name": "Services  des  terrains  de  camping  et  parcs  pour  caravanes  et "
    },
    {
        "code": "55.30.1",
        "name": "Services  des  terrains  de  camping  et  parcs  pour  caravanes  et "
    },
    {
        "code": "55.30.11",
        "name": "Services des terrains de camping"
    },
    {
        "code": "55.30.12",
        "name": "Services des parcs pour caravanes et véhicules de loisirs"
    },
    {
        "code": "55.9",
        "name": "Autres services d’hébergement"
    },
    {
        "code": "55.90",
        "name": "Autres services d’hébergement"
    },
    {
        "code": "55.90.1",
        "name": "Autres services d’hébergement"
    },
    {
        "code": "55.90.11",
        "name": "Services  d'hébergement  en  chambre  ou  unité  d'habitation  pour "
    },
    {
        "code": "55.90.12",
        "name": "Services  d'hébergement  en  chambre  ou  unité  d'habitation  pour "
    },
    {
        "code": "55.90.13",
        "name": "Services des voitures-lits et couchettes et services similaires dans "
    },
    {
        "code": "55.90.19",
        "name": "Autres services d'hébergement n.c.a."
    },
    {
        "code": "56",
        "name": "Services de restauration et de débits de boissons"
    },
    {
        "code": "56.0",
        "name": "Restauration et restauration mobile"
    },
    {
        "code": "56.00",
        "name": "Restauration et restauration mobile"
    },
    {
        "code": "56.00.1",
        "name": "Restauration et restauration mobile"
    },
    {
        "code": "56.00.11",
        "name": "Services complets de restauration à la table"
    },
    {
        "code": "56.00.12",
        "name": "Services  des  wagons-restaurants  et  services  analogues  sur  les "
    },
    {
        "code": "56.00.13",
        "name": "Services de restauration en self-service"
    },
    {
        "code": "56.00.19",
        "name": "Autres services de restauration"
    },
    {
        "code": "56.2",
        "name": "Services de traiteurs et autres services de restauration"
    },
    {
        "code": "56.21",
        "name": "Services de traiteurs"
    },
    {
        "code": "56.21.1",
        "name": "Services de traiteurs"
    },
    {
        "code": "56.21.11",
        "name": "Services de traiteurs pour particuliers"
    },
    {
        "code": "56.21.19",
        "name": "Autres services de traiteurs"
    },
    {
        "code": "56.29",
        "name": "Autres services de restauration collective"
    },
    {
        "code": "56.29.1",
        "name": "Services de restauration collective sous contrat"
    },
    {
        "code": "56.29.11",
        "name": "Services  de  restauration  collective  sous  contrat  pour  le  compte "
    },
    {
        "code": "56.29.19",
        "name": "Autres services de restauration collective sous contrat"
    },
    {
        "code": "56.29.2",
        "name": "Services de cantines et restaurants d’entreprise"
    },
    {
        "code": "56.29.20",
        "name": "Services de cantines et restaurants d’entreprise"
    },
    {
        "code": "56.3",
        "name": "Services des cafés et des débits de boissons"
    },
    {
        "code": "56.31",
        "name": "Services des cafés"
    },
    {
        "code": "56.31.1",
        "name": "Services des cafés"
    },
    {
        "code": "56.31.10",
        "name": "Services des cafés"
    },
    {
        "code": "56.32",
        "name": "Services des débits de boissons alcoolisées"
    },
    {
        "code": "56.32.1",
        "name": "Services des débits de boissons alcoolisées"
    },
    {
        "code": "56.32.10",
        "name": "Services de débits de boissons alcoolisées"
    },
    {
        "code": "58",
        "name": "Édition"
    },
    {
        "code": "58.1",
        "name": "Édition de livres et périodiques et autres activités d’édition"
    },
    {
        "code": "58.11",
        "name": "Édition de livres"
    },
    {
        "code": "58.11.1",
        "name": "Livres imprimés"
    },
    {
        "code": "58.11.11",
        "name": "Manuels éducatifs, imprimés (y.c. livres scolaires)"
    },
    {
        "code": "58.11.12",
        "name": "Livres professionnels, techniques et savants, imprimés"
    },
    {
        "code": "58.11.13",
        "name": "Livres d’enfants, imprimés"
    },
    {
        "code": "58.11.14",
        "name": "Dictionnaires et encyclopédies, imprimés"
    },
    {
        "code": "58.11.15",
        "name": "Atlas et autres livres contenant des cartes, imprimés"
    },
    {
        "code": "58.11.16",
        "name": "Cartes géographiques, marines ou autres, autres que sous forme de "
    },
    {
        "code": "58.11.19",
        "name": "Autres livres, brochures, dépliants et articles similaires, imprimés"
    },
    {
        "code": "58.11.2",
        "name": "Livres sur disque, cassette ou autre support physique"
    },
    {
        "code": "58.11.20",
        "name": "Livres sur disque, cassette ou autre support physique"
    },
    {
        "code": "58.11.3",
        "name": "Livres en ligne"
    },
    {
        "code": "58.11.30",
        "name": "Livres en ligne"
    },
    {
        "code": "58.11.4",
        "name": "Espaces publicitaires dans les livres"
    },
    {
        "code": "58.11.41",
        "name": "Espaces publicitaires dans les livres imprimés"
    },
    {
        "code": "58.11.42",
        "name": "Espaces publicitaires dans les livres électroniques"
    },
    {
        "code": "58.11.5",
        "name": "Édition de livres pour compte de tiers"
    },
    {
        "code": "58.11.50",
        "name": "Édition de livres pour compte de tiers"
    },
    {
        "code": "58.11.6",
        "name": "Services de licence pour livres"
    },
    {
        "code": "58.11.60",
        "name": "Services de licence pour livres"
    },
    {
        "code": "58.12",
        "name": "Édition de répertoires et de ﬁchiers d’adresses"
    },
    {
        "code": "58.12.1",
        "name": "Répertoires et ﬁchiers d’adresses imprimés ou sur support physique"
    },
    {
        "code": "58.12.10",
        "name": "Répertoires  et  ﬁchiers d’adresses imprimés ou sur support"
    },
    {
        "code": "58.12.2",
        "name": "Répertoires et ﬁchiers d’adresses en ligne"
    },
    {
        "code": "58.12.20",
        "name": "Répertoires et ﬁchiers d’adresses en ligne"
    },
    {
        "code": "58.12.3",
        "name": "Services de licence pour l’utilisation de répertoires et de ﬁchiers"
    },
    {
        "code": "58.12.30",
        "name": "Services de licence pour l’utilisation de répertoires et de ﬁchiers"
    },
    {
        "code": "58.13",
        "name": "Édition de journaux"
    },
    {
        "code": "58.13.1",
        "name": "Journaux imprimés"
    },
    {
        "code": "58.13.10",
        "name": "Journaux imprimés"
    },
    {
        "code": "58.13.2",
        "name": "Journaux en ligne"
    },
    {
        "code": "58.13.20",
        "name": "Journaux en ligne"
    },
    {
        "code": "58.13.3",
        "name": "Espaces publicitaires dans les journaux"
    },
    {
        "code": "58.13.31",
        "name": "Espaces publicitaires dans les journaux imprimés"
    },
    {
        "code": "58.13.32",
        "name": "Espaces publicitaires dans les journaux électroniques"
    },
    {
        "code": "58.14",
        "name": "Édition de revues et périodiques"
    },
    {
        "code": "58.14.1",
        "name": "Revues et périodiques imprimés"
    },
    {
        "code": "58.14.11",
        "name": "Revues et périodiques généralistes imprimés"
    },
    {
        "code": "58.14.12",
        "name": "Revues et journaux d’affaires, professionnels et universitaires imprimés"
    },
    {
        "code": "58.14.19",
        "name": "Autres revues et périodiques imprimés"
    },
    {
        "code": "58.14.2",
        "name": "Revues et périodiques en ligne"
    },
    {
        "code": "58.14.20",
        "name": "Revues et périodiques en ligne"
    },
    {
        "code": "58.14.3",
        "name": "Espaces publicitaires dans les revues et périodiques"
    },
    {
        "code": "58.14.31",
        "name": "Espaces publicitaires dans les revues et périodiques imprimés"
    },
    {
        "code": "58.14.32",
        "name": "Espaces publicitaires dans les revues et périodiques électroniques"
    },
    {
        "code": "58.14.4",
        "name": "Services de licence pour les revues et périodiques"
    },
    {
        "code": "58.14.40",
        "name": "Services de licence pour les revues et périodiques"
    },
    {
        "code": "58.19",
        "name": "Autres activités d’édition"
    },
    {
        "code": "58.19.1",
        "name": "Autres activités d’édition d’imprimés"
    },
    {
        "code": "58.19.11",
        "name": "Cartes postales, cartes de vœux et similaires, imprimées"
    },
    {
        "code": "58.19.12",
        "name": "Photos, illustrations, gravures, imprimées"
    },
    {
        "code": "58.19.13",
        "name": "Transferts (décalcomanies) et calendriers, imprimés"
    },
    {
        "code": "58.19.14",
        "name": "Timbres-poste  et  timbres  ﬁscaux ou similaires neufs, imprimés;"
    },
    {
        "code": "58.19.15",
        "name": "Matériel publicitaire, catalogues commerciaux et similaires, imprimés"
    },
    {
        "code": "58.19.19",
        "name": "Autres imprimés"
    },
    {
        "code": "58.19.2",
        "name": "Autres contenus en ligne"
    },
    {
        "code": "58.19.21",
        "name": "Contenus en ligne pour adultes"
    },
    {
        "code": "58.19.29",
        "name": "Autres contenus en ligne n.c.a."
    },
    {
        "code": "58.19.3",
        "name": "Services de licence pour les autres imprimés"
    },
    {
        "code": "58.19.30",
        "name": "Services de licence pour les autres imprimés"
    },
    {
        "code": "58.2",
        "name": "Édition de logiciels"
    },
    {
        "code": "58.21",
        "name": "Édition de jeux électroniques"
    },
    {
        "code": "58.21.1",
        "name": "Jeux électroniques, sur support physique"
    },
    {
        "code": "58.21.10",
        "name": "Jeux électroniques, sur support physique"
    },
    {
        "code": "58.21.2",
        "name": "Jeux électroniques, en téléchargement"
    },
    {
        "code": "58.21.20",
        "name": "Jeux électroniques, en téléchargement"
    },
    {
        "code": "58.21.3",
        "name": "Jeux en ligne"
    },
    {
        "code": "58.21.30",
        "name": "Jeux en ligne"
    },
    {
        "code": "58.21.4",
        "name": "Services de licence pour l’utilisation de jeux électroniques"
    },
    {
        "code": "58.21.40",
        "name": "Services de licence pour l’utilisation de jeux électroniques"
    },
    {
        "code": "58.29",
        "name": "Édition d’autres logiciels"
    },
    {
        "code": "58.29.1",
        "name": "Logiciels système, sur support physique"
    },
    {
        "code": "58.29.11",
        "name": "Systèmes d’exploitation, sur support physique"
    },
    {
        "code": "58.29.12",
        "name": "Logiciels réseau, sur support physique"
    },
    {
        "code": "58.29.13",
        "name": "Logiciels de gestion de base de données, sur support physique"
    },
    {
        "code": "58.29.14",
        "name": "Logiciels d’outils de développement et de langages de programmation, "
    },
    {
        "code": "58.29.2",
        "name": "Logiciels d’application, sur support physique"
    },
    {
        "code": "58.29.21",
        "name": "Applications commerciales et domestiques générales, sur support "
    },
    {
        "code": "58.29.29",
        "name": "Autres logiciels d’application, sur support physique"
    },
    {
        "code": "58.29.3",
        "name": "Logiciels en téléchargement"
    },
    {
        "code": "58.29.31",
        "name": "Logiciels système, en téléchargement"
    },
    {
        "code": "58.29.32",
        "name": "Logiciels d’application, en téléchargement"
    },
    {
        "code": "58.29.4",
        "name": "Logiciels en ligne"
    },
    {
        "code": "58.29.40",
        "name": "Logiciels en ligne"
    },
    {
        "code": "58.29.5",
        "name": "Services de licence pour l’utilisation de logiciels informatiques"
    },
    {
        "code": "58.29.50",
        "name": "Services de licence pour l’utilisation de logiciels informatiques"
    },
    {
        "code": "59",
        "name": "Production de films cinématographiques, de vidéos et de programmes "
    },
    {
        "code": "59.1",
        "name": "Services cinématographiques, vidéo et de télévision"
    },
    {
        "code": "59.11",
        "name": "Production  de  ﬁlms cinématographiques, de vidéos et de"
    },
    {
        "code": "59.11.1",
        "name": "Production  de  ﬁlms cinématographiques, de vidéos et de"
    },
    {
        "code": "59.11.11",
        "name": "Production de ﬁlms cinématographiques"
    },
    {
        "code": "59.11.12",
        "name": "Production de ﬁlms et vidéos promotionnels ou publicitaires"
    },
    {
        "code": "59.11.13",
        "name": "Production d’autres programmes de télévision"
    },
    {
        "code": "59.11.2",
        "name": "Produits cinématographiques, vidéos et programmes de télévision"
    },
    {
        "code": "59.11.21",
        "name": "Originaux de ﬁlms cinématographiques, vidéos et programmes de"
    },
    {
        "code": "59.11.22",
        "name": "Films cinématographiques"
    },
    {
        "code": "59.11.23",
        "name": "Films et autres contenus vidéo sur disque, cassette ou autre support "
    },
    {
        "code": "59.11.24",
        "name": "Films et autres contenus vidéo en téléchargement"
    },
    {
        "code": "59.11.3",
        "name": "Vente  d'espaces  publicitaires  ou  de  temps  d'antenne  dans  les "
    },
    {
        "code": "59.11.30",
        "name": "Vente d'espaces publicitaires ou de temps d'antenne dans les produits "
    },
    {
        "code": "59.12",
        "name": "Post-production  de  ﬁlms cinématographiques, de vidéos et de"
    },
    {
        "code": "59.12.1",
        "name": "Post-production  de  ﬁlms cinématographiques, de vidéos et de"
    },
    {
        "code": "59.12.11",
        "name": "Services d’édition audiovisuelle"
    },
    {
        "code": "59.12.12",
        "name": "Services de transfert et de duplication de bandes mères"
    },
    {
        "code": "59.12.13",
        "name": "Services de correction de couleurs et de restauration numérique"
    },
    {
        "code": "59.12.14",
        "name": "Services d’effets visuels"
    },
    {
        "code": "59.12.15",
        "name": "Services d’animation"
    },
    {
        "code": "59.12.16",
        "name": "Services de sous-titrage"
    },
    {
        "code": "59.12.17",
        "name": "Services d’édition et de conception sonore"
    },
    {
        "code": "59.12.19",
        "name": "Autres services de post-production de ﬁlms cinématographiques, de"
    },
    {
        "code": "59.13",
        "name": "Distribution  de  ﬁlms cinématographiques, de vidéos et de"
    },
    {
        "code": "59.13.1",
        "name": "Services de licence et de distribution de ﬁlms cinématographiques,"
    },
    {
        "code": "59.13.11",
        "name": "Services de licence pour les droits des ﬁlms et leurs recettes"
    },
    {
        "code": "59.13.12",
        "name": "Autres  services  de  distribution  de  ﬁlms cinématographiques, de"
    },
    {
        "code": "59.14",
        "name": "Projection de ﬁlms cinématographiques"
    },
    {
        "code": "59.14.1",
        "name": "Projection de ﬁlms cinématographiques"
    },
    {
        "code": "59.14.10",
        "name": "Projection de ﬁlms cinématographiques"
    },
    {
        "code": "59.2",
        "name": "Enregistrement sonore et édition musicale"
    },
    {
        "code": "59.20",
        "name": "Enregistrement sonore et édition musicale"
    },
    {
        "code": "59.20.1",
        "name": "Services  d’enregistrement  sonore  et  d’enregistrement  en  direct; "
    },
    {
        "code": "59.20.11",
        "name": "Services d’enregistrement sonore"
    },
    {
        "code": "59.20.12",
        "name": "Services d’enregistrement en direct"
    },
    {
        "code": "59.20.13",
        "name": "Originaux d’enregistrement sonore"
    },
    {
        "code": "59.20.2",
        "name": "Production  de  programmes  radio;  originaux  de  programmes "
    },
    {
        "code": "59.20.21",
        "name": "Production de programmes radio"
    },
    {
        "code": "59.20.22",
        "name": "Originaux de programmes radio"
    },
    {
        "code": "59.20.3",
        "name": "Édition musicale"
    },
    {
        "code": "59.20.31",
        "name": "Partitions musicales imprimées"
    },
    {
        "code": "59.20.32",
        "name": "Partitions musicales électroniques"
    },
    {
        "code": "59.20.33",
        "name": "Enregistrements  audio  musicaux  sur  disque,  cassette  ou  autre "
    },
    {
        "code": "59.20.34",
        "name": "Autres disques et cassettes audio"
    },
    {
        "code": "59.20.35",
        "name": "Musique en téléchargement"
    },
    {
        "code": "59.20.4",
        "name": "Services de licence pour l’utilisation d’originaux acoustiques"
    },
    {
        "code": "59.20.40",
        "name": "Services de licence pour l’utilisation d’originaux acoustiques"
    },
    {
        "code": "60",
        "name": "Programmation et diffusion"
    },
    {
        "code": "60.1",
        "name": "Radiodiffusion"
    },
    {
        "code": "60.10",
        "name": "Radiodiffusion"
    },
    {
        "code": "60.10.1",
        "name": "Radiodiffusion; originaux de radiodiffusion"
    },
    {
        "code": "60.10.11",
        "name": "Programmation d’émissions de radio et radiodiffusion"
    },
    {
        "code": "60.10.12",
        "name": "Originaux de radiodiffusion"
    },
    {
        "code": "60.10.2",
        "name": "Programmes de stations de radio"
    },
    {
        "code": "60.10.20",
        "name": "Programmes de stations de radio"
    },
    {
        "code": "60.10.3",
        "name": "Temps d’antenne publicitaire à la radio"
    },
    {
        "code": "60.10.30",
        "name": "Temps d’antenne publicitaire à la radio"
    },
    {
        "code": "60.2",
        "name": "Programmation  de  télévision  et  télédiffusion;  originaux "
    },
    {
        "code": "60.20",
        "name": "Programmation  de  télévision  et  télédiffusion;  originaux "
    },
    {
        "code": "60.20.1",
        "name": "Programmation de télévision et télédiffusion"
    },
    {
        "code": "60.20.11",
        "name": "Programmation de télévision et télédiffusion en ligne, à l’exclusion "
    },
    {
        "code": "60.20.12",
        "name": "Autres services de programmation de télévision et télédiffusion, à "
    },
    {
        "code": "60.20.13",
        "name": "Programmation  de  télévision  et  télédiffusion  par  abonnement  en "
    },
    {
        "code": "60.20.14",
        "name": "Autres services de programmation de télévision et télédiffusion par "
    },
    {
        "code": "60.20.2",
        "name": "Originaux d’émissions de télévision"
    },
    {
        "code": "60.20.20",
        "name": "Originaux d’émissions de télévision"
    },
    {
        "code": "60.20.3",
        "name": "Programmes de chaînes de télévision"
    },
    {
        "code": "60.20.31",
        "name": "Programmes de chaînes de télévision, à l’exclusion des chaînes par "
    },
    {
        "code": "60.20.32",
        "name": "Programmes de chaînes de télévision par abonnement"
    },
    {
        "code": "60.20.4",
        "name": "Temps d’antenne publicitaire à la télévision"
    },
    {
        "code": "60.20.40",
        "name": "Temps d’antenne publicitaire à la télévision"
    },
    {
        "code": "61",
        "name": "Services de télécommunications"
    },
    {
        "code": "61.0",
        "name": "Services de télécommunications"
    },
    {
        "code": "61.00",
        "name": "Services de télécommunications"
    },
    {
        "code": "61.00.1",
        "name": "Transmission de messages ou de données"
    },
    {
        "code": "61.00.11",
        "name": "Services de téléphonie – accès et utilisation"
    },
    {
        "code": "61.00.12",
        "name": "Services de téléphonie – caractéristiques d'appel"
    },
    {
        "code": "61.00.13",
        "name": "Services de réseaux privés"
    },
    {
        "code": "61.00.2",
        "name": "Services de portage de télécommunications (à l'exception d'Internet)"
    },
    {
        "code": "61.00.20",
        "name": "Services de portage de télécommunications"
    },
    {
        "code": "61.00.3",
        "name": "Services de transmission de données"
    },
    {
        "code": "61.00.30",
        "name": "Services de transmission de données"
    },
    {
        "code": "61.00.4",
        "name": "Services de télécommunications par Internet"
    },
    {
        "code": "61.00.41",
        "name": "Services de dorsales pour Internet"
    },
    {
        "code": "61.00.42",
        "name": "Services d'accès à Internet à bande étroite"
    },
    {
        "code": "61.00.43",
        "name": "Services d'accès à Internet à large bande"
    },
    {
        "code": "61.00.49",
        "name": "Autres services de télécommunications par Internet"
    },
    {
        "code": "61.00.5",
        "name": "Services de distribution de programmes à domicile"
    },
    {
        "code": "61.00.51",
        "name": "Services  de  distribution  de  programmes  à  domicile,  bouquet  de "
    },
    {
        "code": "61.00.52",
        "name": "Services  de  distribution  de  programmes  à  domicile,  bouquet  de "
    },
    {
        "code": "61.00.53",
        "name": "Services de distribution de programmes à domicile, paiement à la "
    },
    {
        "code": "61.9",
        "name": "Autres services de télécommunications"
    },
    {
        "code": "61.90",
        "name": "Autres services de télécommunications"
    },
    {
        "code": "61.90.1",
        "name": "Autres services de télécommunications"
    },
    {
        "code": "61.90.10",
        "name": "Autres services de télécommunications"
    },
    {
        "code": "62",
        "name": "Programmation, conseil et autres activités informatiques"
    },
    {
        "code": "62.0",
        "name": "Programmation, conseil et autres activités informatiques"
    },
    {
        "code": "62.01",
        "name": "Services de programmation informatique"
    },
    {
        "code": "62.01.1",
        "name": "Services de conception et développement informatique"
    },
    {
        "code": "62.01.11",
        "name": "Services  de  conception  et  développement  informatique  pour "
    },
    {
        "code": "62.01.12",
        "name": "Services de conception et développement informatique pour réseaux "
    },
    {
        "code": "62.01.2",
        "name": "Originaux de logiciels"
    },
    {
        "code": "62.01.21",
        "name": "Originaux de jeux électroniques"
    },
    {
        "code": "62.01.29",
        "name": "Autres originaux de logiciels"
    },
    {
        "code": "62.02",
        "name": "Services de conseil en informatique"
    },
    {
        "code": "62.02.1",
        "name": "Services de conseil en conﬁgurations informatiques"
    },
    {
        "code": "62.02.10",
        "name": "Services de conseil en conﬁgurations informatiques"
    },
    {
        "code": "62.02.2",
        "name": "Services de conseils en systèmes et logiciels informatiques"
    },
    {
        "code": "62.02.20",
        "name": "Services de conseils en systèmes et logiciels informatiques"
    },
    {
        "code": "62.02.3",
        "name": "Services d’assistance technique informatique"
    },
    {
        "code": "62.02.30",
        "name": "Services d’assistance technique informatique"
    },
    {
        "code": "62.03",
        "name": "Services de gestion d’installations informatiques"
    },
    {
        "code": "62.03.1",
        "name": "Services de gestion d’installations informatiques"
    },
    {
        "code": "62.03.11",
        "name": "Services de gestion de réseaux"
    },
    {
        "code": "62.03.12",
        "name": "Services de gestion de systèmes informatiques"
    },
    {
        "code": "62.09",
        "name": "Autres services informatiques"
    },
    {
        "code": "62.09.1",
        "name": "Installation d’ordinateurs et d’équipements périphériques"
    },
    {
        "code": "62.09.10",
        "name": "Installation d’ordinateurs et d’équipements périphériques"
    },
    {
        "code": "62.09.2",
        "name": "Autres services informatiques n.c.a."
    },
    {
        "code": "62.09.20",
        "name": "Autres services informatiques n.c.a."
    },
    {
        "code": "63",
        "name": "Services d’information"
    },
    {
        "code": "63.1",
        "name": "Traitement de données, hébergement et activités connexes; "
    },
    {
        "code": "63.11",
        "name": "Traitement de données, hébergement et activités connexes"
    },
    {
        "code": "63.11.1",
        "name": "Traitement  de  données,  hébergement,  services  applicatifs  et "
    },
    {
        "code": "63.11.11",
        "name": "Traitement de données"
    },
    {
        "code": "63.11.12",
        "name": "Hébergement de sites Internet"
    },
    {
        "code": "63.11.13",
        "name": "Fourniture de services applicatifs"
    },
    {
        "code": "63.11.19",
        "name": "Fourniture d’autres infrastructures d’hébergement et informatiques"
    },
    {
        "code": "63.11.2",
        "name": "Contenu vidéo et audio en ﬂux continu (streaming)"
    },
    {
        "code": "63.11.21",
        "name": "Contenu vidéo en ﬂux continu (streaming)"
    },
    {
        "code": "63.11.22",
        "name": "Contenu audio en ﬂux continu (streaming)"
    },
    {
        "code": "63.11.3",
        "name": "Espaces publicitaires sur l’internet"
    },
    {
        "code": "63.11.30",
        "name": "Espaces publicitaires sur l’internet"
    },
    {
        "code": "63.12",
        "name": "Contenu de portails Internet"
    },
    {
        "code": "63.12.1",
        "name": "Contenu de portails Internet"
    },
    {
        "code": "63.12.10",
        "name": "Contenu de portails Internet"
    },
    {
        "code": "63.9",
        "name": "Autres services d’information"
    },
    {
        "code": "63.91",
        "name": "Services des agences de presse"
    },
    {
        "code": "63.91.1",
        "name": "Services des agences de presse"
    },
    {
        "code": "63.91.11",
        "name": "Services  des  agences  de  presse  à  l’intention  des  journaux  et "
    },
    {
        "code": "63.91.12",
        "name": "Services  des  agences  de  presse  à  l’intention  des  médias "
    },
    {
        "code": "63.99",
        "name": "Autres services d’information n.c.a."
    },
    {
        "code": "63.99.1",
        "name": "Services d’information n.c.a."
    },
    {
        "code": "63.99.10",
        "name": "Services d’information n.c.a."
    },
    {
        "code": "63.99.2",
        "name": "Compilations originales de faits/informations"
    },
    {
        "code": "63.99.20",
        "name": "Compilations originales de faits/informations"
    },
    {
        "code": "64",
        "name": "Services ﬁnanciers, hors assurances et caisses de retraite"
    },
    {
        "code": "64.1",
        "name": "Services d’intermédiation monétaire"
    },
    {
        "code": "64.11",
        "name": "Services de banque centrale"
    },
    {
        "code": "64.11.1",
        "name": "Services de banque centrale"
    },
    {
        "code": "64.11.10",
        "name": "Services de banque centrale"
    },
    {
        "code": "64.19",
        "name": "Autres services d’intermédiation monétaire"
    },
    {
        "code": "64.19.1",
        "name": "Services de dépôts"
    },
    {
        "code": "64.19.11",
        "name": "Services de dépôts offerts aux sociétés et déposants institutionnels"
    },
    {
        "code": "64.19.12",
        "name": "Services de dépôts offerts aux autres déposants"
    },
    {
        "code": "64.19.2",
        "name": "Services de crédits des institutions monétaires"
    },
    {
        "code": "64.19.21",
        "name": "Services de crédits interindustriels des institutions monétaires"
    },
    {
        "code": "64.19.22",
        "name": "Services de crédits à la consommation des institutions monétaires"
    },
    {
        "code": "64.19.23",
        "name": "Services  de  crédits  hypothécaires  résidentiels  des  institutions "
    },
    {
        "code": "64.19.24",
        "name": "Services de crédits hypothécaires non résidentiels des institutions "
    },
    {
        "code": "64.19.25",
        "name": "Services de crédits commerciaux non hypothécaires des institutions "
    },
    {
        "code": "64.19.26",
        "name": "Services de cartes de crédit des institutions monétaires"
    },
    {
        "code": "64.19.29",
        "name": "Autres services de crédits des institutions monétaires"
    },
    {
        "code": "64.19.3",
        "name": "Autres services d’intermédiation monétaire n.c.a."
    },
    {
        "code": "64.19.30",
        "name": "Autres services d’intermédiation monétaire n.c.a."
    },
    {
        "code": "64.2",
        "name": "Services des sociétés holding"
    },
    {
        "code": "64.20",
        "name": "Services des sociétés holding"
    },
    {
        "code": "64.20.1",
        "name": "Services des sociétés holding"
    },
    {
        "code": "64.20.10",
        "name": "Services des sociétés holding"
    },
    {
        "code": "64.3",
        "name": "Services  des  fonds  de  placement  et  entités  ﬁnancières"
    },
    {
        "code": "64.30",
        "name": "Services  des  fonds  de  placement  et  entités  ﬁnancières"
    },
    {
        "code": "64.30.1",
        "name": "Services des fonds de placement et entités ﬁnancières similaires"
    },
    {
        "code": "64.30.10",
        "name": "Services des fonds de placement et entités ﬁnancières similaires"
    },
    {
        "code": "64.9",
        "name": "Autres  services  ﬁnanciers, hors assurances et caisses de"
    },
    {
        "code": "64.91",
        "name": "Services de crédit-bail"
    },
    {
        "code": "64.91.1",
        "name": "Services de crédit-bail"
    },
    {
        "code": "64.91.10",
        "name": "Services de crédit-bail"
    },
    {
        "code": "64.92",
        "name": "Autres services de crédits"
    },
    {
        "code": "64.92.1",
        "name": "Autres  services  de  crédits,  autres  que  ceux  des  institutions "
    },
    {
        "code": "64.92.11",
        "name": "Services de crédits interindustriels, autres que ceux des institutions "
    },
    {
        "code": "64.92.12",
        "name": "Services  de  crédits  à  la  consommation,  autres  que  ceux  des "
    },
    {
        "code": "64.92.13",
        "name": "Services de crédits hypothécaires résidentiels, autres que ceux des "
    },
    {
        "code": "64.92.14",
        "name": "Services de crédits hypothécaires non résidentiels, autres que ceux "
    },
    {
        "code": "64.92.15",
        "name": "Services de crédits commerciaux non hypothécaires, autres que ceux "
    },
    {
        "code": "64.92.16",
        "name": "Services de cartes de crédit, autres que ceux des institutions monétaires"
    },
    {
        "code": "64.92.19",
        "name": "Autres  services  de  crédits,  autres  que  ceux  des  institutions "
    },
    {
        "code": "64.99",
        "name": "Autres services ﬁnanciers, hors assurances et caisses de retraite,"
    },
    {
        "code": "64.99.1",
        "name": "Autres services ﬁnanciers, hors assurances et caisses de retraite, n.c.a."
    },
    {
        "code": "64.99.11",
        "name": "Services bancaires de placement"
    },
    {
        "code": "64.99.19",
        "name": "Services ﬁnanciers, hors assurances et caisses de retraite, n.c.a."
    },
    {
        "code": "65",
        "name": "Services  d’assurance,  de  réassurance  et  de  caisses  de "
    },
    {
        "code": "65.1",
        "name": "Services d’assurance"
    },
    {
        "code": "65.11",
        "name": "Assurance vie"
    },
    {
        "code": "65.11.1",
        "name": "Assurance vie"
    },
    {
        "code": "65.11.10",
        "name": "Assurance vie"
    },
    {
        "code": "65.12",
        "name": "Assurances non-vie"
    },
    {
        "code": "65.12.1",
        "name": "Assurance accidents et assurance maladie"
    },
    {
        "code": "65.12.11",
        "name": "Assurance accidents"
    },
    {
        "code": "65.12.12",
        "name": "Assurance maladie"
    },
    {
        "code": "65.12.2",
        "name": "Assurance de véhicules automobiles"
    },
    {
        "code": "65.12.21",
        "name": "Assurance de véhicules automobiles, responsabilité civile"
    },
    {
        "code": "65.12.29",
        "name": "Autres services d’assurance de véhicules automobiles"
    },
    {
        "code": "65.12.3",
        "name": "Assurance maritime, assurance aérienne et autre assurance-transports"
    },
    {
        "code": "65.12.31",
        "name": "Assurance du matériel ferroviaire roulant"
    },
    {
        "code": "65.12.32",
        "name": "Assurance responsabilité civile du transporteur aérien"
    },
    {
        "code": "65.12.33",
        "name": "Autres services d’assurance liés aux avions"
    },
    {
        "code": "65.12.34",
        "name": "Assurance responsabilité civile du transporteur par bateaux"
    },
    {
        "code": "65.12.35",
        "name": "Autres services d’assurance liés aux bateaux"
    },
    {
        "code": "65.12.36",
        "name": "Assurance du fret"
    },
    {
        "code": "65.12.4",
        "name": "Assurance incendie et autres services d’assurance dommages"
    },
    {
        "code": "65.12.41",
        "name": "Assurance incendie"
    },
    {
        "code": "65.12.42",
        "name": "Autres services d’assurance dommages"
    },
    {
        "code": "65.12.49",
        "name": "Autres services d’assurance "
    },
    {
        "code": "65.12.5",
        "name": "Assurance responsabilité civile générale"
    },
    {
        "code": "65.12.50",
        "name": "Assurance responsabilité civile générale"
    },
    {
        "code": "65.12.6",
        "name": "Assurances crédit et caution"
    },
    {
        "code": "65.12.61",
        "name": "Assurance crédit"
    },
    {
        "code": "65.12.62",
        "name": "Assurance caution"
    },
    {
        "code": "65.12.7",
        "name": "Assurance voyages et assistance, assurance protection juridique et "
    },
    {
        "code": "65.12.71",
        "name": "Assurance voyages et assistance"
    },
    {
        "code": "65.12.72",
        "name": "Assurance protection juridique"
    },
    {
        "code": "65.12.73",
        "name": "Assurance contre les pertes ﬁnancières diverses"
    },
    {
        "code": "65.12.9",
        "name": "Autres services d’assurances non-vie"
    },
    {
        "code": "65.12.90",
        "name": "Autres services d’assurances non-vie"
    },
    {
        "code": "65.2",
        "name": "Réassurance"
    },
    {
        "code": "65.20",
        "name": "Réassurance"
    },
    {
        "code": "65.20.1",
        "name": "Réassurance vie, accidents et maladie"
    },
    {
        "code": "65.20.11",
        "name": "Réassurance vie"
    },
    {
        "code": "65.20.12",
        "name": "Réassurance accidents"
    },
    {
        "code": "65.20.13",
        "name": "Réassurance maladie"
    },
    {
        "code": "65.20.2",
        "name": "Réassurance transports et dommages"
    },
    {
        "code": "65.20.21",
        "name": "Réassurance automobile, responsabilité civile"
    },
    {
        "code": "65.20.22",
        "name": "Autres services de réassurance automobile"
    },
    {
        "code": "65.20.23",
        "name": "Réassurance maritime, aérienne et autres transports"
    },
    {
        "code": "65.20.24",
        "name": "Réassurance fret"
    },
    {
        "code": "65.20.25",
        "name": "Réassurance incendie et autres dommages"
    },
    {
        "code": "65.20.3",
        "name": "Réassurance responsabilité civile générale et crédit et caution"
    },
    {
        "code": "65.20.31",
        "name": "Réassurance responsabilité civile générale"
    },
    {
        "code": "65.20.32",
        "name": "Réassurance crédit et caution"
    },
    {
        "code": "65.20.4",
        "name": "Réassurance protection juridique et pertes ﬁnancières diverses"
    },
    {
        "code": "65.20.41",
        "name": "Réassurance protection juridique"
    },
    {
        "code": "65.20.42",
        "name": "Réassurance pertes ﬁnancières diverses"
    },
    {
        "code": "65.20.5",
        "name": "Réassurance en matière de ﬁnancement des retraites"
    },
    {
        "code": "65.20.50",
        "name": "Réassurance en matière de ﬁnancement des retraites"
    },
    {
        "code": "65.20.6",
        "name": "Autres services de réassurances non-vie"
    },
    {
        "code": "65.20.60",
        "name": "Autres services de réassurances non-vie"
    },
    {
        "code": "65.3",
        "name": "Caisses de retraite"
    },
    {
        "code": "65.30",
        "name": "Caisses de retraite"
    },
    {
        "code": "65.30.1",
        "name": "Caisses de retraite"
    },
    {
        "code": "65.30.11",
        "name": "Caisses de retraite à adhésion individuelle"
    },
    {
        "code": "65.30.12",
        "name": "Caisses de retraite à adhésion collective"
    },
    {
        "code": "66",
        "name": "Services  auxiliaires  aux  services  ﬁnanciers et  aux"
    },
    {
        "code": "66.1",
        "name": "Services auxiliaires aux services ﬁnanciers, hors assurances"
    },
    {
        "code": "66.11",
        "name": "Services liés à l’administration de marchés ﬁnanciers"
    },
    {
        "code": "66.11.1",
        "name": "Services liés à l’administration de marchés ﬁnanciers"
    },
    {
        "code": "66.11.11",
        "name": "Services opérationnels des marchés ﬁnanciers"
    },
    {
        "code": "66.11.12",
        "name": "Services réglementaires des marchés ﬁnanciers"
    },
    {
        "code": "66.11.19",
        "name": "Autres services liés à l’administration de marchés ﬁnanciers"
    },
    {
        "code": "66.12",
        "name": "Services de courtage de valeurs mobilières et de marchandises"
    },
    {
        "code": "66.12.1",
        "name": "Services de courtage de valeurs mobilières et de marchandises"
    },
    {
        "code": "66.12.11",
        "name": "Services de courtage de valeurs mobilières"
    },
    {
        "code": "66.12.12",
        "name": "Services de courtage de marchandises"
    },
    {
        "code": "66.12.13",
        "name": "Services de change de devises"
    },
    {
        "code": "66.19",
        "name": "Autres  services  auxiliaires  aux  services  ﬁnanciers, hors"
    },
    {
        "code": "66.19.1",
        "name": "Services de traitement et compensation des opérations sur valeurs "
    },
    {
        "code": "66.19.10",
        "name": "Services de traitement et compensation des opérations sur valeurs "
    },
    {
        "code": "66.19.2",
        "name": "Services auxiliaires liés aux banques d’investissement"
    },
    {
        "code": "66.19.21",
        "name": "Services de fusions et acquisitions"
    },
    {
        "code": "66.19.22",
        "name": "Services de ﬁnancement des entreprises et de capital-risque"
    },
    {
        "code": "66.19.29",
        "name": "Autres services auxiliaires liés aux banques d’investissement"
    },
    {
        "code": "66.19.3",
        "name": "Services de ﬁducie et de garde"
    },
    {
        "code": "66.19.31",
        "name": "Services de ﬁducie"
    },
    {
        "code": "66.19.32",
        "name": "Services de garde"
    },
    {
        "code": "66.19.9",
        "name": "Autres services auxiliaires aux services ﬁnanciers, hors assurances"
    },
    {
        "code": "66.19.91",
        "name": "Services de conseil ﬁnancier"
    },
    {
        "code": "66.19.92",
        "name": "Services de traitement et compensation de transactions ﬁnancières"
    },
    {
        "code": "66.19.99",
        "name": "Autres services auxiliaires aux services ﬁnanciersn.c.a.,àl’exclusion"
    },
    {
        "code": "66.2",
        "name": "Services auxiliaires des assurances et caisses de retraite"
    },
    {
        "code": "66.21",
        "name": "Services d’évaluation des risques et dommages"
    },
    {
        "code": "66.21.1",
        "name": "Services d’évaluation des risques et dommages"
    },
    {
        "code": "66.21.10",
        "name": "Services d’évaluation des risques et dommages"
    },
    {
        "code": "66.22",
        "name": "Services des agents et courtiers d’assurances"
    },
    {
        "code": "66.22.1",
        "name": "Services des agents et courtiers d’assurances"
    },
    {
        "code": "66.22.10",
        "name": "Services des agents et courtiers d’assurances"
    },
    {
        "code": "66.29",
        "name": "Autres services auxiliaires des assurances et caisses de retraite"
    },
    {
        "code": "66.29.1",
        "name": "Autres services auxiliaires des assurances et caisses de retraite"
    },
    {
        "code": "66.29.11",
        "name": "Services actuariels"
    },
    {
        "code": "66.29.19",
        "name": "Autres  services  auxiliaires  des  assurances  et  caisses  de  retraite "
    },
    {
        "code": "66.3",
        "name": "Services de gestion de fonds"
    },
    {
        "code": "66.30",
        "name": "Services de gestion de fonds"
    },
    {
        "code": "66.30.1",
        "name": "Services de gestion de fonds"
    },
    {
        "code": "66.30.11",
        "name": "Services  de  gestion  de  portefeuilles,  à  l’exclusion  des  fonds  de "
    },
    {
        "code": "66.30.12",
        "name": "Services de gestion des fonds de pension"
    },
    {
        "code": "68",
        "name": "Services immobiliers"
    },
    {
        "code": "68.1",
        "name": "Transactions sur biens immobiliers propres"
    },
    {
        "code": "68.10",
        "name": "Transactions sur biens immobiliers propres"
    },
    {
        "code": "68.10.1",
        "name": "Transactions sur biens immobiliers propres"
    },
    {
        "code": "68.10.11",
        "name": "Transactions sur bâtiments résidentiels et terrains associés"
    },
    {
        "code": "68.10.12",
        "name": "Transactions sur biens immobiliers en multipropriété"
    },
    {
        "code": "68.10.13",
        "name": "Transactions sur terrains à bâtir"
    },
    {
        "code": "68.10.14",
        "name": "Transactions  sur  constructions  non  résidentielles  et  terrains "
    },
    {
        "code": "68.10.15",
        "name": "Transactions sur terrains non constructibles"
    },
    {
        "code": "68.2",
        "name": "Services  de  location  et  exploitation  de  biens  immobiliers "
    },
    {
        "code": "68.21",
        "name": "Services  de  location  et  exploitation  de  logements  propres  ou "
    },
    {
        "code": "68.21.1",
        "name": "Services de location et exploitation de logements propres ou loués"
    },
    {
        "code": "68.21.10",
        "name": "Services de location et exploitation de logements propres ou loués"
    },
    {
        "code": "68.29",
        "name": "Services de location et exploitation d'autres biens immobiliers "
    },
    {
        "code": "68.29.1",
        "name": "Services  de  location  et  exploitation  d'autres  biens  immobiliers "
    },
    {
        "code": "68.29.11",
        "name": "Services de location et exploitation de terrains à bâtir (y compris "
    },
    {
        "code": "68.29.12",
        "name": "Services  de  location  et  exploitation  de  terrains  non  résidentiels "
    },
    {
        "code": "68.29.19",
        "name": "Services de location et exploitation d'autres biens immobiliers non "
    },
    {
        "code": "68.3",
        "name": "Services immobiliers pour compte de tiers"
    },
    {
        "code": "68.31",
        "name": "Services des agences immobilières"
    },
    {
        "code": "68.31.1",
        "name": "Services des agences immobilières"
    },
    {
        "code": "68.31.11",
        "name": "Transactions  sur  bâtiments  résidentiels  et  terrains  associés "
    },
    {
        "code": "68.31.12",
        "name": "Transactions sur biens immobiliers en multipropriété pour compte "
    },
    {
        "code": "68.31.13",
        "name": "Transactions sur terrains à bâtir pour compte de tiers"
    },
    {
        "code": "68.31.14",
        "name": "Transactions sur constructions non résidentielles et terrains associés "
    },
    {
        "code": "68.31.15",
        "name": "Transactions sur terrains non constructibles pour compte de tiers"
    },
    {
        "code": "68.31.16",
        "name": "Services d’expertise immobilière pour compte de tiers"
    },
    {
        "code": "68.32",
        "name": "Services d’administration de biens immobiliers pour compte de "
    },
    {
        "code": "68.32.1",
        "name": "Services  d’administration  de  biens  immobiliers  pour  compte  de "
    },
    {
        "code": "68.32.11",
        "name": "Services  d’administration  de  biens  immobiliers  résidentiels "
    },
    {
        "code": "68.32.12",
        "name": "Services  d’administration  de  biens  immobiliers  en  multipropriété "
    },
    {
        "code": "68.32.13",
        "name": "Services  d’administration  de  biens  immobiliers  non  résidentiels "
    },
    {
        "code": "69",
        "name": "Services juridiques et comptables"
    },
    {
        "code": "69.1",
        "name": "Services juridiques"
    },
    {
        "code": "69.10",
        "name": "Services juridiques"
    },
    {
        "code": "69.10.1",
        "name": "Services juridiques"
    },
    {
        "code": "69.10.11",
        "name": "Services de conseil et représentation juridique, en droit pénal"
    },
    {
        "code": "69.10.12",
        "name": "Services de conseil et représentation juridique, en droit des affaires "
    },
    {
        "code": "69.10.13",
        "name": "Services de conseil et représentation juridique, en droit du travail"
    },
    {
        "code": "69.10.14",
        "name": "Services de conseil et représentation juridique, en droit civil"
    },
    {
        "code": "69.10.15",
        "name": "Services juridiques en matière de brevets, droits d’auteurs et autres "
    },
    {
        "code": "69.10.16",
        "name": "Services notariaux"
    },
    {
        "code": "69.10.17",
        "name": "Services d’arbitrage et de conciliation"
    },
    {
        "code": "69.10.18",
        "name": "Services juridiques en matière de ventes aux enchères publiques"
    },
    {
        "code": "69.10.19",
        "name": "Autres services juridiques"
    },
    {
        "code": "69.2",
        "name": "Services comptables, de tenue de livres de comptes et d’audits; "
    },
    {
        "code": "69.20",
        "name": "Services comptables, de tenue de livres de comptes et d’audits; "
    },
    {
        "code": "69.20.1",
        "name": "Services d’audit ﬁnancier"
    },
    {
        "code": "69.20.10",
        "name": "Services d’audit ﬁnancier"
    },
    {
        "code": "69.20.2",
        "name": "Services comptables"
    },
    {
        "code": "69.20.21",
        "name": "Services de vériﬁcation comptable"
    },
    {
        "code": "69.20.22",
        "name": "Services d’établissement d’états ﬁnanciers"
    },
    {
        "code": "69.20.23",
        "name": "Services de tenue de livres de comptes"
    },
    {
        "code": "69.20.24",
        "name": "Services de livres de paie"
    },
    {
        "code": "69.20.29",
        "name": "Autres services comptables"
    },
    {
        "code": "69.20.3",
        "name": "Services de conseil ﬁscal"
    },
    {
        "code": "69.20.31",
        "name": "Services de conseil ﬁscal aux entreprises"
    },
    {
        "code": "69.20.32",
        "name": "Services de planiﬁcation ﬁscale aux particuliers"
    },
    {
        "code": "69.20.4",
        "name": "Services d’insolvabilité et de mise sous séquestre"
    },
    {
        "code": "69.20.40",
        "name": "Services d’insolvabilité et de mise sous séquestre"
    },
    {
        "code": "70",
        "name": "Services des sièges sociaux; services de conseil en gestion"
    },
    {
        "code": "70.1",
        "name": "Services des sièges sociaux"
    },
    {
        "code": "70.10",
        "name": "Services des sièges sociaux"
    },
    {
        "code": "70.10.1",
        "name": "Services des sièges sociaux"
    },
    {
        "code": "70.10.10",
        "name": "Services des sièges sociaux"
    },
    {
        "code": "70.2",
        "name": "Services de conseil en gestion"
    },
    {
        "code": "70.21",
        "name": "Services de relations publiques et communication"
    },
    {
        "code": "70.21.1",
        "name": "Services de relations publiques et communication"
    },
    {
        "code": "70.21.10",
        "name": "Services de relations publiques et communication"
    },
    {
        "code": "70.22",
        "name": "Services de conseil en matière d’affaires et de gestion"
    },
    {
        "code": "70.22.1",
        "name": "Services de conseil en gestion d’entreprises"
    },
    {
        "code": "70.22.11",
        "name": "Services de conseil en gestion stratégique"
    },
    {
        "code": "70.22.12",
        "name": "Services  de  conseil  en  gestion  ﬁnancière (à l’exclusion de la"
    },
    {
        "code": "70.22.13",
        "name": "Services de conseil en gestion commerciale"
    },
    {
        "code": "70.22.14",
        "name": "Services de conseil en gestion des ressources humaines"
    },
    {
        "code": "70.22.15",
        "name": "Services de conseil en gestion de la production"
    },
    {
        "code": "70.22.16",
        "name": "Services de conseil en gestion de la chaîne d’approvisionnement et "
    },
    {
        "code": "70.22.17",
        "name": "Services de conseil en gestion des processus de travail"
    },
    {
        "code": "70.22.2",
        "name": "Autres services de gestion de projets, à l’exclusion des projets de "
    },
    {
        "code": "70.22.20",
        "name": "Autres services de gestion de projets, à l’exclusion des projets de "
    },
    {
        "code": "70.22.3",
        "name": "Autres services de conseil aux entreprises"
    },
    {
        "code": "70.22.30",
        "name": "Autres services de conseil aux entreprises"
    },
    {
        "code": "70.22.4",
        "name": "Marques déposées et franchises"
    },
    {
        "code": "70.22.40",
        "name": "Marques déposées et franchises"
    },
    {
        "code": "71",
        "name": "Services d’architecture et d’ingénierie; services de contrôle "
    },
    {
        "code": "71.1",
        "name": "Services d’architecture et d’ingénierie et services de conseil "
    },
    {
        "code": "71.11",
        "name": "Services d’architecture"
    },
    {
        "code": "71.11.1",
        "name": "Plans et dessins architecturaux"
    },
    {
        "code": "71.11.10",
        "name": "Plans et dessins architecturaux"
    },
    {
        "code": "71.11.2",
        "name": "Services d’architecture pour bâtiments"
    },
    {
        "code": "71.11.21",
        "name": "Services  d’architecture  pour  projets  de  constructions "
    },
    {
        "code": "71.11.22",
        "name": "Services  d’architecture  pour  projets  de  constructions  non "
    },
    {
        "code": "71.11.23",
        "name": "Services d’architecture de rénovation de bâtiments historiques"
    },
    {
        "code": "71.11.24",
        "name": "Services de conseil en architecture"
    },
    {
        "code": "71.11.3",
        "name": "Services d’aménagement urbain et rural"
    },
    {
        "code": "71.11.31",
        "name": "Services d’aménagement urbain"
    },
    {
        "code": "71.11.32",
        "name": "Services d’aménagement rural"
    },
    {
        "code": "71.11.33",
        "name": "Services des plans directeurs de chantiers"
    },
    {
        "code": "71.11.4",
        "name": "Services  d’architecture  paysagère  et  services  de  conseil  en "
    },
    {
        "code": "71.11.41",
        "name": "Services d’architecture paysagère"
    },
    {
        "code": "71.11.42",
        "name": "Services de conseil en architecture paysagère"
    },
    {
        "code": "71.12",
        "name": "Services  d’ingénierie  et  services  de  conseil  technique "
    },
    {
        "code": "71.12.1",
        "name": "Services d’ingénierie"
    },
    {
        "code": "71.12.11",
        "name": "Services de conseil en ingénierie"
    },
    {
        "code": "71.12.12",
        "name": "Services d’ingénierie pour projets de constructions"
    },
    {
        "code": "71.12.13",
        "name": "Services d’ingénierie pour projets énergétiques"
    },
    {
        "code": "71.12.14",
        "name": "Services  d’ingénierie  pour  projets  d’infrastructures  de "
    },
    {
        "code": "71.12.15",
        "name": "Services d’ingénierie pour projets de gestion des déchets (dangereux "
    },
    {
        "code": "71.12.16",
        "name": "Services  d’ingénierie  pour  projets  d’alimentation  en  eau, "
    },
    {
        "code": "71.12.17",
        "name": "Services d’ingénierie pour projets industriels et manufacturiers"
    },
    {
        "code": "71.12.18",
        "name": "Services  d’ingénierie  pour  projets  de  télécommunications  et  de "
    },
    {
        "code": "71.12.19",
        "name": "Services d’ingénierie pour autres projets"
    },
    {
        "code": "71.12.2",
        "name": "Services de gestion de projet pour projets de constructions"
    },
    {
        "code": "71.12.20",
        "name": "Services de gestion de projet pour projets de constructions"
    },
    {
        "code": "71.12.3",
        "name": "Services  de  prospection  et  de  conseil  géologiques,  géophysiques "
    },
    {
        "code": "71.12.31",
        "name": "Services de conseil géologique et géophysique"
    },
    {
        "code": "71.12.32",
        "name": "Services géophysiques"
    },
    {
        "code": "71.12.33",
        "name": "Services d’exploration et d’évaluation minérales"
    },
    {
        "code": "71.12.34",
        "name": "Services de levés topographiques et de prospection de surface"
    },
    {
        "code": "71.12.35",
        "name": "Services de bornage de propriétés"
    },
    {
        "code": "71.12.36",
        "name": "Services d’établissement de cartes"
    },
    {
        "code": "71.2",
        "name": "Services de contrôle et analyses techniques"
    },
    {
        "code": "71.20",
        "name": "Services de contrôle et analyses techniques"
    },
    {
        "code": "71.20.1",
        "name": "Services de contrôle et analyses techniques"
    },
    {
        "code": "71.20.11",
        "name": "Contrôle et analyses de composition et de pureté"
    },
    {
        "code": "71.20.12",
        "name": "Contrôle et analyses de propriétés physiques"
    },
    {
        "code": "71.20.13",
        "name": "Contrôle et analyses de systèmes mécaniques et électriques intégrés"
    },
    {
        "code": "71.20.14",
        "name": "Services d’inspection technique des véhicules de transport routier"
    },
    {
        "code": "71.20.19",
        "name": "Autres contrôles et analyses techniques"
    },
    {
        "code": "72",
        "name": "Services de recherche et développement scientiﬁque"
    },
    {
        "code": "72.1",
        "name": "Recherche  et  développement  en  sciences  physiques  et "
    },
    {
        "code": "72.11",
        "name": "Recherche et développement en biotechnologie"
    },
    {
        "code": "72.11.1",
        "name": "Recherche  et  développement  en  biotechnologie  de  santé, "
    },
    {
        "code": "72.11.11",
        "name": "Recherche et développement en biotechnologie de santé"
    },
    {
        "code": "72.11.12",
        "name": "Recherche et développement en biotechnologie environnementale et "
    },
    {
        "code": "72.11.13",
        "name": "Recherche et développement en biotechnologie agricole"
    },
    {
        "code": "72.11.2",
        "name": "Projets  originaux  de  recherche  et  développement  en "
    },
    {
        "code": "72.11.20",
        "name": "Projets  originaux  de  recherche  et  développement  en "
    },
    {
        "code": "72.19",
        "name": "Recherche et développement en autres sciences physiques et naturelles"
    },
    {
        "code": "72.19.1",
        "name": "Recherche  et  développement  en  autres  sciences  physiques  et "
    },
    {
        "code": "72.19.11",
        "name": "Recherche et développement en mathématiques"
    },
    {
        "code": "72.19.12",
        "name": "Recherche  et  développement  en  informatique  et  sciences  de "
    },
    {
        "code": "72.19.13",
        "name": "Recherche et développement en sciences physiques"
    },
    {
        "code": "72.19.14",
        "name": "Recherche et développement en chimie"
    },
    {
        "code": "72.19.15",
        "name": "Recherche  et  développement  en  sciences  de  la  terre  et  sciences "
    },
    {
        "code": "72.19.16",
        "name": "Recherche et développement en sciences biologiques"
    },
    {
        "code": "72.19.19",
        "name": "Recherche et développement en autres sciences naturelles"
    },
    {
        "code": "72.19.2",
        "name": "Recherche  et  développement  en  ingénierie  et  technologie,  à "
    },
    {
        "code": "72.19.21",
        "name": "Recherche et développement en nanotechnologie"
    },
    {
        "code": "72.19.29",
        "name": "Autres  services  de  recherche  et  développement  en  ingénierie  et "
    },
    {
        "code": "72.19.3",
        "name": "Recherche et développement en sciences médicales"
    },
    {
        "code": "72.19.30",
        "name": "Recherche et développement en sciences médicales"
    },
    {
        "code": "72.19.4",
        "name": "Recherche et développement en agronomie"
    },
    {
        "code": "72.19.40",
        "name": "Recherche et développement en agronomie"
    },
    {
        "code": "72.19.5",
        "name": "Projets  originaux  de  recherche  et  développement  en  sciences "
    },
    {
        "code": "72.19.50",
        "name": "Projets  originaux  de  recherche  et  développement  en  sciences "
    },
    {
        "code": "72.2",
        "name": "Recherche  et  développement  en  sciences  humaines  et "
    },
    {
        "code": "72.20",
        "name": "Recherche et développement en sciences humaines et sociales"
    },
    {
        "code": "72.20.1",
        "name": "Recherche et développement en sciences sociales"
    },
    {
        "code": "72.20.11",
        "name": "Recherche et développement en économie et commerce"
    },
    {
        "code": "72.20.12",
        "name": "Recherche et développement en psychologie"
    },
    {
        "code": "72.20.13",
        "name": "Recherche et développement en droit"
    },
    {
        "code": "72.20.19",
        "name": "Recherche et développement en autres sciences sociales"
    },
    {
        "code": "72.20.2",
        "name": "Recherche et développement en sciences humaines"
    },
    {
        "code": "72.20.21",
        "name": "Recherche et développement en linguistique et littérature"
    },
    {
        "code": "72.20.29",
        "name": "Autres  services  de  recherche  et  développement  en  sciences "
    },
    {
        "code": "72.20.3",
        "name": "Projets  originaux  de  recherche  et  développement  en  sciences "
    },
    {
        "code": "72.20.30",
        "name": "Projets  originaux  de  recherche  et  développement  en  sciences "
    },
    {
        "code": "73",
        "name": "Services de publicité et d’études de marché"
    },
    {
        "code": "73.1",
        "name": "Publicité"
    },
    {
        "code": "73.11",
        "name": "Services fournis par les agences publicitaires"
    },
    {
        "code": "73.11.1",
        "name": "Services fournis par les agences publicitaires"
    },
    {
        "code": "73.11.11",
        "name": "Conception et réalisation de services publicitaires"
    },
    {
        "code": "73.11.12",
        "name": "Marketing et mailing directs"
    },
    {
        "code": "73.11.13",
        "name": "Développement de design et concepts publicitaires"
    },
    {
        "code": "73.11.19",
        "name": "Autres services publicitaires"
    },
    {
        "code": "73.12",
        "name": "Régie publicitaire de médias"
    },
    {
        "code": "73.12.1",
        "name": "Vente d’espaces publicitaires pour compte de tiers"
    },
    {
        "code": "73.12.11",
        "name": "Vente d’espaces publicitaires pour compte de tiers dans les médias "
    },
    {
        "code": "73.12.12",
        "name": "Vente d’espaces publicitaires pour compte de tiers à la télévision et "
    },
    {
        "code": "73.12.13",
        "name": "Vente d’espaces publicitaires pour compte de tiers sur l’internet"
    },
    {
        "code": "73.12.14",
        "name": "Vente de publicité liée à un événement"
    },
    {
        "code": "73.12.19",
        "name": "Autres ventes d’espaces publicitaires pour compte de tiers"
    },
    {
        "code": "73.12.2",
        "name": "Revente d’espaces publicitaires pour compte de tiers"
    },
    {
        "code": "73.12.20",
        "name": "Revente d’espaces publicitaires pour compte de tiers"
    },
    {
        "code": "73.2",
        "name": "Services d’études de marché et de sondages"
    },
    {
        "code": "73.20",
        "name": "Services d’études de marché et de sondages"
    },
    {
        "code": "73.20.1",
        "name": "Études de marché et services similaires"
    },
    {
        "code": "73.20.11",
        "name": "Études de marché: enquêtes qualitatives"
    },
    {
        "code": "73.20.12",
        "name": "Études de marché: enquêtes quantitatives ad hoc"
    },
    {
        "code": "73.20.13",
        "name": "Études de marché: enquêtes quantitatives continues et régulières"
    },
    {
        "code": "73.20.14",
        "name": "Études de marché, à l’exclusion des enquêtes"
    },
    {
        "code": "73.20.19",
        "name": "Autres services d’études de marché"
    },
    {
        "code": "73.20.2",
        "name": "Services de sondages d’opinion"
    },
    {
        "code": "73.20.20",
        "name": "Services de sondages d’opinion"
    },
    {
        "code": "74",
        "name": "Autres    services    spécialisés,   scientifiques    et "
    },
    {
        "code": "74.1",
        "name": "Services de design spécialisés"
    },
    {
        "code": "74.10",
        "name": "Services de design spécialisés"
    },
    {
        "code": "74.10.1",
        "name": "Services  de  design  de  décoration  d’intérieur  et  de  produits "
    },
    {
        "code": "74.10.11",
        "name": "Services de design de décoration d’intérieur"
    },
    {
        "code": "74.10.12",
        "name": "Services de design de produits industriels"
    },
    {
        "code": "74.10.19",
        "name": "Autres services de design spécialisés"
    },
    {
        "code": "74.10.2",
        "name": "Designs originaux"
    },
    {
        "code": "74.10.20",
        "name": "Designs originaux"
    },
    {
        "code": "74.2",
        "name": "Services photographiques"
    },
    {
        "code": "74.20",
        "name": "Services photographiques"
    },
    {
        "code": "74.20.1",
        "name": "Plaques et ﬁlms photographiques, autres que cinématographiques,"
    },
    {
        "code": "74.20.11",
        "name": "Plaques et ﬁlms photographiques, exposés, mais non développés"
    },
    {
        "code": "74.20.12",
        "name": "Plaques  et  ﬁlms photographiques, exposés et développés, pour"
    },
    {
        "code": "74.20.19",
        "name": "Autres plaques et ﬁlms photographiques exposés et développés"
    },
    {
        "code": "74.20.2",
        "name": "Services de photographie spécialisés"
    },
    {
        "code": "74.20.21",
        "name": "Services des studios photographiques"
    },
    {
        "code": "74.20.22",
        "name": "Services photographiques publicitaires et connexes"
    },
    {
        "code": "74.20.23",
        "name": "Services de photographie et de vidéo pour cérémonies"
    },
    {
        "code": "74.20.24",
        "name": "Services de photographie aérienne"
    },
    {
        "code": "74.20.29",
        "name": "Autres services de photographie spécialisés"
    },
    {
        "code": "74.20.3",
        "name": "Autres services photographiques"
    },
    {
        "code": "74.20.31",
        "name": "Services de développement et de tirage photographique"
    },
    {
        "code": "74.20.32",
        "name": "Services de restauration et retouche de photographies"
    },
    {
        "code": "74.20.39",
        "name": "Autres services photographiques n.c.a."
    },
    {
        "code": "74.3",
        "name": "Services de traduction et interprétation"
    },
    {
        "code": "74.30",
        "name": "Services de traduction et interprétation"
    },
    {
        "code": "74.30.1",
        "name": "Services de traduction et interprétation"
    },
    {
        "code": "74.30.11",
        "name": "Services de traduction"
    },
    {
        "code": "74.30.12",
        "name": "Services d’interprétation"
    },
    {
        "code": "74.9",
        "name": "Autres services spécialisés, scientiﬁques et techniques n.c.a."
    },
    {
        "code": "74.90",
        "name": "Autres services spécialisés, scientiﬁques et techniques n.c.a."
    },
    {
        "code": "74.90.1",
        "name": "Services spécialisés et techniques d’assistance et de conseil n.c.a."
    },
    {
        "code": "74.90.11",
        "name": "Services de vériﬁcation de factures et d’information sur les tarifs"
    },
    {
        "code": "74.90.12",
        "name": "Services de courtage et d’expertise autres que pour l’immobilier et "
    },
    {
        "code": "74.90.13",
        "name": "Services de conseil en environnement"
    },
    {
        "code": "74.90.14",
        "name": "Services de prévisions météorologiques"
    },
    {
        "code": "74.90.15",
        "name": "Services de conseil en sécurité"
    },
    {
        "code": "74.90.19",
        "name": "Autres services scientiﬁques et techniques de conseil n.c.a."
    },
    {
        "code": "74.90.2",
        "name": "Autres services spécialisés, techniques et commerciaux n.c.a."
    },
    {
        "code": "74.90.20",
        "name": "Autres services spécialisés, techniques et commerciaux n.c.a."
    },
    {
        "code": "75",
        "name": "Services vétérinaires"
    },
    {
        "code": "75.0",
        "name": "Services vétérinaires"
    },
    {
        "code": "75.00",
        "name": "Services vétérinaires"
    },
    {
        "code": "75.00.1",
        "name": "Services vétérinaires"
    },
    {
        "code": "75.00.11",
        "name": "Services vétérinaires pour animaux de compagnie"
    },
    {
        "code": "75.00.12",
        "name": "Services vétérinaires pour animaux d’élevage"
    },
    {
        "code": "75.00.19",
        "name": "Autres services vétérinaires"
    },
    {
        "code": "77",
        "name": "Location et location-bail"
    },
    {
        "code": "77.1",
        "name": "Location et location-bail de véhicules automobiles"
    },
    {
        "code": "77.11",
        "name": "Location  et  location-bail  de  voitures  et  véhicules  automobiles "
    },
    {
        "code": "77.11.1",
        "name": "Location  et  location-bail  de  voitures  et  véhicules  automobiles "
    },
    {
        "code": "77.11.10",
        "name": "Location  et  location-bail  de  voitures  et  véhicules  automobiles "
    },
    {
        "code": "77.12",
        "name": "Location et location-bail de camions"
    },
    {
        "code": "77.12.1",
        "name": "Location et location-bail de camions"
    },
    {
        "code": "77.12.11",
        "name": "Location  et  location-bail  de  véhicules  pour  transport  de "
    },
    {
        "code": "77.12.19",
        "name": "Location et location-bail d’autres matériels de transport terrestre, "
    },
    {
        "code": "77.2",
        "name": "Location  et  location-bail  de  biens  personnels  et "
    },
    {
        "code": "77.21",
        "name": "Location  et  location-bail  d’articles  de  loisirs  et  de "
    },
    {
        "code": "77.21.1",
        "name": "Location et location-bail d’articles de loisirs et de sport"
    },
    {
        "code": "77.21.10",
        "name": "Location et location-bail d’articles de loisirs et de sport"
    },
    {
        "code": "77.22",
        "name": "Location de vidéocassettes et DVD"
    },
    {
        "code": "77.22.1",
        "name": "Location de vidéocassettes et DVD"
    },
    {
        "code": "77.22.10",
        "name": "Location de vidéocassettes et DVD"
    },
    {
        "code": "77.29",
        "name": "Location  et  location-bail  d’autres  biens  personnels  et "
    },
    {
        "code": "77.29.1",
        "name": "Location  et  location-bail  d’autres  biens  personnels  et "
    },
    {
        "code": "77.29.11",
        "name": "Location et location-bail de téléviseurs, radios, magnétoscopes et "
    },
    {
        "code": "77.29.12",
        "name": "Location  et  location-bail  de  mobilier  et  autres  équipements "
    },
    {
        "code": "77.29.13",
        "name": "Location et location-bail d’instruments de musique"
    },
    {
        "code": "77.29.14",
        "name": "Location et location-bail de linge de maison"
    },
    {
        "code": "77.29.15",
        "name": "Location et location-bail de textiles, vêtements et chaussures"
    },
    {
        "code": "77.29.16",
        "name": "Location  et  location-bail  de  machines  et  équipements  de "
    },
    {
        "code": "77.29.19",
        "name": "Location et location-bail d’autres biens personnels et domestiques "
    },
    {
        "code": "77.3",
        "name": "Location et location-bail d’autres machines, équipements et "
    },
    {
        "code": "77.31",
        "name": "Location et location-bail de matériel agricole"
    },
    {
        "code": "77.31.1",
        "name": "Location et location-bail de matériel agricole"
    },
    {
        "code": "77.31.10",
        "name": "Location et location-bail de matériel agricole"
    },
    {
        "code": "77.32",
        "name": "Location  et  location-bail  de  machines  et  équipements  pour  la "
    },
    {
        "code": "77.32.1",
        "name": "Location  et  location-bail  de  machines  et  équipements  pour  la "
    },
    {
        "code": "77.32.10",
        "name": "Location  et  location-bail  de  machines  et  équipements  pour  la "
    },
    {
        "code": "77.33",
        "name": "Location et location-bail de machines de bureau et de matériel "
    },
    {
        "code": "77.33.1",
        "name": "Location  et  location-bail  de  machines  de  bureau  et  de  matériel "
    },
    {
        "code": "77.33.11",
        "name": "Location et location-bail de machines de bureau (à l’exclusion de "
    },
    {
        "code": "77.33.12",
        "name": "Location et location-bail de matériel informatique"
    },
    {
        "code": "77.34",
        "name": "Location et location-bail de matériels de transport par "
    },
    {
        "code": "77.34.1",
        "name": "Location et location-bail de matériels de transport par eau"
    },
    {
        "code": "77.34.10",
        "name": "Location et location-bail de matériels de transport par eau"
    },
    {
        "code": "77.35",
        "name": "Location et location-bail de matériels de transport aérien"
    },
    {
        "code": "77.35.1",
        "name": "Location et location-bail de matériels de transport aérien"
    },
    {
        "code": "77.35.10",
        "name": "Location et location-bail de matériels de transport aérien"
    },
    {
        "code": "77.39",
        "name": "Location  et  location-bail  d’autres  machines,  équipements  et "
    },
    {
        "code": "77.39.1",
        "name": "Location et location-bail d’autres machines, équipements et biens "
    },
    {
        "code": "77.39.11",
        "name": "Location et location-bail de matériel ferroviaire roulant"
    },
    {
        "code": "77.39.12",
        "name": "Location et location-bail de conteneurs"
    },
    {
        "code": "77.39.13",
        "name": "Location  et  location-bail  de  motocycles,  caravanes  et "
    },
    {
        "code": "77.39.14",
        "name": "Location et location-bail d’équipements de télécommunications"
    },
    {
        "code": "77.39.19",
        "name": "Location et location-bail d’autres machines, équipements et biens "
    },
    {
        "code": "77.4",
        "name": "Services  de  licence  pour  l’utilisation  de  produits  de  la "
    },
    {
        "code": "77.40",
        "name": "Services de licence pour l’utilisation de produits de la propriété "
    },
    {
        "code": "77.40.1",
        "name": "Services de licence pour l’utilisation de produits de la propriété "
    },
    {
        "code": "77.40.11",
        "name": "Services de licence pour l’utilisation de produits de la recherche et "
    },
    {
        "code": "77.40.12",
        "name": "Services  de  licence  pour  l’utilisation  de  marques  déposées  et "
    },
    {
        "code": "77.40.13",
        "name": "Services de licence pour l’utilisation de services d’exploration et "
    },
    {
        "code": "77.40.19",
        "name": "Services de licence pour l’utilisation d’autres produits de la propriété "
    },
    {
        "code": "78",
        "name": "Services liés à l’emploi"
    },
    {
        "code": "78.1",
        "name": "Services des agences de placement de main-d’œuvre"
    },
    {
        "code": "78.10",
        "name": "Services des agences de placement de main-d’œuvre"
    },
    {
        "code": "78.10.1",
        "name": "Services des agences de placement de main-d’œuvre"
    },
    {
        "code": "78.10.11",
        "name": "Services de recrutement de cadres"
    },
    {
        "code": "78.10.12",
        "name": "Services de placement permanent, à l’exclusion du recrutement de "
    },
    {
        "code": "78.2",
        "name": "Services des agences de travail temporaire"
    },
    {
        "code": "78.20",
        "name": "Services des agences de travail temporaire"
    },
    {
        "code": "78.20.1",
        "name": "Services des agences de travail temporaire"
    },
    {
        "code": "78.20.11",
        "name": "Services  des  agences  de  travail  temporaire  pour  la  mise  à "
    },
    {
        "code": "78.20.12",
        "name": "Services des agences de travail temporaire pour la mise à disposition "
    },
    {
        "code": "78.20.13",
        "name": "Services des agences de travail temporaire pour la mise à disposition "
    },
    {
        "code": "78.20.14",
        "name": "Services des agences de travail temporaire pour la mise à disposition "
    },
    {
        "code": "78.20.15",
        "name": "Services des agences de travail temporaire pour la mise à disposition "
    },
    {
        "code": "78.20.16",
        "name": "Services des agences de travail temporaire pour la mise à disposition "
    },
    {
        "code": "78.20.19",
        "name": "Services des agences de travail temporaire pour la mise à disposition "
    },
    {
        "code": "78.3",
        "name": "Autres  services  de  mise  à  disposition  de  ressources "
    },
    {
        "code": "78.30",
        "name": "Autres  services  de  mise  à  disposition  de  ressources "
    },
    {
        "code": "78.30.1",
        "name": "Autres  services  de  mise  à  disposition  de  ressources "
    },
    {
        "code": "78.30.11",
        "name": "Autres services de mise à disposition de personnel dans le domaine "
    },
    {
        "code": "78.30.12",
        "name": "Autres  services  de  mise  à  disposition  d’autres  personnels  de "
    },
    {
        "code": "78.30.13",
        "name": "Autres services de mise à disposition de personnel dans le domaine "
    },
    {
        "code": "78.30.14",
        "name": "Autres services de mise à disposition de ressources humaines dans "
    },
    {
        "code": "78.30.15",
        "name": "Autres services de mise à disposition de personnel dans le domaine "
    },
    {
        "code": "78.30.16",
        "name": "Autres services de mise à disposition de personnel médical"
    },
    {
        "code": "78.30.19",
        "name": "Autres services de mise à disposition de personnel n.c.a."
    },
    {
        "code": "79",
        "name": "Services des agences de voyage, des voyagistes et autres "
    },
    {
        "code": "79.1",
        "name": "Services des agences de voyage et voyagistes"
    },
    {
        "code": "79.11",
        "name": "Services des agences de voyage"
    },
    {
        "code": "79.11.1",
        "name": "Services  des  agences  de  voyage  pour  la  réservation  de "
    },
    {
        "code": "79.11.11",
        "name": "Services de réservation pour les transports aériens"
    },
    {
        "code": "79.11.12",
        "name": "Services de réservation pour les transports ferroviaires"
    },
    {
        "code": "79.11.13",
        "name": "Services de réservation pour les transports en autocars"
    },
    {
        "code": "79.11.14",
        "name": "Services de réservation pour la location de véhicules"
    },
    {
        "code": "79.11.19",
        "name": "Autres  services  des  agences  de  voyage  pour  la  réservation  de "
    },
    {
        "code": "79.11.2",
        "name": "Services  des  agences  de  voyage  pour  la  réservation  de "
    },
    {
        "code": "79.11.21",
        "name": "Services de réservation pour l’hébergement"
    },
    {
        "code": "79.11.22",
        "name": "Services de réservation pour les croisières"
    },
    {
        "code": "79.11.23",
        "name": "Services de réservation pour les voyages à forfait"
    },
    {
        "code": "79.12",
        "name": "Services des voyagistes"
    },
    {
        "code": "79.12.1",
        "name": "Services des voyagistes"
    },
    {
        "code": "79.12.11",
        "name": "Services des voyagistes pour l’élaboration de voyages"
    },
    {
        "code": "79.12.12",
        "name": "Services des accompagnateurs de voyage"
    },
    {
        "code": "79.9",
        "name": "Autres services de réservation et services connexes"
    },
    {
        "code": "79.90",
        "name": "Autres services de réservation et services connexes"
    },
    {
        "code": "79.90.1",
        "name": "Services de promotion touristique et d’information des visiteurs"
    },
    {
        "code": "79.90.11",
        "name": "Services de promotion touristique"
    },
    {
        "code": "79.90.12",
        "name": "Services d’information des visiteurs"
    },
    {
        "code": "79.90.2",
        "name": "Services des guides touristiques"
    },
    {
        "code": "79.90.20",
        "name": "Services des guides touristiques"
    },
    {
        "code": "79.90.3",
        "name": "Autres services de réservation n.c.a."
    },
    {
        "code": "79.90.31",
        "name": "Services  d’échange  de  périodes  dans  des  immeubles  en "
    },
    {
        "code": "79.90.32",
        "name": "Services  de  réservation  pour  des  centres  de  conférences  et  de "
    },
    {
        "code": "79.90.39",
        "name": "Services  de  réservation  de  billets,  de  spectacles  et  de  services "
    },
    {
        "code": "80",
        "name": "Services de sécurité et d’enquête"
    },
    {
        "code": "80.1",
        "name": "Services de sécurité privée"
    },
    {
        "code": "80.10",
        "name": "Services de sécurité privée"
    },
    {
        "code": "80.10.1",
        "name": "Services de sécurité privée"
    },
    {
        "code": "80.10.11",
        "name": "Services de transport de fonds"
    },
    {
        "code": "80.10.12",
        "name": "Services de gardiennage"
    },
    {
        "code": "80.10.19",
        "name": "Autres services de sécurité"
    },
    {
        "code": "80.2",
        "name": "Services de systèmes de sécurité"
    },
    {
        "code": "80.20",
        "name": "Services de systèmes de sécurité"
    },
    {
        "code": "80.20.1",
        "name": "Services de systèmes de sécurité"
    },
    {
        "code": "80.20.10",
        "name": "Services de systèmes de sécurité"
    },
    {
        "code": "80.3",
        "name": "Services d’enquête"
    },
    {
        "code": "80.30",
        "name": "Services d’enquête"
    },
    {
        "code": "80.30.1",
        "name": "Services d’enquête"
    },
    {
        "code": "80.30.10",
        "name": "Services d’enquête"
    },
    {
        "code": "81",
        "name": "Services  relatifs  aux  bâtiments  et  aménagement "
    },
    {
        "code": "81.1",
        "name": "Services d’appui combinés liés aux bâtiments"
    },
    {
        "code": "81.10",
        "name": "Services d’appui combinés liés aux bâtiments"
    },
    {
        "code": "81.10.1",
        "name": "Services d’appui combinés liés aux bâtiments"
    },
    {
        "code": "81.10.10",
        "name": "Services d’appui combinés liés aux bâtiments"
    },
    {
        "code": "81.2",
        "name": "Services de nettoyage"
    },
    {
        "code": "81.21",
        "name": "Services de nettoyage courant des bâtiments"
    },
    {
        "code": "81.21.1",
        "name": "Services de nettoyage courant des bâtiments"
    },
    {
        "code": "81.21.10",
        "name": "Services de nettoyage courant des bâtiments"
    },
    {
        "code": "81.22",
        "name": "Autres  services  de  nettoyage  des  bâtiments  et  de  nettoyage "
    },
    {
        "code": "81.22.1",
        "name": "Service de nettoyage industriel"
    },
    {
        "code": "81.22.11",
        "name": "Services de nettoyage de vitres"
    },
    {
        "code": "81.22.12",
        "name": "Services de nettoyage spécialisé"
    },
    {
        "code": "81.22.13",
        "name": "Services de ramonage"
    },
    {
        "code": "81.29",
        "name": "Autres services de nettoyage"
    },
    {
        "code": "81.29.1",
        "name": "Autres services de nettoyage"
    },
    {
        "code": "81.29.11",
        "name": "Services de désinfection, dératisation et désinsectisation"
    },
    {
        "code": "81.29.12",
        "name": "Services de balayage et de déneigement"
    },
    {
        "code": "81.29.13",
        "name": "Autres services d’hygiène"
    },
    {
        "code": "81.29.19",
        "name": "Autres services de nettoyage n.c.a."
    },
    {
        "code": "81.3",
        "name": "Services d’aménagement paysager"
    },
    {
        "code": "81.30",
        "name": "Services d’aménagement paysager"
    },
    {
        "code": "81.30.1",
        "name": "Services d’aménagement paysager"
    },
    {
        "code": "81.30.10",
        "name": "Services d’aménagement paysager"
    },
    {
        "code": "82",
        "name": "Services administratifs  et  autres  services de  soutien  aux "
    },
    {
        "code": "82.1",
        "name": "Services administratifs et services de soutien"
    },
    {
        "code": "82.11",
        "name": "Services administratifs combinés"
    },
    {
        "code": "82.11.1",
        "name": "Services administratifs combinés"
    },
    {
        "code": "82.11.10",
        "name": "Services administratifs combinés"
    },
    {
        "code": "82.19",
        "name": "Photocopie,  préparation  de  documents  et  autres  services "
    },
    {
        "code": "82.19.1",
        "name": "Photocopie, préparation de documents et autres services spécialisés "
    },
    {
        "code": "82.19.11",
        "name": "Services de duplication"
    },
    {
        "code": "82.19.12",
        "name": "Établissement  de  ﬁchiers d’adresses et services d’expédition de"
    },
    {
        "code": "82.19.13",
        "name": "Préparation de documents et autres services spécialisés de soutien "
    },
    {
        "code": "82.2",
        "name": "Services des centres d’appels"
    },
    {
        "code": "82.20",
        "name": "Services des centres d’appels"
    },
    {
        "code": "82.20.1",
        "name": "Services des centres d’appels"
    },
    {
        "code": "82.20.10",
        "name": "Services des centres d’appels"
    },
    {
        "code": "82.3",
        "name": "Services d’organisation de salons professionnels et congrès"
    },
    {
        "code": "82.30",
        "name": "Services d’organisation de salons professionnels et congrès"
    },
    {
        "code": "82.30.1",
        "name": "Services d’organisation de salons professionnels et congrès"
    },
    {
        "code": "82.30.11",
        "name": "Services d’organisation de congrès"
    },
    {
        "code": "82.30.12",
        "name": "Services d’organisation de salons professionnels"
    },
    {
        "code": "82.9",
        "name": "Services de soutien aux entreprises n.c.a."
    },
    {
        "code": "82.91",
        "name": "Services  des  agences  de  recouvrement  et  des  sociétés "
    },
    {
        "code": "82.91.1",
        "name": "Services des agences de recouvrement et des sociétés d’information "
    },
    {
        "code": "82.91.11",
        "name": "Services d’informations ﬁnancières sur la clientèle"
    },
    {
        "code": "82.91.12",
        "name": "Services des agences de recouvrement"
    },
    {
        "code": "82.92",
        "name": "Services de conditionnement"
    },
    {
        "code": "82.92.1",
        "name": "Services de conditionnement"
    },
    {
        "code": "82.92.11",
        "name": "Services de conditionnement de produits alimentaires"
    },
    {
        "code": "82.92.19",
        "name": "Services de conditionnement d'autres produits"
    },
    {
        "code": "82.99",
        "name": "Autres services de soutien aux entreprises n.c.a."
    },
    {
        "code": "82.99.1",
        "name": "Autres services de soutien aux entreprises n.c.a."
    },
    {
        "code": "82.99.11",
        "name": "Services de compte rendu sténographique"
    },
    {
        "code": "82.99.12",
        "name": "Services de soutien basés sur le téléphone"
    },
    {
        "code": "82.99.19",
        "name": "Autres services divers de soutien aux entreprises n.c.a."
    },
    {
        "code": "84",
        "name": "Services d’administration publique et de défense; services "
    },
    {
        "code": "84.0",
        "name": "Services d'administration générale, économique et sociale"
    },
    {
        "code": "84.00",
        "name": "Services d’administration publique générale"
    },
    {
        "code": "84.00.1",
        "name": "Services publics généraux"
    },
    {
        "code": "84.00.11",
        "name": "Services exécutifs et législatifs"
    },
    {
        "code": "84.00.12",
        "name": "Services budgétaires et ﬁscaux"
    },
    {
        "code": "84.00.13",
        "name": "Services de planiﬁcation économique et sociale et statistiques"
    },
    {
        "code": "84.00.14",
        "name": "Services d’assistance à la recherche fondamentale"
    },
    {
        "code": "84.00.19",
        "name": "Autres services publics généraux"
    },
    {
        "code": "84.00.2",
        "name": "Services de soutien aux administrations"
    },
    {
        "code": "84.00.21",
        "name": "Services généraux du personnel des administrations"
    },
    {
        "code": "84.00.29",
        "name": "Autres services de soutien aux administrations"
    },
    {
        "code": "84.13",
        "name": "Services  d’administration  publique  (tutelle)  de  la  santé,  de "
    },
    {
        "code": "84.13.1",
        "name": "Services  d’administration  publique  (tutelle)  de  la  santé,  de  la "
    },
    {
        "code": "84.13.11",
        "name": "Tutelle des services de la formation"
    },
    {
        "code": "84.13.12",
        "name": "Tutelle des services de la santé"
    },
    {
        "code": "84.13.13",
        "name": "Tutelle des services de logement et d’urbanisme"
    },
    {
        "code": "84.13.14",
        "name": "Tutelle des services récréatifs, culturels et religieux"
    },
    {
        "code": "84.14",
        "name": "Services  d’administration  publique  (tutelle)  des  activités "
    },
    {
        "code": "84.14.1",
        "name": "Services  d’administration  publique  (tutelle)  des  activités "
    },
    {
        "code": "84.14.11",
        "name": "Tutelle des affaires liées à l’agriculture, la sylviculture, la pêche et "
    },
    {
        "code": "84.14.12",
        "name": "Tutelle des affaires énergétiques"
    },
    {
        "code": "84.14.13",
        "name": "Tutelle  des  affaires  liées  aux  industries  extractives  et  aux "
    },
    {
        "code": "84.14.14",
        "name": "Tutelle des affaires de transport et de communications"
    },
    {
        "code": "84.14.15",
        "name": "Tutelle des affaires de commerce, d’hôtellerie et de restauration"
    },
    {
        "code": "84.14.16",
        "name": "Tutelle des affaires touristiques"
    },
    {
        "code": "84.14.17",
        "name": "Services  d’administration  publique  de  projets  de  développement "
    },
    {
        "code": "84.14.18",
        "name": "Tutelle des affaires économiques, commerciales et de l’emploi"
    },
    {
        "code": "84.2",
        "name": "Services de prérogative publique"
    },
    {
        "code": "84.21",
        "name": "Services des affaires étrangères"
    },
    {
        "code": "84.21.1",
        "name": "Services des affaires étrangères"
    },
    {
        "code": "84.21.11",
        "name": "Services  d’administration  des  affaires  étrangères  et  services "
    },
    {
        "code": "84.21.12",
        "name": "Services d’aide économique fournie à l’étranger"
    },
    {
        "code": "84.21.13",
        "name": "Services d’aide militaire fournie à l’étranger"
    },
    {
        "code": "84.22",
        "name": "Services de la défense"
    },
    {
        "code": "84.22.1",
        "name": "Services de la défense"
    },
    {
        "code": "84.22.11",
        "name": "Services des forces armées"
    },
    {
        "code": "84.22.12",
        "name": "Services de défense civile"
    },
    {
        "code": "84.23",
        "name": "Services de la justice"
    },
    {
        "code": "84.23.1",
        "name": "Services de la justice"
    },
    {
        "code": "84.23.11",
        "name": "Services d’administration de la justice"
    },
    {
        "code": "84.23.12",
        "name": "Services d’administration pénitentiaire"
    },
    {
        "code": "84.24",
        "name": "Services de maintien de l’ordre et de sécurité"
    },
    {
        "code": "84.24.1",
        "name": "Services de maintien de l’ordre et de sécurité"
    },
    {
        "code": "84.24.11",
        "name": "Services de police"
    },
    {
        "code": "84.24.19",
        "name": "Autres services de maintien de l’ordre et de sécurité"
    },
    {
        "code": "84.25",
        "name": "Services de protection civile"
    },
    {
        "code": "84.25.1",
        "name": "Services de protection civile"
    },
    {
        "code": "84.25.11",
        "name": "Services de lutte contre l’incendie et de prévention des incendies"
    },
    {
        "code": "84.25.19",
        "name": "Autres services de protection civile"
    },
    {
        "code": "84.3",
        "name": "Services de sécurité sociale obligatoire"
    },
    {
        "code": "84.30",
        "name": "Services de sécurité sociale obligatoire"
    },
    {
        "code": "84.30.1",
        "name": "Services de sécurité sociale obligatoire"
    },
    {
        "code": "84.30.11",
        "name": "Services de sécurité sociale obligatoire concernant les prestations "
    },
    {
        "code": "84.30.12",
        "name": "Services  de  sécurité  sociale  obligatoire  concernant  les  régimes "
    },
    {
        "code": "84.30.13",
        "name": "Services de sécurité sociale obligatoire concernant les prestations "
    },
    {
        "code": "84.30.14",
        "name": "Services de sécurité sociale obligatoire concernant les prestations "
    },
    {
        "code": "85",
        "name": "Services de l’enseignement"
    },
    {
        "code": "85.1",
        "name": "Enseignement préprimaire"
    },
    {
        "code": "85.10",
        "name": "Enseignement préprimaire"
    },
    {
        "code": "85.10.1",
        "name": "Enseignement préprimaire"
    },
    {
        "code": "85.10.10",
        "name": "Enseignement préprimaire (y.c. Kottab)"
    },
    {
        "code": "85.2",
        "name": "Enseignement de base 1er cycle (enseignement primaire)"
    },
    {
        "code": "85.20",
        "name": "Enseignement de base 1er cycle (enseignement primaire)"
    },
    {
        "code": "85.20.1",
        "name": "Enseignement de base 1er cycle (enseignement primaire)"
    },
    {
        "code": "85.20.11",
        "name": "Enseignement de base 1er cycle (enseignement primaire) classique"
    },
    {
        "code": "85.20.12",
        "name": "Enseignement  de  base  1er  cycle  (enseignement  primaire)  en "
    },
    {
        "code": "85.3",
        "name": "Enseignement secondaire"
    },
    {
        "code": "85.31",
        "name": "Enseignement de base 2ème cycle (collège) "
    },
    {
        "code": "85.31.1",
        "name": "Enseignement général de base 2ème cycle (collège)"
    },
    {
        "code": "85.31.11",
        "name": "Enseignement général de base 2ème cycle (collège)"
    },
    {
        "code": "85.31.12",
        "name": "Enseignement technique de base 2ème cycle (collège)"
    },
    {
        "code": "85.31.13",
        "name": "Enseignement général de base 2ème cycle (collège) en ligne"
    },
    {
        "code": "85.31.14",
        "name": "Formations professionnelles"
    },
    {
        "code": "85.32",
        "name": "Enseignement secondaire 2ème cycle (lycée)"
    },
    {
        "code": "85.32.1",
        "name": "Enseignement secondaire 2ème cycle (lycée)"
    },
    {
        "code": "85.32.11",
        "name": "Enseignement général secondaire (lycée) classique"
    },
    {
        "code": "85.32.12",
        "name": "Enseignement général secondaire  (lycée) en ligne"
    },
    {
        "code": "85.33",
        "name": "Enseignement secondaire technique ou professionnel"
    },
    {
        "code": "85.33.1",
        "name": "Enseignement secondaire technique ou professionnel"
    },
    {
        "code": "85.33.11",
        "name": "Enseignement secondaire technique ou professionnel classique"
    },
    {
        "code": "85.33.12",
        "name": "Enseignement secondaire technique ou professionnel en ligne"
    },
    {
        "code": "85.4",
        "name": "Enseignement supérieur et post-secondaire non supérieur"
    },
    {
        "code": "85.41",
        "name": "Enseignement post-secondaire non supérieur"
    },
    {
        "code": "85.41.1",
        "name": "Enseignement post-secondaire non supérieur"
    },
    {
        "code": "85.41.11",
        "name": "Enseignement post-secondaire non supérieur général classique"
    },
    {
        "code": "85.41.12",
        "name": "Enseignement post-secondaire non supérieur général en ligne"
    },
    {
        "code": "85.41.13",
        "name": "Enseignement  post-secondaire  non  supérieur  technique  et "
    },
    {
        "code": "85.41.14",
        "name": "Enseignement  post-secondaire  non  supérieur  technique  et "
    },
    {
        "code": "85.42",
        "name": "Enseignement supérieur"
    },
    {
        "code": "85.42.1",
        "name": "Enseignement supérieur"
    },
    {
        "code": "85.42.11",
        "name": "Enseignement supérieur du premier cycle classique"
    },
    {
        "code": "85.42.12",
        "name": "Enseignement supérieur du premier cycle en ligne"
    },
    {
        "code": "85.42.13",
        "name": "Enseignement supérieur du deuxième cycle classique"
    },
    {
        "code": "85.42.14",
        "name": "Enseignement supérieur du deuxième cycle en ligne"
    },
    {
        "code": "85.42.15",
        "name": "Enseignement supérieur du troisième cycle classique"
    },
    {
        "code": "85.42.16",
        "name": "Enseignement supérieur du troisième cycle en ligne"
    },
    {
        "code": "85.5",
        "name": "Autres services d’enseignement"
    },
    {
        "code": "85.51",
        "name": "Enseignement de disciplines sportives et d’activités de loisirs"
    },
    {
        "code": "85.51.1",
        "name": "Enseignement de disciplines sportives et d’activités de loisirs"
    },
    {
        "code": "85.51.10",
        "name": "Enseignement de disciplines sportives et d’activités de loisirs"
    },
    {
        "code": "85.52",
        "name": "Enseignement culturel"
    },
    {
        "code": "85.52.1",
        "name": "Enseignement culturel"
    },
    {
        "code": "85.52.11",
        "name": "Services des écoles et professeurs de danse"
    },
    {
        "code": "85.52.12",
        "name": "Services des écoles et professeurs de musique"
    },
    {
        "code": "85.52.13",
        "name": "Services des écoles et cours d’arts"
    },
    {
        "code": "85.52.19",
        "name": "Autres services d’enseignement culturel"
    },
    {
        "code": "85.53",
        "name": "Enseignement de la conduite"
    },
    {
        "code": "85.53.1",
        "name": "Enseignement de la conduite"
    },
    {
        "code": "85.53.11",
        "name": "Services des auto-écoles"
    },
    {
        "code": "85.53.12",
        "name": "Services des écoles de vol et de voile"
    },
    {
        "code": "85.59",
        "name": "Services d’enseignement divers n.c.a."
    },
    {
        "code": "85.59.1",
        "name": "Services d’enseignement divers n.c.a."
    },
    {
        "code": "85.59.11",
        "name": "Services des écoles de langues"
    },
    {
        "code": "85.59.12",
        "name": "Services des organismes de formation informatique"
    },
    {
        "code": "85.59.13",
        "name": "Services d’enseignement professionnel n.c.a."
    },
    {
        "code": "85.59.19",
        "name": "Services d’enseignement n.c.a."
    },
    {
        "code": "85.6",
        "name": "Services de soutien à l’enseignement"
    },
    {
        "code": "85.60",
        "name": "Services de soutien à l’enseignement"
    },
    {
        "code": "85.60.1",
        "name": "Services de soutien à l’enseignement"
    },
    {
        "code": "85.60.10",
        "name": "Services de soutien à l’enseignement"
    },
    {
        "code": "86",
        "name": "Services de santé humaine"
    },
    {
        "code": "86.1",
        "name": "Services hospitaliers"
    },
    {
        "code": "86.10",
        "name": "Services hospitaliers"
    },
    {
        "code": "86.10.1",
        "name": "Services hospitaliers"
    },
    {
        "code": "86.10.11",
        "name": "Services d’hospitalisation chirurgicale"
    },
    {
        "code": "86.10.12",
        "name": "Services d’hospitalisation en gynécologie-obstétrique"
    },
    {
        "code": "86.10.13",
        "name": "Services d’hospitalisation pour rééducation"
    },
    {
        "code": "86.10.14",
        "name": "Services d’hospitalisation en psychiatrie"
    },
    {
        "code": "86.10.15",
        "name": "Autres services hospitaliers fournis par des médecins"
    },
    {
        "code": "86.10.19",
        "name": "Autres services hospitaliers"
    },
    {
        "code": "86.2",
        "name": "Services des médecins et des dentistes"
    },
    {
        "code": "86.21",
        "name": "Services des médecins généralistes"
    },
    {
        "code": "86.21.1",
        "name": "Services des médecins généralistes"
    },
    {
        "code": "86.21.10",
        "name": "Services des médecins généralistes"
    },
    {
        "code": "86.22",
        "name": "Services des médecins spécialistes"
    },
    {
        "code": "86.22.1",
        "name": "Services des médecins spécialistes"
    },
    {
        "code": "86.22.11",
        "name": "Analyse et interprétation de clichés médicaux"
    },
    {
        "code": "86.22.19",
        "name": "Autres services des médecins spécialistes"
    },
    {
        "code": "86.23",
        "name": "Services de soins dentaires"
    },
    {
        "code": "86.23.1",
        "name": "Services de soins dentaires"
    },
    {
        "code": "86.23.11",
        "name": "Services de soins orthodontiques"
    },
    {
        "code": "86.23.19",
        "name": "Autres services de soins dentaires"
    },
    {
        "code": "86.9",
        "name": "Autres services de santé humaine"
    },
    {
        "code": "86.91",
        "name": "Laboratoires d'analyses médicales"
    },
    {
        "code": "86.91.1",
        "name": "Services de laboratoires médicaux"
    },
    {
        "code": "86.91.10",
        "name": "Services de laboratoires médicaux"
    },
    {
        "code": "86.92",
        "name": "Services d’ambulances"
    },
    {
        "code": "86.92.1",
        "name": "Services d’ambulances"
    },
    {
        "code": "86.92.10",
        "name": "Services d’ambulances"
    },
    {
        "code": "86.93",
        "name": "services des auxiliaires médicaux"
    },
    {
        "code": "86.93.1",
        "name": "services des auxiliaires médicaux"
    },
    {
        "code": "86.93.11",
        "name": "Services liés à la grossesse"
    },
    {
        "code": "86.93.12",
        "name": "Services de soins inﬁrmiers"
    },
    {
        "code": "86.93.13",
        "name": "Services de physiothérapie"
    },
    {
        "code": "86.93.14",
        "name": "Services de soins psychiatriques"
    },
    {
        "code": "86.99",
        "name": "Autres services de santé humaine"
    },
    {
        "code": "86.99.1",
        "name": "Autres services de santé humaine"
    },
    {
        "code": "86.99.11",
        "name": "Services de banques de sang, de sperme et d’organes"
    },
    {
        "code": "86.99.12",
        "name": "Services d’imagerie diagnostique sans interprétation"
    },
    {
        "code": "86.99.19",
        "name": "Autres services de santé humaine n.c.a."
    },
    {
        "code": "87",
        "name": "Services d’hébergement médico-social et social"
    },
    {
        "code": "87.1",
        "name": "Services d’hébergement médicalisé"
    },
    {
        "code": "87.10",
        "name": "Services d’hébergement médicalisé"
    },
    {
        "code": "87.10.1",
        "name": "Services d’hébergement médicalisé"
    },
    {
        "code": "87.10.10",
        "name": "Services d’hébergement médicalisé"
    },
    {
        "code": "87.2",
        "name": "Services d’hébergement social pour personnes handicapées "
    },
    {
        "code": "87.20",
        "name": "Services  d’hébergement  social  pour  personnes  handicapées "
    },
    {
        "code": "87.20.1",
        "name": "Services  d’hébergement  social  pour  personnes  handicapées "
    },
    {
        "code": "87.20.11",
        "name": "Services  d’hébergement  social  pour  enfants  handicapés  mentaux, "
    },
    {
        "code": "87.20.12",
        "name": "Services  d’hébergement  social  pour  adultes  handicapés  mentaux, "
    },
    {
        "code": "87.3",
        "name": "Services  d’hébergement  social  pour  personnes  âgées  ou "
    },
    {
        "code": "87.30",
        "name": "Services  d’hébergement  social  pour  personnes  âgées  ou "
    },
    {
        "code": "87.30.1",
        "name": "Services  d’hébergement  social  pour  personnes  âgées  ou "
    },
    {
        "code": "87.30.11",
        "name": "Services  d’assistance  sociale  fournis  par  les  établissements "
    },
    {
        "code": "87.30.12",
        "name": "Services  d’assistance  sociale  fournis  par  les  établissements "
    },
    {
        "code": "87.30.13",
        "name": "Services   d’assistance   sociale    fournis   par   les "
    },
    {
        "code": "87.9",
        "name": "Autres services d’hébergement social"
    },
    {
        "code": "87.90",
        "name": "Autres services d’hébergement social"
    },
    {
        "code": "87.90.1",
        "name": "Autres services d’hébergement social"
    },
    {
        "code": "87.90.11",
        "name": "Autres services d’action sociale avec hébergement pour enfants et "
    },
    {
        "code": "87.90.12",
        "name": "Services d’action sociale avec hébergement pour femmes ayant subi "
    },
    {
        "code": "87.90.13",
        "name": "Autres  services  d’action  sociale  avec  hébergement  pour "
    },
    {
        "code": "88",
        "name": "Services d’action sociale sans hébergement"
    },
    {
        "code": "88.1",
        "name": "Services d’action sociale sans hébergement pour personnes "
    },
    {
        "code": "88.10",
        "name": "Services  d’action  sociale  sans  hébergement  pour  personnes "
    },
    {
        "code": "88.10.1",
        "name": "Services d’action sociale sans hébergement pour personnes âgées "
    },
    {
        "code": "88.10.11",
        "name": "Services de visite et d’assistance pour personnes âgées"
    },
    {
        "code": "88.10.12",
        "name": "Services de centres de jour pour personnes âgées"
    },
    {
        "code": "88.10.13",
        "name": "Services  de  réadaptation  professionnelle  pour  personnes "
    },
    {
        "code": "88.10.14",
        "name": "Services  de  visite  et  d’assistance  pour   personnes "
    },
    {
        "code": "88.10.15",
        "name": "Services de centres de jour pour handicapés adultes"
    },
    {
        "code": "88.9",
        "name": "Autres services d’action sociale sans hébergement"
    },
    {
        "code": "88.91",
        "name": "Services d’action sociale sans hébergement pour jeunes enfants"
    },
    {
        "code": "88.91.1",
        "name": "Services d’action sociale sans hébergement pour jeunes enfants"
    },
    {
        "code": "88.91.11",
        "name": "Services  d’action  sociale  sans  hébergement  pour  jeunes  enfants, "
    },
    {
        "code": "88.91.12",
        "name": "Services des centres de jour pour enfants et jeunes handicapés"
    },
    {
        "code": "88.91.13",
        "name": "Services de garde d’enfants"
    },
    {
        "code": "88.99",
        "name": "Autres services d’action sociale sans hébergement n.c.a."
    },
    {
        "code": "88.99.1",
        "name": "Autres services d’action sociale sans hébergement n.c.a."
    },
    {
        "code": "88.99.11",
        "name": "Services d’orientation et de conseil n.c.a. en faveur des enfants"
    },
    {
        "code": "88.99.12",
        "name": "Services d’assistance sociale sans hébergement"
    },
    {
        "code": "88.99.13",
        "name": "Services de réadaptation professionnelle pour chômeurs"
    },
    {
        "code": "88.99.19",
        "name": "Autres services sociaux sans hébergement n.c.a."
    },
    {
        "code": "90",
        "name": "Services créatifs, artistiques et du spectacle"
    },
    {
        "code": "90.0",
        "name": "Services créatifs, artistiques et du spectacle"
    },
    {
        "code": "90.01",
        "name": "Services d’artistes du spectacle vivant"
    },
    {
        "code": "90.01.1",
        "name": "Services d’artistes du spectacle vivant"
    },
    {
        "code": "90.01.10",
        "name": "Services d’artistes du spectacle vivant"
    },
    {
        "code": "90.02",
        "name": "Services de soutien au spectacle vivant"
    },
    {
        "code": "90.02.1",
        "name": "Services de soutien au spectacle vivant"
    },
    {
        "code": "90.02.11",
        "name": "Services de production et présentation de spectacles vivants"
    },
    {
        "code": "90.02.12",
        "name": "Services de promotion et organisation de spectacles vivants"
    },
    {
        "code": "90.02.19",
        "name": "Autres services de soutien au spectacle vivant"
    },
    {
        "code": "90.03",
        "name": "Création artistique"
    },
    {
        "code": "90.03.1",
        "name": "Création artistique"
    },
    {
        "code": "90.03.11",
        "name": "Services fournis par des auteurs, compositeurs, sculpteurs et "
    },
    {
        "code": "90.03.12",
        "name": "Œuvres  originales  d’auteurs,  compositeurs  et  autres  artistes, "
    },
    {
        "code": "90.03.13",
        "name": "Œuvres originales de peintres, graphistes et sculpteurs"
    },
    {
        "code": "90.04",
        "name": "Services de gestion de salles de spectacles"
    },
    {
        "code": "90.04.1",
        "name": "Services de gestion de salles de spectacles"
    },
    {
        "code": "90.04.10",
        "name": "Services de gestion de salles de spectacles"
    },
    {
        "code": "91",
        "name": "Services  des  bibliothèques,  archives,  musées  et  autres "
    },
    {
        "code": "91.0",
        "name": "Services des bibliothèques, archives, musées et autres services "
    },
    {
        "code": "91.01",
        "name": "Services des bibliothèques et archives"
    },
    {
        "code": "91.01.1",
        "name": "Services des bibliothèques et archives"
    },
    {
        "code": "91.01.11",
        "name": "Services des bibliothèques"
    },
    {
        "code": "91.01.12",
        "name": "Services des archives"
    },
    {
        "code": "91.02",
        "name": "Services des musées"
    },
    {
        "code": "91.02.1",
        "name": "Services de gestion des musées"
    },
    {
        "code": "91.02.10",
        "name": "Services des musées"
    },
    {
        "code": "91.02.2",
        "name": "Collections des musées"
    },
    {
        "code": "91.02.20",
        "name": "Collections des musées"
    },
    {
        "code": "91.03",
        "name": "Services  de  gestion  des  sites  et  monuments  historiques  et "
    },
    {
        "code": "91.03.1",
        "name": "Services de gestion des sites et monuments historiques et attractions "
    },
    {
        "code": "91.03.10",
        "name": "Services de gestion des sites et monuments historiques et attractions "
    },
    {
        "code": "91.04",
        "name": "Services des jardins botaniques et zoologiques et des réserves "
    },
    {
        "code": "91.04.1",
        "name": "Services  des  jardins  botaniques  et  zoologiques  et  des  réserves "
    },
    {
        "code": "91.04.11",
        "name": "Services des jardins botaniques et zoologiques"
    },
    {
        "code": "91.04.12",
        "name": "Services des réserves naturelles, y compris services de préservation "
    },
    {
        "code": "92",
        "name": "Jeux de hasard et d’argent"
    },
    {
        "code": "92.0",
        "name": "Jeux de hasard et d’argent"
    },
    {
        "code": "92.00",
        "name": "Jeux de hasard et d’argent"
    },
    {
        "code": "92.00.1",
        "name": "Jeux de hasard"
    },
    {
        "code": "92.00.11",
        "name": "Tables de jeu"
    },
    {
        "code": "92.00.12",
        "name": "Service des machines de jeu"
    },
    {
        "code": "92.00.13",
        "name": "Loteries, jeux à numéros et bingos"
    },
    {
        "code": "92.00.14",
        "name": "Jeux de hasard en ligne"
    },
    {
        "code": "92.00.19",
        "name": "Autres jeux de hasard"
    },
    {
        "code": "92.00.2",
        "name": "Jeux d’argent"
    },
    {
        "code": "92.00.21",
        "name": "Jeux d’argent en ligne"
    },
    {
        "code": "92.00.29",
        "name": "Autres jeux d’argent"
    },
    {
        "code": "93",
        "name": "Services sportifs, récréatifs et de loisirs"
    },
    {
        "code": "93.1",
        "name": "Services liés au sport"
    },
    {
        "code": "93.11",
        "name": "Services de gestion d’installations sportives"
    },
    {
        "code": "93.11.1",
        "name": "Services de gestion d’installations sportives"
    },
    {
        "code": "93.11.10",
        "name": "Services de gestion d’installations sportives"
    },
    {
        "code": "93.12",
        "name": "Services de clubs de sports"
    },
    {
        "code": "93.12.1",
        "name": "Services de clubs de sports"
    },
    {
        "code": "93.12.10",
        "name": "Services de clubs de sports"
    },
    {
        "code": "93.13",
        "name": "Services des centres de culture physique"
    },
    {
        "code": "93.13.1",
        "name": "Services des centres de culture physique"
    },
    {
        "code": "93.13.10",
        "name": "Services des centres de culture physique"
    },
    {
        "code": "93.19",
        "name": "Autres services liés au sport"
    },
    {
        "code": "93.19.1",
        "name": "Autres services liés au sport"
    },
    {
        "code": "93.19.11",
        "name": "Services de promotion de manifestations sportives"
    },
    {
        "code": "93.19.12",
        "name": "Services d’athlètes"
    },
    {
        "code": "93.19.13",
        "name": "Services de soutien liés aux sports et sports récréatifs"
    },
    {
        "code": "93.19.19",
        "name": "Autres services liés au sport et sports récréatifs"
    },
    {
        "code": "93.2",
        "name": "Services récréatifs et de loisirs"
    },
    {
        "code": "93.21",
        "name": "Services des parcs d’attraction et parcs à thème"
    },
    {
        "code": "93.21.1",
        "name": "Services des parcs d’attraction et parcs à thème"
    },
    {
        "code": "93.21.10",
        "name": "Services des parcs d’attraction et parcs à thème"
    },
    {
        "code": "93.29",
        "name": "Autres services récréatifs et de loisirs"
    },
    {
        "code": "93.29.1",
        "name": "Autres services récréatifs n.c.a."
    },
    {
        "code": "93.29.11",
        "name": "Services récréatifs des parcs et plages"
    },
    {
        "code": "93.29.19",
        "name": "Services récréatifs divers n.c.a."
    },
    {
        "code": "93.29.2",
        "name": "Autres services du spectacle n.c.a."
    },
    {
        "code": "93.29.21",
        "name": "Services de spectacles pyrotechniques et de «son et lumière»"
    },
    {
        "code": "93.29.22",
        "name": "Services de jeux fonctionnant avec des pièces de monnaie"
    },
    {
        "code": "93.29.29",
        "name": "Services du spectacle n.c.a."
    },
    {
        "code": "94",
        "name": "Services fournis par des organisations associatives"
    },
    {
        "code": "94.1",
        "name": "Services fournis par des organisations consulaires, patronales "
    },
    {
        "code": "94.11",
        "name": "Services fournis par des organisations consulaires et patronales"
    },
    {
        "code": "94.11.1",
        "name": "Services fournis par des organisations consulaires et patronales"
    },
    {
        "code": "94.11.10",
        "name": "Services fournis par des organisations consulaires et patronales"
    },
    {
        "code": "94.12",
        "name": "Services fournis par des organisations professionnelles"
    },
    {
        "code": "94.12.1",
        "name": "Services fournis par des organisations professionnelles"
    },
    {
        "code": "94.12.10",
        "name": "Services fournis par des organisations professionnelles"
    },
    {
        "code": "94.2",
        "name": "Services fournis par des syndicats de salariés"
    },
    {
        "code": "94.20",
        "name": "Services fournis par des syndicats de salariés"
    },
    {
        "code": "94.20.1",
        "name": "Services fournis par des syndicats de salariés"
    },
    {
        "code": "94.20.10",
        "name": "Services fournis par des syndicats de salariés"
    },
    {
        "code": "94.9",
        "name": "Services fournis par d’autres organisations associatives"
    },
    {
        "code": "94.91",
        "name": "Services fournis par des organisations religieuses"
    },
    {
        "code": "94.91.1",
        "name": "Services fournis par des organisations religieuses"
    },
    {
        "code": "94.91.10",
        "name": "Services fournis par des organisations religieuses"
    },
    {
        "code": "94.92",
        "name": "Services fournis par des organisations politiques"
    },
    {
        "code": "94.92.1",
        "name": "Services fournis par des organisations politiques"
    },
    {
        "code": "94.92.10",
        "name": "Services fournis par des organisations politiques"
    },
    {
        "code": "94.99",
        "name": "Services fournis par d’autres organisations associatives n.c.a."
    },
    {
        "code": "94.99.1",
        "name": "Services (à l’exclusion des services d’octroi d’aides ﬁnancières)"
    },
    {
        "code": "94.99.11",
        "name": "Services  fournis  par  des  organisations  de  défense  des  droits  de "
    },
    {
        "code": "94.99.12",
        "name": "Services fournis par des groupes de défense de l’environnement"
    },
    {
        "code": "94.99.13",
        "name": "Services de défense d’intérêts spéciaux"
    },
    {
        "code": "94.99.14",
        "name": "Autres services fournis par des associations de développement de "
    },
    {
        "code": "94.99.15",
        "name": "Services fournis par des associations de jeunes"
    },
    {
        "code": "94.99.16",
        "name": "Services fournis par des associations culturelles et récréatives"
    },
    {
        "code": "94.99.17",
        "name": "Services fournis par d’autres organisations civiques et sociales"
    },
    {
        "code": "94.99.19",
        "name": "Services fournis par d'autres organisations associatives n.c.a."
    },
    {
        "code": "94.99.2",
        "name": "Services  d’octroi  d’aides  ﬁnancières par des organisations"
    },
    {
        "code": "94.99.20",
        "name": "Services d’octroi d’aides financières par des organisations associatives"
    },
    {
        "code": "95",
        "name": "Services de réparation d’ordinateurs et de biens personnels "
    },
    {
        "code": "95.1",
        "name": "Services  de  réparation  d’ordinateurs  et  d’équipements  de "
    },
    {
        "code": "95.11",
        "name": "Services  de  réparation  d’ordinateurs  et  d’équipements "
    },
    {
        "code": "95.11.1",
        "name": "Services  de  réparation  d’ordinateurs  et  d’équipements "
    },
    {
        "code": "95.11.10",
        "name": "Services  de  réparation  d’ordinateurs  et  d’équipements "
    },
    {
        "code": "95.12",
        "name": "Services de réparation d’équipements de communication"
    },
    {
        "code": "95.12.1",
        "name": "Services de réparation d’équipements de communication"
    },
    {
        "code": "95.12.10",
        "name": "Services de réparation d’équipements de communication"
    },
    {
        "code": "95.2",
        "name": "Services de réparation de biens personnels et domestiques"
    },
    {
        "code": "95.21",
        "name": "Services de réparation de produits électroniques grand public"
    },
    {
        "code": "95.21.1",
        "name": "Services de réparation de produits électroniques grand public"
    },
    {
        "code": "95.21.10",
        "name": "Services de réparation de produits électroniques grand public"
    },
    {
        "code": "95.22",
        "name": "Services  de  réparation  d’appareils  électroménagers  et "
    },
    {
        "code": "95.22.1",
        "name": "Services  de  réparation  d’appareils  électroménagers  et "
    },
    {
        "code": "95.22.10",
        "name": "Services de réparation d’appareils électroménagers et d’équipements "
    },
    {
        "code": "95.23",
        "name": "Services de réparation de chaussures et d’articles en cuir"
    },
    {
        "code": "95.23.1",
        "name": "Services de réparation de chaussures et d’articles en cuir"
    },
    {
        "code": "95.23.10",
        "name": "Services de réparation de chaussures et d’articles en cuir"
    },
    {
        "code": "95.24",
        "name": "Services de réparation de meubles et d’équipements du foyer"
    },
    {
        "code": "95.24.1",
        "name": "Services de réparation de meubles et d’équipements du foyer"
    },
    {
        "code": "95.24.10",
        "name": "Services de réparation de meubles et d’équipements du foyer"
    },
    {
        "code": "95.25",
        "name": "Services de réparation d’articles d’horlogerie et de bijouterie"
    },
    {
        "code": "95.25.1",
        "name": "Services de réparation d’articles d’horlogerie et de bijouterie"
    },
    {
        "code": "95.25.11",
        "name": "Services de réparation d’articles d’horlogerie"
    },
    {
        "code": "95.25.12",
        "name": "Services de réparation d’articles de bijouterie"
    },
    {
        "code": "95.29",
        "name": "Services  de  réparation  d’autres  biens  personnels  et "
    },
    {
        "code": "95.29.1",
        "name": "Services de réparation d’autres biens personnels et domestiques"
    },
    {
        "code": "95.29.11",
        "name": "Services de réparation et retouche de vêtements et articles textiles"
    },
    {
        "code": "95.29.12",
        "name": "Services de réparation de cycles"
    },
    {
        "code": "95.29.13",
        "name": "Services de réparation et entretien d’instruments de musique"
    },
    {
        "code": "95.29.14",
        "name": "Services de réparation et entretien d’équipements sportifs"
    },
    {
        "code": "95.29.19",
        "name": "Services  de  réparation  d’autres  biens  personnels  ou  domestiques "
    },
    {
        "code": "96",
        "name": "Autres services personnels"
    },
    {
        "code": "96.0",
        "name": "Autres services personnels"
    },
    {
        "code": "96.01",
        "name": "Services de blanchisserie-teinturerie"
    },
    {
        "code": "96.01.1",
        "name": "Services de blanchisserie-teinturerie"
    },
    {
        "code": "96.01.11",
        "name": "Services de lavage de linge en libre-service"
    },
    {
        "code": "96.01.12",
        "name": "Services de nettoyage à sec (y compris d’articles en fourrure)"
    },
    {
        "code": "96.01.13",
        "name": "Services de repassage"
    },
    {
        "code": "96.01.14",
        "name": "Services de teinture et de coloration"
    },
    {
        "code": "96.01.19",
        "name": "Autres services de nettoyage textile"
    },
    {
        "code": "96.02",
        "name": "Services de coiffure et soins de beauté"
    },
    {
        "code": "96.02.1",
        "name": "Services de coiffure et soins de beauté"
    },
    {
        "code": "96.02.11",
        "name": "Services de coiffure pour femmes et ﬁllettes"
    },
    {
        "code": "96.02.12",
        "name": "Services de coiffure pour hommes et garçonnets"
    },
    {
        "code": "96.02.13",
        "name": "Soins esthétiques, de manucure et de pédicure"
    },
    {
        "code": "96.02.19",
        "name": "Autres soins de beauté"
    },
    {
        "code": "96.02.2",
        "name": "Cheveux humains, non travaillés"
    },
    {
        "code": "96.02.20",
        "name": "Cheveux humains, non travaillés"
    },
    {
        "code": "96.03",
        "name": "Services funéraires et connexes"
    },
    {
        "code": "96.03.1",
        "name": "Services funéraires et connexes"
    },
    {
        "code": "96.03.11",
        "name": "Pompes funèbres et services de crémation"
    },
    {
        "code": "96.03.12",
        "name": "Soins aux défunts"
    },
    {
        "code": "96.04",
        "name": "Services de thermalisme et de thalassothérapie"
    },
    {
        "code": "96.04.1",
        "name": "Services de thermalisme et de thalassothérapie"
    },
    {
        "code": "96.04.10",
        "name": "Services de thermalisme et de thalassothérapie"
    },
    {
        "code": "96.05",
        "name": "Services de bains et autres soins corporels"
    },
    {
        "code": "96.05.1",
        "name": "Services de bains et autres soins corporels"
    },
    {
        "code": "96.05.10",
        "name": "Services de bains et autres soins corporels"
    },
    {
        "code": "96.09",
        "name": "Autres services personnels n.c.a."
    },
    {
        "code": "96.09.1",
        "name": "Autres services personnels n.c.a."
    },
    {
        "code": "96.09.11",
        "name": "Services aux animaux de compagnie"
    },
    {
        "code": "96.09.12",
        "name": "Services des hôtesses"
    },
    {
        "code": "96.09.13",
        "name": "Services  de  machines  fonctionnant  avec  des  pièces  de  monnaie "
    },
    {
        "code": "96.09.19",
        "name": "Autres services divers n.c.a."
    },
    {
        "code": "97",
        "name": "Services des ménages en tant qu’employeurs de personnel "
    },
    {
        "code": "97.0",
        "name": "Services  des  ménages  en  tant  qu’employeurs  de  personnel "
    },
    {
        "code": "97.00",
        "name": "Services  des  ménages  en  tant  qu’employeurs  de  personnel "
    },
    {
        "code": "97.00.1",
        "name": "Services  des  ménages  en  tant  qu’employeurs  de  personnel "
    },
    {
        "code": "97.00.10",
        "name": "Services  des  ménages  en  tant  qu’employeurs  de  personnel "
    },
    {
        "code": "98",
        "name": "Biens et services divers produits par les ménages privés "
    },
    {
        "code": "98.1",
        "name": "Biens divers produits par les ménages privés pour leur usage "
    },
    {
        "code": "98.10",
        "name": "Biens  divers  produits  par  les  ménages  privés  pour  leur  usage "
    },
    {
        "code": "98.10.1",
        "name": "Biens  divers  produits  par  les  ménages  privés  pour  leur  usage "
    },
    {
        "code": "98.10.10",
        "name": "Biens  divers  produits  par  les  ménages  privés  pour  leur  usage "
    },
    {
        "code": "98.2",
        "name": "Services  divers  produits  par  les  ménages  privés  pour  leur "
    },
    {
        "code": "98.20",
        "name": "Services divers produits par les ménages privés pour leur usage "
    },
    {
        "code": "98.20.1",
        "name": "Services divers produits par les ménages privés pour leur usage "
    },
    {
        "code": "98.20.10",
        "name": "Services  divers  produits  par  les  ménages  privés  pour  leur  usage "
    },
    {
        "code": "99",
        "name": "Services extra-territoriaux"
    },
    {
        "code": "99.0",
        "name": "Services extra-territoriaux"
    },
    {
        "code": "99.00",
        "name": "Services extra-territoriaux"
    },
    {
        "code": "99.00.1",
        "name": "Services extra-territoriaux"
    },
    {
        "code": "99.00.10",
        "name": "Services extra-territoriaux"
    }
]
}
