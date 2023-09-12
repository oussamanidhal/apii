import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./styles.css']
})
export class ActivitiesComponent {
  searchValue: string = '';

  


  //results of activities search
  filteredActivities: any[] = [];


  // results of products search
  filteredProducts: any[] = [];

  



  filterActivities() {
    let activityCodesFromProducts = new Set();

    this.filteredProducts = this.products
        .filter(product =>
            product.name.toLowerCase().includes(this.searchValue.toLowerCase()) && 
            product.code.length > 5  // filter out products with code length of 4 or less
        )
        .slice(0, 30);

    // For each product, find the associated activity code and add to activityCodesFromProducts
    for (let product of this.filteredProducts) {
        let productCodePrefix = product.code.substr(0, 4); // Extract first four digits of product code

        let relatedActivity = this.activities.find(activity => {
            let activityCode = Number(activity.cls_na9).toFixed(2);
            return activityCode.startsWith(productCodePrefix);
        });

        if (relatedActivity) {
            activityCodesFromProducts.add(Number(relatedActivity.cls_na9).toFixed(2));
            product.relatedActivity = relatedActivity;
        }
    }

    // Filter activities based on search value, valid format, and the activities associated with products
    this.filteredActivities = this.activities.filter(activity => {
        let activityCode = Number(activity.cls_na9).toFixed(2);
        let isValidFormat = /^\d{2}\.\d{2}$/.test(activityCode);

        return isValidFormat && (
            activity.lib_na9.toLowerCase().includes(this.searchValue.toLowerCase()) ||
            (activity.description && activity.description.toLowerCase().includes(this.searchValue.toLowerCase()))
        );
    }).slice(0, 30);
}



  
  
  


activities: any[] = [
    {
        "cls_na9": "01.11",
        "lib_na9": "Culture de céréales (à l'exception du riz)",
        "description": "• blé • maïs-grain • sorgho • orge • seigle • avoine • millet • autres céréales n.c.a. "
    },
    {
        "cls_na9": "01.12",
        "lib_na9": "Culture du riz",
        "description": ""
    },
    {
        "cls_na9": "01.13",
        "lib_na9": "Culture de légumes, de melons, de racines et de tubercules",
        "description": "- la culture des légumes à feuilles et à tiges, tels que: • artichauts • asperges • choux • choux-fleurs et brocolis • laitues et chicorées • épinards • autres légumes à feuilles et à tiges - la culture de plantes cultivées pour leurs fruits, telles que: • concombres et cornichons • aubergines • tomates • pastèques • melons cantaloups • autres melons et plantes cultivées pour leurs fruits - la culture des légumes à racines, à bulbes ou à tubercules, tels que: • carottes • navets • ail • oignons (et échalotes) • poireaux et autres légumes alliacés • autres légumes à racines, à bulbes ou à tubercules - la culture des champignons et des truffes - la production de semences de légumes, y compris de graines de betteraves sucrières, à l’exclusion des graines d’autres betteraves - la culture des betteraves sucrières - la culture d’autres légumes - la culture de racines et de tubercules, tels que: • pommes de terre • patates douces • manioc • ignames • autres racines et tubercules "
    },
    {
        "cls_na9": "01.14",
        "lib_na9": "Culture de la canne à sucre",
        "description": ""
    },
    {
        "cls_na9": "01.15",
        "lib_na9": "Culture du tabac",
        "description": ""
    },
    {
        "cls_na9": "01.16",
        "lib_na9": "Culture de plantes à fibres",
        "description": "- la culture du coton - la culture de jute, de kenaf et d’autres fibres textiles libériennes - la culture de lin ou de chanvre - la culture de sisal et d’autres fibres textiles du genre agave - la culture de l’abaca, de la ramie et d’autres fibres textiles végétales - la culture d’autres plantes à fibres I n st i t u t N a t i o nal d e la S ta tis tiq u e   "
    },
    {
        "cls_na9": "01.17",
        "lib_na9": "Culture de légumineuses et de graines oléagineuses",
        "description": "cultures sont souvent combinées au sein des unités agricoles. - la culture de légumineuses telles que: • haricots • fèves • pois chiches • pois à vache • lentilles • lupins • pois • pois cajans • autres légumineuses - la culture de graines oléagineuses telles que: • graines de soja • arachides • graines de ricin • graines de lin • graines de moutarde • graines de niger • graines de colza • graines de carthame • graines de sésame • graines de tournesol • autres graines oléagineuses "
    },
    {
        "cls_na9": "01.18",
        "lib_na9": "Culture de fourrages",
        "description": "- la culture de rutabagas, betteraves fourragères, racines fourragères, luzerne, trèfle, sainfoin, maïs fourrager, choux fourragers et autres produits fourragers similaires - la production de graines de betteraves (à l’exclusion des graines de betteraves sucrières) et de graines de plantes fourragères "
    },
    {
        "cls_na9": "01.19",
        "lib_na9": "Horticulture et autres cultures non permanentes",
        "description": "- la culture de sarrasin - la culture de fleurs - la production de fleurs coupées et de boutons de fleurs - la production de semences de fleurs  63    01.2 Cultures permanentes Ce groupe comprend les cultures permanentes, c’est-à-dire les plantes dont la durée de vie est supérieure à deux saisons de croissance végétale et qui perdent leurs feuilles après chaque saison ou dont la croissance est continue. La culture de ces plantes aux fins de la production de semences est comprise. "
    },
    {
        "cls_na9": "01.21",
        "lib_na9": "Culture de la vigne",
        "description": "- la production de raisins de cuve et de raisins de table dans des vignobles "
    },
    {
        "cls_na9": "01.22",
        "lib_na9": "Culture de palmiers-dattiers",
        "description": "- la culture de dattes - la culture d'autres fruits tropicaux et subtropicaux • avocats • bananes et plantains • figues • mangues • papayes • ananas • autres fruits tropicaux et subtropicaux "
    },
    {
        "cls_na9": "01.23",
        "lib_na9": "Culture d'agrumes",
        "description": "- la culture d’agrumes: • pamplemousses et pomelos • citrons et limettes • oranges • tangerines, mandarines et clémentines • autres agrumes "
    },
    {
        "cls_na9": "01.24",
        "lib_na9": "Culture de fruits à pépins et à noyau",
        "description": "- la culture de fruits à pépins et à noyau: • pommes • abricots • cerises et griottes • pêches et nectarines • poires et coings • prunes et prunelles • autres fruits à pépins et à noyau    "
    },
    {
        "cls_na9": "01.25",
        "lib_na9": "Culture d'autres fruits d'arbres ou d'arbustes et de fruits à coque",
        "description": "- la culture de baies: • myrtilles • groseilles • groseilles à maquereaux • kiwis  64 I n st i t u t N a t i o nal d e la S ta tis tiq u e   • framboises • fraises • autres baies - la production de semences de fruits - la production de fruits à coque comestibles: • amandes • noix de cajou • châtaignes • noisettes • pistaches • noix communes • autres fruits à coques - la culture d’autres fruits d’arbres ou d’arbustes • caroubes "
    },
    {
        "cls_na9": "01.26",
        "lib_na9": "Culture d'oliviers",
        "description": "- la production d'olives fraîches - la culture d'autres fruits oléagineux: • noix de coco • palmiers à huile • autres fruits oléagineux "
    },
    {
        "cls_na9": "01.27",
        "lib_na9": "Culture de plantes à boissons",
        "description": "- la culture de plantes à boissons: • café • thé • maté • cacao • autres plantes à boissons "
    },
    {
        "cls_na9": "01.28",
        "lib_na9": "Culture de plantes à épices, aromatiques, médicinales et pharmaceutiques",
        "description": "- les cultures permanentes et non permanentes de plantes à épices et aromatiques: • poivre • piments et poivrons • noix muscades, macis, amomes et cardamomes • anis, badiane et fenouil • cannelle • clous de girofle • gingembre • vanille • houblon • autres plantes à épices et aromatiques - la culture de plantes médicinales et narcotiques  65     "
    },
    {
        "cls_na9": "01.29",
        "lib_na9": "Autres cultures permanentes",
        "description": "- la culture d’hévéas pour la récolte de latex - la culture d’arbres de Noël - la culture d’arbres pour l’extraction de sève - la culture de matières végétales des espèces principalement utilisées en vannerie ou en sparterie "
    },
    {
        "cls_na9": "01.30",
        "lib_na9": "Pépinières",
        "description": "et semis, en vue de la propagation directe des plantes ou de la création d’un porte-greffe dans lequel sera greffé un scion qui sera planté en vue de la production de plantes. - la culture de plantes destinées à la plantation - la culture de plantes destinées à l’ornementation, y compris le gazon en rouleaux - la culture de plantes vivantes pour la production de bulbes, tubercules ou racines, de boutures et greffons, de blanc de champignon - l’exploitation de pépinières, à l’exception des pépinières forestières "
    },
    {
        "cls_na9": "01.41",
        "lib_na9": "Élevage de vaches laitières",
        "description": "- l’élevage de vaches laitières - la production de lait cru de vache ou de bufflonne "
    },
    {
        "cls_na9": "01.42",
        "lib_na9": "Élevage d'autres bovins à viande",
        "description": "- l’élevage de bovins pour leur viande - la production de sperme d’animaux de l’espèce bovine  66  - l’élevage de buffles pour leur viande "
    },
    {
        "cls_na9": "01.43",
        "lib_na9": "Élevage de chevaux et d'autres équidés",
        "description": "- l’élevage de chevaux, d’ânes, de mulets ou de bardots "
    },
    {
        "cls_na9": "01.44",
        "lib_na9": "Élevage de chameaux et d'autres camélidés",
        "description": "- l’élevage de chameaux (dromadaires) et de camélidés "
    },
    {
        "cls_na9": "01.45",
        "lib_na9": "Élevage d'ovins et de caprins",
        "description": "- l’élevage d’ovins et de caprins - la production de lait cru de brebis ou de chèvre - la production de laine brute "
    },
    {
        "cls_na9": "01.46",
        "lib_na9": "Élevage de porcins",
        "description": ""
    },
    {
        "cls_na9": "01.47",
        "lib_na9": "Élevage de volailles",
        "description": "- l’élevage de volailles: • coqs, poules, dindes, dindons, canards, oies et pintades - la production d’œufs de volailles - l’exploitation de couvoirs pour volailles "
    },
    {
        "cls_na9": "01.49",
        "lib_na9": "Élevage d'autres animaux",
        "description": "- l’élevage d’animaux semi-domestiqués ou d’autres animaux vivants: • autruches et émeus • autres oiseaux (à l’exception des volailles) • insectes • lapins et autres animaux à fourrure - la production de pelleteries, de peaux de reptiles ou d’oiseaux provenant de l’exploitation de fermes d’élevage - l’exploitation de fermes de lombriculture, de production de crustacés terrestres, d’héliciculture, etc. - la sériciculture et la production de cocons de vers à soie - l’apiculture et la production de miel et de cire d’abeille - l’élevage d’animaux de compagnie (à l’exception des poissons) • chats et chiens • oiseaux, tels que des perruches, etc. • hamsters, etc. - l’élevage d’animaux divers    "
    },
    {
        "cls_na9": "01.50",
        "lib_na9": "Culture et élevage associés",
        "description": ""
    },
    {
        "cls_na9": "01.61",
        "lib_na9": "Activités de soutien aux cultures",
        "description": "- les activités agricoles exercées pour le compte de tiers: • préparation des terres • création de cultures • traitement des récoltes • pulvérisation des récoltes, y compris par des véhicules aériens • taille des arbres fruitiers et des vignes • transplantation du riz et démariage des betteraves • récolte • lutte contre les animaux nuisibles (y compris les lapins) en relation avec l’agriculture - le maintien des terres agricoles en bon état sur les plans agricole et environnemental - l’exploitation de systèmes d’irrigation pour l’agriculture - la mise à disposition de machines agricoles avec conducteur et personnel "
    },
    {
        "cls_na9": "01.62",
        "lib_na9": "Activités de soutien à la production animale",
        "description": "- les activités agricoles exercées pour le compte de tiers: • activités visant à promouvoir le repeuplement, la croissance et le rendement d’animaux • services de comparaison du rendement des troupeaux, de conduite de troupeaux, de paissance, de castration de volailles,de nettoyage de poulaillers, etc. • activités en rapport avec l’insémination artificielle • services de haras • tonte d’ovins • hébergement et entretien d’animaux de ferme  68 I n st i t u t N a t i o nal d e la S ta tis tiq u e   - les activités des maréchaux-ferrants "
    },
    {
        "cls_na9": "01.63",
        "lib_na9": "Traitement primaire des récoltes",
        "description": "- la préparation des cultures en vue de leur commercialisation primaire: nettoyage, taille, triage, désinfection - l’égrenage du coton - la préparation des feuilles de tabac, par exemple: séchage - la préparation des fèves de cacao, par exemple: écabossage - le paraffinage de fruits "
    },
    {
        "cls_na9": "01.64",
        "lib_na9": "Traitement des semences",
        "description": "semences en les débarrassant des impuretés, des semences de trop petite taille ou rongées par la machine ou par des insectes et des semences immatures ou encore en enlevant la moisissure afin de garantir des bonnes conditions d’entreposage. Cette activité comprend le séchage, le nettoyage, le triage et le traitement des semences jusqu’à leur commercialisation. Le traitement de céréales génétiquement modifiées est compris. "
    },
    {
        "cls_na9": "01.70",
        "lib_na9": "Chasse, piégeage et services annexes",
        "description": "- la chasse et le piégeage à des fins commerciales - le prélèvement d’animaux (vivants ou morts) pour l’alimentation, leur fourrure, leur peau, ou pour les destiner à la recherche, à des parcs zoologiques ou les utiliser comme animaux de compagnie - la production de pelleteries, de peaux de reptiles ou d’oiseaux provenant d’activités de chasse ou de piégeage - la capture sur le rivage de mammifères marins, par exemple: les morses et les phoques    "
    },
    {
        "cls_na9": "02.10",
        "lib_na9": "Sylviculture et autres activités forestières",
        "description": "- la production de bois sur pied: boisement, reboisement, transplantation, éclaircie et conservation des forêts et des coupes - la culture de taillis, de bois de trituration et de bois de chauffage - l’exploitation de pépinières forestières Ces activités peuvent être effectuées dans des forêts naturelles ou dans des plantations. "
    },
    {
        "cls_na9": "02.20",
        "lib_na9": "Exploitation forestière",
        "description": "- la production de bois rond pour les industries forestières de transformation - la production de bois rond utilisé sous une forme brute, comme le bois de mine, les pieux de clôtures et les poteaux électriques - la production de bois à des fins énergétiques - la production de résidus de l’exploitation forestière à des fins énergétiques - la fabrication de charbon de bois en forêt (en utilisant des méthodes traditionnelles) Le résultat de cette activité peut prendre la forme de grumes ou de bois de chauffage. "
    },
    {
        "cls_na9": "02.31",
        "lib_na9": "Récolte de l'alfa",
        "description": "- la récolte d'alfa "
    },
    {
        "cls_na9": "02.32",
        "lib_na9": "Récolte du liège",
        "description": "- la récolte de liège  70 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "02.33",
        "lib_na9": "Récolte d'autres produits forestiers non ligneux poussant à l'état sauvage",
        "description": "- la récolte de produits poussant à l’état sauvage: • champignons et truffes • baies • fruits à coque • balata et autres gommes caoutchouteuses • laque et résines • sucs et extraits végétaux • crin végétal • crin marin • glands et marrons d’Inde • mousses et lichens "
    },
    {
        "cls_na9": "02.40",
        "lib_na9": "Services de soutien à l'exploitation forestière",
        "description": "- les services annexes à la sylviculture: • inventaire des forêts • conseil en gestion et administration de la forêt • évaluation du bois • protection et lutte contre les feux de forêt • lutte contre les parasites forestiers - services annexes à l’exploitation forestière: • transport de grumes dans les forêts "
    },
    {
        "cls_na9": "03.11",
        "lib_na9": "Pêche en mer",
        "description": "- la pêche à des fins commerciales dans les eaux océaniques et côtières - la capture de crustacés et de mollusques marins - la pêche à la baleine - la capture d’animaux aquatiques marins: tortues, holothuries, tuniciers, oursins, etc. - les activités des navires se livrant tant à la pêche en mer qu’à la transformation et à la conservation du poisson - la récolte d’autres produits marins: perles naturelles, éponges, coraux et algues "
    },
    {
        "cls_na9": "03.12",
        "lib_na9": "Pêche en eau douce",
        "description": "- la pêche à des fins commerciales en eaux intérieures - la capture de crustacés et de mollusques d’eau douce - la capture d’animaux aquatiques d’eau douce - la récolte de produits d’eau douce "
    },
    {
        "cls_na9": "03.21",
        "lib_na9": "Aquaculture en mer",
        "description": "- l’aquaculture en eau de mer, y compris l’élevage de poissons ornementaux marins - la production de naissains de bivalves (huîtres, moules, etc.), de jeunes langoustes, de larves de crevettes, d’alevins et de saumoneaux - la culture d’algues et d’autres plantes aquatiques comestibles - la culture de crustacés, de bivalves, d’autres mollusques et d’autres animaux aquatiques d’eau de mer. - l’aquaculture dans les eaux saumâtres - l’aquaculture dans des citernes et des réservoirs remplis d’eau salée - la pisciculture marine - l’exploitation de fermes d’élevage de vers marins "
    },
    {
        "cls_na9": "03.22",
        "lib_na9": "Aquaculture en eau douce",
        "description": "- l’aquaculture en eau douce, y compris l’élevage de poissons ornementaux d’eau douce - la culture de crustacés, de bivalves, d’autres mollusques et d’autres animaux aquatiques d’eau douce - la pisciculture en eau douce - l’élevage de grenouilles "
    },
    {
        "cls_na9": "05.10",
        "lib_na9": "Extraction de houille",
        "description": "- l’extraction de la houille: extraction souterraine ou à ciel ouvert, ainsi que l’extraction minière en ayant recours à des procédés de liquéfaction - le lavage, le triage, le calibrage, la pulvérisation, la compression ou d’autres opérations destinées à classer, à accroître la qualité ou à faciliter le transport ou le stockage. - l’opération destinée à récupérer l’anthracite des poussiers    "
    },
    {
        "cls_na9": "05.20",
        "lib_na9": "Extraction de lignite",
        "description": "- l’extraction du lignite: extraction souterraine ou à ciel ouvert, ainsi que l’extraction minière en ayant recours à des procédés de liquéfaction  74 I n st i t u t N a t i o nal d e la S ta tis tiq u e    - le lavage, la déshydratation, la pulvérisation, la compression du lignite ou les autres opérations destinées à accroître la qualité, à faciliter le transport ou le stockage. "
    },
    {
        "cls_na9": "06.10",
        "lib_na9": "Extraction de pétrole brut",
        "description": "- l’extraction d’huiles brutes de pétrole - l’extraction de schistes et de sables bitumineux - la production de pétrole brut à partir de schistes et de sables bitumineux - les processus employés pour obtenir des huiles brutes: décantation, dessalement, déshydratation, stabilisation, etc. "
    },
    {
        "cls_na9": "06.20",
        "lib_na9": "Extraction de gaz naturel",
        "description": "- l’extraction d’hydrocarbures liquides par les procédés de liquéfaction ou de pyrolyse - la production d’hydrocarbures gazeux bruts (gaz naturel) - l’extraction de condensats - la décantation et la séparation de fractions d’hydrocarbures liquides - la désulfuration du gaz  75     - la récupération du gaz de pétrole liquéfié provenant du raffinage du pétrole, voir 19.20 - la fabrication de gaz industriels, voir 20.11 - l’exploitation d’oléoducs ou de gazoducs, voir 49.50 07 Extraction de minerais métalliques Cette division comprend l’extraction, souterraine, à ciel ouvert ou par l’exploitation minière des fonds marins, de minerais métalliques Cette division comprend également: - les opérations de traitement et d’enrichissement du minerai: concassage, broyage, lavage, séchage, agglomération, calcination ou lixiviation du minerai, ou qui effectuent les opérations de séparation gravitaire ou de flottation. Cette division ne comprend pas: - le grillage de la pyrite de fer, voir 20.13 - la production d’oxyde d’aluminium, voir 24.42 - l’exploitation de hauts fourneaux, voir division 24 07.1 Extraction de minerais de fer "
    },
    {
        "cls_na9": "07.10",
        "lib_na9": "Extraction de minerais de fer",
        "description": "- l’extraction de minerais exploités principalement en raison de leur teneur en fer - l’enrichissement et l’agglomération des minerais de fer "
    },
    {
        "cls_na9": "07.21",
        "lib_na9": "Extraction de minerais d'uranium et de thorium",
        "description": "- l’extraction de minerais renfermant de l’uranium ou du thorium: pechblende, etc. - la concentration de ces minerais - la fabrication de concentré d’uranium (\"yellow cake\") "
    },
    {
        "cls_na9": "07.29",
        "lib_na9": "Extraction d'autres minerais de métaux non ferreux",
        "description": "- l’extraction et la préparation de minerais exploités principalement en raison de leur teneur en métaux non ferreux: • aluminium (bauxite), cuivre, plomb, zinc, étain, manganèse, chrome, nickel, cobalt, molybdène, tantale, vanadium, etc. • métaux précieux: or, argent, platine    "
    },
    {
        "cls_na9": "08.11",
        "lib_na9": "Extraction de pierres ornementales et de construction, de calcaire industriel, de gypse, de craie et d'ardoise",
        "description": "- l’extraction, la taille grossière et le sciage de pierres de taille et de construction, par exemple: le marbre, le granit, le grès, etc. - le concassage et le broyage de pierres ornementales et de construction - l’extraction, le broyage et le concassage des pierres calcaires - l’extraction du gypse et de l’anhydrite - l’extraction de la craie et de la dolomite non calcinée "
    },
    {
        "cls_na9": "08.12",
        "lib_na9": "Exploitation de gravières et sablières, extraction d'argiles et de kaolin",
        "description": "- l’extraction et le dragage de sables industriels, de sables pour la construction et de graviers - le concassage et le broyage de graviers - l’extraction de sables - l’extraction d’argiles, de terres réfractaires et de kaolin "
    },
    {
        "cls_na9": "08.20",
        "lib_na9": "Extraction de phosphates naturels",
        "description": "- l'extraction de phosphates naturels - le broyage, le lavage et l'enrechissement de phosphates naturels 08.9 Activités extractives n.c.a. "
    },
    {
        "cls_na9": "08.91",
        "lib_na9": "Extraction des minéraux chimique et d'engrais minéraux (sauf phosphates)",
        "description": "- l'extraction de sels potassiques naturels - l’extraction du soufre natif - l’extraction et la préparation de la pyrite et de la pyrrhotite, à l’exception du grillage - l’extraction de sulfates et de carbonates naturels de baryum (barytine et withérite), de borates naturels, de sulfates naturels de magnésium (kiesérite) - l’extraction de terres colorantes, de \"spath fluor\" et d’autres minéraux exploités principalement parce qu’ils constituent une source de produits chimiques - le ramassage du guano    "
    },
    {
        "cls_na9": "08.92",
        "lib_na9": "Extraction de tourbe",
        "description": "- l’extraction de la tourbe - la préparation de la tourbe afin d’accroître la qualité et de faciliter le transport ou le stockage. "
    },
    {
        "cls_na9": "08.93",
        "lib_na9": "Production de sel",
        "description": "- l’extraction souterraine du sel, y compris par dissolution et pompage - la production de sel par évaporation de l’eau de mer ou d’autres eaux salées - le broyage, la purification et le raffinage du sel par le producteur "
    },
    {
        "cls_na9": "08.99",
        "lib_na9": "Autres activités extractives n.c.a.",
        "description": "- l’extraction de minéraux et de matériaux divers: • matières abrasives, amiante, farines siliceuses fossiles, graphite naturel, stéatite (talc), feldspath, etc. • asphaltes naturels, asphaltites et roches asphaltiques, bitumes solides naturels • pierres gemmes, quartz, mica, etc.  09 Services de soutien aux industries extractives Cette division comprend les services spécialisés de soutien à l’extraction exécutés pour le compte de tiers. Elle comprend les services d’exploration par les méthodes classiques de prospection, comme le prélèvement d’échantillons et les observations géologiques, ainsi que les forages, les forages d’essai ou les reforages des puits de pétrole ou pour les minerais métalliques et non métalliques. D’autres services couvrent la construction des fondations de puits de pétrole ou de gaz, la cimentation des revêtements (tubages) de puits de pétrole ou de gaz, le nettoyage, le vidage, le pompage à vide des puits de pétrole et de gaz, le drainage ou le pompage des mines, les services d’enlèvement des déblais dans les mines, etc. 09.1 Activités de soutien à l'extraction d'hydrocarbures    "
    },
    {
        "cls_na9": "09.10",
        "lib_na9": "Activités de soutien à l'extraction d'hydrocarbures",
        "description": "- les services liés à l’extraction de pétrole et de gaz, exécutés pour le compte de tiers: • les services d’exploration liés à l’extraction du pétrole et du gaz, par exemple: par les méthodes classiques de prospection, comme les observations géologiques sur les sites de prospection • forage et reforage dirigés; démarrage du forage; montage in situ, réparation et démontage de tours de forage; cimentation des revêtements (tubages) de puits de pétrole ou de gaz; pompage de puits; comblement et abandon de puits, etc. • la liquéfaction et la regazéification du gaz naturel en vue de son transport, effectuées sur le site minier • le drainage ou le pompage des mines pour le compte de tiers • les sondages d’essai liés à l’extraction du pétrole et du gaz - la protection et la lutte contre les incendies sur les champs de pétrole et de gaz  78 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "09.90",
        "lib_na9": "Activités de soutien aux autres industries extractives",
        "description": "- les services de soutien exécutés pour le compte de tiers liés aux activités minières des divisions 05, 07 et 08 • les services d’exploration par les méthodes classiques de prospection, comme le prélèvement d’échantillons et les observations géologiques sur les sites de prospection • le drainage ou le pompage des mines pour le compte de tiers • les sondages et forages d’essai "
    },
    {
        "cls_na9": "10.11",
        "lib_na9": "Transformation et conservation de la viande de boucherie",
        "description": "- l’exploitation d’abattoirs se livrant à l’abattage, à la préparation et à l’emballage de la viande: bœuf, porc, agneau, lapin, mouton, chameau, etc. - la production de viandes de boucherie, fraîches, congelées ou surgelées, en carcasses - la production de viandes de boucherie, fraîches, congelées ou surgelées, en morceaux - l’abattage et la transformation des baleines à terre ou à bord de bateaux spécialement équipés - la production de cuirs et de peaux bruts provenant de l’activité des abattoirs, y compris le délainage - la production de saindoux et d’autres graisses animales comestibles - la transformation des abats - la production de laine de délainage "
    },
    {
        "cls_na9": "10.12",
        "lib_na9": "Transformation et conservation de la viande de volaille",
        "description": "- la production de plumes et de duvets - l’exploitation d’abattoirs se livrant à l’abattage, à la préparation et à l’emballage de volailles - la production de viandes de volailles en portions individuelles, fraîches, congelées ou surgelées - l’extraction de graisses de volailles comestibles  81     "
    },
    {
        "cls_na9": "10.13",
        "lib_na9": "Préparation de produits à base de viande",
        "description": "- la production de viandes séchées, salées ou fumées - la production de produits de charcuterie: • saucisses, salamis, boudins, andouillettes, cervelas, mortadelles, pâtés, rillettes, jambons cuits "
    },
    {
        "cls_na9": "10.20",
        "lib_na9": "Transformation et conservation de poisson, de crustacés et de mollusques",
        "description": "- la préparation et la conservation de poissons, de crustacés et de mollusques: congélation, surgélation, séchage, cuisson, fumage, salage, saumurage, mise en conserve, etc. - la préparation de produits à base de poissons, de crustacés et de mollusques: filets de poisson, laitances, caviar et ses succédanés, etc. - la production de farines de poissons destinées à l’alimentation humaine ou animale - la production de farines et de solubles à partir de poissons et d’autres animaux aquatiques impropres à la consommation humaine - les activités des navires se livrant uniquement à la transformation et à la conservation du poisson - la transformation d’algues marines "
    },
    {
        "cls_na9": "10.31",
        "lib_na9": "Transformation et conservation de pommes de terre",
        "description": "- la transformation et la conservation de pommes de terre: • la production de pommes de terre précuites surgelées • la production de purée de pommes de terre déshydratées • la production de produits apéritifs à base de pommes de terre • la production de pommes chips à base de pommes de terre • la fabrication de farines et de fécules de pommes de terre - l’épluchage industriel de pommes de terre    "
    },
    {
        "cls_na9": "10.32",
        "lib_na9": "Préparation de jus de fruits et légumes",
        "description": "- la préparation de jus de fruits et légumes - la production de concentrés à partir de fruits et légumes frais  82 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "10.33",
        "lib_na9": "Transformation et conservation de tomates",
        "description": "- la production de produits alimentaires principalement à base de tomates, à l’exception des plats préparés, frais, surgelés ou en conserve - la conservation de tomates: mise en conserve, séchage, immersion dans l’huile ou le vinaigre, congélation, etc. - la production de préparations alimentaires à base de tomates (concentré de tomates…) - la préparation d’aliments préparés périssables à base de tomates, tels que: • tomates pelées et coupées "
    },
    {
        "cls_na9": "10.34",
        "lib_na9": "Transformation et conservation d'autres légumes, sauf tomates",
        "description": "- la production de produits alimentaires principalement à base d'autres légumes, à l’exception des plats préparés, frais, surgelés ou en conserve - la conservation d'autres légumes: mise en conserve, séchage, immersion dans l’huile ou le vinaigre, congélation, etc. - la production de préparations alimentaires à base d'autres légumes - la préparation d’aliments préparés périssables à base d'autres légumes, tels que: • salades et salades mélangées, emballées • légumes pelés et coupés • tofu (caillé de soja) "
    },
    {
        "cls_na9": "10.39",
        "lib_na9": "Transformation et conservation de fruits",
        "description": "- la préparation d’aliments préparés périssables à base de fruits, tels que: • salades de fruits emballées - la production de produits alimentaires principalement à base de fruits, à l’exception des plats préparés, frais, surgelés ou en conserve - la conservation des fruits (y compris à coque): congélation, séchage, immersion dans l’huile ou le vinaigre, mise en conserve, etc. - la production de préparations alimentaires à base de fruits - la fabrication de confitures, de marmelades et de gelées - le grillage et le décorticage des fruits à coque - la fabrication d’aliments et de pâtes à base de fruits à coque  83     - la conservation dans le sucre de fruits (y compris à coque), voir 10.82 - la préparation de plats préparées à base de fruits, voir 10.85 - la production de concentrés artificiels, voir 10.89 10.4 Fabrication d’huiles et graisses végétales et animales Ce groupe comprend la fabrication d’huiles et de graisses brutes et raffinées d’origine végétale ou animale, à l’exception de la production et du raffinage du saindoux et d’autres graisses animales comestibles. "
    },
    {
        "cls_na9": "10.41",
        "lib_na9": "Fabrication d'huiles d'olives",
        "description": "- la production d’huiles d'olives de toutes natures (brutes, vierges et raffinées) - la fabrication d'huiles de grignons brutes ou raffinées "
    },
    {
        "cls_na9": "10.42",
        "lib_na9": "Fabrication d'huiles et graisses brutes",
        "description": "- la production d’huiles végétales brutes: huiles de soja, de palme, de tournesol, de coton, de navette, de colza, de moutarde, de lin, etc. - la production de farines de graines, de noix ou d’amandes oléagineuses, non déshuilées - la production d’huiles et de graisses animales non comestibles - l’extraction d’huiles de poissons ou de mammifères marins - la production de linters de coton, de tourteaux et d’autres résidus de la production d’huile "
    },
    {
        "cls_na9": "10.43",
        "lib_na9": "Fabrication d'huiles et graisses raffinées",
        "description": "- la production d’huiles végétales raffinées: huiles de soja, de palme, de tournesol, de coton, de navette, de colza, de moutarde, de lin, etc. - le traitement des huiles végétales: soufflage, cuisson, déshydratation, hydrogénation, etc. "
    },
    {
        "cls_na9": "10.44",
        "lib_na9": "Fabrication de margarine et graisses comestibles similaires",
        "description": "- la fabrication de margarines - la fabrication de mélanges et d’autres pâtes à tartiner similaires - la fabrication de graisses composées pour la cuisson des aliments    10.5 Fabrication de produits laitiers  84  "
    },
    {
        "cls_na9": "10.51",
        "lib_na9": "Exploitation de laiteries et fabrication de fromage",
        "description": "- la production de laits liquides frais, pasteurisés, stérilisés, homogénéisés et/ou ayant subi un chauffage ultracourt - la production de boissons à base de lait - la production de crèmes de laits liquides frais, pasteurisées, stérilisées, homogénéisées - la fabrication de laits en poudre ou de laits concentrés, édulcorés ou non I n st i t u t N a t i o nal d e la S ta tis tiq u e    - la production de lait ou de crème sous forme solide - la production de beurre - la production de yoghourt - la production de fromages ou de caillebotte - la production de lactosérum - la production de caséine ou de lactose "
    },
    {
        "cls_na9": "10.52",
        "lib_na9": "Fabrication de glaces et sorbets",
        "description": "- la production de crème glacée et d’autres glaces de consommation telles que les sorbets "
    },
    {
        "cls_na9": "10.61",
        "lib_na9": "Meunerie",
        "description": "- la fabrication de farine de froment (blé) ou de méteil - la fabrication de farine d'autres céréales, de légumes secs ou de tubercules - la fabrication de farines préparées pour la boulangeries, la patisserie, etc. - le service de cuisson et de mouture "
    },
    {
        "cls_na9": "10.62",
        "lib_na9": "Fabrication de produits amylacés",
        "description": "- la fabrication de produits amylacés à partir de riz, de pommes de terre, de maïs, etc. - la mouture du maïs par voie humide - la fabrication de glucose, de sirop de glucose, de maltose, d’inuline, etc. - la fabrication de gluten - la fabrication de tapioca et de succédanés du tapioca à partir d’amidon - la fabrication d’huile de maïs "
    },
    {
        "cls_na9": "10.69",
        "lib_na9": "Autres activités de travail des grains",
        "description": "- la production de gruaux, de semoules ou pellets, de blé, de seigle, d’avoine, de maïs ou d’autres grains de céréales - la production de riz décortiqué, blanchi ou transformé - la fabrication de céréales soufflées, grillées ou autrement transformées (pour le petit déjeuner notamment) "
    },
    {
        "cls_na9": "10.71",
        "lib_na9": "Boulangerie et boulangerie-pâtisserie",
        "description": "- la fabrication à caractère artisanal associée à la vente au détail de pain, de viennoiserie (croissants par exemple) et de pâtisserie fraîche - la fabrication à caractère industriel de pains, de viennoiserie (croissants par exemple) et de patisserie fraîche (y compris surgelés) - la fabrication de pâtes et pâtons surgelés destinés à la cuisson - la cuisson associée à la vente au détail de produits de boulangerie et de viennoiseries, sans possibilité de consommer sur place "
    },
    {
        "cls_na9": "10.72",
        "lib_na9": "Pâtisserie (exclusive)",
        "description": "- la fabrication à caractére artisanal associé à la vente au détail de pâtisseries fraîches y compris beignets, etc., sans vente de pains "
    },
    {
        "cls_na9": "10.73",
        "lib_na9": "Fabrication de biscuits, biscottes et pâtisseries de conservation",
        "description": "- la fabrication de biscottes, de biscuits et autres produits de boulangerie secs - la fabrication de pâtisseries et de gâteaux de conservation - la fabrication de produits apéritifs et d’autres produits similaires (petits biscuits, bretzels, etc.), sucrés ou salés "
    },
    {
        "cls_na9": "10.74",
        "lib_na9": "Fabrication de pâtes alimentaires et couscous",
        "description": "- la fabrication de pâtes alimentaires, même cuites ou farcies, telles que les macaronis et les nouilles - la fabrication de couscous - la fabrication de produits en conserve ou surgelés à base de pâtes "
    },
    {
        "cls_na9": "10.81",
        "lib_na9": "Fabrication de sucre",
        "description": "- la fabrication ou le raffinage du sucre (saccharose) et des succédanés du sucre obtenus à partir de jus de canne, de betterave, d’érable et de palme - la fabrication de sirops de sucre - la fabrication de mélasse - la production de sirop et de sucre d’érable "
    },
    {
        "cls_na9": "10.82",
        "lib_na9": "Fabrication de cacao, chocolat et de produits de confiserie",
        "description": "- la fabrication de cacao, de beurre de cacao, de graisse de cacao et d’huile de cacao - la fabrication du chocolat et de confiseries au chocolat - la fabrication de confiseries: caramels, cachous, nougats, fondants, chocolat blanc - la fabrication de gommes à mâcher (chewing-gums) - la conservation dans le sucre de fruits (y compris à coque), d’écorces de fruits et d’autres parties de plantes - la fabrication de dragées et pastilles "
    },
    {
        "cls_na9": "10.83",
        "lib_na9": "Transformation du thé et du café",
        "description": "- la décaféination et la torréfaction du café - la fabrication de produits à base de café: • café moulu • café soluble • extraits et concentrés de café - la fabrication de succédanés du café - le mélange du thé et du maté - la fabrication d’extraits et de préparations à base de thé ou de maté - le conditionnement du thé, y compris en sachets - la fabrication de tisanes à base de plantes (menthe, verveine, camomille, etc.) "
    },
    {
        "cls_na9": "10.84",
        "lib_na9": "Fabrication de condiments et assaisonnements",
        "description": "- la fabrication d’épices, de sauces et de condiments: • mayonnaise • farine de moutarde • moutarde préparée, etc. - la fabrication du vinaigre  87     - la transformation du sel pour le rendre propre à la consommation humaine, par exemple: en sel iodé "
    },
    {
        "cls_na9": "10.85",
        "lib_na9": "Fabrication de plats préparés",
        "description": "sont élaborés dans un but de conservation, par congélation ou mise en conserve, et sont habituellement emballés et étiquetés pour la revente. Cette classe ne comprend donc pas la préparation de plats pour consommation immédiate, comme dans les restaurants. Ces plats sont élaborés à partir d’au moins deux produits distincts (à l’exception de l’assaisonnement, etc.). - la fabrication de plats préparés à base de viande ou de volaille - la fabrication de plats à base de poisson, y compris les plats de poissons et frites - la production de plats à base de légumes - la fabrication de pizzas surgelées ou conservées d’une autre manière - la fabrication de plats locaux et nationaux "
    },
    {
        "cls_na9": "10.86",
        "lib_na9": "Fabrication d'aliments homogénéisés et diététiques",
        "description": "- la fabrication de denrées alimentaires destinées à une alimentation particulière: • préparations pour nourrissons • laits de suite et autres aliments du deuxième âge • aliments pour bébés • denrées alimentaires à valeur énergétique faible ou réduite destinées à un contrôle du poids • aliments diététiques destinés à des fins médicales spéciales • aliments pauvres en sodium, y compris les sels diététiques hyposodiques ou asodiques • aliments sans gluten • aliments adaptés à une dépense musculaire intense, surtout pour les sportifs • aliments destinés à des personnes affectées d’un métabolisme glucidique perturbé (diabétiques)    "
    },
    {
        "cls_na9": "10.89",
        "lib_na9": "Fabrication d'autres produits alimentaires n.c.a.",
        "description": "- la fabrication de potages ou de bouillons - la fabrication de succédanés du miel et de sucres et mélasses caramélisés - la préparation d’aliments préparés périssables, tels que: • sandwiches • pizzas fraîches (non cuites) - la fabrication de compléments alimentaires et d’autres produits alimentaires n.c.a. - la fabrication de levures - la fabrication d’extraits et de jus de viandes, de poissons, de crustacés et de mollusques - la fabrication de succédanés du lait ou du fromage I n st i t u t N a t i o nal d e la S ta tis tiq u e    - la production d’ovoproduits et d’ovalbumine - la production de concentrés artificiels - la fabrication des arômes et des colorants alimentaires "
    },
    {
        "cls_na9": "10.91",
        "lib_na9": "Fabrication d'aliments pour animaux de ferme",
        "description": "- la fabrication de produits pour l’alimentation des animaux de ferme, y compris les aliments concentrés pour animaux et les aliments de complément - la préparation de produits non mélangés pour l’alimentation des animaux de ferme - le traitement de déchets d’abattoir pour produire des aliments pour animaux "
    },
    {
        "cls_na9": "10.92",
        "lib_na9": "Fabrication d'aliments pour animaux de compagnie",
        "description": "- la fabrication d’aliments préparés pour animaux de compagnie, y compris les chiens, les chats, les oiseaux, les poissons, etc. - le traitement de déchets d’abattoir pour produire des aliments pour animaux "
    },
    {
        "cls_na9": "11.01",
        "lib_na9": "Production de boissons alcooliques distillées",
        "description": "- la fabrication de boissons alcoolisées distillées propres à la consommation: whisky, cognac, gin, liqueurs etc. - la fabrication de boissons mélangées avec des boissons alcoolisées distillées - le mélange de spiritueux distillés - la fabrication dalcools neutres  89     - la fabrication d’alcool éthylique de synthèse, voir 20.14 - la fabrication d’alcool éthylique de fermentation, voir 20.14 - l’embouteillage et l’étiquetage simples, voir 46.34 (dans le cadre du commerce de gros) et 82.92 (pour le compte de tiers) "
    },
    {
        "cls_na9": "11.02",
        "lib_na9": "Production de vin (de raisin)",
        "description": "- la production de vins - la production de vins mousseux - la production de vins à partir de moût de raisin concentré - le mélange, la purification et l’embouteillage du vin - la fabrication de vin sans alcool ou faiblement alcoolisé "
    },
    {
        "cls_na9": "11.03",
        "lib_na9": "Fabrication de cidre et de vins de fruits",
        "description": "- la fabrication de boissons alcoolisées fermentées, mais non distillées: saké, cidre, poiré et autres vins de fruits - la fabrication d’hydromel et de boissons mélangées contenant des vins de fruits "
    },
    {
        "cls_na9": "11.04",
        "lib_na9": "Production d'autres boissons fermentées non distillées",
        "description": "- la fabrication de vermouths et de boissons similaires "
    },
    {
        "cls_na9": "11.05",
        "lib_na9": "Fabrication de bière",
        "description": "- la fabrication de liqueurs de malt, telles que la bière, l’ale, le porter et le stout - la fabrication de bières sans alcool ou faiblement alcoolisées "
    },
    {
        "cls_na9": "11.06",
        "lib_na9": "Fabrication de malt",
        "description": ""
    },
    {
        "cls_na9": "11.07",
        "lib_na9": "Industrie des eaux minérales et gazeuses",
        "description": "- la production et la mise en bouteille des eaux de sources ou des eaux minérales    "
    },
    {
        "cls_na9": "11.08",
        "lib_na9": "Production de boissons rafraîchissantes",
        "description": "la fabrication de boissons non alcoolisées (à l’exception de la bière et du vin sans alcool): - la production de boissons rafraîchissantes: • boissons non alcoolisées édulcorées et/ou aromatisées: citronnade, orangeade, cola, boissons à base de fruits, sirops de fruits tonics, etc. - la production d'appéritifs sans alcool "
    },
    {
        "cls_na9": "12.00",
        "lib_na9": "Fabrication de produits à base de tabac",
        "description": "- la fabrication de produits à base de tabac et de succédanés du tabac: cigarettes, tabac à fine coupe, cigares, tabacs à pipe, tabacs à mâcher, tabacs à priser - la fabrication de tabacs \"homogénéisés\" ou \"reconstitués\" - l’écôtage et le resséchage du tabac "
    },
    {
        "cls_na9": "13.10",
        "lib_na9": "Préparation de fibres textiles et filature",
        "description": "soie, laine, fibres d’origine animale ou végétale ou fibres artificielles ou synthétiques, papier ou verre, etc. - les activités de préparation des fibres textiles: • tirage et lavage de la soie • dégraissage et carbonisage de la laine et teinture de la laine de tonte • cardage et peignage de tout type de fibres d’origine animale, végétale ou de fibres artificielles ou synthétiques - la filature et la fabrication de filés et de fils pour le tissage ou la couture, pour la vente ou pour traitement ultérieur • le teillage du lin • la texturation, le retordage, l’assemblage à torsion zéro, le câblage et le foulardage de fils de filaments synthétiques ou artificiels - la fabrication de fils de papier    "
    },
    {
        "cls_na9": "13.21",
        "lib_na9": "Tissage industriel",
        "description": "animale ou végétale, fibres artificielles ou synthétiques, papier ou verre, etc. - la fabrication de tissus de type cotonnier, de type lainier, de type peigné ou de type soie, y compris en mélanges ou en fibres artificielles ou en fibres synthétiques (polypropylène etc.) - la fabrication d’autres tissus de lin, de ramie, de chanvre, de jute, de fibres libériennes et de fibres spéciales - la fabrication de velours et de peluches tissés ou de tissus de chenille, de tissus bouclés du genre éponge, de tissus à point de gaze, etc. - la fabrication de tissus de fibres de verre - la fabrication de fils de carbone tissés ou d’aramide - la fabrication d’imitations de fourrure par tissage "
    },
    {
        "cls_na9": "13.29",
        "lib_na9": "Tissage traditionnel",
        "description": "(destinés à l’ameublement, à la décoration intérieure ou à l’habillement). Les matières premières peuvent varier: fibres d’origine animale (laine, soie, poils de chèvre, poils de chameaux, etc.) ou végétale - la fabrication de tissus traditionnels de type cotonnier, lainier, peigné ou de soie - la fabrication traditionnelle d’autres tissus de lin, de ramie, de chanvre et de jute "
    },
    {
        "cls_na9": "13.30",
        "lib_na9": "Ennoblissement textile",
        "description": "l’ennoblissement de textiles et d’articles vestimentaires, c’est-à-dire le délavage, le blanchiment, la teinture, l’apprêtage et les activités similaires.    - le blanchiment et la teinture de fibres textiles, de fils, de tissus et d’articles en textile, y compris les vêtements. - l’apprêtage, le séchage, le vaporisage, le décatissage, le stoppage, le sanforisage, le mercerisage de textiles et d’articles textiles, y compris les vêtements  92  - la décoloration de jeans - le plissage et les opérations similaires effectuées sur des textiles - l’imperméabilisation, l’enduction, le caoutchoutage ou l’imprégnation de vêtements achetés - l’impression sérigraphique sur textiles et vêtements "
    },
    {
        "cls_na9": "13.41",
        "lib_na9": "Fabrication industrielle de tapis et moquettes",
        "description": "- la fabrication de revêtements de sols en matières textiles: • tapis, carpettes, paillassons, carreaux, etc. - la fabrication de revêtements de sols en feutres aiguilletés "
    },
    {
        "cls_na9": "13.42",
        "lib_na9": "Fabrication artisanale de tapis",
        "description": "- la fabrication artisanale de tapis à point noué, sur métier vertical - la fabrication artisanale de tissage ras, sur métier vertical: klim, mergoum, ktif, etc. "
    },
    {
        "cls_na9": "13.91",
        "lib_na9": "Fabrication d'étoffes à mailles",
        "description": "- la fabrication et la transformation, au sein de la même unité, d’étoffes à mailles: • velours, peluches et étoffes bouclées • tissus des types utilisés pour filets, rideaux et vitrages, tricotés sur métier Rachel ou sur des métiers similaires • autres étoffes à mailles - la fabrication d’imitations de fourrure par tricotage "
    },
    {
        "cls_na9": "13.92",
        "lib_na9": "Fabrication indusrielle de linge domestique, d'articles d'ameublement et de literie",
        "description": "- la fabrication indusrielle de linge domestique, d'articles d'ameublement et de literie en toutes matières textiles, y compris en étoffes à mailles: • couvertures • linge de lit, de table, de toilette ou de cuisine • couvre-pieds, édredons, coussins, poufs, oreillers, sacs de couchage, etc. - la fabrication d’articles confectionnés pour l’ameublement: • rideaux, tours de lit, stores, couvre-lits, housses pour machines ou mobilier, etc.  93     - la fabrication de la partie textile des couvertures chauffantes électriques "
    },
    {
        "cls_na9": "13.93",
        "lib_na9": "Fabrication industrielle d'autres articles textiles, sauf habillement",
        "description": "- la fabrication industrielle d’articles confectionnés autres que linge domestique, articles d'ameublement et de literie en toutes matières textiles, y compris en étoffes à mailles: • bâches, tentes, articles de campement, voiles pour embarcations, stores d’extérieur, housses amovibles pour voitures, machines ou mobilier etc. • drapeaux, banderoles, bannières, etc. • chiffons à épousseter, lavettes et articles similaires, gilets de sauvetage, parachutes, etc. "
    },
    {
        "cls_na9": "13.94",
        "lib_na9": "Fabrication de ficelles, cordes et filets",
        "description": "- la fabrication de ficelles, de cordes et de cordages en fibres textiles, lames ou formes similaires, même imprégnés, enduits, recouverts ou gainés de caoutchouc ou de matière plastique - la fabrication de filets à mailles nouées obtenus à partir de ficelles, de cordes ou de cordages - la fabrication d’articles de corderie et de filets: filets de pêche, défenses de bateaux, coussins de déchargement, élingues de chargement, cordes ou cordages munis d’anneaux métalliques, etc. "
    },
    {
        "cls_na9": "13.95",
        "lib_na9": "Fabrication de non-tissés, sauf habillement",
        "description": "les divisions 13 ou 14, ainsi qu’un grand nombre de processus et une grande variété de produits confectionnés.    "
    },
    {
        "cls_na9": "13.96",
        "lib_na9": "Fabrication d'autres textiles techniques et industriels",
        "description": "- la fabrication d’articles de rubanerie, y compris les rubans sans trame, en fils ou fibres parallélisés et encollés - la fabrication d’étiquettes, d’écussons, etc. - la fabrication d’ouvrages de passementerie et d’articles ornementaux analogues: tresses, glands, pompons, etc. - la fabrication de tissus imprégnés, enduits ou recouverts de matière plastique ou stratifiés avec de la matière plastique - la fabrication de filés métalliques et de fils métallisés, même guipés, de fils et de cordes de caoutchouc recouverts de textiles, de fils textiles ou de lames recouverts, imprégnés, enduits ou gainés de caoutchouc ou de matière plastique - la fabrication de nappes tramées pour pneumatiques obtenues à partir de fils synthétiques ou artificiels à haute ténacité - la fabrication d’autres tissus traités ou enduits: bougrans et tissus raidis similaires, tissus enduits de colle ou de matières amylacées - la fabrication d’articles divers en matières textiles: mèches, manchons à incandescence et étoffes tubulaires servant à leur fabrication - la fabrication d’étoffes tubulaires, tuyaux pour pompes, courroies transporteuses ou de transmission (renforcées ou non de métal ou d’autres matériaux), gazes et toiles à bluter, étamines - la fabrication de garnitures pour automobiles - la fabrication de toiles préparées pour la peinture, de toiles à calquer ou transparentes pour le dessin "
    },
    {
        "cls_na9": "13.97",
        "lib_na9": "Fabrication artisanale d'articles textiles traditionnels",
        "description": "- la fabrication artisanale de tapisseries murales à usage décoratif sur métiers à tisser verticaux - la fabrication artisanale de couvertures (farachia, battania, ouazra, etc.) (unies, tissées avec motifs ou brodées), destinées à la literie, en coton, laine ou soie. - la fabrication artisanale de rideaux pour murs et fenêtres - la fabrication artisanale d'autres articles textiles traditionnels: • linge de maison tel que linge de lit, de table, de toilette ou de cuisine • édredons, couettes, coussins, poufs, oreillers, sacs de couchage etc. • draperies, stores, couvre-lits, housses pour machines et mobilier, etc. • drapeaux, bannières, banderoles et fanions "
    },
    {
        "cls_na9": "13.99",
        "lib_na9": "Fabrication d'autres textiles n.c.a.",
        "description": "- la fabrication de feutre - la fabrication de tulles, de tulles-bobinots et d’autres tissus à mailles nouées, de dentelles en pièces, en bandes ou en motifs, de broderies - la fabrication de ruban adhésif pour vêtements - la fabrication de lacets de chaussures en matières textiles - la fabrication de houppes à poudrer et de gants "
    },
    {
        "cls_na9": "14.11",
        "lib_na9": "Fabrication de vêtements en cuir",
        "description": "- la fabrication de vêtements en cuir naturel ou en simili-cuir, y compris d’équipements du travail en cuir, tels que les tabliers de soudeur en cuir "
    },
    {
        "cls_na9": "14.12",
        "lib_na9": "Fabrication de vêtements de travail",
        "description": ""
    },
    {
        "cls_na9": "14.13",
        "lib_na9": "Fabrication de vêtements sur mesure",
        "description": "- la fabrication de vêtements modernes,exécutés sur mesure (par exemple trois essayages) par des tailleurs, couturiers et couturières - la fabrication d’éléments entrant dans la confection des produits cités "
    },
    {
        "cls_na9": "14.14",
        "lib_na9": "Fabrication industrielle de vêtements de dessus",
        "description": "- la fabrication industrielle d’autres vêtements de dessus pour hommes, femmes et enfants à partir de tissus, d’étoffes à mailles, de non-tissés, etc.: • manteaux, costumes, complets, tailleurs, ensembles, vestes, vestons, pantalons, jupes, etc. - la fabrication industrielle d’éléments entrant dans la confection des produits cités "
    },
    {
        "cls_na9": "14.15",
        "lib_na9": "Fabrication artisanale de vêtements traditionnels",
        "description": "- la fabrication de jebba (vêtement ample qui constitue l’élément essentiel de l’habit traditionnel masculin) ainsi que ses accessoires tels que: Farmla, Bedya, Menten, Serouel, Qamis et Burnous, etc. - la confection d’habits traditionnels ou de cérémonie pour femmes : • habits de mariée: kesswa, tarawoun, etc. • habits de soirée: futa et blouza, etc. • serouels, farmlas, tejs, chamla, hassara, taguia, etc. Cette classe ne comprend pas : - la fabrication de passementerie, voir 13.96 - la haute couture, voir 14.13 "
    },
    {
        "cls_na9": "14.16",
        "lib_na9": "Fabrication de vêtements de dessous",
        "description": "- la fabrication de vêtements de dessous et de nuit pour hommes, femmes et enfants à partir de tissus, d’étoffes à mailles, de dentelles, etc.: • chemises, chemisiers, chemisettes, slips, caleçons, pyjamas, chemises de nuit, robes de chambre, soutiens-gorge, corsets, etc. "
    },
    {
        "cls_na9": "14.19",
        "lib_na9": "Fabrication d'autres vêtements et accessoires",
        "description": "- la fabrication de vêtements pour bébés, de survêtements de sport, de combinaisons et d’ensembles de ski, de maillots, de culottes et de slips de bain, etc.  96 I n st i t u t N a t i o nal d e la S ta tis tiq u e   - la fabrication de chapeaux et de bonnets - la fabrication d’autres accessoires du vêtement: gants, ceintures, châles, cravates, foulards, résilles et filets à cheveux, etc. - la fabrication de chapeaux en fourrure - la fabrication de chaussures en matières textiles, sans semelle rapportée - la fabrication d’éléments entrant dans la confection des produits cités "
    },
    {
        "cls_na9": "14.20",
        "lib_na9": "Fabrication d'articles en fourrure",
        "description": "- la fabrication d’articles en fourrure: • vêtements et accessoires du vêtement en pelleteries • assemblages de pelleteries tels que peaux dites \"allongées\", nappes, nappettes, carrés et bandes, etc. • divers articles en fourrure: tapis, poufs non garnis, peaux à polir pour l’industrie "
    },
    {
        "cls_na9": "14.31",
        "lib_na9": "Fabrication d'articles chaussants à mailles",
        "description": "- la fabrication d’articles chaussants, y compris les chaussettes, les bas et les collants "
    },
    {
        "cls_na9": "14.39",
        "lib_na9": "Fabrication d'autres articles à mailles",
        "description": "- la fabrication d’articles vestimentaires confectionnés en toutes matières textiles, y compris d’articles mis directement en forme au tricot ou au crochet: pull-overs, cardigans, chandails, gilets et articles similaires à mailles "
    },
    {
        "cls_na9": "15.11",
        "lib_na9": "Apprêt et tannage des cuirs; préparation et teinture des fourrures",
        "description": "- le tannage, la teinture et la préparation des peaux - la fabrication de cuirs et de peaux chamoisés, parcheminés, vernis ou métallisés - la fabrication de cuirs reconstitués - le drayage, le corroyage, le tannage, le blanchiment, le tondage, l’épluchage et la teinture des pelleteries et des peaux non épilées "
    },
    {
        "cls_na9": "15.12",
        "lib_na9": "Fabrication d'articles de voyage, de maroquinerie et de sellerie",
        "description": "- la fabrication d’articles de voyage, d’articles de maroquinerie et d’articles similaires en cuir naturel, en cuir reconstitué ou en tout autre matériau, par exemple: les matières plastiques, les matières textiles, les fibres vulcanisées ou le carton, pour autant que la technologie utilisée soit identique à celle employée pour le cuir - la fabrication d’articles de sellerie et de bourrellerie - la fabrication de bracelets de montres autres qu’en métal (par exemple: tissu, cuir, matières plastiques) - la fabrication d’articles divers en cuir naturel ou reconstitué: courroies, joints, etc. - la fabrication de lacets de chaussures en cuir - la fabrication de fouets et de cravaches "
    },
    {
        "cls_na9": "15.21",
        "lib_na9": "Fabrication indusrielle de chaussures",
        "description": "- la fabrication industrielle de chaussures pour tous usages, en toutes matières, par tous procédés, y compris le moulage (voir ci-après pour les exceptions) - la fabrication de parties en cuir de chaussures: dessus et parties de dessus, semelles extérieures et intérieures, talons, etc. - la fabrication de guêtres, de jambières et d’articles similaires  98  "
    },
    {
        "cls_na9": "15.22",
        "lib_na9": "Fabrication artisanale de chaussures traditionnelles",
        "description": "- la fabrication artisanale de chaussures traditionnelles en cuir destinées à différents usages: quotidien, cérémonie et d’intérieur tels que balgha, kontra, sabbat, sandales, t’mak, kabkab, affess (en poils de chèvre ou de chameau), rihya, etc. I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "16.10",
        "lib_na9": "Sciage et rabotage du bois",
        "description": "- le sciage, le rabotage et le façonnage du bois - la fabrication de bois tranchés, déroulés ou dédossés - la fabrication de traverses en bois pour voies ferrées - la fabrication de lames pour parquets non assemblées - la fabrication de laine (paille) de bois, de farine de bois, de bois en plaquettes ou en particules - le séchage du bois - l’imprégnation ou le traitement chimique du bois au moyen d’agents de conservation ou d’autres produits "
    },
    {
        "cls_na9": "16.21",
        "lib_na9": "Fabrication de placage et de panneaux de bois",
        "description": "- la fabrication de feuilles de placage suffisamment minces pour la production de contreplaqués ou d’autres utilisations • polies, teintes, enduites, imprégnées, renforcées (avec dos en papier ou en tissu) • fabriquées sous la forme de motifs - la fabrication de contreplaqués, de bois plaqués et de panneaux - la fabrication de panneaux à particules orientées et d’autres panneaux de particules - la fabrication de panneaux de fibres de densité moyenne (MDF) et autres panneaux de fibres - la fabrication de bois densifié - la fabrication de lamellé collé "
    },
    {
        "cls_na9": "16.22",
        "lib_na9": "Fabrication de parquets assemblés",
        "description": "- la fabrication de blocs, lames, etc., pour parquets, assemblés en panneaux "
    },
    {
        "cls_na9": "16.23",
        "lib_na9": "Fabrication de charpentes et d'autres menuiseries",
        "description": "- la fabrication d’articles en bois destinés principalement à l’industrie du bâtiment: • poutres, poutrelles, chevrons, solives • lamellé collé et armatures en bois et bâtiments en bois préfabriqués • portes, fenêtres, rideaux et leurs encadrements, avec ou sans accessoires métalliques, tels que serrures et ferrures • escaliers, rampes d’escaliers • bardeaux, baguettes et moulures - la fabrication de bâtiments préfabriqués ou d’éléments de ces bâtiments, en bois, par exemple: saunas - la fabrication de caravanes - la fabrication de cloisons en bois (à l’exception des cloisons mobiles) "
    },
    {
        "cls_na9": "16.24",
        "lib_na9": "Fabrication d'emballages en bois",
        "description": "- la fabrication de caisses, caissettes, cageots, cylindres et emballages similaires, en bois - la fabrication de palettes simples, caisses-palettes et autres plateaux de chargement, en bois - la fabrication de tonneaux, cuves, baquets et autres ouvrages de tonnellerie, en bois - la fabrication de tambours pour câbles, en bois "
    },
    {
        "cls_na9": "16.25",
        "lib_na9": "Fabrication industrielle d'objets divers en bois",
        "description": "- la fabrication d’objets divers en bois: • manches et montures pour outils, brosses, balais • formes, embauchoirs et tendeurs pour chaussures, cintres pour vêtements • articles de ménage et ustensiles de cuisine • statuettes et objets d’ornement, bois marquetés et bois incrustés • coffrets, écrins et étuis pour bijouterie ou orfèvrerie et ouvrages similaires • canettes, busettes, bobines pour filatures et tissage et pour fil à coudre et articles similaires, en bois tourné • autres articles en bois - la fabrication de bûches et de pellets pour la production d’énergie, fabriqués à partir de bois pressés ou de produits de substitution (marc de café, etc.) - la fabrication de parties de chaussures en bois (par exemple: talons et formes) - la fabrication de manches de parapluies, de cannes et d’articles similaires - la fabrication de blocs destinés à la fabrication de pipes    "
    },
    {
        "cls_na9": "16.29",
        "lib_na9": "Fabrication artisanale d'objets divers en bois, d'objets en liège, vannerie et sparterie",
        "description": "- la fabrication artisanale d'objets divers en bois sculptés, ajourés et tournés: • articles de ménage et ustensiles de cuisine, artisanaux • statuettes et objets d’ornement, bois marquetés et bois incrustés, artisanaux • coffrets, écrins et étuis pour bijouterie ou orfèvrerie et ouvrages similaires, artisanaux • miroirs en bois, encadrements pour photos et tableaux, encadrements pour des toiles d’artistes • autres articles en bois, artisanaux - la fabrication artisanale d'objets divers et d'articles décoratifs en liège naturel ou aggloméré: articles de bureau, bibelots, coffrets, pots pour plantes, etc. - le tressage et le tissage des objets et d’articles d’utilité ou de décoration en alfa, feuille de palmier, rotin, l'osier et les fibres fines (chanvre, barbita, dis, rcheg, telgua, etc.), jonc et luffa la sculpture, le tournage, la marqueterie, l'ajourage sur bois "
    },
    {
        "cls_na9": "17.11",
        "lib_na9": "Fabrication de pâte à papier",
        "description": "- la fabrication de pâtes à papier blanchies, mi-blanchies ou écrues par des procédés mécaniques, chimiques (pâtes à dissoudre ou autres) ou mi-chimiques - la production de pulpe de linters de coton - le désencrage de vieux papiers et la fabrication de pâtes à papier à partir de déchets de papier "
    },
    {
        "cls_na9": "17.12",
        "lib_na9": "Fabrication de papier et de carton",
        "description": "- la fabrication de papiers et de cartons destinés à faire l’objet d’une transformation ultérieure par l’industrie    - la transformation ultérieure des papiers et des cartons • le couchage, l’enduction et l’imprégnation des papiers et des cartons • la fabrication de papiers crêpés ou plissés • la fabrication de produits stratifiés et de bandes, si ces produits sont stratifiés avec du papier ou du carton - la fabrication de papier à la main - la fabrication de papier journal et de papier pour l’impression ou l’écriture - la fabrication d’ouate de cellulose et de nappes en fibres de cellulose - la fabrication de papiers carbone et de papiers stencil en rouleaux ou en larges feuilles  101     "
    },
    {
        "cls_na9": "17.21",
        "lib_na9": "Fabrication de papier et carton ondulés et d'emballages en papier ou en carton",
        "description": "- la fabrication de papiers et de cartons ondulés - la fabrication d’emballages en papier ou en carton ondulé - la fabrication de cartonnages pliants - la fabrication d’emballages en carton homogène - la fabrication d’autres emballages en papier et en carton - la fabrication de sacs et de sachets en papier - la fabrication de cartonnages de bureau et d’articles similaires "
    },
    {
        "cls_na9": "17.22",
        "lib_na9": "Fabrication d'articles en papier à usage sanitaire ou domestique",
        "description": "- la fabrication d’articles en papier ou en ouate de cellulose, à usage sanitaire et domestique: • serviettes à démaquiller • mouchoirs, essuie-mains, serviettes de table • papier hygiénique • serviettes et tampons hygiéniques, couches pour bébés • plateaux, plats, tasses et gobelets - la fabrication d’ouates de matières textiles et d’articles en ces ouates: serviettes et tampons hygiéniques "
    },
    {
        "cls_na9": "17.23",
        "lib_na9": "Fabrication d'articles de papeterie",
        "description": "- la fabrication de papiers prêts à l’emploi pour l’écriture et l’imprimerie - la fabrication de papiers pour imprimantes prêts à l’emploi - la fabrication de papiers dits \"autocopiants\" prêts à l’emploi - la fabrication de stencils complets et de papiers carbone prêts à l’emploi - la fabrication de papiers gommés ou adhésifs - la fabrication d’enveloppes et de cartes-lettres - la fabrication d’articles de papeterie à usage scolaire et commercial (cahiers, classeurs, registres, livres comptables, formulaires commerciaux, etc.), dès lors que l’information imprimée n’est pas la finalité principale - la fabrication de boîtes, de pochettes et de présentations similaires renfermant un assortiment d’articles de correspondance "
    },
    {
        "cls_na9": "17.24",
        "lib_na9": "Fabrication de papiers peints",
        "description": "- la fabrication de papiers peints et de revêtements muraux similaires, y compris les papiers peints enduits de vinyle et textiles  102 I n st i t u t N a t i o nal d e la S ta tis tiq u e   "
    },
    {
        "cls_na9": "17.29",
        "lib_na9": "Fabrication d'autres articles en papier ou en carton",
        "description": "- la fabrication d’étiquettes - la fabrication de papier-filtre et de carton-filtre - la fabrication de tambours, de bobines, de busettes, de canettes, etc., en papier et en carton - la fabrication d’emballages pour œufs et d’autres articles moulés en pâte à papier, pour l’emballage - la fabrication de gadgets en papier - la fabrication de cartes en papier ou en carton pour mécaniques Jacquard "
    },
    {
        "cls_na9": "18.11",
        "lib_na9": "Imprimerie de journaux",
        "description": "- l’impression d’autres périodiques, paraissant au moins quatre fois par semaine "
    },
    {
        "cls_na9": "18.12",
        "lib_na9": "Autre imprimerie (labeur)",
        "description": "- l’impression de magazines et d’autres périodiques, paraissant moins de quatre fois par semaine - l’impression de livres et de brochures, de partitions musicales, de cartes géographiques, d’atlas, d’affiches, de catalogues, de prospectus et d’autres imprimés publicitaires, de timbres, de timbres fiscaux, de moyens de paiement et d’autres papiers-valeurs, de cartes à puce, d’albums, d’agendas, de calendriers et d’autres imprimés commerciaux, de papier à lettres à en-tête personnel et d’autres imprimés sur des presses typographiques, offset, d’héliogravure, flexigraphiques, sérigraphiques et d’autres presses graphiques, appareils de reproduction, imprimantes électroniques, appareils de gaufrage, y compris les travaux d’impression rapide - l’impression directe sur textiles, matières plastiques, verre, métal, bois et céramique Les motifs imprimés sont généralement protégés par les droits d’auteur.  103     - l’impression d’étiquettes (lithographie, photogravure, flexographie, etc.) "
    },
    {
        "cls_na9": "18.13",
        "lib_na9": "Activités de pré-presse",
        "description": "- la composition, la photocomposition, la saisie de données, y compris par numérisation et reconnaissance optique des caractères, la mise en forme électronique - la préparation de fichiers de données pour des applications multimédia (impression sur papier, CD-ROM, Internet) - les services de photogravure, y compris la photocomposition et la réalisation de plaques (pour les procédés dimpression typographique et offset) - la préparation des cylindres: la gravure de cylindres pour la reproduction de gravures - le transfert CTP (\"computer to plate\", de lordinateur à la plaque, également plaques en photopolymères) - la préparation de plaques et matrices pour estampage ou impression en relief - la préparation de: • travaux artistiques de nature technique, tels que la préparation des pierres lithographiques et des blocs de bois • la production de supports de présentation, par exemple transparents pour rétroprojecteur et autres formes de présentation • croquis, modèles, maquettes, etc. • la production dépreuves "
    },
    {
        "cls_na9": "18.14",
        "lib_na9": "Reliure et activités connexes",
        "description": "- les services de reliure industrielle, de montage d’échantillons et les services de soutien d’après-presse aux imprimeurs, par exemple: la reliure et la finition de livres, de brochures, de périodiques, de catalogues, etc., par pliage, coupage et massicotage, assemblage, agrafage, reliure avec et sans couture, coupage et pose de couverture, collage, assemblage, dorage, reliure à spirale et avec fil en plastique - la reliure et la finition de papiers ou de cartons imprimés, par pliage, estampage, poinçonnage, perforage, gaufrage, collage, pelliculage - les services de finition pour CD-ROM - les services de finition pour publipostage, tels que personnalisation ou préparation des enveloppes - d’autres activités de finition, telles que la gravure ou l’estampage de matrices, la copie en braille 18.2 Reproduction d'enregistrements    "
    },
    {
        "cls_na9": "18.20",
        "lib_na9": "Reproduction d'enregistrements",
        "description": "- la reproduction, à partir d’une matrice, de disques, de CD et de bandes contenant de la musique ou d’autres enregistrements sonores - la reproduction, à partir d’une matrice, de disques, de CD et de bandes contenant des films ou d’autres enregistrements vidéo - la reproduction, à partir d’une matrice, de logiciels et de données informatiques sur disques et sur bandes "
    },
    {
        "cls_na9": "19.10",
        "lib_na9": "Cokéfaction",
        "description": "- l’exploitation de fours à coke - la production de coke ou de semi-coke - la production de brai et de coke de brai - la production de gaz de cokerie - la production de goudrons bruts de houille et de lignite - l’agglomération du coke "
    },
    {
        "cls_na9": "19.20",
        "lib_na9": "Raffinage du pétrole",
        "description": "pétrole brut, de minéraux bitumineux ou résultant de leur distillation fractionnée. Les techniques de raffinage du pétrole impliquent la mise en œuvre d’une ou plusieurs activités: la distillation fractionnée, la distillation directe du pétrole brut et le craquage. - la production de carburants pour moteurs: essence, kérosène, etc. - la production de combustibles: fiouls légers, demi-lourds et lourds, gaz de raffinerie tels qu’éthane, propane, butane, etc. - la fabrication d’huiles de graissage et de graisses lubrifiantes à partir de pétrole, y compris les résidus de raffinage - la fabrication de produits pour la pétrochimie et pour les revêtements routiers - la fabrication de produits divers: white-spirit, vaseline, paraffine, etc. - la fabrication de briquettes de pétrole - le mélange de biocarburants, c’est-à-dire l’ajout d’alcool dans le pétrole (essence-alcool, par exemple) - la fabrication de briquettes de tourbe - la fabrication de briquettes de houille et de lignite  20 Industrie chimique    Cette division comprend la transformation de matières premières organiques et inorganiques par un procédé chimique et la formation de produits. Elle distingue la production de produits chimiques de base, qui constituent le premier groupe de la fabrication de produits intermédiaires et finals produits par transformation de produits chimiques de base, qui constituent les autres classes. 20.1 Fabrication de produits chimiques de base, de produits azotés et d'engrais, de matières plastiques de base et de caoutchouc synthétique Ce groupe comprend la fabrication de produits chimiques de base, de produits azotés et d’engrais, ainsi que de matières plastiques de base et de caoutchouc synthétique.  105     "
    },
    {
        "cls_na9": "20.11",
        "lib_na9": "Fabrication de gaz industriels",
        "description": "- la fabrication de gaz industriels ou médicaux inorganiques liquéfiés ou comprimés: • gaz élémentaires • air liquide ou comprimé • gaz réfrigérants • gaz industriels mélangés • gaz inertes tel l’anhydride carbonique • gaz isolants "
    },
    {
        "cls_na9": "20.12",
        "lib_na9": "Fabrication de colorants et de pigments",
        "description": "- la fabrication de colorants et de pigments, quelle qu’en soit l’origine, sous forme fondamentale ou concentrée - la fabrication de produits utilisés comme agents d’avivage ou comme luminophores "
    },
    {
        "cls_na9": "20.13",
        "lib_na9": "Fabrication d'autres produits chimiques inorganiques de base",
        "description": "généralement d’obtenir des éléments chimiques distincts ou des composés chimiquement définis. - la fabrication d’éléments chimiques (à l’exclusion des gaz d’origine industrielle et de la métallurgie) - la fabrication des acides inorganiques, à l’exclusion de l’acide nitrique - la fabrication d’alcalis, de lessives et d’autres bases inorganiques, à l’exclusion de l’ammoniac - la fabrication d’autres composés inorganiques - le grillage de la pyrite de fer - la fabrication d’eau distillée - l’enrichissement de minerais d’uranium et de thorium "
    },
    {
        "cls_na9": "20.14",
        "lib_na9": "Fabrication d'autres produits chimiques organiques de base",
        "description": "et la distillation. Ces processus permettent généralement d’obtenir des éléments chimiques distincts ou des composés chimiquement définis. - la fabrication des produits chimiques de base: • hydrocarbures acycliques, saturés ou non saturés • hydrocarbures cycliques, saturés ou non saturés • alcools acycliques et cycliques • acides monocarboxyliques et polycarboxyliques, y compris l’acide acétique • autres composés à fonctions oxygénées, y compris les aldéhydes, les cétones, les quinones et les composés contenant deux fonctions oxygénées ou plus I n st i t u t N a t i o nal d e la S ta tis tiq u e    • glycérine synthétique • composés organiques à fonctions azotées, y compris les amines • fermentation de la canne à sucre, du maïs ou d’autres produits similaires pour produire de l’alcool et des esters • autres composés organiques, y compris les produits de la distillation du bois (charbon de bois, par exemple), etc. - la fabrication de produits aromatiques synthétiques - la distillation des goudrons de houille "
    },
    {
        "cls_na9": "20.15",
        "lib_na9": "Fabrication de produits azotés et d'engrais",
        "description": "- la fabrication d’engrais: • engrais azotés, phosphatés ou potassiques, simples ou complexes • urée, phosphates naturels bruts et sels de potassium naturels bruts - la fabrication de produits azotés associés: • acides nitrique et sulfonitrique, ammoniac, chlorure d’ammonium, carbonates d’ammonium, nitrites et nitrates de potassium - la fabrication de mélanges pour plantes en pots à base essentiellement de tourbe - la fabrication de mélanges pour plantes en pots à base de terre naturelle, de sable, d’argile et de minéraux "
    },
    {
        "cls_na9": "20.16",
        "lib_na9": "Fabrication de matières plastiques de base",
        "description": "non vulcanisables, ainsi que le mélange de résines sur commande et la fabrication de résines synthétiques standards. - la fabrication de matières plastiques sous formes primaires: • polymères, y compris les polymères d’éthylène, de propylène, de styrène, de chlorure de vinyle, d’acétate de vinyle et les polymères acryliques • polyamides • résines phénoliques, résines époxydes et polyuréthannes • résines alkydes, résines polyesters et polyéthers • silicones • échangeurs d’ions à base de polymères - la fabrication de cellulose et de ses dérivés chimiques "
    },
    {
        "cls_na9": "20.17",
        "lib_na9": "Fabrication de caoutchouc synthétique",
        "description": "- la fabrication de caoutchouc synthétique sous formes primaires: • caoutchouc synthétique • caoutchouc factice - la fabrication de mélanges de caoutchouc synthétique et de caoutchouc naturel ou de gommes caoutchouteuses (par exemple, le balata)  107     20.2 Fabrication de pesticides et d'autres produits agrochimiques "
    },
    {
        "cls_na9": "20.20",
        "lib_na9": "Fabrication de pesticides et d'autres produits agrochimiques",
        "description": "- la fabrication d’insecticides, de rodonticides, de fongicides, d’herbicides, d’acaricides, de molluscicides, de biocides - la fabrication d’inhibiteurs de germination, de régulateurs de croissance pour plantes - la fabrication de désinfectants (à usage agricole ou autre) - la fabrication d’autres produits agrochimiques n.c.a. "
    },
    {
        "cls_na9": "20.30",
        "lib_na9": "Fabrication de peintures, vernis, encres et mastics",
        "description": "- la fabrication de peintures, de vernis et d’émaux - la fabrication de pigments, d’opacifiants et de couleurs préparés - la fabrication de compositions vitrifiables, d’engobes et de préparations similaires - la fabrication de mastics - la fabrication d’enduits utilisés en peinture et d’autres enduits non réfractaires des types utilisés en maçonnerie - la fabrication de solvants et de diluants organiques composites - la fabrication de décapants pour peintures et vernis - la fabrication d’encres d’imprimerie "
    },
    {
        "cls_na9": "20.41",
        "lib_na9": "Fabrication de savons, détergents et produits d'entretien",
        "description": "- la fabrication d’agents de surface organiques - la fabrication de papier, d’ouate, de feutre, etc., enduit ou recouvert de savon ou de détergent - la fabrication de glycérine - la fabrication de savon, à l’exception du savon cosmétique - la fabrication de préparations tensioactives: • poudres pour lessives, sous formes solides ou liquides, et détergents • préparations pour la vaisselle • adoucissants pour textiles - la fabrication de produits d’entretien: • préparations pour parfumer ou désodoriser les locaux • cires artificielles et cires préparées • cirages et crèmes pour le cuir • cires et encaustiques pour l’entretien du bois • brillants pour les carrosseries, le verre et les métaux • pâtes et poudres à récurer, y compris les articles en papier, ouate, feutre, etc., enduits ou recouverts de celles-ci "
    },
    {
        "cls_na9": "20.42",
        "lib_na9": "Fabrication de parfums et de produits pour la toilette",
        "description": "- la fabrication de parfums et de produits pour la toilette: • parfums et eaux de toilette • produits de beauté ou de maquillage • préparations de protection solaire et pour le bronzage • préparations pour manucures et pédicures • shampooings, laques pour cheveux, préparations pour l’ondulation ou le défrisage des cheveux • dentifrices et produits pour l’hygiène buccale, y compris les préparations destinées à faciliter l’adhérence des dentiers • préparations pour le rasage, y compris les préparations pour le prérasage et l’après-rasage • désodorisants et sels pour le bain • dépilatoires - la fabrication de savon cosmétique "
    },
    {
        "cls_na9": "20.51",
        "lib_na9": "Fabrication de produits explosifs",
        "description": "- la fabrication de poudres propulsives - la fabrication d’explosifs et d’articles de pyrotechnie, y compris les capsules, les détonateurs, les fusées de signalisation, etc. - la fabrication d’allumettes "
    },
    {
        "cls_na9": "20.52",
        "lib_na9": "Fabrication de colles",
        "description": "- la fabrication de colles et d’adhésifs préparés, y compris les colles et les adhésifs à base de caoutchouc "
    },
    {
        "cls_na9": "20.53",
        "lib_na9": "Fabrication d'huiles essentielles",
        "description": "- la fabrication d’essences de produits aromatiques naturels - la fabrication de résinoïdes - la fabrication de compositions à base de produits odoriférants pour la parfumerie ou l’alimentation "
    },
    {
        "cls_na9": "20.59",
        "lib_na9": "Fabrication d'autres produits chimiques n.c.a.",
        "description": "- la fabrication de plaques et de films photographiques, de papiers sensibilisés et d’autres matières sensibilisées, non impressionnées - la fabrication de préparations chimiques à usage photographique - la fabrication de gélatine et de leurs dérivés - la fabrication de produits chimiques divers: • peptones et leurs dérivés, autres matières protéiques et leurs dérivés, n.c.a. • huiles et graisses modifiées par des procédés chimiques • produits utilisés pour l’apprêt ou le finissage des textiles et du cuir • pâtes et poudres à souder ou à braser • préparations pour le décapage des métaux • additifs préparés pour ciments • charbons activés, additifs pour huiles lubrifiantes, préparations dites \"accélérateurs de vulcanisation\", catalyseurs et autres produits chimiques à usage industriel • préparations antidétonantes, préparations antigel • liquides pour transmissions hydrauliques • réactifs composés de diagnostic ou de laboratoire - la fabrication d’encres à écrire et à dessiner "
    },
    {
        "cls_na9": "20.60",
        "lib_na9": "Fabrication de fibres artificielles ou synthétiques",
        "description": "- la fabrication de câbles de filaments synthétiques ou artificiels - la fabrication de fibres synthétiques ou artificielles discontinues, non cardées, ni peignées, ni autrement transformées pour la filature - la fabrication de fils de filaments synthétiques ou artificiels, y compris les fils à haute ténacité - la fabrication de monofilaments synthétiques ou artificiels et de lames en matières textiles synthétiques ou artificielles "
    },
    {
        "cls_na9": "21.10",
        "lib_na9": "Fabrication de produits pharmaceutiques de base",
        "description": "- la production des principes actifs destinés à la fabrication de médicaments: antibiotiques, vitamines de base, acides salicylique et O-acétylsalicylique, etc. - la transformation du sang - la fabrication de sucres chimiquement purs - la transformation de glandes et la production d’extraits de glandes, etc.  110 I n st i t u t N a t i o nal d e la S ta tis tiq u e    21.2 Fabrication de préparations pharmaceutiques "
    },
    {
        "cls_na9": "21.20",
        "lib_na9": "Fabrication de préparations pharmaceutiques",
        "description": "- la fabrication de médicaments: • sérums thérapeutiques et autres constituants du sang • vaccins • médicaments divers, y compris les préparations homéopathiques - la fabrication de préparations chimiques contraceptives à usage externe et de médicaments contraceptifs à base d’hormones - la fabrication de préparations de diagnostic, y compris les tests de grossesse - la fabrication de substances radioactives de diagnostic in vivo - la fabrication de produits pharmaceutiques issus des biotechnologies - la fabrication d’ouates, de gazes et de bandes imprégnées à usage médical, de pansements, de catguts, etc. - la préparation de produits d’herboristerie (broyage, triage, mouture) à usage pharmaceutique "
    },
    {
        "cls_na9": "22.11",
        "lib_na9": "Fabrication et rechapage de pneumatiques",
        "description": "- la fabrication de pneumatiques en caoutchouc pour véhicules, équipements, machines mobiles, industrie aéronautique, jouets, meubles et autres utilisations: • pneumatiques • bandages pleins ou creux - la fabrication de chambres à air pour pneumatiques - la fabrication de bandes de roulement amovibles pour pneumatiques, de flaps, de profilés pour le rechapage des pneumatiques, etc. - le rechapage et le resculptage de pneumatiques "
    },
    {
        "cls_na9": "22.19",
        "lib_na9": "Fabrication d'autres articles en caoutchouc",
        "description": "- la fabrication d’autres articles en caoutchouc naturel ou synthétique, non vulcanisé, vulcanisé ou durci, tels que: • plaques, feuilles, bandes, baguettes et profilés • tubes et tuyaux • courroies transporteuses ou de transmission • articles d’hygiène: préservatifs, tétines, bouillottes, etc. • articles de vêtements en caoutchouc (simplement collés, non assemblés par couture)  111    • semelles de chaussures en caoutchouc et autres parties de chaussures en caoutchouc • fils et cordes en caoutchouc • fils et tissus caoutchoutés • bagues, anneaux, joints, rondelles et accessoires • revêtements de cylindres • matelas pneumatiques • ballons gonflables - la fabrication de brosses en caoutchouc - la fabrication de tuyaux de pipe en caoutchouc dur - la fabrication de peignes, de barrettes, de bigoudis et d’articles similaires en caoutchouc dur - la fabrication de matériaux de réparation en caoutchouc - la fabrication de tissus imprégnés, enduits ou recouverts de caoutchouc ou stratifiés avec cette même matière, si le caoutchouc est l’élément principalement utilisé - la fabrication de matelas à eau en caoutchouc - la fabrication de bonnets de bain et de tabliers en caoutchouc - la fabrication de combinaisons humides et de combinaisons de plongée en caoutchouc - la fabrication d’objets sexuels en caoutchouc "
    },
    {
        "cls_na9": "22.21",
        "lib_na9": "Fabrication de plaques, feuilles, tubes et profilés en matières plastiques",
        "description": "- la fabrication de produits semi-finis en matières plastiques: • plaques, feuilles, blocs, pellicules, bandes, lames (que ces articles soient adhésifs ou non), etc. - la fabrication de produits finis en matières plastiques: • tubes, tuyaux et accessoires de tuyauterie en plastique • films ou feuilles de cellophane "
    },
    {
        "cls_na9": "22.22",
        "lib_na9": "Fabrication d'emballages en matières plastiques",
        "description": "- la fabrication d’articles d’emballage en matières plastiques: • sacs, sachets, conteneurs, boîtes, caisses, bonbonnes, bouteilles, etc. "
    },
    {
        "cls_na9": "22.23",
        "lib_na9": "Fabrication d'éléments en matières plastiques pour la construction",
        "description": "- la fabrication d’articles en matières plastiques pour la construction tels que: I n st i t u t N a t i o nal d e la S ta tis tiq u e    • portes, fenêtres et leurs cadres et chambranles, volets, stores, plinthes • cuves, foudres, réservoirs • revêtements de sols, de murs et de plafonds sous forme de rouleaux, de dalles, de carreaux, etc., en matières plastiques • articles en matières plastiques pour usages sanitaires ou hygiéniques, par exemple: baignoires, douches, lavabos, bidets, cuvettes d’aisance, réservoirs de chasse, etc. - la fabrication de revêtements de sols résistants, en vinyle ou en linoléum, etc. - la fabrication de pierre artificielle (par exemple: le marbre de culture) "
    },
    {
        "cls_na9": "22.29",
        "lib_na9": "Fabrication d'autres articles en matières plastiques",
        "description": "- la fabrication de vaisselle et d’autres articles pour le service de la table ou de la cuisine et d’articles d’hygiène ou de toilette en matières plastiques - la fabrication de produits divers en matières plastiques: • coiffures, pièces isolantes, parties d’appareils d’éclairage, fournitures de bureau et fournitures scolaires, articles d’habillement (simplement collés, non assemblés par couture), garnitures pour meubles, statuettes, courroies transporteuses ou de transmission, bandes auto-adhésives en matière plastique, formes à chaussures en plastique, portes-cigares et porte-cigarettes en plastique, peignes, bigoudis, gadgets en plastique, etc. "
    },
    {
        "cls_na9": "23.11",
        "lib_na9": "Fabrication de verre plat",
        "description": "- la fabrication de verre plat, y compris le verre plat armé, coloré ou teinté "
    },
    {
        "cls_na9": "23.12",
        "lib_na9": "Façonnage et transformation du verre plat",
        "description": "- la fabrication de verre plat trempé ou formé de feuilles contre-collées - la fabrication de miroirs en verre - la fabrication de vitrages isolants à parois multiples "
    },
    {
        "cls_na9": "23.13",
        "lib_na9": "Fabrication de verre creux",
        "description": "- la fabrication de bouteilles et d’autres récipients en verre ou en cristal - la fabrication de verres à boire et d’autres articles en verre ou en cristal à usage domestique "
    },
    {
        "cls_na9": "23.14",
        "lib_na9": "Fabrication de fibres de verre",
        "description": "- la fabrication de fibres de verre, y compris la laine de verre et les produits non tissés en ces matières "
    },
    {
        "cls_na9": "23.19",
        "lib_na9": "Fabrication et façonnage d'autres articles en verre, y compris verre technique",
        "description": "- la fabrication de verrerie de laboratoire, d’hygiène ou de pharmacie - la fabrication de verres d’horlogerie et de verres analogues, de verres d’optique et d’éléments d’optique non travaillés optiquement - la fabrication de verrerie utilisée en bijouterie de fantaisie - la fabrication d’isolateurs et de pièces isolantes en verre - la fabrication d’enveloppes de verre pour lampes - la fabrication de figurines en verre - la fabrication de pavés de verre - la fabrication de verre en barres, baguettes ou tubes "
    },
    {
        "cls_na9": "23.20",
        "lib_na9": "Fabrication de produits réfractaires",
        "description": "mines ou de carrières, tels que le sable, le gravier, la pierre ou l’argile. - la fabrication de mortiers, de bétons, etc., réfractaires - la fabrication d’articles céramiques réfractaires: • articles céramiques calorifuges en farines siliceuses fossiles • tuiles, briques et dalles réfractaires, etc. • cornues, creusets, moufles, busettes, tubes, tuyaux, etc. - la fabrication d’articles réfractaires contenant de la magnésite, de la dolomie ou de la chromite 23.3 Fabrication de matériaux de construction en terre cuite "
    },
    {
        "cls_na9": "23.31",
        "lib_na9": "Fabrication de carreaux en céramique",
        "description": "- la fabrication de carreaux pour le revêtement des murs et des cheminées, d’abacules, etc., en céramique non réfractaire - la fabrication de carreaux et de dalles de pavement en céramique non réfractaire "
    },
    {
        "cls_na9": "23.32",
        "lib_na9": "Fabrication de briques, tuiles et produits de construction, en terre cuite",
        "description": "- la fabrication de matériaux de construction en terre cuite non réfractaire: • briques, tuiles, éléments de cheminée, tubes, tuyaux, etc., en céramique - la fabrication de hourdis en terre cuite "
    },
    {
        "cls_na9": "23.41",
        "lib_na9": "Fabrication industrielle d'articles céramiques à usage domestique ou ornemental",
        "description": "- la fabrication industrielle de vaisselle et d’autres articles de ménage ou d’économie domestique ainsi que d’articles d’hygiène ou de toilette, en céramique - la fabrication industrielle de statuettes et d’autres objets d’ornementation en céramique "
    },
    {
        "cls_na9": "23.42",
        "lib_na9": "Fabrication artisanale d'articles céramiques à usage domestique ou ornemental",
        "description": "la fabrication artisanale d’articles de poterie et de céramique à usage domestique ou ornemental "
    },
    {
        "cls_na9": "23.43",
        "lib_na9": "Fabrication d'appareils sanitaires en céramique",
        "description": "- la fabrication d’appareils sanitaires en céramique, par exemple: éviers, baignoires, bidets, cuvettes d’aisance, etc. - la fabrication d’autres appareils en céramique "
    },
    {
        "cls_na9": "23.44",
        "lib_na9": "Fabrication d'isolateurs et pièces isolantes en céramique",
        "description": "- la fabrication d’isolateurs pour l’électricité et de pièces isolantes en céramique "
    },
    {
        "cls_na9": "23.45",
        "lib_na9": "Fabrication d'autres produits céramiques à usage technique",
        "description": "- la fabrication d’aimants ferrites et d’aimants céramiques - la fabrication de produits céramiques pour usages chimiques ou industriels "
    },
    {
        "cls_na9": "23.49",
        "lib_na9": "Fabrication d'autres produits céramiques",
        "description": "- la fabrication de cruchons et de récipients similaires de transport ou d’emballage, en céramique - la fabrication de produits céramiques non classés ailleurs "
    },
    {
        "cls_na9": "23.51",
        "lib_na9": "Fabrication de ciment",
        "description": "- la fabrication de ciments dits \"clinkers\" et de ciments hydrauliques, y compris les ciments Portland, les ciments alumineux, les ciments de laitier et les ciments surphosphatés "
    },
    {
        "cls_na9": "23.52",
        "lib_na9": "Fabrication de chaux et plâtre",
        "description": "- la fabrication de chaux vive, chaux éteinte et chaux hydraulique - la fabrication de plâtre - la production de dolomite calcinée "
    },
    {
        "cls_na9": "23.61",
        "lib_na9": "Fabrication d'éléments en béton pour la construction",
        "description": "- la fabrication d’ouvrages préfabriqués en béton, en ciment ou en pierre artificielle utilisés en construction: • tuiles, carreaux, dalles, briques, plaques, panneaux, tuyaux, piliers, etc. - la fabrication d’éléments préfabriqués en béton, en ciment ou en pierre artificielle pour le bâtiment et le génie civil "
    },
    {
        "cls_na9": "23.62",
        "lib_na9": "Fabrication d'éléments en plâtre pour la construction",
        "description": "- la fabrication d’ouvrages en plâtre utilisés en construction: • plaques, panneaux, etc. "
    },
    {
        "cls_na9": "23.63",
        "lib_na9": "Fabrication de béton prêt à l'emploi",
        "description": "- la fabrication de bétons et de mortiers prêts à l’emploi "
    },
    {
        "cls_na9": "23.64",
        "lib_na9": "Fabrication de mortiers et bétons secs",
        "description": "- la fabrication de mortiers en poudre "
    },
    {
        "cls_na9": "23.65",
        "lib_na9": "Fabrication d'ouvrages en fibre ciment",
        "description": "- la fabrication de matériaux de construction en substances végétales (laine de bois, paille, roseaux, joncs) agglomérés avec du ciment, du plâtre ou d’autres liants minéraux - la fabrication d’ouvrages en amiante-ciment: • plaques ondulées ou autres, panneaux, carreaux, tuiles, tuyaux, gaines, réservoirs, auges, bassins, éviers, cruchons, meubles, cadres de fenêtres, etc.  116 I n st i t u t N a t i o nal d e la S ta tis tiq u e   "
    },
    {
        "cls_na9": "23.69",
        "lib_na9": "Fabrication d'autres ouvrages en béton, en ciment ou en plâtre",
        "description": "- la fabrication d’autres ouvrages en béton, en ciment, en plâtre ou en pierre artificielle: • statues, meubles, bas-reliefs, hauts-reliefs, vases, pots de fleurs, etc. 23.7 Taille, façonnage et finissage de pierres "
    },
    {
        "cls_na9": "23.70",
        "lib_na9": "Taille, façonnage et finissage de pierres",
        "description": "- la taille, le façonnage et le finissage de la pierre destinée à la construction de bâtiments, de monuments funéraires ou de routes, à la couverture des toitures, etc. - la fabrication de mobilier en pierre "
    },
    {
        "cls_na9": "23.91",
        "lib_na9": "Fabrication de produits abrasifs",
        "description": "- la production de meules, de pierres à aiguiser ou à polir et d’abrasifs naturels ou artificiels appliqués sur support, y compris les produits abrasifs appliqués sur support souple (par exemple: papier de verre) "
    },
    {
        "cls_na9": "23.99",
        "lib_na9": "Fabrication d'autres produits minéraux non métalliques n.c.a.",
        "description": "- la fabrication de garnitures de friction et de pièces non montées pour ces garnitures à base de substances minérales ou de cellulose - la fabrication de matières minérales isolantes: • laines de laitier, de scories, de roche et laines minérales similaires; vermiculite expansée, argiles expansées et matières minérales similaires à usage d’isolants thermiques ou sonores ou pour l’absorption du son - la fabrication d’articles en substances minérales diverses: • mica travaillé et ouvrages en mica, tourbe, graphite (autres que les articles électriques), etc. - la fabrication d’articles en asphalte ou en matières similaires, par exemple: adhésifs à base d’asphalte, de houille - la fabrication de fibres de carbone et de graphites et de produits constitués de ces fibres (à l’exception des électrodes et des applications électriques) - la production de corindon artificiel "
    },
    {
        "cls_na9": "24.10",
        "lib_na9": "Sidérurgie",
        "description": "- l’exploitation de hauts fourneaux, de convertisseurs de la fonte en acier, d’ateliers de laminage et de finissage - la production de fontes brutes et de fontes spiegel en gueuses, saumons ou autres - la production de ferroalliages - la production de produits ferreux obtenus par réduction directe des minerais de fer et autres produits ferreux spongieux - la production de fer d’une exceptionnelle pureté par électrolyse et autres procédés chimiques - la production de déchets lingotés en fer ou en acier - la production de grenailles et de poudres de fer - la production d’acier en lingots ou autres formes primaires - la production de demi-produits en acier - la fabrication de produits laminés plats en acier obtenus par laminage à chaud et à froid - la fabrication de barres en acier obtenues par laminage à chaud - la fabrication de profilés ouverts en acier obtenus par laminage à chaud - la production de palplanches en acier et de profilés ouverts obtenus par soudage - la fabrication d’éléments de construction de voies ferrées (rails non assemblés) en acier "
    },
    {
        "cls_na9": "24.20",
        "lib_na9": "Fabrication de tubes, tuyaux, profilés creux et accessoires correspondants en acier",
        "description": "- la fabrication de tubes et tuyaux sans soudure de section circulaire ou autre et d’ébauches de section circulaire, destinées à un traitement ultérieur, par laminage à chaud, extrusion à chaud ou toute autre transformation à chaud d’un produit intermédiaire, qui peut être une barre ou une billette, obtenu par laminage à chaud ou par la coulée continue - la fabrication de tubes et tuyaux sans soudure, de précision ou autres, à partir d’ébauches laminées à chaud ou extrudées à chaud par une transformation ultérieure, par étirage à froid ou laminage à froid de tubes et tuyaux de section circulaire et par étirage à froid uniquement de tubes et tuyaux de section non circulaire et de profilés creux - la fabrication de tubes et tuyaux d’un diamètre extérieur supérieur à 406,4 mm, soudés par formage à froid à partir de produits plats laminés à chaud et soudés longitudinalement ou en spirale - la fabrication de tubes et tuyaux d’un diamètre extérieur inférieur ou égal à 406,4 mm de section circulaire soudés par formage continu à chaud ou à froid de produits plats laminés à froid ou à chaud et soudés longitudinalement ou en spirale et de section autre que circulaire par formage à froid ou à chaud mis en forme à partir de bandes laminées à froid ou à chaud soudés longitudinalement - la fabrication de tubes et tuyaux de précision soudés d’un diamètre extérieur inférieur ou égal à 406,4 mm par formage à froid ou à chaud de bandes laminées à froid ou à chaud et soudés longitudinalement livrés après avoir été soudés ou destinés à une transformation ultérieure, par étirage à froid ou laminage à froid ou mis en forme à froid pour des tubes et tuyaux de section autre que circulaire - la fabrication de brides plates ou à collerette forgée par transformation de produits plats laminés à chaud en acier - la fabrication d’accessoires à souder bout à bout en acier, tels que coudes et manchons, par forgeage de tubes sans soudure en acier obtenus par laminage à chaud - la fabrication d’accessoires filetés et d’autres accessoires de tuyauterie en acier "
    },
    {
        "cls_na9": "24.31",
        "lib_na9": "Étirage à froid de barres",
        "description": "- la fabrication de barres ou de profilés de section pleine en acier par étirage à froid, rectification ou tournage "
    },
    {
        "cls_na9": "24.32",
        "lib_na9": "Laminage à froid de feuillards",
        "description": "- la fabrication de produits laminés plats en acier, nus ou revêtus, enroulés ou non, d’une largeur n’excédant pas 600 mm, obtenus par relaminage à froid de produits plats laminés à chaud ou de fil d’acier I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "24.33",
        "lib_na9": "Profilage à froid par formage ou pliage",
        "description": "- la fabrication de profilés ouverts par déformation progressive à froid sur machines à galets ou pliage sur presse plieuse de produits laminés plats en acier - la fabrication de produits formés ou pliés à froid, de tôles nervurées et de panneaux-sandwichs "
    },
    {
        "cls_na9": "24.34",
        "lib_na9": "Tréfilage à froid",
        "description": "- la fabrication de fils d’acier par étirage à froid du fil machine "
    },
    {
        "cls_na9": "24.41",
        "lib_na9": "Production de métaux précieux",
        "description": "- la production de métaux précieux: • la production et l’affinage des métaux précieux bruts ou ouvrés tels que or, argent, platine, etc., à partir de minerais ou de déchets - la production d’alliages de métaux précieux - la production de demi-produits en métaux précieux - la production de plaqués et doublés d’argent sur métaux communs - la production de plaqués et doublés d’or sur métaux communs ou sur argent - la production de plaqués et doublés de platine et de métaux du groupe du platine sur or, argent ou métaux communs - la fabrication de fils à partir de ces métaux par étirage - la fabrication de stratifiés métalliques à base de métaux précieux "
    },
    {
        "cls_na9": "24.42",
        "lib_na9": "Métallurgie de l'aluminium",
        "description": "- la fabrication de fils à partir de ces métaux par étirage - la production d’oxyde d’aluminium (alumine) - la production de feuilles d’emballage en aluminium - la fabrication de stratifiés métalliques à base d’aluminium si la feuille d’aluminium est le composant principal "
    },
    {
        "cls_na9": "24.43",
        "lib_na9": "Métallurgie du plomb, du zinc ou de l'étain",
        "description": "- la production de plomb, de zinc ou d’étain à partir de minerais - la production de plomb, de zinc ou d’étain par affinage électrolytique de déchets et de débris de plomb, de zinc ou d’étain - la production d’alliages de plomb, de zinc ou d’étain - la fabrication de demi-produits en plomb, en zinc ou en étain - la fabrication de fils à partir de ces métaux par étirage - la production de feuilles d’étain - la production de cuivre à partir de minerai - la production de cuivre par affinage électrolytique de déchets et de débris de cuivre - la production d’alliages de cuivre    "
    },
    {
        "cls_na9": "24.44",
        "lib_na9": "Métallurgie du cuivre",
        "description": "- la fabrication de fils à partir de ces métaux par étirage "
    },
    {
        "cls_na9": "24.45",
        "lib_na9": "Métallurgie des autres métaux non ferreux",
        "description": "- la production de chrome, de manganèse, de nickel, etc., à partir de minerais ou d’oxydes - la production de chrome, de manganèse, de nickel, etc., par affinage électrolytique et aluminothermique de déchets et de débris de chrome, de manganèse, de nickel, etc. - la production d’alliages de chrome, de manganèse, de nickel, etc. - la fabrication de demi-produits en chrome, en manganèse, en nickel, etc. - la production de mattes de nickel - la fabrication de fils à partir de ces métaux par étirage "
    },
    {
        "cls_na9": "24.46",
        "lib_na9": "Élaboration et transformation de matières nucléaires",
        "description": "- la production d’uranium métal à partir de la pechblende ou d’autres minerais - la fonte et le raffinage de l’uranium 24.5 Fonderie Ce groupe comprend la fabrication de pièces ou de demi-produits divers par un procédé de coulée. Ce groupe ne comprend pas: - la fonderie de produits finis, tels que: • radiateurs et chaudières, voir 25.21 • articles ménagers en fonte, voir 25.99 "
    },
    {
        "cls_na9": "24.51",
        "lib_na9": "Fonderie de fonte",
        "description": "- la fonderie de demi-produits en fonte - la fonderie de pièces en fonte grise - la fonderie de pièces en fonte à graphite sphéroïdal - la fonderie de produits en fonte malléable - la fabrication de tubes, tuyaux, profilés creux et accessoires correspondants en fonte "
    },
    {
        "cls_na9": "24.52",
        "lib_na9": "Fonderie d'acier",
        "description": "- la fonderie de demi-produits en acier - la fonderie de pièces en acier - la fabrication de tubes et tuyaux en acier sans soudure coulés par centrifugation - la fabrication d’accessoires de tuyauterie en fonte d’acier    "
    },
    {
        "cls_na9": "24.53",
        "lib_na9": "Fonderie de métaux légers",
        "description": "- la fonderie de demi-produits en aluminium, magnésium, titane, zinc, etc. - la fonderie de pièces en métaux légers "
    },
    {
        "cls_na9": "24.54",
        "lib_na9": "Fonderie d'autres métaux non ferreux",
        "description": "- la fonderie de pièces en métaux lourds - la fonderie de pièces en métaux précieux - le moulage sous pression d’autres métaux non ferreux  120 I n st i t u t N a t i o nal d e la S ta tis tiq u e    25 Fabrication de produits métalliques, à l’exception des machines et des équipements Cette division traite de la fabrication de produits en \"pur\" métal (tels que pièces, conteneurs et structures), habituellement avec une fonction statique, inamovible, par opposition aux divisions 26-30, qui concernent des combinaisons ou assemblages de tels produits en métal (parfois avec d’autres matériaux) en unités plus complexes qui, à moins qu’elles ne soient purement électriques, électroniques ou optiques, fonctionnent avec des pièces mobiles. La fabrication d’armes et de munitions relève également de cette division. Cette division ne comprend pas: - les activités d’entretien et de réparation spécialisée, voir groupe 33.1 - l’installation spécialisée de machines et d’autres produits manufacturés dans des bâtiments (p.ex. chaudières pour le chauffage central), voir 43.22 25.1 Fabrication d'éléments en métal pour la construction Ce groupe comprend la fabrication d’éléments en métal pour la construction (tels que des cadres métalliques et des éléments de construction). "
    },
    {
        "cls_na9": "25.11",
        "lib_na9": "Fabrication de structures métalliques et de parties de structures",
        "description": "- la fabrication de cadres métalliques ou d’ossatures pour la construction et leurs éléments (tours, mâts, armatures, ponts, etc.) - la fabrication de cadres métalliques pour équipements industriels (cadres pour hauts fourneaux, matériels de manutention, etc.) - la fabrication de constructions préfabriquées principalement en métaux: • baraques de chantier, éléments modulaires pour expositions, etc. "
    },
    {
        "cls_na9": "25.12",
        "lib_na9": "Fabrication de portes et fenêtres en métal",
        "description": "- la fabrication de portes et de fenêtres métalliques, d’huisseries métalliques, de rideaux métalliques de fermeture et de portails métalliques - la fabrication de séparations métalliques de pièces destinées à être rivées au sol 25.2 Fabrication de réservoirs, citernes et conteneurs métalliques Ce groupe comprend la fabrication de réservoirs, de radiateurs et de chaudières pour le chauffage central. "
    },
    {
        "cls_na9": "25.21",
        "lib_na9": "Fabrication de radiateurs et de chaudières pour le chauffage central",
        "description": ""
    },
    {
        "cls_na9": "25.22",
        "lib_na9": "Fabrication de récipients métalliques pour gaz comprimés ou liquéfiés",
        "description": "- la fabrication de bouteilles, de citernes, de réservoirs, et de récipients similaires, en métal, pour gaz comprimés ou liquéfiés "
    },
    {
        "cls_na9": "25.29",
        "lib_na9": "Fabrication d'autres réservoirs, citernes et conteneurs métalliques",
        "description": "- la fabrication de réservoirs, de citernes et de récipients similaires, en métal, qui font généralement partie du matériel fixe de stockage ou de fabrication "
    },
    {
        "cls_na9": "25.30",
        "lib_na9": "Fabrication de générateurs de vapeur, à l'exception des chaudières pour le chauffage central",
        "description": "- la fabrication de générateurs produisant de la vapeur d’eau ou d’autres types de vapeur - la fabrication d’appareils auxiliaires pour générateurs de vapeur: • condensateurs, économiseurs, surchauffeurs, collecteurs et accumulateurs de vapeur - la fabrication de réacteurs nucléaires, à l’exception des séparateurs d’isotopes - la fabrication de pièces destinées aux chaudières de navires ou de centrales électriques - les travaux de chaudronnerie comprenant un traitement complémentaire des tubes de manière à réaliser principalement des conduites ou des réseaux sous pression, ainsi que les travaux annexes de conception et d’installation "
    },
    {
        "cls_na9": "25.40",
        "lib_na9": "Fabrication d'armes et de munitions",
        "description": "- la fabrication d’armes lourdes (pièces d’artillerie, lance-missiles, lance-torpilles, fusils mitrailleurs, etc.) - la fabrication d’armes légères (revolvers, carabines, pistolets mitrailleurs, etc.) - la fabrication de carabines et pistolets à air comprimé ou à gaz - la fabrication de munitions de guerre - la fabrication d’armes de chasse, de tir sportif et de défense ainsi que de leurs munitions - la fabrication d’engins explosifs tels que bombes, mines et torpilles "
    },
    {
        "cls_na9": "25.50",
        "lib_na9": "Forge, emboutissage, estampage; métallurgie des poudres",
        "description": "- le forgeage, l’emboutissage, l’estampage et le profilage des métaux - la métallurgie des poudres: production d’objets métalliques directement à partir de poudres de métaux par traitement thermique (frittage) ou compression "
    },
    {
        "cls_na9": "25.61",
        "lib_na9": "Traitement et revêtement des métaux",
        "description": "- le placage, le traitement anodique, etc., des métaux - le traitement thermique des métaux - l’ébarbage, le décapage au jet de sable, le dessablage au tonneau, le nettoyage des métaux - la teinture et la gravure des métaux - le revêtement non métallique des métaux: • plastifiage, émaillage, laquage, etc. - le durcissement, le bufflage des métaux  122 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "25.62",
        "lib_na9": "Usinage",
        "description": "- le perçage, le tournage, le fraisage, l’arasage, le rabotage, le rodage, le brochage, le dressage, le sciage, le meulage, l’affûtage, le polissage, le soudage, le mortaisage, etc., de pièces métalliques - le découpage et l’écriture sur des métaux au moyen de faisceaux laser "
    },
    {
        "cls_na9": "25.71",
        "lib_na9": "Fabrication de coutellerie",
        "description": "- la fabrication de coutellerie domestique: couteaux, fourchettes, cuillères, etc. - la fabrication d’autres articles de coutellerie: • fendoirs et couperets • rasoirs et lames pour rasoirs • ciseaux et tondeuses à cheveux - la fabrication de sabres, d’épées, de baïonnettes, etc. "
    },
    {
        "cls_na9": "25.72",
        "lib_na9": "Fabrication de serrures et de ferrures",
        "description": "- la fabrication de serrures, de cadenas, de verrous, de clés, de charnières et d’articles similaires de serrurerie pour le bâtiment, l’ameublement, les véhicules, etc. "
    },
    {
        "cls_na9": "25.73",
        "lib_na9": "Fabrication d'outillage à main",
        "description": "- la fabrication d'outils à main: • outillage agricole et horticole, sécateurs • outils tranchants divers • martellerie, pinces, tournevis, clés, limes, etc. • truelles, couteaux à enduire, etc. - la fabrication d'étaux, serre-joints, enclumes, etc. "
    },
    {
        "cls_na9": "25.74",
        "lib_na9": "Fabrication d'outillage mécanique",
        "description": "- la fabrication de couteaux et de lames tranchantes pour machines ou pour appareils mécaniques - la fabrication d’outillage portatif agricole mécanique - la fabrication de scies et de lames de scies, y compris les lames de scies circulaires et de scies à chaîne - la fabrication d’outils interchangeables pour outillage à main, mécaniques ou non, ou pour machines-outils: forets, poinçons, matrices, fraises, etc. - la fabrication d’outils de presse - la fabrication de châssis de fonderie et de moules (à l’exclusion des lingotières) - la fabrication de lampes à souder "
    },
    {
        "cls_na9": "25.91",
        "lib_na9": "Fabrication de fûts et emballages métalliques similaires",
        "description": "- la fabrication de seaux, de bidons, de tonneaux, de boîtes "
    },
    {
        "cls_na9": "25.92",
        "lib_na9": "Fabrication d'emballages métalliques légers",
        "description": "- la fabrication de boîtes pour conserves alimentaires ainsi que de tubes et d’étuis souples - la fabrication d’articles métalliques de bouchage et de surbouchage "
    },
    {
        "cls_na9": "25.93",
        "lib_na9": "Fabrication d'articles en fils métalliques, de chaînes et de ressorts",
        "description": "- la fabrication de câbles métalliques, de tresses métalliques et d’articles similaires - la fabrication de câbles métalliques non isolés ou de câbles isolés qui ne peuvent pas être utilisés comme conducteurs pour l’électricité - la fabrication de fil enrobé ou fourré - la fabrication d’articles en fils métalliques: ronces artificielles, clôtures, grillages, treillis, toiles métalliques, etc. - la fabrication d’électrodes enrobées pour le soudage à l’arc électrique - la fabrication de clous et de punaises - la fabrication de ressorts (à l’exception des ressorts d’horlogerie): • ressorts à lames, ressorts hélicoïdaux, barres de torsion • lames de ressorts - la fabrication de chaînes, à l’exception des chaînes pour la transmission de l’énergie "
    },
    {
        "cls_na9": "25.94",
        "lib_na9": "Fabrication de vis et de boulons",
        "description": "- la fabrication de rivets, de rondelles et d’autres produits non filetés similaires - la fabrication d’articles de visserie - la fabrication de boulons, vis, écrous et d’autres produits filetés similaires "
    },
    {
        "cls_na9": "25.95",
        "lib_na9": "Fabrication artisanale d'ouvrages traditionnels en métaux",
        "description": "- la fabrication artisanale d'articles métalliques à usage domestique ou décoratif, en particulier en cuivre tournés, ciselés, martelés, ajourés, émaillés, etc. - la fabrication artisanale d'articles en fer forgé à usage architectural ou décoratif - la fabrication artisanale des armes, serviront pour la chasse ou pour la décoration - l'entretien et la restauration des fusils pour la chasse, le tir sportif ou le spectacle - l'étamage ou le nickelage traditionnel d'articles en cuivre essentiellement les ustensiles de cuisines "
    },
    {
        "cls_na9": "25.99",
        "lib_na9": "Fabrication d'autres ouvrages métalliques n.c.a.",
        "description": "- la fabrication d’articles métalliques à usage domestique: • vaisselle plate: plateaux, soucoupes, etc. • bols: pots, bouilloires, etc. • vaisselle de table: saladiers, plats, etc. • casseroles, poêles à frire et autres ustensiles non électriques pour la table et la cuisine • petits appareils et accessoires de cuisine pour utilisation à la main • pailles de fer - la fabrication d’éléments pour la construction (gouttières, faîtage) et de baignoires, d’éviers, de bassines et d’articles similaires, en zinc - la fabrication d’articles métalliques pour le bureau, à l’exception du mobilier - la fabrication de coffres-forts, de portes blindées, etc. - la fabrication de divers articles en métal: • hélices de bateau et leurs pales • ancres • cloches • équipements de voies ferrées assemblés • fermoirs, boucles, crochets • échelles métalliques • signaux métalliques, y compris panneaux de signalisation routière - la fabrication de sachets en feuilles d’aluminium - la fabrication d’aimants métalliques installés en permanence - la fabrication de bouteilles isolantes en métal - la fabrication d’insignes et de médailles militaires en métal - la fabrication de bigoudis en métal, de manches et de montures de parapluies, de peignes "
    },
    {
        "cls_na9": "26.11",
        "lib_na9": "Fabrication de composants électroniques",
        "description": "- la fabrication de condensateurs électroniques - la fabrication de résistances électroniques - la fabrication de microprocesseurs - la fabrication de tubes électroniques - la fabrication de pièces de connexion électroniques - la fabrication de circuits imprimés nus - la fabrication de circuits intégrés (analogiques, numériques ou hybrides) - la fabrication de diodes, de transistors et de dispositifs discrets similaires - la fabrication d’inducteurs, de type composant électronique (par exemple: bobines d’étranglement, serpentins, transformateurs) - la fabrication de cristaux électroniques et d’assemblages de cristaux - la fabrication de solénoïdes, d’interrupteurs et de transducteurs pour applications électroniques - la fabrication de dés ou de tranches, semi-conducteurs, finis ou semi-finis - la fabrication de composants pour dispositifs d’affichage (plasma, polymère, LCD) - la fabrication de diodes émettrices de lumière (light emitting diodes – LED) - la fabrication de câbles pour imprimantes, de moniteurs, de câbles USB, de pièces de connexion, etc. "
    },
    {
        "cls_na9": "26.12",
        "lib_na9": "Fabrication de cartes électroniques assemblées",
        "description": "- la fabrication de circuits imprimés - le montage de composants sur des circuits imprimés - la fabrication de cartes d’interface (par exemple: son, vidéo, contrôleurs, réseau, modem) "
    },
    {
        "cls_na9": "26.20",
        "lib_na9": "Fabrication d'ordinateurs et d'équipements périphériques",
        "description": "de bureau, des ordinateurs portables et des serveurs, ainsi que des équipements informatiques périphériques, tels que systèmes de stockage et unités d’entrée et de sortie (imprimantes, écrans, claviers). Les ordinateurs peuvent être analogiques, numériques ou hybrides. Les ordinateurs numériques, les plus courants, sont des appareils capables de réaliser l’ensemble des opérations suivantes: 1) enregistrer le ou les programmes de traitement et les données immédiatement nécessaires pour l’exécution de ce ou de ces programmes; 2) être librement programmés conformément aux besoins de l’utilisateur; 3) résoudre les opérations arithmétiques conformément aux instructions de l’utilisateur et; 4) exécuter, sans aucune intervention humaine, un programme de traitement imposant à l’ordinateur de modifier son exécution par une décision logique durant le processus. Les ordinateurs analogiques sont capables de simuler des modèles mathématiques et comprennent au moins des éléments de contrôle analogique et de programmation. - la fabrication d’ordinateurs de bureau - la fabrication d’ordinateurs portables - la fabrication de gros systèmes - la fabrication d’ordinateurs de poche (par exemple: les assistants personnels) - la fabrication de lecteurs de disques magnétiques, de lecteurs flash et d’autres systèmes de stockage - la fabrication de lecteurs de disques optiques (par exemple: CD-RW, CD-ROM, DVD-ROM, DVD-RW) - la fabrication d’imprimantes - la fabrication d’écrans - la fabrication de claviers - la fabrication de tous types de souris, de manettes et de boules roulantes et leurs accessoires - la fabrication de terminaux informatiques spécialisés - la fabrication de serveurs - la fabrication de scanneurs, y compris les lecteurs de codes à barres - la fabrication de lecteurs de cartes à puce - la fabrication de casques de réalité virtuelle - la fabrication de vidéoprojecteurs - la fabrication de terminaux informatiques, tels que des guichets automatiques de banque, des terminaux point de vente, sans mécanisme - la fabrication d’équipements de bureau multi-fonctions, permettant d’effectuer au moins deux des opérations suivantes: impression, numérisation, copie, télécopie "
    },
    {
        "cls_na9": "26.30",
        "lib_na9": "Fabrication d'équipements de communication",
        "description": "transmettre électroniquement des signaux par les fils ou par les airs tels que les émissions de radio ou de télévision et les équipements de communication sans fil. - la fabrication d’équipements de commutation de central - la fabrication de téléphones sans fil - la fabrication d’équipements d’autocommutateur privé - la fabrication d’équipements téléphoniques ou de télécopieurs, y compris les répondeurs téléphoniques - la fabrication d’équipements de communication de données tels que routeurs, ponts et passerelles - la fabrication d’antennes de transmission et de réception - la fabrication d’équipements pour la télévision par câble - la fabrication de téléavertisseurs - la fabrication de téléphones portables - la fabrication d’équipements de communication mobile - la fabrication d’équipements d’enregistrement en studio et de diffusion d’émissions de radio et de télévision, y compris les caméras de télévision - la fabrication de modems, équipement porteur - la fabrication de systèmes de détection d’effraction et d’incendie, transmettant des signaux à une station de contrôle - la fabrication de transmetteurs de radio et de télévision - la fabrication d’appareils de communication utilisant les signaux infrarouges (par exemple: les commandes à distance) "
    },
    {
        "cls_na9": "26.40",
        "lib_na9": "Fabrication de produits électroniques grand public",
        "description": "véhicules automobiles, aux systèmes d’information du public et à l’amplification des instruments de musique. - la fabrication de magnétoscopes et d’équipements de reproduction - la fabrication de téléviseurs - la fabrication de moniteurs et d’écrans de télévision - la fabrication de systèmes d’enregistrement et de reproduction audio - la fabrication d’équipements stéréo - la fabrication de récepteurs radio - la fabrication de systèmes d’amplification du son - la fabrication de caméscopes destinés à un usage domestique - la fabrication de juke-boxes - la fabrication de matériel d’amplification des instruments de musique et de systèmes d’information du public - la fabrication de microphones - la fabrication de lecteurs CD et DVD - la fabrication de machines à karaoké - la fabrication d’écouteurs (par exemple: radio, stéréo, ordinateur) - la fabrication de consoles de jeux vidéo  128 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "26.51",
        "lib_na9": "Fabrication d'instruments et d'appareils de mesure, d'essai et de navigation",
        "description": "guidage, de systèmes et instruments pour la marine ou l’aviation, de thermostats pour des applications telles que chauffage, climatiseur, réfrigération, appareils, d’instruments et d’appareils pour la mesure, l’affichage, l’indication, l’enregistrement, la transmission et le contrôle de température, d’humidité, de pression, de vide, de combustion, de débit, de viscosité, de densité, d’acidité, de concentration et de rotation, d’instruments de mesure des fluides (c’est-àdire d’enregistrement) et de comptage, d’instruments de mesure et d’essai des caractéristiques de l’électricité et des signaux électriques, d’instruments et de systèmes d’instrumentation pour l’analyse en laboratoire de la composition ou de la concentration chimique ou physique d’échantillons de matériaux solides, liquides, gazeux ou composites, d’autres instruments de mesure et d’essais et de leurs éléments. La fabrication d’équipements de mesure, d’essai et de navigation (à l’exception d’outils mécaniques simples) est comprise dans cette classe. - la fabrication d’instruments de moteur d’aéronef - la fabrication d’instruments de contrôle des émissions des véhicules à moteur - la fabrication d’instruments météorologiques - la fabrication d’instruments d’essai et de contrôle des propriétés physiques - la fabrication de polygraphes - la fabrication de détecteurs et de moniteurs de radiation - la fabrication d’instruments de géodésie - la fabrication de thermomètres, genre liquide-dans-verre et bilame (sauf médical) - la fabrication d’humidistats - la fabrication d’instruments de contrôle de limite hydronique - la fabrication d’instruments de contrôle de flamme et de brûleur - la fabrication de spectromètres - la fabrication de jauges pneumatiques - la fabrication de compteurs de consommation (eau, gaz, électricité, etc.) - la fabrication de débitmètres et de compteurs - la fabrication de compteurs - la fabrication de détecteurs de mines, de générateurs de signaux, de détecteurs de métaux - la fabrication de systèmes et d’instruments de recherche, de détection, de navigation, de systèmes et d’instruments pour la marine ou l’aviation, y compris les balises sonores - la fabrication d’instruments radar - la fabrication d’instruments GPS - la fabrication de contrôleurs et de régulateurs environnementaux automatiques - la fabrication d’instruments de mesure et d’enregistrement (par exemple: enregistreurs de vol) - la fabrication de détecteurs de mouvements - la fabrication de radars - la fabrication d’instruments d’analyse en laboratoire (par exemple: instruments d’analyse du sang) - la fabrication d’échelles, de balances, d’incubateurs de laboratoires et de divers appareils de laboratoire de mesure, d’essai, etc. "
    },
    {
        "cls_na9": "26.52",
        "lib_na9": "Horlogerie",
        "description": "- la fabrication de montres et horloges de tout type, y compris les horloges de tableau de bord - la fabrication de boîtiers de montres, de cages et de cabinets d’horlogerie, y compris en métaux précieux - la fabrication d’appareils de contrôle du temps ou d’appareils compteurs de temps, enregistrant ou affichant des intervalles de temps avec un mouvement de montre ou d’horloge ou à moteur synchrone, tels que: • parcmètres • horloges-pointeuses • tampons horaires et tampons dateurs • chronomicromètres - la fabrication d’interrupteurs horaires et d’autres appareils de déclenchement avec un mouvement de montre ou d’horloge ou à moteur synchrone, tels que: • fermetures commandées par une minuterie - la fabrication de pièces pour horloges et montres: • mouvements d’horlogerie de tous types • ressorts, pierres, cadrans, aiguilles, platines, ponts et autres pièces • boîtiers de montres, de cages et de cabinets d’horlogerie, en tous types de matériaux "
    },
    {
        "cls_na9": "26.60",
        "lib_na9": "Fabrication d'équipements d'irradiation médicale, d'équipements électromédicaux et électrothérapeutiques",
        "description": "- la fabrication d’appareils et de tubes pour irradiations (à usage industriel, de diagnostic médical, de soins, de recherche, scientifique, etc.): • appareils à rayons X et appareils utilisant les radiations alpha, bêta ou gamma - la fabrication de tomographes par ordinateur - la fabrication de tomographes à émission de positons (PET) - la fabrication d’appareils d’imagerie par résonnance magnétique (IRM) - la fabrication d’appareils médicaux à ultrasons - la fabrication d’électrocardiographes - la fabrication d’appareils électromédicaux pour techniques endoscopiques - la fabrication d’appareils médicaux à laser - la fabrication de stimulateurs cardiaques - la fabrication d’appareils pour faciliter l’audition - la fabrication d’appareils d’irradiation des aliments et du lait "
    },
    {
        "cls_na9": "26.70",
        "lib_na9": "Fabrication de matériels optique et photographique",
        "description": "des microscopes électroniques, protoniques), télescopes, prismes et lentilles (sauf ophtalmiques), l’enduisage ou le polissage de lentilles (sauf ophtalmiques), le montage de lentilles (sauf ophtalmiques) et la fabrication de matériel photographique tel que appareils photographiques et luxmètres. - la fabrication de miroirs optiques - la fabrication de matériel de visée optique équipant les fusils - la fabrication d’appareils de positionnement optique - la fabrication de loupes - la fabrication d’instruments optiques pour les travaux de mécanique de précision - la fabrication de comparateurs optiques - la fabrication d’appareils photos analogiques et numériques - la fabrication de matériel de projection de films ou de diapositives - la fabrication de matériel de rétroprojection - la fabrication d’appareils et d’instruments optiques de mesure et de contrôle (par exemple: matériel de lutte contre l’incendie, luxmètres à usage photographique, télémètres) - la fabrication de lentilles, de microscopes optiques, de jumelles et de télescopes - la fabrication d’assemblages laser "
    },
    {
        "cls_na9": "26.80",
        "lib_na9": "Fabrication de supports magnétiques et optiques",
        "description": "- la fabrication de bandes magnétiques vierges pour le son et l’image - la fabrication de cassettes vierges pour le son et l’image - la fabrication de disquettes vierges - la fabrication de disques optiques vierges - la fabrication de disques durs "
    },
    {
        "cls_na9": "27.11",
        "lib_na9": "Fabrication de moteurs, génératrices et transformateurs électriques",
        "description": "continu ou alternatif-continu. - la fabrication de moteurs électriques (à l’exception des moteurs de démarrage pour moteurs à combustion interne) - la fabrication de transformateurs électriques de distribution - la fabrication de transformateurs pour soudure à l’arc - la fabrication de ballasts fluorescents (transformateurs) - la fabrication de transformateurs de sous-station pour la distribution de l’électricité - la fabrication de régulateurs de voltage, transmission et distribution - la fabrication de groupes électrogènes (à l’exception des alternateurs charge batterie pour moteurs à combustion interne) - la fabrication de groupes électrogènes à moteur (à l’exception des turbines génératrices) - le rebobinage d’armatures en usine "
    },
    {
        "cls_na9": "27.12",
        "lib_na9": "Fabrication de matériel de distribution et de commande électrique",
        "description": "- la fabrication de disjoncteurs de puissance - la fabrication de limiteurs de tension (pour la tension au niveau de la distribution) - la fabrication de pupitres de commande pour la distribution de l’électricité - la fabrication de relais électriques - la fabrication de compartiments pour appareillage de tableaux de distribution électrique - la fabrication de fusibles électriques - la fabrication d’équipements électriques de commutation - la fabrication d’interrupteurs électriques (sauf à poussoir, à bouton poussoir, à bascule ou à solénoïde) - la fabrication de groupes électrogènes à moteur "
    },
    {
        "cls_na9": "27.20",
        "lib_na9": "Fabrication de piles et d'accumulateurs électriques",
        "description": "- la fabrication de piles et de batteries électriques • piles au bioxyde de manganèse, à l’oxyde de mercure, à l’oxyde d’argent ou contenant d’autres matières - la fabrication d’accumulateurs électriques et de parties de ces appareils • séparateurs, bacs, couvercles - la fabrication d’accumulateurs au plomb - la fabrication d’accumulateurs au nickel-cadmium (Ni/Cd) - la fabrication d’accumulateurs au nickel-hydrure métallique (NiMH) - la fabrication d’accumulateurs au lithium - la fabrication d’accumulateurs à pile sèche - la fabrication d’accumulateurs à pile humide    27.3 Fabrication de fils et câbles et de matériel d'installation électrique Ce groupe comprend la fabrication de dispositifs de câblage porteurs et non porteurs de courant pour le câblage d’installations électriques, quel que soit le matériau utilisé. Ce groupe comprend également la fabrication de fils et câbles électriques isolés et de câbles en fibres optiques.  132 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "27.31",
        "lib_na9": "Fabrication de câbles de fibres optiques",
        "description": "- la fabrication de câbles de fibres optiques pour la transmission des données ou la transmission en direct d’images "
    },
    {
        "cls_na9": "27.32",
        "lib_na9": "Fabrication d'autres fils et câbles électroniques ou électriques",
        "description": "- la fabrication de fils et câbles isolés, en acier, cuivre, aluminium "
    },
    {
        "cls_na9": "27.33",
        "lib_na9": "Fabrication de matériel d'installation électrique",
        "description": "d’installations électriques, quel que soit le matériau utilisé. - la fabrication de barres bus, de conducteurs électriques (sauf de type commutateurs) - la fabrication de disjoncteurs différentiels - la fabrication de douilles pour lampes - la fabrication de coupe-circuits et de bobines - la fabrication d’interrupteurs pour câblages électriques (tels que interrupteurs à poussoir, à bouton poussoir, à bascule, etc.) - la fabrication de prises de courant - la fabrication de boîtiers pour les câblages électriques (par exemple: jonctions, prises de courant, interrupteurs) - la fabrication de canalisations et accessoires électriques - la fabrication de quincaillerie de ligne électrique suspendue - la fabrication de dispositifs de câblage non porteurs de courant fait de plastique, boîtes de connexion, plaques, raccords de lignes de poteaux "
    },
    {
        "cls_na9": "27.40",
        "lib_na9": "Fabrication d'appareils d'éclairage électrique",
        "description": "ébauches de verre pour ampoules électriques), la fabrication d’appareils d’éclairage ainsi que de lampes de table et de lampadaires (à l’exception des dispositifs de câblage porteurs et non porteurs de courant). - la fabrication de lampes à décharge, à incandescence, à fluorescence, à ultraviolet, à infrarouge, etc., leurs ampoules et accessoires - la fabrication de plafonniers - la fabrication de chandeliers - la fabrication de lampes de table (dispositifs d’éclairage) - la fabrication d’ornements électriques pour arbres de Noël - la fabrication de dispositifs lumineux décoratifs pour foyers - la fabrication d’appareils et de dispositifs pour la production de la lumière-éclair - la fabrication de lampes anti-insectes - la fabrication de lanternes (au carbure, électriques, au gaz, à l’essence, au kérosène, etc.) - la fabrication de projecteurs - la fabrication d’appareils d’éclairage de rue (à l’exception des feux de signalisation) - la fabrication d’appareils d’éclairage pour le matériel de transport (véhicules à moteur, avions, navires, etc.)  133     - la fabrication de matériel d’éclairage non électrique "
    },
    {
        "cls_na9": "27.51",
        "lib_na9": "Fabrication d'appareils électroménagers",
        "description": "- la fabrication d’appareils électroménagers: • réfrigérateurs • congélateurs • machines à laver la vaisselle • machines à laver et à sécher le linge • aspirateurs • polisseurs de sols • broyeurs de déchets • presse-fruits et presse-légumes • ouvre-boîtes • rasoirs électriques, brosses à dents électriques et autres appareils domestiques électriques • appareils à aiguiser les couteaux • hottes aspirantes à extraction ou à recyclage - la fabrication d’appareils électrothermiques à usage domestique: • chauffe-eau électriques • couvertures chauffantes • sèche-cheveux, peignes, brosses, appareils à friser électriques • fers à repasser électriques • appareils pour le chauffage des locaux et ventilateurs de type ménager, portatifs • fours électriques • fours à micro-ondes • cuisinières, chauffe-plats • grille-pain • appareils pour la préparation du café ou du thé • poêles à frire, rôtissoires, grils, hottes • résistances chauffantes, etc. "
    },
    {
        "cls_na9": "27.52",
        "lib_na9": "Fabrication d'appareils ménagers non électriques",
        "description": "- la fabrication d’appareils non électriques pour le chauffage des locaux et la cuisine domestique: • appareils pour le chauffage des locaux, cuisinières, grils, poêles, chauffe-eau, ustensiles de cuisine, chauffe-plats, non électriques  134 I n st i t u t N a t i o nal d e la S ta tis tiq u e    27.9 Fabrication d'autres matériels électriques "
    },
    {
        "cls_na9": "27.90",
        "lib_na9": "Fabrication d'autres matériels électriques",
        "description": "piles et accumulateurs, câbles et câblages d’installations électriques, appareils d’éclairage ou appareils ménagers. - la fabrication de chargeurs de batterie à semi-conducteurs - la fabrication de dispositifs électriques d’ouverture et de fermeture des portes - la fabrication de carillons électriques - la fabrication de prolongateurs électriques à partir de fils isolés achetés - la fabrication d’appareils de nettoyage par ultrasons (autres que ceux destinés à un usage en laboratoire ou dentaire) - la fabrication d’onduleurs à semi-conducteurs, de redresseurs, de piles à combustible, de générateurs électriques - la fabrication de sources d’alimentation électrique ininterruptibles - la fabrication de limiteurs de tension (sauf pour la tension au niveau de la distribution) - la fabrication de câbles d’appareils, de prolongateurs électriques et d’autres jeux de fils électriques avec des fils isolés et des connecteurs - la fabrication d’électrodes et de contacts en carbone et en graphite et d’autres produits électriques constitués de carbone et de graphite - la fabrication d’accélérateurs de particules - la fabrication de condensateurs électriques et de composants similaires - la fabrication d’électro-aimants - la fabrication de sirènes - la fabrication de tableaux d’affichage électroniques - la fabrication de signaux électriques - la fabrication d’appareils électriques de signalisation, tels que les feux de signalisation et les équipements de signalisation pour piétons - la fabrication d’isolateurs pour l’électricité (sauf en verre ou en céramique) - la fabrication de matériel électrique à souder et à braser, y compris les fers à souder portatifs "
    },
    {
        "cls_na9": "28.11",
        "lib_na9": "Fabrication de moteurs et turbines, à l'exception des moteurs d'avions et de véhicules",
        "description": "- la fabrication de moteurs à piston à combustion interne, à l’exclusion des moteurs pour véhicules automobiles, aéronefs et motocycles: • moteurs pour navires et bateaux • moteurs pour véhicules ferroviaires - la fabrication de moteurs de pistons, segments de piston, carburateurs pour tous types de moteurs à combustion interne, moteurs diesel - la fabrication de soupapes d’admission et d’échappement pour moteurs à combustion interne - la fabrication de turbines et de leurs parties: • turbines produisant de la vapeur d’eau ou d’autres types de vapeur • turbines hydrauliques, roues hydrauliques et leurs régulateurs • turbines éoliennes • turbines à gaz, à l’exception des turboréacteurs et des turbopropulseurs pour la propulsion d’aéronefs - la fabrication d’ensembles turbine-chaudière - la fabrication de turbines génératrices - la fabrication de moteurs pour des applications industrielles "
    },
    {
        "cls_na9": "28.12",
        "lib_na9": "Fabrication d'équipements hydrauliques et pneumatiques",
        "description": "- la fabrication d’appareils hydrauliques et pneumatiques (y compris pompes hydrauliques, moteurs hydrauliques, cylindres hydrauliques et pneumatiques, valves hydrauliques et pneumatiques et accessoires) - la fabrication de systèmes de préparation de l’air pour une utilisation dans des systèmes pneumatiques - la fabrication de systèmes hydrauliques et pneumatiques - la fabrication d’organes hydrauliques de transmission - la fabrication de transmissions hydrostatiques "
    },
    {
        "cls_na9": "28.13",
        "lib_na9": "Fabrication d'autres pompes et compresseurs",
        "description": "- la fabrication de pompes à air ou à vide et de compresseurs d’air ou d’autres gaz - la fabrication de pompes pour liquides, même comportant un dispositif mesureur - la fabrication de pompes pour moteurs à combustion interne: pompes à huile, à eau, à carburant pour véhicules automobiles, etc. - la fabrication de pompes actionnées à la main "
    },
    {
        "cls_na9": "28.14",
        "lib_na9": "Fabrication d'autres articles de robinetterie",
        "description": "- la fabrication de robinetterie et de vannes industrielles, y compris les vannes de régulation et la robinetterie d’adduction - la fabrication de robinetterie sanitaire - la fabrication de robinetterie pour le chauffage "
    },
    {
        "cls_na9": "28.15",
        "lib_na9": "Fabrication d'engrenages et d'organes mécaniques de transmission",
        "description": "- la fabrication de roulements à billes, à galets, à rouleaux ou à aiguilles et de leurs éléments - la fabrication d’organes mécaniques de transmission de l’énergie: • arbres de transmission et manivelles: arbres à cames, vilebrequins, manivelles, etc. • paliers et coussinets - la fabrication d’engrenages et de roues de friction ainsi que de réducteurs, de multiplicateurs et de variateurs de vitesse - la fabrication d’embrayages et d’organes d’accouplement - la fabrication de volants et de poulies - la fabrication de chaînes à maillons articulés - la fabrication de chaînes pour la transmission de l’énergie "
    },
    {
        "cls_na9": "28.21",
        "lib_na9": "Fabrication de fours et brûleurs",
        "description": "- la fabrication de fours électriques et d’autres fours industriels ou de laboratoires, y compris les incinérateurs - la fabrication de brûleurs - la fabrication de chauffages électriques de locaux à montage permanent, de chauffages électriques de piscines - la fabrication de chauffages autres que électriques et à usage domestique à montage permanent, comme le chauffage solaire, chauffage à la vapeur, chauffage à l’huile et systèmes similaires de chauffage - la fabrication de fourneaux électriques à usage domestique (installations électriques à air pulsé, pompes à chaleur, etc.), installations non électriques à air pulsé - la fabrication de foyers automatiques, d’avant-foyers, de grilles mécaniques, de dispositifs pour l’évacuation des cendres, etc. "
    },
    {
        "cls_na9": "28.22",
        "lib_na9": "Fabrication de matériel de levage et de manutention",
        "description": "- la fabrication de machines et d’appareils de levage, de chargement, de déchargement ou de manutention actionnés par moteur ou à la main: • palans, treuils et cabestans, crics et vérins • bigues, grues, portiques mobiles, chariots-cavaliers, etc. • chariots, même automobiles, munis ou non d’un dispositif de levage ou de manutention, des types utilisés dans les usines (y compris diables et brouettes) • manipulateurs mécaniques et robots industriels spécialement conçus pour des opérations de levage, de manutention, de chargement ou de déchargement - la fabrication d’appareils transporteurs ou convoyeurs, de téléphériques, etc. - la fabrication d’ascenseurs, d’escaliers mécaniques et de trottoirs roulants - la fabrication d’éléments spécialisés de matériels de levage et de manutention "
    },
    {
        "cls_na9": "28.23",
        "lib_na9": "Fabrication de machines et d'équipements de bureau (à l'exception des ordinateurs et équipements",
        "description": "- la fabrication de machines à calculer - la fabrication de caisses enregistreuses - la fabrication de calculateurs, électroniques ou non - la fabrication de compteurs de timbres-poste, de machines de gestion du courrier (adressage, mise sous pli, cachetage et expédition de plis, ouverture, tri, numérisation), de relieuses - la fabrication de machines à écrire - la fabrication de machines à sténographie - la fabrication de relieuses de bureau (reliures plastiques ou à bande) - la fabrication de machines à écrire des chèques - la fabrication de machines à compter ou à encartoucher les pièces de monnaie - la fabrication de taille-crayons - la fabrication de machines à poser et à enlever les agrafes - la fabrication de machines à voter - la fabrication de distributeurs de ruban  138 I n st i t u t N a t i o nal d e la S ta tis tiq u e    - la fabrication de perforatrices - la fabrication de caisses enregistreuses fonctionnant mécaniquement - la fabrication de photocopieuses - la fabrication de cartouches d’encre - la fabrication de tableaux noirs, blancs, etc. - la fabrication de machines à dicter "
    },
    {
        "cls_na9": "28.24",
        "lib_na9": "Fabrication d'outillage portatif à moteur incorporé",
        "description": "- la fabrication d’outils portatifs à moteur électrique ou non électrique intégré ou pneumatique, tels que: • scies circulaires ou alternatives • tronçonneuses • perceuses et perceuses à percussion • ponceuses à main • marteaux pneumatiques • tampons • routeurs • meuleuses • agrafeuses • riveteuses pneumatiques • raboteuses • ciseaux et cisailles • clés à molette • cloueuses à poudre "
    },
    {
        "cls_na9": "28.25",
        "lib_na9": "Fabrication d'équipements aérauliques et frigorifiques industriels",
        "description": "- la fabrication d’équipements industriels pour la production du froid, y compris l’assemblage des éléments les composant - la fabrication de machines et d’appareils pour le conditionnement de l’air, y compris pour les véhicules automobiles - la fabrication de ventilateurs à usage non domestique - la fabrication d’échangeurs de chaleur - la fabrication de machines à liquéfier l’air ou le gaz - la fabrication de ventilateurs de grenier (ventilateurs sur pignon, ventilateurs sur toit, etc.) "
    },
    {
        "cls_na9": "28.29",
        "lib_na9": "Fabrication de machines diverses d'usage général",
        "description": "- la fabrication d’appareils et d’instruments de pesage (autres que les balances de précision utilisées dans les laboratoires): • balances de ménage et de magasin, bascules, bascules à pesage continu, ponts-bascules, poids pour balances, etc. - la fabrication d’appareils pour la filtration ou l’épuration des liquides - la fabrication d’appareils à projeter, à disperser ou à pulvériser des matières liquides ou en poudre: • pistolets aérographes, extincteurs, machines et appareils à jet de sable, appareils de nettoyage à vapeur, etc. - la fabrication de machines et d’appareils à empaqueter ou emballer les marchandises: • machines et appareils à remplir, fermer, sceller, capsuler ou étiqueter, etc. - la fabrication de machines et d’appareils servant à nettoyer ou à sécher les bouteilles ainsi que de machines et d’appareils à gazéifier les boissons - la fabrication d’appareils de distillation ou de rectification pour les raffineries de pétrole, les industries chimiques, les industries des boissons, etc. - la fabrication de générateurs de gaz - la fabrication de calandres et de laminoirs ainsi que de cylindres pour ces machines (sauf pour le métal et le verre) - la fabrication de machines centrifuges (sauf les écrémeuses et les sèche-linge)  139     - la fabrication de joints d’étanchéité et de joints similaires composés de matériaux différents ou de plusieurs couches d’un même matériau - la fabrication de machines automatiques de vente de produits - la fabrication de niveaux, de mètres à ruban et d’outils à main similaires, d’instruments pour les travaux de mécanique de précision (sauf optiques) - la fabrication de matériel non électrique à souder et à braser - la fabrication de tours de refroidissement et de dispositifs similaires destinés au refroidissement direct fonctionnant avec de l’eau réinjectée "
    },
    {
        "cls_na9": "28.30",
        "lib_na9": "Fabrication de machines agricoles et forestières",
        "description": "- la fabrication de tracteurs agricoles et forestiers - la fabrication de motoculteurs - la fabrication de faucheuses, y compris les tondeuses à gazon - la fabrication de remorques ou de semi-remorques autochargeuses ou autodéchargeuses, pour usages agricoles - la fabrication de machines, d’appareils et d’engins agricoles pour la préparation du sol, la plantation des cultures ou l’épandage des engrais: • charrues, épandeurs de fumier, semoirs, herses, etc. - la fabrication de machines, d’appareils et d’engins pour la récolte et le battage des produits agricoles: • moissonneuses, batteuses, machines pour le triage, etc. - la fabrication de machines à traire - la fabrication de machines et d’appareils de pulvérisation pour l’agriculture - la fabrication d’autres machines et appareils pour l’agriculture: • machines et appareils pour l’aviculture, l’apiculture, la préparation des aliments ou provendes pour animaux, etc. • machines pour le nettoyage, le triage ou le calibrage des œufs, des fruits, etc. "
    },
    {
        "cls_na9": "28.41",
        "lib_na9": "Fabrication de machines de formage des métaux",
        "description": "- la fabrication de machines de formage des métaux, y compris celles opérant par faisceaux laser, par ultrasons, par jet de plasma ou par impulsions magnétiques, etc. - la fabrication de machines-outils servant à tourner, percer, fraiser, limer, raboter, aléser, rectifier, etc. - la fabrication de machines-outils à estamper ou à presser - la fabrication de machines à poinçonner, presses hydrauliques, freins hydrauliques, marteaux-pilons, machines à forger, etc. - la fabrication de bancs à étirer, de machines pour exécuter un filetage par roulage ou de machines pour le travail des métaux sous forme de fils "
    },
    {
        "cls_na9": "28.49",
        "lib_na9": "Fabrication d'autres machines-outils",
        "description": "- la fabrication de machines-outils pour le travail du bois, de l’os, de la pierre, du caoutchouc durci, des matières plastiques dures ou le travail à froid du verre, y compris celles opérant par faisceaux laser, par ultrasons, par jet de plasma ou par impulsions magnétiques, etc. - la fabrication de porte-pièces pour machines-outils - la fabrication de plateaux diviseurs et autres dispositifs spéciaux pour machines-outils - la fabrication de machines-outils pour clouer, agrafer, coller ou autrement assembler le bois, le liège, l’os, le caoutchouc durci ou les matières plastiques dures, etc. - la fabrication de machines de forage rotatives par percussion, de limeuses, de riveteuses, de machines à découper les feuilles de métal, etc. - la fabrication de presses pour la fabrication de panneaux de bois - la fabrication de machines pour le traitement électrolytique - la fabrication de pièces et accessoires destinés aux machines-outils énumérées "
    },
    {
        "cls_na9": "28.91",
        "lib_na9": "Fabrication de machines pour la métallurgie",
        "description": "- la fabrication de machines et d’appareils pour la manutention des métaux à haute température: • convertisseurs, lingotières, poches de coulée, machines à couler (mouler) - la fabrication de laminoirs à métaux et de leurs cylindres "
    },
    {
        "cls_na9": "28.92",
        "lib_na9": "Fabrication de machines pour l'extraction ou la construction",
        "description": "- la fabrication d’appareils élévateurs, transporteurs ou convoyeurs à action continue pour mines au fond ou autres travaux souterrains - la fabrication de machines de sondage, de haveuses, de machines de forage et de machines à creuser les tunnels ou les galeries (destinées ou non aux travaux souterrains) - la fabrication de machines et d’appareils à traiter les minéraux par criblage, triage, séparation, lavage, concassage, etc. - la fabrication de bétonnières et d’appareils à gâcher le ciment - la fabrication de machines et d’appareils de terrassement: • bouteurs (bulldozers), bouteurs biais (angledozers), niveleuses, décapeuses (scrapers), pelles mécaniques, chargeuses et chargeuses-pelleteuses, etc. - la fabrication de sonnettes de battage et de machines pour l’arrachage des pieux, d’épandeurs de mortier et de bitume, de machines pour le surfaçage du béton, etc - la fabrication de tracteurs poseurs de voies et de tracteurs utilisés dans la construction et les mines - la fabrication de lames de bouteurs et de bouteurs biais - la fabrication de camions à benne tout-terrains "
    },
    {
        "cls_na9": "28.93",
        "lib_na9": "Fabrication de machines pour l'industrie agro-alimentaire",
        "description": "- la fabrication de séchoirs pour produits agricoles - la fabrication de machines et d’appareils de laiterie: • écrémeuses • machines pour le traitement du lait (appareils homogénéisateurs, par exemple) • machines et appareils pour la transformation du lait (barattes, malaxeurs et machines à mouler le beurre) • machines et appareils de fromagerie (machines à lisser et à mouler, presses à fromage, etc.) - la fabrication de machines et d’appareils pour la minoterie: • machines pour le nettoyage, le triage ou le calibrage de semences, de grains ou de légumes à cosse secs (tarares, toiles trieuses, séparateurs, machines à brosser les grains, etc.) • machines et appareils pour la production de farines, gruaux ou autres produits de minoterie (moulins à meules de pierre, alimentateurs, machines à nettoyer les sons, mélangeurs, machines à décortiquer le riz, machines à casser les pois) - la fabrication de presses, de pressoirs et de fouloirs, etc., utilisés pour la fabrication du vin, du cidre, des jus de fruits, etc.    - la fabrication de machines et d’appareils pour la boulangerie, la pâtisserie, la biscuiterie ou pour la fabrication des pâtes alimentaires: • fours de boulangerie, malaxeurs à pâte, machines à diviser la pâte, machines à mouler la pâte, machines à trancher, appareils de pâtisserie à doser les pâtes et les ingrédients, etc. - la fabrication de machines et d’appareils pour la transformation de divers produits alimentaires: • machines et appareils pour la confiserie ou pour la fabrication du cacao ou du chocolat, pour la sucrerie, pour la brasserie, pour le travail des viandes ou de la volaille, pour la préparation des fruits, des légumes ou des fruits à coque, pour la préparation des poissons, des crustacés, des coquillages et d’autres produits de la mer • appareils pour la filtration ou l’épuration • autres machines pour la préparation ou la fabrication industrielle de produits alimentaires ou de boissons - la fabrication de machines et d’appareils pour l’extraction ou la préparation des huiles ou des graisses animales ou végétales - la fabrication de machines et d’appareils pour la préparation du tabac et la fabrication de cigares, de cigarettes ou de tabac à pipe, à chiquer ou à priser - la fabrication de machines et d’appareils pour la préparation des aliments dans les hôtels et les restaurants "
    },
    {
        "cls_na9": "28.94",
        "lib_na9": "Fabrication de machines pour les industries textiles",
        "description": "- la fabrication de machines pour l’industrie textile: • machines pour la préparation, la fabrication, le filage (extrusion), l’étirage, la texturation ou le tranchage des fibres, des matières ou des fils textiles, synthétiques ou artificiels • machines pour la préparation des fibres textiles: égreneuses de coton, machines brise-balles, effilocheuses du type Garnett, batteurs-étaleurs à coton, machines à dessuinter la laine, machines à carboniser la laine, peigneuses, cardes, métiers à mèches, etc. • métiers à filer • machines pour la préparation des fils textiles: bobinoirs, ourdissoirs et machines similaires • métiers à tisser, y compris les métiers à main • machines et métiers à bonneterie • machines et métiers à filet, à tulle, à dentelle, à passementerie, etc. - la fabrication de machines et d’appareils auxiliaires pour les machines de l’industrie textile: • ratières, mécaniques Jacquard, casse-chaînes et casse-trames, mécanismes de changement de navettes, broches, ailettes, etc - la fabrication de machines à imprimer sur les matières textiles - la fabrication de machines et d’appareils pour le traitement des tissus: • machines et appareils pour le lavage, le blanchiment, la teinture, l’apprêt, le finissage, l’enduction ou l’imprégnation des tissus en matières textiles • machines à enrouler, dérouler, plier, couper ou denteler les tissus en matières textiles - la fabrication de machines et d’appareils de blanchisserie: • machines à repasser, y compris les presses à fixer • machines commerciales à laver et à sécher le linge • machines pour le nettoyage à sec - la fabrication de machines à coudre ainsi que de têtes et d’aiguilles pour machines à coudre (à usage domestique ou autre) - la fabrication de machines et d’appareils pour la fabrication ou le finissage du feutre ou des non-tissés - la fabrication de machines et d’appareils pour l’industrie du cuir: • machines et appareils pour la préparation, le tannage ou le travail des cuirs ou des peaux • machines et appareils pour la fabrication ou la réparation des chaussures et des autres ouvrages en cuir, en peau ou en pelleterie "
    },
    {
        "cls_na9": "28.95",
        "lib_na9": "Fabrication de machines pour les industries du papier et du carton",
        "description": "- la fabrication de machines pour la fabrication de pâte à papier - la fabrication de machines pour la fabrication du papier et du carton - la fabrication de machines pour la fabrication d’articles en papier ou en carton "
    },
    {
        "cls_na9": "28.96",
        "lib_na9": "Fabrication de machines pour le travail du caoutchouc ou des plastiques",
        "description": "- la fabrication de machines pour le travail du caoutchouc tendre ou des matières plastiques, ou pour la fabrication de produits en ces matières: • extrudeuses, machines à mouler, machines à fabriquer ou à rechaper les pneumatiques et autres machines et appareils à fabriquer des produits spécifiques en caoutchouc ou en matières plastiques   143     "
    },
    {
        "cls_na9": "28.99",
        "lib_na9": "Fabrication d'autres machines d'usage spécifique n.c.a.",
        "description": "- la fabrication de séchoirs pour le bois, les pâtes à papier, les papiers ou les cartons et d’autres matières (à l’exception des produits agricoles et textiles) - la fabrication de machines et de matériel pour l’imprimerie, le brochage et la reliure et de machines pour les activités d’impression sur différents types de matériaux - la fabrication de machines et appareils pour la fabrication de tuiles, de briques, de pâtes céramiques formées, de tuyaux, d’électrodes de graphite, de craies à écrire et à dessiner, etc. - la fabrication de machines à fabriquer les semi-conducteurs - la fabrication de robots industriels multi-tâches à usage spécifique - la fabrication d’autres machines et appareils à usage spécifique: • machines pour l’assemblage de lampes, de tubes, de valves électriques ou électroniques ou d’ampoules • machines pour la fabrication ou le travail à chaud du verre ou des ouvrages en verre, des fibres et des fils de verre • machines et appareils pour la séparation isotopique - la fabrication de matériel d’équilibrage des pneumatiques et de réglage de géométrie, de matériel d’équilibrage (sauf équilibrage des roues) - la fabrication d’appareillages dits de \"graissage centralisé\" - la fabrication d’appareils et de dispositifs pour le lancement de véhicules aériens, de catapultes destinées à équiper des porte-avions et de matériel similaire - la fabrication de bancs solaires - la fabrication d’installations de bowling automatiques (par exemple: machines à requiller) - la fabrication de manèges, de balançoires, de stands de tir et d’autres attractions foraines "
    },
    {
        "cls_na9": "29.10",
        "lib_na9": "Construction de véhicules automobiles",
        "description": "- la fabrication de voitures de tourisme - la fabrication de véhicules utilitaires: • camions et camionnettes, tracteurs routiers pour semi-remorques, etc. - la fabrication d’autobus, de trolleybus et d’autocars - la fabrication de moteurs pour véhicules automobiles - la fabrication de châssis pour véhicules à moteur - la fabrication d’autres véhicules automobiles: • autoneiges et motoneiges, véhicules spéciaux pour le transport de personnes sur les terrains de golf, véhicules amphibies • autopompes, balayeuses, bibliobus, voitures blindées, etc. • camions-bétonnières - la fabrication de véhicules tout terrain, karts et engins similaires, y compris les voitures de course - le réusinage de moteurs pour véhicules automobiles "
    },
    {
        "cls_na9": "29.20",
        "lib_na9": "Fabrication de carrosseries et remorques",
        "description": "- la fabrication de carrosseries, y compris les cabines, pour véhicules automobiles - l’aménagement de tous types de véhicules automobiles, de remorques et de semi-remorques - la fabrication de remorques et de semi-remorques: • camions-citernes, véhicules de déménagement • remorques pour le camping, etc. - la fabrication de cadres et de conteneurs spécialement conçus et équipés pour un ou plusieurs modes de transport "
    },
    {
        "cls_na9": "29.31",
        "lib_na9": "Fabrication d'équipements électriques et électroniques automobiles",
        "description": "- la fabrication de dispositifs électriques pour véhicules automobiles, tels que génératrices, alternateurs, bougies d’allumage, jeux de fils pour bougies d’allumage, systèmes d’ouverture et de fermeture électriques des portières et des vitres, assemblage de jauges achetées dans le tableau de bord, régulateurs de tension, etc. "
    },
    {
        "cls_na9": "29.32",
        "lib_na9": "Fabrication d'autres équipements automobiles",
        "description": "- la fabrication de parties et accessoires divers pour véhicules automobiles: • freins, boîtes de vitesses, essieux, roues, amortisseurs, radiateurs, silencieux, tuyaux d’échappement, catalyseurs, embrayages, volants, colonnes et boîtiers de direction - la fabrication de parties et accessoires pour carrosseries de véhicules automobiles: • ceintures de sécurité, coussins gonflables de sécurité, portières, pare-chocs - la fabrication de sièges de voitures "
    },
    {
        "cls_na9": "30.11",
        "lib_na9": "Construction de navires et de structures flottantes",
        "description": "et la construction de structures flottantes: - la construction de navires de commerce: navires à passagers, transbordeurs, cargos, bateaux-citernes, remorqueurs, etc. - la construction de navires de guerre - la construction de bateaux de pêche et de navires usines procédant à la transformation du poisson - la construction d’aéroglisseurs (à l’exception des aéroglisseurs de plaisance) - la construction de plates-formes de forage flottantes ou submersibles - la construction de structures et d’engins flottants: • docks flottants, pontons, caissons, coffres d’amarrage flottants, bouées, réservoirs flottants, barges, allèges, gabares, pontons-grues, radeaux gonflables autres que récréatifs, etc. - la fabrication d’éléments métalliques pour la construction navale et de structures flottantes "
    },
    {
        "cls_na9": "30.12",
        "lib_na9": "Construction de bateaux de plaisance",
        "description": "- la construction de bateaux et de radeaux gonflables - la construction de voiliers, avec ou sans moteur auxiliaire - la construction de bateaux à moteur - la construction d’aéroglisseurs de plaisance - la fabrication de motos marines - la construction d’autres embarcations de plaisance et de sport: • canoës, kayaks, canots, skiffs "
    },
    {
        "cls_na9": "30.20",
        "lib_na9": "Construction de locomotives et d’autre matériel ferroviaire roulant",
        "description": "- la fabrication de locomotives et de locotracteurs électriques, diesel, à vapeur ou autres - la fabrication d’automotrices, d’autorails, de véhicules d’entretien ou de service - la fabrication de véhicules pour voies ferrées ou similaires dépourvus d’organes moteurs: • voitures pour voyageurs, wagons pour le transport de marchandises, wagons-citernes, wagons à déchargement automatique, wagons-ateliers, wagons-grues, tenders, etc. - la fabrication de parties de véhicules pour voies ferrées ou similaires: • bogies, essieux et roues, freins et leurs parties, crochets et autres systèmes d’attelage, tampons de choc et leurs parties, amortisseurs, châssis de wagons et de locomotives, caisses, soufflets, etc. - la fabrication de locomotives utilisées dans les mines et de wagonnets miniers - la fabrication d’appareils mécaniques et électromécaniques de signalisation, de sécurité, de contrôle ou de commande pour voies ferrées, voies fluviales, voies routières, installations portuaires et aéroports, etc. - la fabrication de sièges de wagons "
    },
    {
        "cls_na9": "30.30",
        "lib_na9": "Construction aéronautique et spatiale",
        "description": "- la construction d’avions conçus pour le transport de marchandises ou de passagers, pour les forces militaires, pour le sport ou pour d’autres usages - la construction d’hélicoptères - la construction de planeurs et d’ailes delta - la construction de dirigeables et de ballons à air chaud - la fabrication de parties et accessoires des appareils relevant de cette classe: • grands assemblages tels que fuselages, ailes, portes, gouvernes, trains d’atterrissage, réservoirs à combustibles, nacelles, etc. • hélices, rotors et pales de rotors pour hélicoptères • moteurs des types généralement utilisés pour la propulsion des véhicules aériens • parties de turboréacteurs et de turbopropulseurs - la fabrication d’appareils au sol d’entraînement au vol - la construction de véhicules spatiaux et de leurs véhicules lanceurs, de satellites, de sondes planétaires, de stations orbitales, de navettes spatiales - la fabrication de missiles balistiques intercontinentaux - la révision et la conversion des aéronefs et de leurs moteurs - la fabrication de sièges d’avions "
    },
    {
        "cls_na9": "30.40",
        "lib_na9": "Construction de véhicules militaires de combat",
        "description": "- la fabrication de chars - la fabrication de véhicules amphibies blindés de l’armée - la construction d’autres véhicules militaires de combat "
    },
    {
        "cls_na9": "30.91",
        "lib_na9": "Fabrication de motocycles",
        "description": "- la fabrication de motocycles, de cyclomoteurs et de cycles équipés d’un moteur auxiliaire - la fabrication de moteurs pour motocycles - la fabrication de sidecars - la fabrication de parties et d’accessoires pour motocycles "
    },
    {
        "cls_na9": "30.92",
        "lib_na9": "Fabrication de bicyclettes et de véhicules pour invalides",
        "description": "- la fabrication de bicyclettes et autres cycles (y compris les triporteurs), sans moteur, de tandems, bicyclettes et tricycles d’enfants - la fabrication de parties et d’accessoires de bicyclettes - la fabrication de véhicules pour invalides, avec ou sans moteur - la fabrication de parties et d’accessoires de véhicules pour invalides - la fabrication de landaus et de poussettes "
    },
    {
        "cls_na9": "30.99",
        "lib_na9": "Fabrication d'autres équipements de transport n.c.a.",
        "description": "- la fabrication de véhicules propulsés à la main: chariots à bagages, charrettes à bras, traîneaux, chariots pour achats, etc. - la fabrication de véhicules à traction animale: sulkies, charrettes, corbillards, etc. "
    },
    {
        "cls_na9": "31.01",
        "lib_na9": "Fabrication de meubles de bureau et de magasin",
        "description": "tout lieu et pour tout usage. - la fabrication de sièges d’ameublement, de bureau et d’atelier, d’hôtels, de restaurants et de locaux publics - la fabrication de sièges pour salles de spectacles - la fabrication de meubles spéciaux pour magasins: comptoirs, présentoirs, rayonnages, etc. - la fabrication de meubles de bureau - la fabrication de bancs et de chaises de laboratoire et d’autres sièges de laboratoires, meubles de laboratoire (par exemple: armoires et tables) - la fabrication de mobilier pour églises, écoles, restaurants - les chariots décoratifs de restaurant, tels que chariots à dessert, à buffets "
    },
    {
        "cls_na9": "31.02",
        "lib_na9": "Fabrication de meubles de cuisine",
        "description": "- la fabrication de meubles de cuisine "
    },
    {
        "cls_na9": "31.03",
        "lib_na9": "Fabrication de matelas",
        "description": "- la fabrication de matelas: • matelas comportant des ressorts ou bien rembourrés ou garnis intérieurement d’un matériau de soutien • matelas non recouverts en caoutchouc alvéolaire ou en matières plastiques alvéolaires - la fabrication de sommiers "
    },
    {
        "cls_na9": "31.08",
        "lib_na9": "Industries connexes de l'ameublement",
        "description": "- le laquage, le vernissage, la dorure, la peinture, etc., sur meubles - le capitonnage, le garnissage de meubles et le services des tapissiers décorateurs "
    },
    {
        "cls_na9": "31.09",
        "lib_na9": "Fabrication d'autres meubles",
        "description": "- la fabrication de canapés et de canapés-lits - la fabrication de sièges de jardin - la fabrication de mobilier de jardin et de meubles des types utilisés dans les chambres à coucher, les salles à manger et de séjour, etc. - la fabrication de meubles de machines à coudre, de meubles de télévision, etc. "
    },
    {
        "cls_na9": "32.11",
        "lib_na9": "Frappe de monnaie",
        "description": "- la fabrication de monnaies, y compris celles ayant cours légal, en métaux précieux ou non "
    },
    {
        "cls_na9": "32.12",
        "lib_na9": "Fabrication d'articles de joaillerie et bijouterie",
        "description": "- la fabrication de perles travaillées - la production de pierres gemmes (précieuses ou fines), travaillées, y compris le travail de pierres de qualité industrielle et de pierres synthétiques ou reconstituées - le travail du diamant - la fabrication d’articles de bijouterie en métaux précieux, en plaqués ou en doublés de métaux précieux ou de pierres gemmes (précieuses ou fines) sur des métaux communs, ou en assemblages de métaux précieux et de pierres gemmes (précieuses ou fines) ou d’autres matériaux - la fabrication d’articles d’orfèvrerie en métaux précieux ou en plaqués ou doublés de métaux précieux sur des métaux communs: • vaisselle plate et creuse, couverts, articles de toilette, garnitures de bureau, articles à usage religieux, etc - la fabrication d’articles techniques et de laboratoire en métal précieux (sauf instruments ou parties d’instruments): creusets, spatules, anodes de placage, etc. - la fabrication de bracelets de montres, de bracelets et d’étuis à cigarettes en métaux précieux - la gravure, personnalisée ou non, d’articles en métaux précieux et non précieux "
    },
    {
        "cls_na9": "32.13",
        "lib_na9": "Fabrication d'articles de bijouterie fantaisie et articles similaires",
        "description": "- la fabrication de bijoux de fantaisie: • bagues, bracelets, colliers et articles de bijouterie similaires en plaqués ou en doublés de métaux précieux sur métaux communs • articles de bijouterie contenant des pierres artificielles, telles que pierres précieuses artificielles, diamants de synthèse et autres - la fabrication de bracelets de montres en métal (à l’exception des métaux précieux) "
    },
    {
        "cls_na9": "32.20",
        "lib_na9": "Fabrication d'instruments de musique",
        "description": "- la fabrication d’instruments à cordes - la fabrication d’instruments à cordes à clavier, y compris les pianos automatiques - la fabrication d’orgues à tuyaux et à clavier, y compris les harmoniums et les instruments similaires à clavier et à anches libres métalliques - la fabrication d’accordéons et d’instruments similaires, y compris les harmonicas à bouche - la fabrication d’instruments à vent - la fabrication d’instruments de musique à percussion - la fabrication d’instruments de musique dont le son est produit électroniquement - la fabrication de boîtes à musique, d’orchestrions, d’orgues de Barbarie, etc. - la fabrication de parties et d’accessoires d’instruments de musique: • métronomes, diapasons, cartes, disques et rouleaux pour instruments mécaniques, etc. - la fabrication de sifflets, de cornes d’appel et d’autres instruments d’appel ou de signalisation à bouche "
    },
    {
        "cls_na9": "32.30",
        "lib_na9": "Fabrication d'articles de sport",
        "description": "- la fabrication d’articles et de matériels pour les sports et les jeux de plein air et de salle, en tout type de matériau: • balles et ballons durs, mous ou gonflables • raquettes, battes, clubs de golf • skis, fixations et bâtons pour skis • chaussures de ski • planches à voile et planches de surf • articles pour la pêche sportive, y compris les épuisettes • articles pour la chasse, l’alpinisme, etc. • gants et coiffures de sport en cuir • bassins pour piscines, pataugeoires, etc. • patins à glace, patins à roulettes, etc. • arcs et arbalètes • matériel pour gymnases, centres de santé ou d’athlétisme "
    },
    {
        "cls_na9": "32.40",
        "lib_na9": "Fabrication de jeux et jouets",
        "description": "d’enfant (à l’exception des bicyclettes et des tricycles en métal). - la fabrication de poupées et de vêtements et de pièces et accessoires pour poupées - la fabrication de figurines d’action - la fabrication de jouets représentant des animaux - la fabrication d’instruments de musique jouets - la fabrication de cartes à jouer - la fabrication de jeux de société et de jeux similaires - la fabrication de jeux électroniques: jeux d’échecs, etc. - la fabrication de modèles réduits et de modèles similaires pour le divertissement, de trains électriques, de jeux de construction, etc. - la fabrication de jeux à moteur ou à mouvement, de jeux fonctionnant au moyen de pièces de monnaie, de billards, de tables spéciales pour jeux de casino, etc. - la fabrication d’articles pour jeux de société - la fabrication de jouets à roues conçus pour être montés par les enfants, y compris les bicyclettes et tricycles en plastique - la fabrication de puzzles et d’articles similaires "
    },
    {
        "cls_na9": "32.50",
        "lib_na9": "Fabrication d'instruments et de fournitures à usage médical et dentaire",
        "description": "et d’appareils nécessaires à l’exercice de l’art dentaire, de dentiers, d’articles et d’appareils nécessaires à la pratique de l’orthodontie. La fabrication de mobilier pour la médecine, l’art dentaire ou les activités similaires, dont les fonctions spécifiques déterminent la finalité du produit, telles que les fauteuils de dentiste avec fonctions hydrauliques intégrées. - la fabrication de champs opératoires et de fils et compresses stériles - la fabrication de produits d’obturation dentaire et de ciments dentaires (à l’exception des préparations destinées à faciliter l’adhérence des dentiers), de cire dentaire et d’autres préparations à base de plâtre dentaire - la fabrication de ciments pour la réfection osseuse - la fabrication de fours de laboratoires dentaires - la fabrication d’appareils de nettoyage par ultrasons destinés à un usage en laboratoire - la fabrication de stérilisateurs de laboratoires - la fabrication d’équipements de distillation de laboratoire, de centrifugeuses de laboratoire - la fabrication de mobilier pour la médecine, la chirurgie, l’art dentaire ou l’art vétérinaire, tel que: • tables d’opération • tables d’examen • lits à mécanismes pour usages cliniques • fauteuils de dentistes - la fabrication de plaques et de vis pour la fixation des os, de seringues, d’aiguilles, de cathéters, de canules, etc - la fabrication d’instruments nécessaires à l’exercice de l’art dentaire (y compris les fauteuils de dentistes incorporant des appareils pour l’art dentaire) - la production de dents artificielles, bridges etc., fabriqués en laboratoires dentaires - la fabrication de matériel orthopédique et prothétique - la fabrication d’yeux artificiels - la fabrication de thermomètres médicaux - la fabrication d’articles ophtalmologiques, lunettes correctrices, lunettes de soleil, lentilles sur prescription, verres de contact, lunettes protectrices  152 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "32.91",
        "lib_na9": "Fabrication d'articles de brosserie",
        "description": "- la fabrication de balais, de pinceaux et de brosses, même constituant des parties de machines, de balais mécaniques pour emploi à la main, de balais à franges et de plumeaux, de brosses et de pinceaux à peindre, de rouleaux et de tampons à peindre, de raclettes en caoutchouc et d’autres brosses, balais, balayettes, etc. - la fabrication de brosses à habits et à chaussures "
    },
    {
        "cls_na9": "32.99",
        "lib_na9": "Autres activités manufacturières n.c.a.",
        "description": "- la fabrication d’équipements de protection • la fabrication de vêtements de sécurité résistant au feu et de protection • la fabrication de ceintures de sécurité pour poseurs de rails et autres ceintures à usage professionnel • la fabrication de bouées de sauvetage en liège • la fabrication de casques en plastique et d’autres équipements personnels de sécurité en matières plastiques (par exemple: les casques de protection pour l’athlétisme) • la fabrication de vêtements de protection pour la lutte contre l’incendie • la fabrication de coiffures de sécurité et d’autres équipements personnels de sécurité en métal • la fabrication de protections auditives (par exemple: contre le bruit ou pour la pratique de la natation) • la fabrication de masques à gaz - la fabrication de stylos et de crayons de tous types, mécaniques ou non - la fabrication de mines pour crayons - la fabrication de dateurs, de cachets ou de numéroteurs, d’appareils manuels pour l’impression d’étiquettes, d’imprimeries à main, de rubans encreurs préparés pour machines à écrire et de tampons encreurs - la fabrication de globes - la fabrication de parapluies, d’ombrelles, de parasols, de cannes, de cannes-sièges - la fabrication de boutons, de boutons-pression et de fermetures à glissière - la fabrication de briquets - la fabrication d’articles à usage personnel: pipes, vaporisateurs de toilette, bouteilles isolantes et autres récipients isothermiques à usage personnel ou domestique, perruques, fausses barbes, faux sourcils - la fabrication de divers articles: bougies, chandelles, cierges et articles similaires, fleurs, fruits et feuillages artificiels, articles-surprises, tamis et cribles à main, mannequins pour tailleurs, cercueils, etc. - la fabrication de compositions florales, bouquets, couronnes et articles similaires - les activités des taxidermistes "
    },
    {
        "cls_na9": "33.11",
        "lib_na9": "Réparation d'ouvrages en métaux",
        "description": "- la réparation de réservoirs, citernes et conteneurs métalliques - la réparation et l’entretien de conduites et pipelines - les services de réparation par soudure mobile - la réparation de fûts métalliques de transport - la réparation et l’entretien de générateurs produisant de la vapeur d’eau ou d’autres types de vapeur - la réparation et l’entretien d’appareils auxiliaires pour générateurs de vapeur: • condensateurs, économiseurs, surchauffeurs, collecteurs et accumulateurs de vapeur - la réparation et l’entretien de réacteurs nucléaires, à l’exception des séparateurs d’isotopes - la réparation et l’entretien de pièces destinées aux chaudières de navires ou de centrales électriques - la réparation de chaudières et de radiateurs de chauffage central - la réparation et l’entretien d’armes à feux et de pièces d’artillerie (y compris la réparation de fusils pour le tir sportif et de loisirs) - la réparation et l’entretien de chariots pour achats "
    },
    {
        "cls_na9": "33.12",
        "lib_na9": "Réparation de machines et équipements mécaniques",
        "description": "l’installation de lames et de scies, la fourniture de services de réparation par soudure (par exemple: pour les activités liées à l’automobile ou générales), la réparation de machines et équipements agricoles ou autres machines et équipements industriels et lourds (par exemple: chariots élévateurs et autres matériels de manutention, machines-outils, équipements de réfrigération commerciaux, équipements de construction et machines des industries extractives), y compris les machines et les équipements relevant de la division 28. - la réparation et l’entretien de moteurs de véhicules autres qu’automobiles - la réparation et l’entretien de pompes, compresseurs et équipements similaires - la réparation et l’entretien de machines hydrauliques - la réparation de soupapes - la réparation d’organes mécaniques de transmission - la réparation et l’entretien de fours industriels - la réparation et l’entretien de matériel de levage et de manutention des matériaux - la réparation et l’entretien d’équipements industriels de réfrigération et de purification de l’air - la réparation et l’entretien de machines d’usage général de type commercial - la réparation de divers outillages portatifs à moteur incorporé - la réparation et l’entretien de machines-outils de découpe et de formage des métaux et de leurs accessoires - la réparation et l’entretien de diverses machines-outils - la réparation et l’entretien de tracteurs agricoles - la réparation et l’entretien de machines agricoles et forestières - la réparation et l’entretien de machines pour la métallurgie - la réparation et l’entretien de machines des industries extractives, pour la construction et les champs de pétrole et de gaz - la réparation et l’entretien de machines de transformation des aliments, des boissons et du tabac - la réparation et l’entretien de machines pour la production de vêtements en tissus et de cuir - la réparation et l’entretien de machines pour la papeterie - la réparation et l’entretien de machines pour le travail du caoutchouc ou des plastiques - la réparation et l’entretien de machines diverses d’usage spécifique relevant de la division 28 - la réparation et l’entretien de matériels de pesage - la réparation et l’entretien de distributeurs automatiques - la réparation et l’entretien de caisses enregistreuses - la réparation et l’entretien de photocopieuses - la réparation de calculateurs, électroniques ou non - la réparation de machines à écrire "
    },
    {
        "cls_na9": "33.13",
        "lib_na9": "Réparation de matériels électroniques et optiques",
        "description": "de ceux qui sont considérés comme des articles domestiques. - la réparation et l’entretien d’équipements de mesure, d’essai, de navigation et de contrôle relevant du groupe 26.5, tels que: • instruments de moteurs d’aéronef • instruments de contrôle des émissions des véhicules à moteur • instruments météorologiques • instruments d’essai et de contrôle des propriétés physiques, électriques et chimiques • instruments de géodésie • détecteurs et moniteurs de radiation - la réparation et l'entretien d’équipements d’irradiation médicale, d’équipements électromédicaux et électrothérapeutiques relevant de la classe 26.60, tels que: • appareils d’imagerie par résonnance magnétique • appareils médicaux à ultrasons • stimulateurs cardiaques • appareils pour faciliter l’audition • électrocardiographes • appareils électromédicaux pour techniques endoscopiques • appareils pour irradiations - la réparation et l'entretien d’équipements et d’instruments optiques relevant de la classe 26.70 destinés à un usage commercial, tels que: • jumelles • microscopes (à l’exception des microscopes électroniques, protoniques) • télescopes • prismes et lentilles (sauf ophtalmiques) • matériel photographique "
    },
    {
        "cls_na9": "33.14",
        "lib_na9": "Réparation d'équipements électriques",
        "description": "du groupe 27.5 (appareils électroménagers). - la réparation et l’entretien des transformateurs de puissance, de distribution et de transformateurs spéciaux - la réparation et l’entretien de moteurs et de générateurs électriques et de groupes électrogènes à moteur - la réparation et l’entretien de commutateurs et de tableaux de distribution - la réparation et l’entretien de relais et de contrôles industriels - la réparation et l’entretien de piles et de batteries électriques - la réparation et l’entretien d’appareils d’éclairage électrique - la réparation et l’entretien de dispositifs de câblage porteurs et non porteurs de courant pour le câblage d’installations électriques "
    },
    {
        "cls_na9": "33.15",
        "lib_na9": "Réparation et maintenance navale",
        "description": "bateaux relèvent de la classe 30. - la réparation et l’entretien régulier des navires et bateaux - la réparation et l’entretien des bateaux de plaisance "
    },
    {
        "cls_na9": "33.16",
        "lib_na9": "Réparation et maintenance d'aéronefs et d'engins spatiaux",
        "description": "- la réparation et l’entretien d’aéronefs (à l’exception de la conversion, de la révision et de la reconstruction en usine) - la réparation et l’entretien de moteurs d’aéronefs "
    },
    {
        "cls_na9": "33.17",
        "lib_na9": "Réparation et maintenance d'autres équipements de transport",
        "description": "des motocycles et des bicyclettes. - la réparation et l’entretien des locomotives et des wagons (à l’exception de la reconstruction ou de la conversion en usine) - la réparation de véhicules à traction animale "
    },
    {
        "cls_na9": "33.19",
        "lib_na9": "Réparation d'autres équipements",
        "description": "- la réparation des filets de pêche, y compris le raccommodage - la réparation de cordes, gréements, toiles et toiles goudronnées - la réparation de sacs d’engrais et de stockage de produits chimiques - la réparation ou le reconditionnement de palettes en bois, de fûts ou de tonneaux de transport et d’articles similaires - la réparation de billards électriques et d’autres jeux fonctionnant au moyen de pièces de monnaie - la restauration d’orgues et d’autres instruments de musique historiques "
    },
    {
        "cls_na9": "33.20",
        "lib_na9": "Installation de machines et d'équipements industriels",
        "description": "partie intégrante de bâtiments ou de structures similaires, telles que l’installation de câblages électriques, d’escaliers mécaniques, de systèmes antieffraction ou de systèmes de conditionnement d’air sont classées dans la construction. - l’installation de machines industrielles dans un site industriel - l’assemblage d’équipements de contrôle des processus industriels - l’installation d’autres équipements industriels tels que: • équipements de communication • gros systèmes et ordinateurs similaires • équipements d’irradiation médicale et électromédicaux, etc. - le démantèlement de machines et d’équipements à usage général - les activités des installateurs de moulins - le gréage des machines - l’installation de jeux de quilles automatiques (bowlings) "
    },
    {
        "cls_na9": "35.11",
        "lib_na9": "Production d'électricité",
        "description": "- l’exploitation des installations de production d’électricité, y compris la production d’origine thermique, nucléaire, hydroélectrique, par turbine à gaz, par centrale diesel ou à partir d’autres sources d’énergie renouvelables "
    },
    {
        "cls_na9": "35.12",
        "lib_na9": "Transport d'électricité",
        "description": "- l’exploitation de systèmes de transmission qui transportent l’électricité du site de production au système de distribution "
    },
    {
        "cls_na9": "35.13",
        "lib_na9": "Distribution d'électricité",
        "description": "- l’exploitation des systèmes de distribution (c’est-à-dire lignes, pylônes, compteurs et câbles) qui transportent le courant électrique reçu des installations de production ou du système de transmission au consommateur final "
    },
    {
        "cls_na9": "35.14",
        "lib_na9": "Commerce d'électricité",
        "description": "- la vente d’électricité au consommateur - les activités des courtiers en courant électrique ou des agents qui organisent la vente d’électricité via des systèmes de distribution de courant exploités par d’autres - l’exploitation des échanges d’électricité et de capacité de transfert pour le courant électrique 35.2 Production et distribution de combustibles gazeux Ce groupe comprend la fabrication et la distribution du gaz naturel ou synthétique aux consommateurs au moyen d’un réseau de canalisations. Les marchands et négociants qui négocient la vente de gaz naturel par l’entremise de réseaux de distribution du gaz exploités par d’autres sont également compris. L’exploitation distincte de gazoducs, transportant du gaz généralement sur de longues distances et reliant les producteurs et les distributeurs du gaz ou différents centres urbains, n’est pas comprise dans ce groupe et relève des autres services de transport par conduites. "
    },
    {
        "cls_na9": "35.21",
        "lib_na9": "Production de combustibles gazeux",
        "description": "- la production, pour les besoins de l’approvisionnement en gaz, de gaz obtenus par distillation du charbon ou à partir de sous-produits de l’agriculture ou de déchets - la production de combustibles gazeux d’une valeur calorifique déterminée par purification, mélange ou d’autres traitements de gaz d’origines diverses, y compris le gaz naturel "
    },
    {
        "cls_na9": "35.22",
        "lib_na9": "Distribution de combustibles gazeux par conduites",
        "description": "- la distribution par conduites de combustibles gazeux de tous types "
    },
    {
        "cls_na9": "35.23",
        "lib_na9": "Commerce de combustibles gazeux par conduites",
        "description": "- la vente au consommateur de gaz acheminé par des conduites - les activités des courtiers en gaz ou des agents qui organisent la vente de gaz via des systèmes de distribution de gaz exploités par d’autres - les échanges de produits et de capacité de transfert pour les combustibles gazeux "
    },
    {
        "cls_na9": "35.30",
        "lib_na9": "Production et distribution de vapeur et d'air conditionné",
        "description": "- la production, la collecte et la distribution de vapeur et d’eau chaude pour le chauffage, la force motrice et d’autres usages - la production et la distribution d’air réfrigéré - la production et la distribution d’eau froide pour le refroidissement - la production de glace pour des usages alimentaires ou autres (par exemple, pour le refroidissement)  160 I n st i t u t N a t i o nal d e la S ta tis tiq u e    SECTION E  PRODUCTION ET DISTRIBUTION D'EAU; ASSAINISSEMENT, GESTION DES DÉCHETS ET DÉPOLLUTION  Cette section comprend les activités liées à la gestion (comprenant les services de collecte, de traitement et d’élimination) de différents types de déchets, tels que déchets solides ou autres produits par les industries ou les ménages, ainsi que les sites contaminés. Le produit résultant du processus de traitement des déchets ou des eaux usées peut être éliminé ou devenir une matière de base pour un autre processus de production. Les activités liées à la distribution d’eau sont également comprises dans cette section, car elles sont souvent effectuées dans le cadre du traitement des eaux usées ou par des unités actives dans ce domaine.  36 Captage, traitement et distribution d'eau Cette division comprend les activités de captage, de traitement et de distribution d’eau pour les besoins des ménages et des industries. Le captage d’eau de plusieurs origines et la distribution par différents moyens sont également compris. 36.0 Captage, traitement et distribution d'eau "
    },
    {
        "cls_na9": "36.00",
        "lib_na9": "Captage, traitement et distribution d'eau",
        "description": "des industries. Le captage d’eau de plusieurs origines et la distribution par différents moyens sont également compris. L’exploitation de canaux d’irrigation est également comprise, mais la fourniture de services d’irrigation comme l’arrosage automatique et d’autres services similaires de soutien à l’activité agricole, n’est pas comprise. - le captage d’eau à partir de rivières, de lacs et de puits, etc. - la collecte d’eau de pluie - le traitement de l’eau aux fins de la distribution d’eau - le traitement de l’eau pour des usages industriels ou autres - le dessalement de l’eau de mer ou d’eaux souterraines, pour autant que la production d’eau constitue l’activité principale - la distribution de l’eau par conduites, camions ou autres moyens de transport - l’exploitation de canaux d’irrigation "
    },
    {
        "cls_na9": "37.00",
        "lib_na9": "Collecte et traitement des eaux usées",
        "description": "- l’exploitation de réseaux d’assainissement ou d’installations de traitement des déchets - la collecte et le transport des eaux résiduaires humaines ou industrielles provenant d’un ou de plusieurs utilisateurs et des eaux de pluie au moyen de réseaux d’assainissement, de collecteurs, de fosses et d’autres moyens de transports (camions de vidange, etc.) - la vidange et le nettoyage des puisards, des fosses septiques, des puits et des fosses, l’entretien des toilettes chimiques - le traitement des eaux usées (humaines ou industrielles, eaux usées des piscines, etc.) au moyen de procédés physiques, chimiques et biologiques, tels que la dilution, le criblage, la filtration, la sédimentation, etc. - l’entretien et le nettoyage des égouts et des canalisations, y compris le curetage des égouts "
    },
    {
        "cls_na9": "38.11",
        "lib_na9": "Collecte des déchets non dangereux",
        "description": "- la collecte des déchets solides non dangereux (par exemple: les ordures) au niveau local, comme l’enlèvement de déchets des ménages et des entreprises au moyen de poubelles, de bacs à roulettes, de conteneurs, etc., et peut comprendre les matériaux mixtes récupérables - la collecte de matériaux recyclables - l’enlèvement des détritus collectés dans les boîtes à ordures dans les lieux publics - l’enlèvement de déchets de construction et de démolition - la collecte et l’enlèvement de décombres - l’enlèvement des déchets de production des usines de textiles - l’exploitation d’installations de transfert de déchets non dangereux "
    },
    {
        "cls_na9": "38.12",
        "lib_na9": "Collecte des déchets dangereux",
        "description": "substances dangereuses pour la santé humaine et pour l’environnement, telles que des substances explosives, oxydantes, inflammables, toxiques, irritantes, nocives, cancérogènes, corrosives, infectieuses ou autres. Elle comprend également les activités d’identification, de traitement, d’emballage et d’étiquetage des déchets pour le transport. - la collecte de déchets dangereux, tels que: • huiles usagées de navires ou de garages • déchets biologiques dangereux • déchets nucléaires • piles usagées, etc. - l’exploitation d’installations de transfert de déchets dangereux "
    },
    {
        "cls_na9": "38.21",
        "lib_na9": "Traitement et élimination des déchets non dangereux",
        "description": "- l’exploitation de décharges pour l’élimination de déchets non dangereux - l’élimination de déchets non dangereux par combustion ou incinération ou d’autres méthodes, avec ou sans production d’électricité ou de vapeur, de carburants de substitution, de biométhane, de cendres et d’autres sous-produits destinés à un usage ultérieur, etc. - le traitement des déchets organiques dans le but de les éliminer  162 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "38.22",
        "lib_na9": "Traitement et élimination des déchets dangereux",
        "description": "les déchets contenant des substances dangereuses pour la santé humaine et pour l’environnement, telles que des substances explosives, oxydantes, inflammables, toxiques, irritantes, nocives, cancérogènes, corrosives, infectieuses ou autres. - l’exploitation d’installations de traitement de déchets dangereux - le traitement et l’élimination d’animaux toxiques vivants ou morts et d’autres déchets contaminés - l’incinération de déchets dangereux - l’élimination de biens usés tels que les réfrigérateurs pour éliminer des déchets dangereux - le traitement, l’élimination et le stockage de déchets radioactifs nucléaires, y compris: • traitement et élimination des déchets radioactifs transitoires des hôpitaux, c’est-à-dire qui se dégraderont au cours du transport • conditionnement, préparation et autre traitement des déchets nucléaires avant leur stockage "
    },
    {
        "cls_na9": "38.31",
        "lib_na9": "Démantèlement d'épaves",
        "description": "matériels) à des fins de récupération. "
    },
    {
        "cls_na9": "38.32",
        "lib_na9": "Récupération de déchets triés",
        "description": "premières secondaires en mettant généralement en œuvre des processus de transformation mécanique ou chimique. et en triant les matériaux récupérables dans les flux de déchets non dangereux (les ordures) ou en séparant et en triant les matériaux de récupération non triés, tels que papier, plastique, boîtes à boisson et métaux usagés. Les processus de transformation mécanique ou chimique concernés sont notamment: - le broyage, par des procédés mécaniques, d’objets métalliques tels que vieilles voitures, machines à laver hors d’usage, vieux vélos, etc. - la réduction, par des procédés mécaniques, d’objets métalliques volumineux tels que les wagons de chemin de fer - le déchirage de déchets métalliques, de véhicules en fin de vie, etc. - d’autres méthodes de traitement mécanique telles que le découpage et le pressage pour réduire le volume - la récupération de métaux à partir de déchets photographiques, par exemple: les bains de fixation ou des films ou papiers photographiques - la récupération du caoutchouc (par exemple, sous forme de pneumatiques usagés) pour produire des matières premières secondaires - le triage et le pastillage de matières plastiques en vue d’obtenir des matières premières secondaires utilisables pour la fabrication de tubes, de pots de fleurs, de palettes, etc - la transformation (nettoyage, fusion, broyage) de déchets de plastique ou de caoutchouc en granulés - le broyage, le nettoyage et le triage du verre - le broyage, le nettoyage et le triage d’autres déchets (par exemple, décombres et gravats) en vue d’obtenir des matières premières secondaires - la transformation d’huiles et de graisses alimentaires usées en matières premières secondaires - la transformation d’autres déchets et résidus d’aliments, de boissons et de tabac en matières premières secondaires  163     "
    },
    {
        "cls_na9": "39.00",
        "lib_na9": "Dépollution et autres services de gestion des déchets",
        "description": "- la décontamination des sols et des eaux souterraines pollués, in situ ou ex situ, par exemple: à l’aide de méthodes mécaniques/chimiques ou biologiques - la décontamination d’usines ou de sites, y compris des usines et des sites nucléaires - la décontamination et la dépollution des eaux superficielles à la suite de pollutions accidentelles, par exemple: par l’enlèvement de polluants ou l’application de produits chimiques - le nettoyage des rejets d’hydrocarbures sur terre, dans les eaux superficielles, dans l’océan ou dans la mer, y compris les zones côtières - le désamiantage, l’enlèvement des peintures à base de plomb, la réduction des matières toxiques, etc. - les autres activités spécialisées de lutte contre la pollution "
    },
    {
        "cls_na9": "41.10",
        "lib_na9": "Promotion immobilière",
        "description": "- les activités de promotion immobilière pour la construction d’immeubles résidentiels ou d’autres types de constructions en réunissant les moyens financiers, techniques et humains nécessaires à la réalisation de projets immobiliers destinés ultérieurement à la vente "
    },
    {
        "cls_na9": "41.20",
        "lib_na9": "Construction de bâtiments résidentiels et non résidentiels",
        "description": "- la construction de bâtiments résidentiels de tous types • maisons unifamiliales • immeubles à appartements, y compris tours d’habitations - la construction de bâtiments non résidentiels de tous types: • bâtiments destinés à abriter des activités de production industrielle, par exemple: usines, ateliers, usines d’assemblage, etc. • hôpitaux, écoles, bureaux  165     • hôtels, magasins, centres commerciaux, restaurants • bâtiments aéroportuaires • salles de sport • parkings couverts et souterrains • entrepôts • bâtiments religieux - l’assemblage et la construction d’ouvrages préfabriqués sur les chantiers - le remaniement ou la rénovation de structures résidentielles existantes "
    },
    {
        "cls_na9": "42.11",
        "lib_na9": "Construction de routes et autoroutes",
        "description": "- la construction d’autoroutes, de rues, de chaussées et d’autres voies pour véhicules et piétons - les travaux de revêtement de chaussées, ponts ou tunnels: • asphaltage des chaussées • marquage à la peinture des chaussées et autres travaux de marquage • installation de barrières de sécurité, de panneaux de circulation, etc. - la construction de pistes d’atterrissage "
    },
    {
        "cls_na9": "42.12",
        "lib_na9": "Construction de voies ferrées",
        "description": "- la construction de voies ferrées de surface et souterraines "
    },
    {
        "cls_na9": "42.13",
        "lib_na9": "Construction de ponts et tunnels",
        "description": "- la construction de ponts, y compris ceux destinés à supporter des routes surélevées - la construction de tunnels "
    },
    {
        "cls_na9": "42.21",
        "lib_na9": "Construction de réseaux pour fluides",
        "description": "faisant partie intégrante de ces systèmes. - la construction d’ouvrages de génie civil pour: • des conduites couvrant de longues distances et urbaines • des conduites d’eau et la construction de lignes • des systèmes d’irrigation (canaux) • des réservoirs - la construction de: • réseaux d’assainissement, y compris leur réparation • stations d’épuration • stations de pompage - le forage de puits d’eau "
    },
    {
        "cls_na9": "42.22",
        "lib_na9": "Construction de réseaux électriques et de télécommunications",
        "description": "bâtiments et structures faisant partie intégrante de ces systèmes. - la construction d’ouvrages de génie civil pour: • des lignes de communication et de transport d’énergie électrique à longue distance et urbaines • des centrales électriques "
    },
    {
        "cls_na9": "42.91",
        "lib_na9": "Construction d'ouvrages maritimes et fluviaux",
        "description": "- la construction de: • voies navigables, ports, ouvrages fluviaux, ports de plaisance (marinas), écluses, etc. • barrages et digues - le dragage des voies navigables "
    },
    {
        "cls_na9": "42.99",
        "lib_na9": "Construction d'autres ouvrages de génie civil n.c.a.",
        "description": "- la construction d’installations industrielles, à l’exception des bâtiments, telles que: • raffineries • usines chimiques - les travaux de construction, autres que de bâtiments, tels que: • installations sportives extérieures - le lotissement de terrains, avec amélioration (par exemple, par l’ajout de routes, d’infrastructures de réseaux, etc.) "
    },
    {
        "cls_na9": "43.11",
        "lib_na9": "Travaux de démolition",
        "description": "- la démolition d’immeubles et d’autres constructions "
    },
    {
        "cls_na9": "43.12",
        "lib_na9": "Travaux de préparation des sites",
        "description": "- le déblayage des chantiers - les travaux de terrassement: creusement, comblement, nivellement de chantiers de construction, ouverture de tranchées, dérochement, destruction à l’explosif, etc. - la préparation de sites pour l’exploitation minière: • enlèvement des déblais et autres travaux d’aménagement et de préparation des terrains et des sites miniers, à l’exception des sites de pétrole ou de gaz - le drainage des chantiers de construction - le drainage des terrains agricoles et sylvicoles "
    },
    {
        "cls_na9": "43.13",
        "lib_na9": "Forages et sondages",
        "description": "- les sondages d’essai, les forages d’essai et les carottages pour la construction ainsi que pour les études géophysiques, géologiques et similaires "
    },
    {
        "cls_na9": "43.21",
        "lib_na9": "Installation électrique",
        "description": "- l’installation de: • câbles et appareils électriques • câbles de télécommunications • câblage de réseau informatique et de télévision par câble, y compris les fibres optiques • paraboles • installations d’éclairage • systèmes d’alarme incendie • systèmes d’alarme contre les effractions • appareils d’éclairage de rue et signaux électriques • éclairage des pistes d’atterrissage • capteurs d’énergie solaire électriques - la connexion d’appareils électriques et d’électroménagers, y compris le chauffage par panneau rayonnant "
    },
    {
        "cls_na9": "43.22",
        "lib_na9": "Travaux de plomberie et installation de chauffage et de conditionnement d'air",
        "description": "conditionnement d’air, ainsi que les extensions, les transformations, l’entretien et les réparations. - l’installation dans des bâtiments ou d’autres projets de construction des éléments suivants: • systèmes de chauffage (à l’électricité, au gaz et au mazout) • chaudières, tours de refroidissement • les capteurs d’énergie solaire non électriques • plomberie et appareils sanitaires • matériel et conduites de ventilation et de climatisation • appareils à gaz • conduites de distribution de vapeur • installations d’extinction automatique d’incendie • systèmes d’arrosage automatique des pelouses - les travaux d’installation de conduits "
    },
    {
        "cls_na9": "43.29",
        "lib_na9": "Autres travaux d'installation",
        "description": "conditionnement d’air ou de machines industrielles dans des bâtiments et des ouvrages de génie civil. - l’installation dans des bâtiments ou d’autres projets de construction des éléments suivants: • monte-charge, escaliers mécaniques, y compris leur réparation et entretien • portes automatiques et tambours • paratonnerres • aspirateurs • isolation thermique, acoustique et antivibrations "
    },
    {
        "cls_na9": "43.31",
        "lib_na9": "Travaux de plâtrerie",
        "description": "- la mise en œuvre dans des bâtiments ou d’autres projets de construction de plâtre ou de stuc pour enduits intérieurs et extérieurs, y compris les matériaux de lattage associés "
    },
    {
        "cls_na9": "43.32",
        "lib_na9": "Travaux de menuiserie",
        "description": "- l’installation de portes (à l’exception des portes automatiques et tambours), de fenêtres, de dormants de portes et de fenêtres, d’escaliers, en bois ou en d’autres matériaux - l’installation de meubles tels que cuisines équipées, d’escaliers, d’équipements pour magasins etc. - les aménagements intérieurs tels que plafonds, cloisons mobiles, etc. "
    },
    {
        "cls_na9": "43.33",
        "lib_na9": "Travaux de revêtement des sols et des murs",
        "description": "- la pose dans des bâtiments ou d’autres projets de construction des éléments suivants: • revêtements muraux ou carrelages en céramique, en béton ou en pierre de taille; installation de poêles en céramique • parquets et autres revêtements de sols en bois, revêtements muraux en bois • moquettes et revêtements de sols en linoléum, y compris en caoutchouc ou en matières plastiques • revêtements de sols et de murs en granito, en marbre, en granit ou en ardoise • papiers peints "
    },
    {
        "cls_na9": "43.34",
        "lib_na9": "Travaux de miroiterie de bâtiments; vitrerie",
        "description": "- la pose de vitrage extérieurs, simples ou isolants - l'instalation de la miroiterie de batiment: portes en glace,vitrines, etc. "
    },
    {
        "cls_na9": "43.35",
        "lib_na9": "Travaux de peinture",
        "description": "- la peinture intérieure et extérieure des bâtiments - les travaux de peinture sur des ouvrages de génie civil - les travaux de peinture sur les ossatures métaliques (eventuellement sur coques de navires) Cette classe ne comprend pas : - le marquage des chaussées et des parkings, voir 42.11 "
    },
    {
        "cls_na9": "43.39",
        "lib_na9": "Autres travaux de finition",
        "description": "- le nettoyage de nouveaux bâtiments après leur construction - les autres travaux d’achèvement et de finition des bâtiments n.c.a. "
    },
    {
        "cls_na9": "43.91",
        "lib_na9": "Travaux de couverture",
        "description": "- le montage de charpentes - la pose de couvertures "
    },
    {
        "cls_na9": "43.99",
        "lib_na9": "Autres travaux de construction spécialisés n.c.a.",
        "description": "- les activités de construction spécialisées qui concernent un aspect commun à différents ouvrages et requièrent des compétences ou du matériel spécialisés: • réalisation de fondations, y compris battage de pieux • travaux d’imperméabilisation et d’étanchéité • travaux de déshumidification des bâtiments • fonçage de puits • le montage d’éléments de structures métalliques • cintrage d’ossatures métalliques • maçonnerie, pavage • montage et démontage d’échafaudages et de plates-formes de travail, à l’exclusion de la location d’échafaudages et de plates-formes de travail • construction de cheminées et de fours industriels • travaux spécialisés qui, pour des raisons d’accès, nécessitent des aptitudes à l’escalade et l’utilisation d’un matériel particulier, c’est-à-dire travail en hauteur sur des structures élevées - les travaux sous-marins - la construction de piscines extérieures - le nettoyage à la vapeur, le sablage et les activités analogues appliquées aux parties extérieures des bâtiments - la location de grues et d’autres matériels de construction, ne correspondant pas à une activité de construction spécifique, avec opérateur "
    },
    {
        "cls_na9": "45.11",
        "lib_na9": "Commerce de voitures et de véhicules automobiles légers",
        "description": "- le commerce de gros et de détail de véhicules neufs ou usagés: • véhicules automobiles pour le transport des personnes, y compris les véhicules spéciaux tels qu’ambulances, minibus, etc. (dont le poids est inférieur ou égal à 3,5 tonnes) - le commerce de gros et de détail de véhicules automobiles tout terrain (dont le poids est inférieur ou égal à 3,5 tonnes) "
    },
    {
        "cls_na9": "45.19",
        "lib_na9": "Commerce d'autres véhicules automobiles",
        "description": "- le commerce de gros et de détail de véhicules neufs ou usagés: • camions, remorques et semi-remorques • véhicules pour le camping tels que caravanes et autocaravanes (camping-cars) - le commerce de gros et de détail de véhicules automobiles tout terrain (dont le poids est supérieur à 3,5 tonnes) "
    },
    {
        "cls_na9": "45.20",
        "lib_na9": "Entretien et réparation de véhicules automobiles",
        "description": "- l’entretien et la réparation de véhicules automobiles: • réparation mécanique • réparation électrique • réparation des systèmes d’injection électroniques • entretien courant • réparation de carrosserie • réparation de pièces de véhicules automobiles • lavage, lustrage, etc. • peinture, y compris au pistolet • réparation de pare-brise et de vitres • réparation des sièges de voiture - la réparation, la pose ou le remplacement de pneumatiques et de chambres à air - le traitement antirouille - le montage de pièces et accessoires ne faisant pas partie du processus de fabrication "
    },
    {
        "cls_na9": "45.31",
        "lib_na9": "Commerce de gros d'équipements automobiles",
        "description": ""
    },
    {
        "cls_na9": "45.32",
        "lib_na9": "Commerce de détail d'équipements automobiles",
        "description": ""
    },
    {
        "cls_na9": "45.41",
        "lib_na9": "Commerce de motocycles",
        "description": "- le commerce de gros et de détail de motocycles, y compris les cyclomoteurs - le commerce de gros et de détail de pièces et d’accessoires de motocycles (y compris par des intermédiaires et par correspondance) "
    },
    {
        "cls_na9": "45.42",
        "lib_na9": "Réparation de motocycles",
        "description": "- l’entretien et la réparation de motocycles "
    },
    {
        "cls_na9": "46.11",
        "lib_na9": "Intermédiaires du commerce en matières premières agricoles, animaux vivants, matières premières textiles et",
        "description": ""
    },
    {
        "cls_na9": "46.12",
        "lib_na9": "Intermédiaires du commerce en combustibles, métaux, minéraux et produits chimiques",
        "description": "• combustibles, minéraux, métaux et produits chimiques, y compris les engrais "
    },
    {
        "cls_na9": "46.13",
        "lib_na9": "Intermédiaires du commerce en bois et matériaux de construction",
        "description": ""
    },
    {
        "cls_na9": "46.14",
        "lib_na9": "Intermédiaires du commerce en machines, équipements industriels, navires et avions",
        "description": "• machines, y compris machines de bureau et ordinateurs, équipements industriels, navires et avions "
    },
    {
        "cls_na9": "46.15",
        "lib_na9": "Intermédiaires du commerce en meubles, articles de ménage et quincaillerie",
        "description": ""
    },
    {
        "cls_na9": "46.16",
        "lib_na9": "Intermédiaires du commerce en textiles, habillement, fourrures, chaussures et articles en cuir",
        "description": ""
    },
    {
        "cls_na9": "46.17",
        "lib_na9": "Intermédiaires du commerce en denrées, boissons et tabac",
        "description": ""
    },
    {
        "cls_na9": "46.18",
        "lib_na9": "Intermédiaires spécialisés dans le commerce d'autres produits spécifiques",
        "description": ""
    },
    {
        "cls_na9": "46.19",
        "lib_na9": "Intermédiaires du commerce en produits divers",
        "description": ""
    },
    {
        "cls_na9": "46.21",
        "lib_na9": "Commerce de gros de céréales, de tabac non manufacturé, de semences et d'aliments pour le bétail",
        "description": "- le commerce de gros de céréales et de semences - le commerce de gros de fruits oléagineux - le commerce de gros de tabac non manufacturé - le commerce de gros daliments pour animaux et dautres matières premières agricoles "
    },
    {
        "cls_na9": "46.22",
        "lib_na9": "Commerce de gros de fleurs et plantes",
        "description": "- le commerce de gros de fleurs, plantes et bulbes "
    },
    {
        "cls_na9": "46.23",
        "lib_na9": "Commerce de gros d'animaux vivants",
        "description": ""
    },
    {
        "cls_na9": "46.24",
        "lib_na9": "Commerce de gros de cuirs et peaux",
        "description": ""
    },
    {
        "cls_na9": "46.31",
        "lib_na9": "Commerce de gros de fruits et légumes",
        "description": "- le commerce de gros de fruits et légumes frais - le commerce de gros de fruits et légumes en conserve "
    },
    {
        "cls_na9": "46.32",
        "lib_na9": "Commerce de gros de viandes et de produits à base de viande",
        "description": ""
    },
    {
        "cls_na9": "46.33",
        "lib_na9": "Commerce de gros de produits laitiers, œufs, huiles et matières grasses comestibles",
        "description": "- le commerce de gros de produits laitiers - le commerce de gros d’œufs et d’ovoproduits - le commerce de gros d’huiles et de graisses comestibles d’origine animale et végétale  175     "
    },
    {
        "cls_na9": "46.34",
        "lib_na9": "Commerce de gros de boissons",
        "description": "- le commerce de gros de boissons alcoolisées - le commerce de gros de boissons non alcoolisées - l’achat de vin en vrac et sa mise en bouteilles sans transformation "
    },
    {
        "cls_na9": "46.35",
        "lib_na9": "Commerce de gros de produits à base de de tabac",
        "description": ""
    },
    {
        "cls_na9": "46.36",
        "lib_na9": "Commerce de gros de sucre, chocolat et confiserie, de café, thé, cacao et épices",
        "description": "- le commerce de gros de sucre, chocolat et confiserie - le commerce de gros de produits de boulangerie - le commerce de gros de café, thé, cacao et épices "
    },
    {
        "cls_na9": "46.37",
        "lib_na9": "Commerce de gros de poissons, crustacés et mollusques",
        "description": ""
    },
    {
        "cls_na9": "46.38",
        "lib_na9": "Commerce de gros spécialisé d'autres produits alimentaires",
        "description": "- le commerce de gros d’aliments pour animaux de compagnie "
    },
    {
        "cls_na9": "46.39",
        "lib_na9": "Commerce de gros non spécialisé de denrées alimentaires, de boissons et de tabac",
        "description": ""
    },
    {
        "cls_na9": "46.41",
        "lib_na9": "Commerce de gros de textiles",
        "description": "- le commerce de gros de fils - le commerce de gros de tissus - le commerce de gros de linge de maison, etc. - le commerce de gros d’articles de mercerie: aiguilles, fils, etc. "
    },
    {
        "cls_na9": "46.42",
        "lib_na9": "Commerce de gros d'habillement et de chaussures",
        "description": "- le commerce de gros d’articles d’habillement, y compris les vêtements de sport - le commerce de gros d’accessoires du vêtement tels que gants, cravates et bretelles - le commerce de gros de chaussures - le commerce de gros d’articles en fourrure - le commerce de gros de parapluies "
    },
    {
        "cls_na9": "46.43",
        "lib_na9": "Commerce de gros d'appareils électroménagers",
        "description": "- le commerce de gros d’appareils électroménagers - le commerce de gros d’appareils de radio et de télévision - le commerce de gros de produits photographiques et optiques - le commerce de gros d’appareils de chauffage électriques - le commerce de gros de cassettes contenant des enregistrements sonores et vidéo, de CD, de DVD "
    },
    {
        "cls_na9": "46.44",
        "lib_na9": "Commerce de gros de vaisselle, verrerie et produits d'entretien",
        "description": "- le commerce de gros de porcelaine et de verrerie - le commerce de gros de produits d’entretien "
    },
    {
        "cls_na9": "46.45",
        "lib_na9": "Commerce de gros de parfumerie et de produits de beauté",
        "description": "- le commerce de gros de parfumerie, de produits de beauté et de savons "
    },
    {
        "cls_na9": "46.46",
        "lib_na9": "Commerce de gros de produits pharmaceutiques",
        "description": "- le commerce de détail de produits pharmaceutiques et médicaux "
    },
    {
        "cls_na9": "46.47",
        "lib_na9": "Commerce de gros de meubles, de tapis et d'appareils d'éclairage",
        "description": "- le commerce de gros de mobilier domestique - le commerce de gros de tapis - le commerce de gros d’appareils d’éclairage "
    },
    {
        "cls_na9": "46.48",
        "lib_na9": "Commerce de gros d'articles d'horlogerie et de bijouterie",
        "description": ""
    },
    {
        "cls_na9": "46.49",
        "lib_na9": "Commerce de gros d'autres biens domestiques",
        "description": "- le commerce de gros d’ouvrages en bois, vannerie et liège, etc. - le commerce de gros de cycles et de leurs pièces et accessoires - le commerce de gros de papeterie, de livres, de journaux et de périodiques - le commerce de gros d’articles de maroquinerie et d’accessoires de voyage - le commerce de gros d’instruments de musique - le commerce de gros de jeux et jouets - le commerce de gros d’articles de sport, y compris de chaussures spéciales de sport, telles que des chaussures de ski 46.5 Commerce de gros d'équipements de l'information et de la communication Ce groupe comprend le commerce de gros d’équipements des technologies de l’information et de la communication (TIC), c’est-à-dire des ordinateurs, des équipements de télécommunication et des piéces. "
    },
    {
        "cls_na9": "46.51",
        "lib_na9": "Commerce de gros d'ordinateurs, d'équipements informatiques périphériques et de logiciels",
        "description": "- le commerce de gros d’ordinateurs et d’équipements périphériques - le commerce de gros de logiciels "
    },
    {
        "cls_na9": "46.52",
        "lib_na9": "Commerce de gros de composants et d'équipements électroniques et de télécommunication",
        "description": "- le commerce de gros de tubes et de valves électroniques - le commerce de gros de dispositifs à semi-conducteurs - le commerce de gros de puces électroniques et de circuits intégrés - le commerce de gros de circuits imprimés - le commerce de gros de bandes et disquettes vierges pour le son et l’image, de disques magnétiques et optiques vierges (CD, DVD) - le commerce de gros d’équipements téléphoniques et de communications "
    },
    {
        "cls_na9": "46.61",
        "lib_na9": "Commerce de gros de matériel agricole",
        "description": "- le commerce de gros de machines et de matériel agricoles: • charrues, épandeurs de fumier, semoirs • moissonneuses • batteuses • machines à traire • machines et appareils pour l’aviculture, l’apiculture • tracteurs agricoles et forestiers - les tondeuses à gazon, quel que soit leur mode de fonctionnement "
    },
    {
        "cls_na9": "46.62",
        "lib_na9": "Commerce de gros de machines-outils",
        "description": "- le commerce de gros de machines-outils de tout type et pour tout type de matériau - le commerce de gros de machines-outils commandées par ordinateur "
    },
    {
        "cls_na9": "46.63",
        "lib_na9": "Commerce de gros de machines pour l'extraction, la construction et le génie civil",
        "description": ""
    },
    {
        "cls_na9": "46.64",
        "lib_na9": "Commerce de gros de machines pour l'industrie textile et l'habillement",
        "description": "- le commerce de gros de machines pour l’industrie textile et de machines à coudre et à tricoter, commandées par ordinateur "
    },
    {
        "cls_na9": "46.65",
        "lib_na9": "Commerce de gros de mobilier de bureau",
        "description": "- les services de commerce de gros concernant les: • produits classés sous 31.01 (Fabrication de meubles de bureau et de magasin) "
    },
    {
        "cls_na9": "46.66",
        "lib_na9": "Commerce de gros d'autres machines et équipements de bureau",
        "description": "- le commerce de gros de machines et d’équipements de bureau, à l’exception des ordinateurs et des équipements périphériques "
    },
    {
        "cls_na9": "46.67",
        "lib_na9": "Commerce de gros d'autres matériels électriques",
        "description": "le commerce de gros de fils, d’interrupteurs et d’autres matériels d’installation à usage industriel - le commerce de gros d’autres matériels électriques tels que les moteurs et les transformateurs - le commerce de gros d’instruments et d’appareils de mesure - le commerce de gros de matériel électrique de signalisation rouitère "
    },
    {
        "cls_na9": "46.69",
        "lib_na9": "Commerce de gros d'autres machines et équipements",
        "description": "- le commerce de gros de matériels de transport autres que les véhicules automobiles, les cycles et les motocycles - le commerce de gros de robots pour chaînes de montage - le commerce de gros d’autres machines utilisées dans l’industrie (à l’exception des machines pour l’extraction, la construction, le génie civil et l’industrie textile) - le commerce de gros de matériels pour la navigation et d’autres services - le commerce gros de matériel de garage et de soudage - le commerce de gros d'engrennages et d'équimements de transmission - le commerce gros de matériel non électrique de signalisation routière - le commerce de gros d'articles techniques en caoutchouc et en plastique - le commerce de gros à destination de l'industrie d'appareils aérauliques tels que ventilateurs, climatiseurs, machines et équipements pour le conditionnement de l'air - le commerce de gros à destination du commerce et des services d'appareils aérauliques tels que ventilateurs, climatiseurs, machines et équipements pour le conditionnement de l'air "
    },
    {
        "cls_na9": "46.71",
        "lib_na9": "Commerce de gros de combustibles et de produits annexes",
        "description": "- le commerce de gros de carburants, de graisses, de lubrifiants, d’huiles, tels que: • charbon de bois, charbon, coke, bois de chauffage, naphte • pétrole brut, gasoil, essence, mazout, kérosène • gaz de pétrole liquéfié, butane et propane • huiles de graissage et graisses lubrifiantes, produits pétroliers raffinés "
    },
    {
        "cls_na9": "46.72",
        "lib_na9": "Commerce de gros de minerais et métaux",
        "description": "- le commerce de gros de minerais métalliques ferreux et non ferreux - le commerce de gros de métaux ferreux et non ferreux sous formes primaires - le commerce de gros de demi-produits en métaux ferreux et non ferreux n.c.a. - le commerce de gros d’or et d’autres métaux précieux "
    },
    {
        "cls_na9": "46.73",
        "lib_na9": "Commerce de gros de bois et de produits dérivés",
        "description": "- le commerce de gros de bois brut - le commerce de gros de produits de la transformation primaire et secondaire du bois - le commerce de gros de panneaux de bois, parquets, lambris, etc - le commerce de gros de menuiseries et fermetures de batiment en bois   179     "
    },
    {
        "cls_na9": "46.74",
        "lib_na9": "Commerce de gros de matériaux de construction et d'appareils sanitaires",
        "description": "- le commerce de gros de peintures et de vernis - le commerce de gros de matériaux de construction: • sable, gravier, ciment, plâtre, brisues, tuiles, etc. - le commerce de gros de papiers peints et de revêtements de sols - le commerce de gros de verre plat - le commerce de gros d’appareils sanitaires: • baignoires, lavabos, cuvettes d’aisance et autres porcelaines sanitaires - le commerce de gros de bâtiments préfabriqués "
    },
    {
        "cls_na9": "46.75",
        "lib_na9": "Commerce de gros de quincaillerie et fournitures pour plomberie et chauffage",
        "description": "- le commerce de gros de quincaillerie génrale (vis, boulons, clous, fils, grillages, tréfilés - le commerce de gros d’articles de serrurerie - le commerce de gros de fixations - le commerce de gros de chaudières - le commerce de gros de fournitures pour installations sanitaires: • tubes, tuyaux, raccords de tuyauterie, robinets, raccordements en T, tuyaux en caoutchouc, etc. - le commerce de gros d’outils tels que marteaux, scies, tournevis et outils similaires à main "
    },
    {
        "cls_na9": "46.76",
        "lib_na9": "Commerce de gros de produits chimiques",
        "description": "- le commerce de gros de produits chimiques industriels: • aniline, encres d’imprimerie, huiles essentielles, gaz industriels, colles chimiques, matières colorantes, résine synthétique, méthanol, paraffine, parfums et essences, soude, sel industriel, acides et soufre, produits amylacés, etc. - le commerce de gros d’engrais et de produits phytosanitaires "
    },
    {
        "cls_na9": "46.77",
        "lib_na9": "Commerce de gros d'autres produits intermédiaires",
        "description": "- le commerce de gros de matières plastiques sous formes primaires - le commerce de gros de caoutchouc - le commerce de gros de fibres textiles, etc. - le commerce de gros de pates à papier, papier et carton en vrac - le commerce de gros de pierres précieuses    "
    },
    {
        "cls_na9": "46.78",
        "lib_na9": "Commerce de gros de déchets et débris",
        "description": "- le commerce de gros de déchets et débris métalliques et non métalliques et de matériaux de récupération, y compris la collecte, le tri, la séparation, le démontage de biens usés tels que les automobiles afin de récupérer des pièces réutilisables, le reconditionnement, le stockage et la livraison mais sans réelle transformation. De plus, les déchets achetés et vendus ont une valeur résiduelle. - le démantèlement d’automobiles, d’ordinateurs, de télévisions et d’autres matériels à des fins de récupération de pièces pour les revendre "
    },
    {
        "cls_na9": "46.90",
        "lib_na9": "Commerce de gros non spécialisé",
        "description": "- le commerce de gros de divers produits et articles sans spécialisation particulière  47 Commerce de détail, à l’exception des automobiles et des motocycles Cette division comprend la revente (vente sans transformation) au public de biens neufs ou d’occasion essentiellement destinés à la consommation des particuliers ou des ménages, par des magasins, des grands magasins, des comptoirs et des kiosques, des maisons de vente par correspondance, des colporteurs et des marchands ambulants, des coopératives de consommateurs, etc. Le commerce de détail s’organise d’abord selon la nature des points de vente (en magasin: groupes 47.1 à 47.7; hors magasin: groupes 47.8 et 47.9). Le commerce de détail en magasin comprend la vente au détail de biens usagés (classe 47.79). Pour la vente au détail en magasin, il existe une autre distinction entre le commerce de détail en magasin spécialisé (groupes 47.2 à 47.7) et le commerce de détail en magasin non spécialisé (groupe 47.1). Les groupes ci-dessus sont à leur tour subdivisés en fonction de la gamme des produits vendus. La vente hors magasin est subdivisée en fonction des formes de commerce, comme la vente au détail sur éventaires et marchés (groupe 47.8) et les autres commerces de détail hors magasin, par correspondance, porte-à-porte, au moyen de distributeurs automatiques, etc. (groupe 47.9). Les articles vendus dans cette division se limitent aux articles désignés habituellement par les termes de \"biens de consommation\". C’est pourquoi elle exclut les articles n’entrant normalement pas dans le circuit du commerce de détail, tels que céréales, machines industrielles, etc. Cette division comprend également l’activité des unités consistant principalement à vendre au grand public, à partir d’une exposition des marchandises, des produits tels que ordinateurs personnels, articles de papeterie, peinture ou bois, même si ces produits ne sont pas destinés à une utilisation personnelle ou domestique. La manutention est une activité habituelle du commerce et n’a pas d’effet sur la nature des marchandises: elle peut inclure les activités de tri, séparation, mélange et conditionnement. Cette division comprend également le commerce de détail par des intermédiaires et les activités des maisons de vente aux enchères au détail. Cette division ne comprend pas: - le commerce des produits de la ferme par l’exploitant agricole, voir division 01 - la fabrication et le commerce de biens généralement rangés sous Industrie manufacturière, dans les divisions 10 à 32 - le commerce de véhicules automobiles, de motocycles ainsi que de leurs pièces, voir division 45 - le commerce de céréales, de minerais, de pétrole brut, de produits chimiques industriels, de produits sidérurgiques et de machines et d’équipements industriels, voir division 46 - la vente de produits alimentaires et de boissons à consommer sur place ainsi que la vente de produits alimentaires à emporter, voir division 56 - la location au public d’articles personnels et domestiques, voir 77.2 47.1 Commerce de détail en magasin non spécialisé Ce groupe comprend le commerce de détail d’une large gamme de produits dans la même unité (en magasin non spécialisé), comme les supermarchés ou les grands magasins. "
    },
    {
        "cls_na9": "47.11",
        "lib_na9": "Commerce d'alimentation générale",
        "description": "- le commerce de détail non spécialisé à prédominance alimantaire en magasin d'une surface de vente inférieur à 120 m2 "
    },
    {
        "cls_na9": "47.12",
        "lib_na9": "Supérettes, supermarchés et hypermarchés",
        "description": "- le commerce de détail non spécialisé à prédominance alimentaire en magasin d'une surface de vente supérieure ou égale à 120 m2 - les activités des grandes surfaces qui — en sus des produits alimentaires, des boissons et du tabac qui représentent le plus gros des ventes — proposent également diverses autres lignes de produits tels que articles d’habillement, meubles, petits appareils, articles de quincaillerie, produits cosmétiques, etc.  181     "
    },
    {
        "cls_na9": "47.13",
        "lib_na9": "Commerce de détail de produits divers de l'artisanat",
        "description": "le commerce de détail non spécialisé d'objets artisanaux divers: • chaussures traditionnelles en toutes matières: balgha, sandale, tmak, koubkab, etc. • articles traditionnels d'habillement en tissu, étoffe ou en cuir. • accessoires traditionnels du vêtement tels que: ceintures, chapeaux, etc. • linge de maison et couvertures traditionnels, etc. "
    },
    {
        "cls_na9": "47.19",
        "lib_na9": "Autre commerce de détail en magasin non spécialisé",
        "description": "- le commerce de détail d’une large gamme de produits sans prédominance des produits alimentaires, des boissons et du tabac - les activités des grands magasins qui proposent un éventail complet de produits, y compris les articles d’habillement, les meubles, les petits appareils, les articles de quincaillerie, les produits cosmétiques, les articles de joaillerie, les jouets, les articles de sport, etc. 47.2 Commerce de détail alimentaire en magasin spécialisé "
    },
    {
        "cls_na9": "47.21",
        "lib_na9": "Commerce de détail de fruits et légumes en magasin spécialisé",
        "description": "- le commerce de détail de fruits et légumes frais - le commerce de détail de fruits et légumes en conserve "
    },
    {
        "cls_na9": "47.22",
        "lib_na9": "Commerce de détail de viandes et de produits à base de viande en magasin spécialisé",
        "description": "- le commerce de détail de viandes et produits à base de viande (y compris la volaille) "
    },
    {
        "cls_na9": "47.23",
        "lib_na9": "Commerce de détail de poissons, crustacés et mollusques en magasin spécialisé",
        "description": "- le commerce de détail des poissons, d’autres produits de la mer et des préparations à partir de ces produits "
    },
    {
        "cls_na9": "47.24",
        "lib_na9": "Commerce de détail de pain, pâtisserie et confiserie en magasin spécialisé",
        "description": ""
    },
    {
        "cls_na9": "47.25",
        "lib_na9": "Commerce de détail de boissons en magasin spécialisé",
        "description": "- le commerce de détail de boissons (non destinées à la consommation sur place): • boissons alcoolisées • boissons non alcoolisées "
    },
    {
        "cls_na9": "47.26",
        "lib_na9": "Commerce de détail de produits à base de tabac en magasin spécialisé",
        "description": "- le commerce de détail de tabac - le commerce de détail de produits à base de tabac "
    },
    {
        "cls_na9": "47.27",
        "lib_na9": "Commerce de détail de produits laitiers",
        "description": "- le commerce de détail de laits, de beurres, de fromages, de produits laitiers frais et d'œufs    "
    },
    {
        "cls_na9": "47.28",
        "lib_na9": "Commerces de détail de grains, légumes secs et produits d'épicerie",
        "description": "- le commerce de détail de produits d'épicerie et de conserves - le commerce de détail de pois chiches grillés (hammas) "
    },
    {
        "cls_na9": "47.29",
        "lib_na9": "Autres commerces de détail alimentaires en magasin spécialisé",
        "description": "- le commerce de détail spécialisé en produits alimentaires non cités antérieurement  182 I n st i t u t N a t i o nal d e la S ta tis tiq u e    47.3 Commerce de détail de carburants en magasin spécialisé "
    },
    {
        "cls_na9": "47.30",
        "lib_na9": "Commerce de détail de carburants en magasin spécialisé",
        "description": "- le commerce de détail de carburants pour véhicules automobiles et motocycles - le commerce de détail de lubrifiants et de produits de refroidissement pour véhicules automobiles "
    },
    {
        "cls_na9": "47.41",
        "lib_na9": "Commerce de détail d'ordinateurs, d'unités périphériques et de logiciels en magasin spécialisé",
        "description": "- le commerce de détail d’ordinateurs - le commerce de détail d’équipements périphériques - le commerce de détail de consoles de jeux vidéo - le commerce de détail de logiciels non personnalisés, y compris les jeux vidéo "
    },
    {
        "cls_na9": "47.42",
        "lib_na9": "Commerce de détail de matériels de télécommunication en magasin spécialisé",
        "description": ""
    },
    {
        "cls_na9": "47.43",
        "lib_na9": "Commerce de détail de matériels audio/vidéo en magasin spécialisé",
        "description": "- le commerce de détail d’appareils de radio et de télévision - le commerce de détail d’appareils audio et vidéo - le commerce de détail de lecteurs et enregistreurs de CD et de DVD 47.5 Commerce de détail d'autres équipements du foyer en magasin spécialisé Ce groupe comprend le commerce de détail d’équipements ménagers, tels que textiles, quincaillerie, tapis, appareils électriques ou meubles, en magasins spécialisés. "
    },
    {
        "cls_na9": "47.51",
        "lib_na9": "Commerce de détail de textiles en magasin spécialisé",
        "description": "- le commerce de détail de tissus - le commerce de détail de fils à tricoter - le commerce de détail de matériaux de base pour la fabrication de tapis, de tapisseries ou de broderies - le commerce de détail de textiles - le commerce de détail d’articles de mercerie: aiguilles, fils, etc. "
    },
    {
        "cls_na9": "47.52",
        "lib_na9": "Commerce de détail de quincaillerie, peintures et verres en magasin spécialisé",
        "description": "- le commerce de détail d’articles de quincaillerie - le commerce de détail de peintures, de vernis et d’émaux - le commerce de détail de verre plat - le commerce de détail d’autres matériaux de construction tels que briques, bois, appareils sanitaires - le commerce de détail de matériaux et de matériels de bricolage - le commerce de détail de tondeuses à gazon, quel que soit le mode de propulsion - le commerce de détail de saunas  183    "
    },
    {
        "cls_na9": "47.53",
        "lib_na9": "Commerce de détail de tapis, moquettes et revêtements de murs et de sols en magasin spécialisé",
        "description": "- le commerce de détail de tapis et moquettes - le commerce de détail de rideaux et de voilages - le commerce de détail de papiers peints et de revêtements de sols "
    },
    {
        "cls_na9": "47.54",
        "lib_na9": "Commerce de détail d'appareils électroménagers en magasin spécialisé",
        "description": ""
    },
    {
        "cls_na9": "47.59",
        "lib_na9": "Commerce de détail de meubles, appareils d'éclairage et autres articles de ménage en magasin spécialisé",
        "description": "- le commerce de détail de mobilier domestique - le commerce de détail d’appareils d’éclairage - le commerce de détail d’ustensiles ménagers, de coutellerie, de vaisselle, de verrerie, de porcelaine et de poterie - le commerce de détail d’ouvrages en bois, liège et vannerie - le commerce de détail d’appareils ménagers non électriques - le commerce de détail d’instruments de musique et de partitions - le commerce de détail de systèmes de sécurité à alarmes électriques, de dispositifs de verrouillage et de coffres-forts, sans services d’installation ou de maintenance - le commerce de détail d’appareils et d’articles de ménage ou d’économie domestique n.c.a. "
    },
    {
        "cls_na9": "47.61",
        "lib_na9": "Commerce de détail de livres en magasin spécialisé",
        "description": "- le commerce de détail de livres de toute nature "
    },
    {
        "cls_na9": "47.62",
        "lib_na9": "Commerce de détail de journaux et papeterie en magasin spécialisé",
        "description": "- le commerce de détail de fournitures de bureau telles que stylos, crayons, papier, etc. "
    },
    {
        "cls_na9": "47.63",
        "lib_na9": "Commerce de détail d'enregistrements musicaux et vidéo en magasin spécialisé",
        "description": "- le commerce de détail d’enregistrements musicaux, de cassettes audio, de CD et de cassettes - le commerce de détail de vidéocassettes et de DVD - le commerce de détail de bandes et disques vierges "
    },
    {
        "cls_na9": "47.64",
        "lib_na9": "Commerce de détail d'articles de sport en magasin spécialisé",
        "description": "- le commerce de détail d’articles de sport, d’articles pour la pêche, de matériel de camping, de bateaux et de bicyclettes "
    },
    {
        "cls_na9": "47.65",
        "lib_na9": "Commerce de détail de jeux et jouets en magasin spécialisé",
        "description": "- le commerce de détail de jeux et de jouets, en toutes matières "
    },
    {
        "cls_na9": "47.71",
        "lib_na9": "Commerce de détail d'habillement en magasin spécialisé",
        "description": "- le commerce de détail d’articles d’habillement - le commerce de détail d’articles en fourrure - le commerce de détail d’accessoires du vêtement tels que gants, cravates, bretelles, etc. "
    },
    {
        "cls_na9": "47.72",
        "lib_na9": "Commerce de détail de chaussures et d'articles en cuir en magasin spécialisé",
        "description": "- le commerce de détail de chaussures - le commerce de détail d’articles en cuir - le commerce de détail d’accessoires de voyage en cuir ou en cuirs synthétiques "
    },
    {
        "cls_na9": "47.73",
        "lib_na9": "Commerce de détail de produits pharmaceutiques en magasin spécialisé",
        "description": "- le commerce de détail de produits pharmaceutiques "
    },
    {
        "cls_na9": "47.74",
        "lib_na9": "Commerce de détail d'articles médicaux et orthopédiques en magasin spécialisé",
        "description": ""
    },
    {
        "cls_na9": "47.75",
        "lib_na9": "Commerce de détail de parfumerie et de produits de beauté en magasin spécialisé",
        "description": "- le commerce de détail de parfums et de produits de beauté "
    },
    {
        "cls_na9": "47.76",
        "lib_na9": "Commerce de détail de fleurs, plantes, graines, engrais, animaux de compagnie et aliments pour ces animaux en",
        "description": ""
    },
    {
        "cls_na9": "47.77",
        "lib_na9": "Commerce de détail d'articles d'horlogerie et de bijouterie en magasin spécialisé",
        "description": ""
    },
    {
        "cls_na9": "47.78",
        "lib_na9": "Commerce de détail de charbon et combustibles",
        "description": "- le commerce de détail de bois de chauffage et de charbon de bois - le commerce de détail de combustibles liquides et gazeux pour le chauffage ou pour usages domestiques "
    },
    {
        "cls_na9": "47.79",
        "lib_na9": "Autres commerces de détail de biens neufs en magasin spécialisé",
        "description": "- le commerce de détail de matériel photographique, optique et de matériel de précision - les activités des opticiens - le commerce de détail de souvenirs et d’articles religieux - les activités des galeries d’art commerciales - le commerce de détail d’armes et de munitions - le commerce de détail de timbres-poste et de pièces de monnaie - la vente au détail d’objets d’art - le commerce de détail de produits non alimentaires n.c.a.  185     47.8 Commerce de détail de biens neufs sur éventaires et marchés; Commerce de biens d'occasion Ce groupe comprend le commerce de détail de tous types de produits neufs ou d’occasion présentés sur des éventaires, généralement mobiles, installés sur la voie publique ou sur un emplacement de marché déterminé. "
    },
    {
        "cls_na9": "47.81",
        "lib_na9": "Commerce de détail alimentaire sur éventaires et marchés",
        "description": ""
    },
    {
        "cls_na9": "47.82",
        "lib_na9": "Commerce de détail de textiles, d'habillement et de chaussures sur éventaires et marchés",
        "description": ""
    },
    {
        "cls_na9": "47.83",
        "lib_na9": "Autres commerces de détail sur éventaires et marchés",
        "description": "- les autres commerces de détail sur éventaires et marchés comme par exemples: • tapis et moquettes • livres • jeux et jouets • appareils ménagers et produits électroniques grand public • enregistrements musicaux et vidéo, etc. "
    },
    {
        "cls_na9": "47.84",
        "lib_na9": "Commerce de détail de fripes",
        "description": ""
    },
    {
        "cls_na9": "47.85",
        "lib_na9": "Commerce de détail de biens d'antiquité et de brocante",
        "description": "- le commerce de détail de brocante, d'antiquités et d'objets d'art anciens - les activités des centres de vente aux enchères (commerce de détail) "
    },
    {
        "cls_na9": "47.89",
        "lib_na9": "Autres commerces de détail de biens d'occasion",
        "description": ""
    },
    {
        "cls_na9": "47.91",
        "lib_na9": "Vente à distance",
        "description": "où l’acheteur fait son choix à l’aide de publicités, de catalogues, d’informations figurant sur un site web, de modèles ou de tout autre moyen publicitaire et effectue sa commande par courrier, téléphone ou Internet (en général grâce à des procédures particulières prévues par les sites web). Les produits achetés peuvent être téléchargés directement sur Internet ou livrés physiquement au client. - le commerce de détail de tous types de produits par correspondance - le commerce de détail de tous types de produits par Internet - la vente directe par téléphone ou par le truchement de la radio ou de la télévision - les activités de vente aux enchères au détail sur Internet "
    },
    {
        "cls_na9": "47.99",
        "lib_na9": "Autres commerces de détail hors magasin, éventaires ou marchés",
        "description": "- le commerce de détail de tous types de produits exercé selon des modalités non prévues dans les classes précédentes: • vente directe ou démarcheurs • par distributeurs automatiques, etc. - la vente directe de combustibles (mazout, bois de chauffage, etc.) livrés chez le client - les autres activités de vente aux enchères hors magasin (détail, à l’exception d’Internet) - le commerce de détail (hors magasin) par des intermédiaires du commerce   187     SECTION H TRANSPORTS ET ENTREPOSAGE Cette section couvre les activités liées au transport, régulier ou non, de passagers et de marchandises, par rail, par conduites, par route, par eau ou par air et les activités connexes, telles que la gestion d’installations de terminaux et de stationnement, la manutention du fret, l’entreposage, etc. Cette section comprend la location de matériel de transport avec chauffeur ou opérateur. Elle comprend également les activités de poste et de courrier. Cette section ne comprend pas: - les grosses réparations ou transformations apportées aux matériels de transport autres que les véhicules automobiles, voir groupe 33.1 - la construction, l’entretien et la réparation de routes, de voies ferrées, de ports, de terrains d’aviation, voir division 42 - l’entretien et la réparation de véhicules automobiles, voir 45.20 - la location de matériel de transport sans chauffeur ni opérateur, voir 77.1 et 77.3  49 Transports terrestres et transport par conduites Cette division couvre les activités de transport de passagers et de marchandises par la route et le rail, ainsi que le transport de marchandises par conduites. 49.1 Transport ferroviaire interurbain de voyageurs "
    },
    {
        "cls_na9": "49.10",
        "lib_na9": "Transport ferroviaire interurbain de voyageurs",
        "description": "- le transport ferroviaire de voyageurs au moyen de matériel ferroviaire circulant sur de grandes lignes, distribuées sur une grande zone géographique - le transport interurbain de passagers par chemin de fer - l’exploitation de voitures-lits et de voitures-restaurants dans le cadre d’une exploitation intégrée par les compagnies de chemin de fer "
    },
    {
        "cls_na9": "49.20",
        "lib_na9": "Transports ferroviaires de fret",
        "description": "- le transport ferroviaire de fret sur de grandes lignes, ainsi que sur des lignes secondaires "
    },
    {
        "cls_na9": "49.31",
        "lib_na9": "Transports urbains et suburbains de voyageurs",
        "description": "- le transport par voie terrestre de passagers par des systèmes de transport urbain et suburbain. Il peut s’agir de divers modes de transport, tels que autobus ou autocar, tramway, trolley-bus, métro souterrain ou aérien, etc. Les activités de transport de passagers sont effectuées sur des lignes déterminées, conformément à un horaire établi des départs et arrivées aux arrêts indiqués sur ces horaires. - l’exploitation de navettes vers les aéroports et les gares - l’exploitation de funiculaires, de téléphériques, etc., s’inscrivant dans le cadre de systèmes de transport urbain et suburbain "
    },
    {
        "cls_na9": "49.32",
        "lib_na9": "Transports de voyageurs par taxis et par louage",
        "description": "- le transport des voyageurs par taxis et par louage, y compris les services de centrale de réservation - les autres types de location de voitures particulières avec chauffeur Cette ne comprend pas : - le transport en ambulance, voir 86.92 "
    },
    {
        "cls_na9": "49.33",
        "lib_na9": "Autres transports terrestres réguliers de voyageurs, interurbain",
        "description": "- le transport interurbain des voyageur par autocars, sur des lignes et selon des horaires déterminés, même à caractére saisonnier "
    },
    {
        "cls_na9": "49.39",
        "lib_na9": "Autres transports terrestres de voyageurs n.c.a.",
        "description": "- les autres transports routiers de passagers: • transports à la demande, excursions et autres services occasionnels de transport par autocar • navettes d’aéroports • l’exploitation de téléphériques, de funiculaires, d’engins de remontée mécanique ne s’inscrivant pas dans le cadre de systèmes de transport urbain et suburbain - l’exploitation d’autobus scolaires et de bus de transport des travailleurs - le transport de voyageurs par véhicules à traction humaine ou animale "
    },
    {
        "cls_na9": "49.41",
        "lib_na9": "Transports routiers de fret",
        "description": "- les activités de transport de marchandises par route: • le transport de bois de sciage • le transport de bétail • le transport frigorifique • le transport lourd • le transport en vrac, y compris par camions-citernes, y compris la collecte de lait dans les fermes • le transport de voitures • le transport de déchets, sans collecte ni élimination - la location de camions avec chauffeur - le transport de marchandises par véhicules à traction humaine ou animale "
    },
    {
        "cls_na9": "49.42",
        "lib_na9": "Services de déménagement",
        "description": "- les services de déménagement par transport routier fournis aux entreprises et aux ménages  189     49.5 Transports par conduites "
    },
    {
        "cls_na9": "49.50",
        "lib_na9": "Transports par conduites",
        "description": "- le transport de gaz, de liquides, d’eau, de boues et d’autres substances, par conduites - l’exploitation de stations de pompage "
    },
    {
        "cls_na9": "50.10",
        "lib_na9": "Transports maritimes et côtiers de passagers",
        "description": "- le transport maritime et côtier, régulier ou non, de passagers: • l’exploitation de bateaux d’excursion, de croisière ou de tourisme • l’exploitation de bacs, de bateaux-taxis, etc. - la location de bateaux de plaisance avec équipage pour le transport maritime et côtier (par exemple: pour des croisières de pêche) "
    },
    {
        "cls_na9": "50.20",
        "lib_na9": "Transports maritimes et côtiers de fret",
        "description": "- le transport maritime et côtier, régulier ou non, de marchandises - l’exploitation de remorqueurs et de pousseurs de péniches, de plates-formes de forage pétrolier, etc. - la location de bateaux avec équipage pour le transport maritime et côtier de fret "
    },
    {
        "cls_na9": "50.30",
        "lib_na9": "Transports fluviaux de passagers",
        "description": "- le transport de passagers sur les fleuves, les canaux, les lacs et les autres voies navigables intérieures, y compris les ports et les docks - la location de bateaux de plaisance avec équipage pour le transport fluvial "
    },
    {
        "cls_na9": "50.40",
        "lib_na9": "Transports fluviaux de fret",
        "description": "- le transport de marchandises sur les fleuves, les canaux, les lacs et les autres voies navigables intérieures, y compris les ports et les docks - la location de bateaux avec équipage pour le transport fluvial de fret "
    },
    {
        "cls_na9": "51.10",
        "lib_na9": "Transports aériens de passagers",
        "description": "- le transport aérien de passagers sur des lignes régulières et avec des horaires réguliers - les vols par charters pour passagers - les vols de tourisme - la location de matériels de transport aérien avec pilote aux fins du transport de passagers - les activités générales d’aviation, telles que: • le transport de passagers par des aéro-clubs à des fins de cours ou de loisirs "
    },
    {
        "cls_na9": "51.21",
        "lib_na9": "Transports aériens de fret",
        "description": "- le transport aérien de marchandises sur des lignes régulières et avec des horaires réguliers - les transports aériens non réguliers de marchandises - la location de matériels de transport aérien avec pilote aux fins du transport de marchandises "
    },
    {
        "cls_na9": "51.22",
        "lib_na9": "Transports spatiaux",
        "description": "- le lancement de satellites et de véhicules spatiaux - le transport, dans l’espace, de marchandises et de personnes  52 Entreposage et services auxiliaires des transports Cette division comprend les activités d’entreposage et les services auxiliaires des transports, tels que l’exploitation des infrastructures de transport (comme les aéroports, les ports, les tunnels, les ponts, etc.), les activités des agences de transport et de manutention du fret. 52.1 Entreposage et stockage "
    },
    {
        "cls_na9": "52.11",
        "lib_na9": "Entreposage et stockage frigorifique",
        "description": "- l’exploitation pour compte de tiers d'instalation d'entreposage frigorifique ou de lieux de stockage réfrigéré, y compris à caractére industriel ou agricole - la congélation par air forcé pour compte de tiers "
    },
    {
        "cls_na9": "52.12",
        "lib_na9": "Entreposage et stockage non frigorifique",
        "description": "- l'exploitation pour compte de tiers d'installations d'entreposage non frigorifique ou de lieux de stockage (entrepôts, silos, réservoirs, hangars, etc.), y compris à caractère industriel ou agricole "
    },
    {
        "cls_na9": "52.21",
        "lib_na9": "Services auxiliaires des transports terrestres",
        "description": "- les activités liées au transport terrestre de personnes, d’animaux ou de marchandises: • l’exploitation d’installations de terminaux telles que gares ferroviaires, gares routières, postes de manutention de marchandises • l’exploitation de l’infrastructure ferroviaire • l’exploitation de routes, de ponts, de tunnels, d’aires de stationnement, de parcs à voitures ou à vélos, d’entreposage de caravanes durant l’hiver - les opérations d’aiguillage - les services de remorquage et de dépannage - la liquéfaction du gaz en vue de son transport "
    },
    {
        "cls_na9": "52.22",
        "lib_na9": "Services auxiliaires des transports par eau",
        "description": "- les activités liées au transport par eau de personnes, d’animaux ou de fret: • l’exploitation d’installations de terminaux telles que ports et quais • l’exploitation d’écluses, etc. • les activités liées à la navigation, au pilotage et au mouillage • les activités de sauvetage et de déchargement par allèges • les activités des phares "
    },
    {
        "cls_na9": "52.23",
        "lib_na9": "Services auxiliaires des transports aériens",
        "description": "- les activités liées au transport aérien de personnes, d’animaux ou de marchandises: • l’exploitation d’installations de terminaux telles que aéroports, etc. • les activités de contrôle des aéroports et de la circulation aérienne • les services au sol sur les terrains d’aviation, etc. - les services de prévention et de lutte contre les incendies dans les aéroports "
    },
    {
        "cls_na9": "52.24",
        "lib_na9": "Manutention",
        "description": "- le chargement et le déchargement de marchandises ou de bagages, quel que soit le mode de transport utilisé - l’arrimage et le débardage de marchandises - le chargement et le déchargement de wagons de transport de marchandises "
    },
    {
        "cls_na9": "52.29",
        "lib_na9": "Autres services auxiliaires des transports",
        "description": "- l’expédition de marchandises - l’organisation ou l’exécution d’opérations de transport par route, par eau ou par air - l’organisation d’envois individuels et groupés (y compris l’enlèvement et la livraison de marchandises et le groupage des envois) - l’établissement et l’obtention de documents et de lettres de transport - les activités des agents en douane - les activités des commissaires de transport de fret maritime ainsi que des agents de fret aérien - le courtage maritime et aérien - les opérations de manutention des marchandises, comme l’emballage temporaire destiné uniquement à protéger les marchandises pendant leur passage en transit, le déballage, la prise d’échantillons et le pesage "
    },
    {
        "cls_na9": "53.10",
        "lib_na9": "Activités de poste dans le cadre d'une obligation de service universel",
        "description": "désignés pour assumer l’obligation de service universel. Ces activités comprennent l’utilisation de l’infrastructure de service universel, y compris les points de vente au détail, les installations de tri et de traitement et les transporteurs pour l’enlèvement et la livraison du courrier. La distribution peut inclure des envois de la poste aux lettres, c’est-à-dire des lettres, des cartes postales, des imprimés (journaux, périodiques, publicités, etc.), de petits paquets, des marchandises ou des documents. Sont compris également les autres services nécessaires pour remplir l’obligation de service universel. - la levée, le tri, l’acheminement et la distribution (nationale ou internationale) de lettres et de colis et paquets (assimilés à du courrier) par les services postaux chargés de l’obligation de service universel. Il peut être fait appel à un ou à plusieurs modes de transport et l’acheminement peut avoir lieu par un moyen de transport détenu en propre (privé) ou par un moyen de transport public. - la collecte du courrier et des colis dans les boîtes à lettres publiques ou les bureaux de poste "
    },
    {
        "cls_na9": "53.20",
        "lib_na9": "Autres activités de poste et de courrier",
        "description": "- la levée, le tri, l’acheminement et la distribution (nationale ou internationale) de lettres et de colis et paquets (assimilés à du courrier) par des entreprises opérant en dehors de l’obligation de service universel. Il peut être fait appel à un ou à plusieurs modes de transport et l’acheminement peut avoir lieu par un moyen de transport détenu en propre (privé) ou par un moyen de transport public. - les services de livraison à domicile "
    },
    {
        "cls_na9": "55.10",
        "lib_na9": "Hôtels et hébergement similaire",
        "description": "hebdomadaire, pour un séjour de courte durée. L’offre comprend la fourniture d'un hébergement meublé dans des chambres ou des suites. Elle propose un service quotidien des lits et de nettoyage de la chambre. Cette offre comprend également une gamme d’autres services tels que repas et boissons, garage, blanchisserie, piscine et salle de culture physique, installations pour conférences et séminaires. - les hôtels - les hôtels de tourisme - les hôtels à appartements - les motels "
    },
    {
        "cls_na9": "55.20",
        "lib_na9": "Hébergement touristique et autre hébergement de courte durée",
        "description": "hebdomadaire, principalement pour un séjour de courte durée comprenant, dans un espace limité, des pièces complètement meublées ou des espaces de vie, de repas et de repos et disposant d’installations pour cuisiner ou de cuisines intégrées. Il peut s’agir d’appartements situés dans de petits bâtiments indépendants à plusieurs niveaux ou dans des ensembles de bâtiments ou de maisons, cabanes, pavillons ou chalets isolés. Lorsque des services supplémentaires sont proposés, ils sont d’un niveau minimal. - les maisons de vacances pour enfants et autres - les appartements et pavillons de vacances - les maisons et cabanes de vacances sans service de nettoyage - les auberges de jeunesse et les refuges de montagne "
    },
    {
        "cls_na9": "55.30",
        "lib_na9": "Terrains de camping et parcs pour caravanes ou véhicules de loisirs",
        "description": "- la mise à disposition d’hébergement dans des terrains de camping, des parcs pour caravanes, des camps de loisirs et des camps de chasse et de pêche pour des séjours de courte durée - la mise à disposition d’installations et d’espaces destinés aux véhicules de loisirs - les abris et bivouacs permettant de planter une tente et/ou de poser des sacs de couchage "
    },
    {
        "cls_na9": "55.90",
        "lib_na9": "Autres hébergements",
        "description": "individuelles ou pour plusieurs personnes, des résidences pour étudiants, des foyers pour travailleurs migrants (saisonniers), etc. - les résidences d’étudiants - les internats - les foyers pour travailleurs - les chambres meublées et les pensions de famille - les voitures-lits  56 Restauration Cette division comprend les activités consistant à fournir des repas complets ou des boissons pour consommation immédiate, qu’il s’agisse de restaurants traditionnels, de self-services ou d’établissements proposant des plats à emporter, établissements permanents ou temporaires, avec ou sans places assises. L’élément décisif est le fait que les plats soient destinés à une consommation immédiate et non le type d’établissement qui les propose. La production de repas qui ne sont pas destinés à être consommés immédiatement ou de denrées alimentaires préparées qui ne sont pas considérées comme constituant un repas n’est pas comprise (voir division 10 Industries alimentaires et division 11 Industrie des boissons). La vente de denrées alimentaires non produites par l’unité et qui ne sont pas considérées comme constituant un repas ou de repas qui ne sont pas destinés à être consommés immédiatement est également exclue (voir section G Commerce). 56.1 Restaurants et services de restauration mobile "
    },
    {
        "cls_na9": "56.11",
        "lib_na9": "Restauration traditionnelle",
        "description": "- les activités de restauration avec un service à la table ainsi que celles fonctionnant en libre- service - les restaurants à thèmes (restaurant spécialisés, restaurant exotiques, etc.) dés lors qu'ils offrent une possibilité de choix entre plusieurs types de plats - les activités des bars et des restaurants installés à bord de moyens de transport, s’ils sont exploités par des unités distinctes - les cafés-restaurants associant les activités de restauration et de vente de boissons "
    },
    {
        "cls_na9": "56.12",
        "lib_na9": "Restauration de type rapide",
        "description": "- la fourniture au comptoir d'aliments et de boissons à consommer sur place ou à emporter, présentés dans des conditionnements jetables: • les restaurants de restauration rapide: humburgers, pizzerias, viennoiseries, croissanteries, crèperies, sandwitheries, friteries, service au volants (drive in), etc. • les restaurants proposant principalement des repas à emporter • la vente de crème glacée dans des chariots • la vente de repas dans des équipements mobiles • la préparation de repas sur des éventaires ou sur les marchés  196 I n st i t u t N a t i o nal d e la S ta tis tiq u e    - salons de thé "
    },
    {
        "cls_na9": "56.21",
        "lib_na9": "Services des traiteurs",
        "description": "le client, à l’endroit précisé par celui-ci et pour une occasion particulière. "
    },
    {
        "cls_na9": "56.29",
        "lib_na9": "Autres services de restauration",
        "description": "conclues avec le client, pour une durée déterminée. L’exploitation en concession de services de restauration, comme dans des installations sportives ou autres, est également comprise. Les repas sont généralement préparés dans des cuisines centrales. - les activités des entreprises fournissant des repas (par exemple: pour des entreprises de transport) - l’exploitation en concession de services de restauration, comme dans des installations sportives ou autres - l’exploitation en concession de cantines ou de cafétérias (par exemple: pour des usines, des bureaux, des hôpitaux ou des écoles) "
    },
    {
        "cls_na9": "56.31",
        "lib_na9": "Cafés",
        "description": "- les activités de préparation et de service de boissons non alcoolisées, sans restauration, destinées à la consommation sur place. Cette classe ne comprend pas : - la revente de boissons emballées/préparées, voir 47 - la vente au détail de boissons par le biais de distributeurs automatiques, voir 47.99 - l'exploitation de discothèques et de pistes de danse sans service de boissons, voir 93.29 "
    },
    {
        "cls_na9": "56.32",
        "lib_na9": "Débits de boissons alcoolisées",
        "description": "- les activités de préparation et de service de boissons alcoolisées, sans restauration, destinées à la consommation sur place (bars, brasseries) - les discothèques avec prédominance du service de boissons "
    },
    {
        "cls_na9": "58.11",
        "lib_na9": "Édition de livres",
        "description": "encore sur Internet. - l’édition de livres, de brochures, de prospectus et de publications similaires, y compris l’édition de dictionnaires et d’encyclopédies - l’édition d’atlas, de cartes et de plans - l’édition de livres audio - l’édition d’encyclopédies et d’ouvrages similaires sur CD-ROM "
    },
    {
        "cls_na9": "58.12",
        "lib_na9": "Édition de répertoires et de fichiers d'adresses",
        "description": "forme, mais pas dans leur contenu. Ces listes peuvent être publiées sous forme imprimée ou électronique. - la publication de fichiers d’adresses - l’édition d’annuaires - l’édition d’autres répertoires et recueils, comme la jurisprudence, les compendiums pharmaceutiques, etc. "
    },
    {
        "cls_na9": "58.13",
        "lib_na9": "Édition de journaux",
        "description": "semaine. Ces informations peuvent être publiées sous forme imprimée ou électronique, y compris sur Internet. "
    },
    {
        "cls_na9": "58.14",
        "lib_na9": "Édition de revues et périodiques",
        "description": "également l’édition de programmes pour les émissions de radio ou de télévision. "
    },
    {
        "cls_na9": "58.19",
        "lib_na9": "Autres activités d'édition",
        "description": "- l’édition (y compris en ligne) de: • catalogues • photos, gravures et cartes postales • cartes de vœux • formulaires • affiches, reproductions d’œuvres d’art • matériel publicitaire • autre matériel imprimé - la publication en ligne de statistiques et d’autres informations "
    },
    {
        "cls_na9": "58.21",
        "lib_na9": "Édition de jeux électroniques",
        "description": "- l’édition de jeux pour tout type de plates-formes "
    },
    {
        "cls_na9": "58.29",
        "lib_na9": "Édition d'autres logiciels",
        "description": "- l’édition de logiciels prêts à l’utilisation (non personnalisés), y compris la traduction ou l’adaptation de logiciels non personnalisés pour un marché déterminé, pour compte propre: • systèmes d’exploitation • applications commerciales et autres "
    },
    {
        "cls_na9": "59.11",
        "lib_na9": "Production de films cinématographiques, de vidéo et de programmes de télévision",
        "description": "- la production de films, de vidéos, d’émissions de télévision (séries télévisées, documentaires, etc.) ou de publicités. "
    },
    {
        "cls_na9": "59.12",
        "lib_na9": "Post-production de films cinématographiques, de vidéo et de programmes de télévision",
        "description": "sous-titrage, création de génériques, sous-titrage codé, production de graphiques, animations d’images et effets spéciaux informatiques, de même que le développement et le traitement de films cinématographiques et les activités des laboratoires spécialisés dans la production de films d’animation. - les activités des cinémathèques, etc. "
    },
    {
        "cls_na9": "59.13",
        "lib_na9": "Distribution de films cinématographiques, de vidéo et de programmes de télévision",
        "description": "- la distribution de productions cinématographiques et vidéo, de DVD et d’autres productions similaires auprès des cinémas, des réseaux et stations de télévision et d’autres exploitants - l’acquisition des droits de diffusion de productions cinématographiques et vidéo et de DVD "
    },
    {
        "cls_na9": "59.14",
        "lib_na9": "Projection de films cinématographiques",
        "description": "- la projection de films cinématographiques ou de bandes vidéo dans des salles de cinéma, en plein air ou dans d’autres installations de projection - les activités des ciné-clubs 59.2 Enregistrement sonore et édition musicale "
    },
    {
        "cls_na9": "59.20",
        "lib_na9": "Enregistrement sonore et édition musicale",
        "description": "promotion et leur distribution auprès de grossistes, de détaillants ou directement du public. Ces activités peuvent ou non être intégrées à l’activité de production de matrices au sein d’une même unité. Si ce n’est pas le cas, l’unité réalisant ces activités doit obtenir les droits de reproduction et de diffusion avant de réaliser les matrices. la production d’émissions de radio enregistrées (c’est-à-dire pas en direct). droits d’auteur pour les compositions musicales, de promotion, d’autorisation et d’utilisation de ces compositions dans des enregistrements, à la radio, à la télévision, dans des films, des spectacles ou les médias. Les unités actives dans cette classe peuvent détenir les droits d’auteur ou gérer les droits d’auteur musicaux pour le compte de leur détenteur. Cette classe comprend également l’édition de livres musicaux et de partitions.  60 Programmation et diffusion Cette division comprend les activités consistant à créer du contenu ou à acquérir le droit de diffuser du contenu, avant de le diffuser: émissions de radio et de télévision, y compris les émissions de divertissement, dinformation, les émissionsdébats et dautres émissions. La télédiffusion de données est également comprise et est généralement intégrée aux émissions de radio et de télévision. La télédiffusion peut faire appel à plusieurs technologies: réseau hertzien, satellite, câble ou Internet. Cette division comprend la production de programmes destinés à la câblodistribution (format réduit, informations, sport, enseignement, programmes jeunesse) sur une base d’abonnement. Cette division ne comprend pas la distribution des émissions par câble et autres abonnements (voir division 61). 60.1 Édition et diffusion de programmes radio "
    },
    {
        "cls_na9": "60.10",
        "lib_na9": "Édition et diffusion de programmes radio",
        "description": "- les activités de diffusion de signaux sonores par l’intermédiaire de studios et d’installations de radiodiffusion pour la transmission de programmes audio vers le public, à des stations affiliées ou à des abonnés. - les activités des réseaux de radiodiffusion, rassemblant et transmettant des programmes audio destinés à des stations affiliées ou à des abonnés, par les ondes, le câble ou le satellite - les activités de radiodiffusion via Internet (stations de radio sur Internet) - la diffusion de données intégrée à la radiodiffusion "
    },
    {
        "cls_na9": "60.20",
        "lib_na9": "Programmation de télévision et télédiffusion",
        "description": "(films, documentaires, etc.), de parties de programmes autoproduits (comme les informations locales et les reportages en direct) ou une combinaison de ces éléments. Ce programme de télévision peut être diffusé par l’unité le produisant ou être réalisé en vue d’une transmission par des distributeurs tiers, tels que des entreprises de télévision par câble ou des fournisseurs de télévision par satellite. Les programmes peuvent être généraux ou spécialisés (format réduit, informations, sport, enseignement, programmes sur une base d’abonnement. Les programmes de vidéos à la demande sont également compris dans cette classe. La télédiffusion de données intégrée aux émissions de télévision est également comprise. "
    },
    {
        "cls_na9": "61.10",
        "lib_na9": "Télécommunications filaires",
        "description": "- les activités d’exploitation, d’entretien et de fourniture de l’accès à des installations de transmission de la voix, de données, de textes, de sons et d’images en utilisant une infrastructure de télécommunications filaires. Ces activités comprennent plus précisément: • l’exploitation et l’entretien des installations de commutation et de transmission permettant les communications de point à point par l’intermédiaire de lignes terrestres, des micro-ondes ou une combinaison de lignes terrestres et de liaisons satellites • l’exploitation de systèmes de câblodistribution (par exemple: pour la transmission des données et des signaux de télévision) • la fourniture de communications par télégraphe et d’autres communications non vocales utilisant leur propre infrastructure. Les installations de transmission assurant ces activités peuvent reposer sur une seule technologie ou sur une combinaison de plusieurs technologies. - l’acquisition de l’accès et de la capacité réseau auprès des propriétaires et opérateurs de réseaux et la fourniture de services de télécommunications s’appuyant sur cette capacité aux entreprises et aux ménages. - la fourniture de l’accès à Internet par l’opérateur de l’infrastructure filaire. "
    },
    {
        "cls_na9": "61.20",
        "lib_na9": "Télécommunications sans fil",
        "description": "- les activités d’exploitation, d’entretien et de fourniture de l’accès à des installations de transmission de la voix, de données, de textes, de sons et d’images en utilisant une infrastructure de télécommunications sans fil - les services de téléphonie cellulaire et autres réseaux de télécommunications sans fil. Ces installations permettent la transmission omnidirectionnelle par les ondes et peuvent reposer sur une seule technologie ou sur une combinaison de plusieurs technologies. - l’acquisition de l’accès et de la capacité réseau auprès des propriétaires et opérateurs de réseaux et la fourniture de services de télécommunications sans fil (à l’exception de la transmission par satellite) s’appuyant sur cette capacité aux entreprises et aux ménages - la fourniture de l’accès à Internet par l’opérateur de l’infrastructure sans fil. "
    },
    {
        "cls_na9": "61.30",
        "lib_na9": "Télécommunications par satellite",
        "description": "- les activités d’exploitation, d’entretien et de fourniture de l’accès à des installations de transmission de la voix, de données, de textes, de sons et d’images en utilisant une infrastructure de télécommunications par satellite - la fourniture de programmes contenant des images, du son et des textes transmis aux consommateurs par des chaînes, stations ou réseaux de télévision, ou des réseaux de radio via des systèmes satellites de diffusion directe. (Les unités classées ici ne produisent en général pas le matériel de base des programmes.) - la fourniture de l’accès à Internet par l’opérateur de l’infrastructure satellite "
    },
    {
        "cls_na9": "61.90",
        "lib_na9": "Autres activités de télécommunication",
        "description": "- la fourniture d’applications spécialisées de télécommunications, telles que le repérage des satellites, la télémesure et l’exploitation de stations radar - l’exploitation de stations terminales de satellites et des installations connexes liées à un ou plusieurs systèmes de communications terrestres et capables d’assurer les télécommunications avec les systèmes de satellites - la fourniture de l’accès à Internet entre le client et le FSI par l’intermédiaire de réseaux dont le FSI n’est pas propriétaire, comme l’accès commuté à Internet, etc. - la fourniture de l’accès au téléphone et à Internet dans des lieux ouverts au public - la fourniture de services de télécommunications par des connexions aux télécommunications existantes • fourniture du protocole de téléphonie vocale sur Internet - les revendeurs de services de télécommunications (c’est-à-dire l’acquisition et la revente de capacité réseau sans services supplémentaires) "
    },
    {
        "cls_na9": "62.01",
        "lib_na9": "Programmation informatique",
        "description": "- la conception de la structure et du contenu et/ou l'écriture du code informatique nécessaire à la création et au lancement de: • logiciels informatiques (y compris les mises à jour et les correctifs) • applications logicielles (y compris les mises à jour et les correctifs) • bases de données • pages web - l'adaptation de logiciels, c'est-à-dire la modification et la configuration d'une application existante pour la rendre opérationnelle dans l'environnement informatique du client "
    },
    {
        "cls_na9": "62.02",
        "lib_na9": "Conseil informatique",
        "description": "des logiciels et celle des communications. Les services peuvent comprendre une formation des utilisateurs concernés. "
    },
    {
        "cls_na9": "62.03",
        "lib_na9": "Gestion d'installations informatiques",
        "description": "données du client, ainsi que les services d’assistance connexes. "
    },
    {
        "cls_na9": "62.09",
        "lib_na9": "Autres activités informatiques",
        "description": "ailleurs, telles que: - les services de récupération après un sinistre informatique - l'installation (configuration) d'ordinateurs personnels - les services d’installation de logiciels. "
    },
    {
        "cls_na9": "63.11",
        "lib_na9": "Traitement de données, hébergement et activités connexes",
        "description": "- la fourniture d'infrastructures destinées aux services d’hébergement, de traitement des données et à d’autres activités de ce type - les activités d’hébergement spécialisées comme: • services d’hébergement de sites Web • services de diffusion continue • services d’hébergement d’applications - la fourniture de services applicatifs - la fourniture générale à temps partagé de gros ordinateurs destinés aux clients - les activités de traitement des données: • traitement complet des données fournies par le client • préparation de rapports spécialisés à partir des données fournies par le client - les services de saisie des données "
    },
    {
        "cls_na9": "63.12",
        "lib_na9": "Portails Internet",
        "description": "- l’exploitation de sites Web qui utilisent des moteurs de recherche pour produire et maintenir d’importantes bases de données contenant des adresses et du contenu sur Internet, dans un format aisément consultable - l’exploitation d’autres sites Web ayant une fonction de portails, tels que les sites de médias dont le contenu est périodiquement mis à jour. "
    },
    {
        "cls_na9": "63.91",
        "lib_na9": "Activités des agences de presse",
        "description": "- les activités des agences de presse, c’est-à-dire la communication aux médias d’informations, de photos et d’autres éléments divers "
    },
    {
        "cls_na9": "63.99",
        "lib_na9": "Autres services d'information n.c.a.",
        "description": "- les services informatiques d’information par téléphone - les services de recherche d’information, pour le compte de tiers - les services de revue de presse, etc. "
    },
    {
        "cls_na9": "64.11",
        "lib_na9": "Activités de banque centrale",
        "description": "- l’émission et la gestion de la monnaie du pays - le suivi et le contrôle de la masse monétaire - la prise en compte de dépôts qui sont utilisés pour des opérations de compensation entre institutions financières - la surveillance des opérations bancaires - la détention de réserves de change - les activités de la banque centrale en tant que banque du gouvernement. Les activités des banques centrales varieront pour des raisons institutionnelles. "
    },
    {
        "cls_na9": "64.19",
        "lib_na9": "Autres intermédiations monétaires",
        "description": "fonds. L’octroi de crédit peut prendre différentes formes (prêts, hypothèques, cartes de crédit, etc.). Ces activités sont généralement effectuées par des institutions monétaires autres que les banques centrales, comme: - les établissements bancaires - les caisses d’épargne - les caisses de crédit mutuel - les activités de virements postaux et des caisses d’épargne postales - l’octroi de prêts au logement par des institutions spécialisées recevant des dépôts - les activités se rattachant à l’émission et au paiement de mandats "
    },
    {
        "cls_na9": "64.20",
        "lib_na9": "Activités des sociétés holding",
        "description": "contrôle des fonds propres) d’un groupe de sociétés filiales et dont la principale activité est d’être propriétaire de ce groupe. Les sociétés holding appartenant à cette classe ne fournissent aucun autre service aux entreprises dans lesquelles elles détiennent des fonds propres, en d’autres termes, elles n’administrent pas ou ne gèrent pas d’autres entités. "
    },
    {
        "cls_na9": "64.30",
        "lib_na9": "Fonds de placement et entités financières similaires",
        "description": "administrer, pour le compte d’actionnaires ou de bénéficiaires. Les portefeuilles sont adaptés pour avoir des caractéristiques d’investissement spécifiques (diversification, risque, taux de rendement et volatilité des prix). Ces entités perçoivent des intérêts, des dividendes et d’autres revenus de biens, mais elles n’ont pas ou peu d’employés et ne tirent aucun revenu de la vente de services.  206 I n st i t u t N a t i o nal d e la S ta tis tiq u e    - les sociétés d’investissement à capital variable - les sociétés d’investissement à capital fixe - les fonds communs de placement - les fiducies, les comptes de patrimoine ou d’agence, administrés pour le compte des bénéficiaires selon les dispositions d’une convention de fiducie, d’un testament ou d’un contrat d’agence "
    },
    {
        "cls_na9": "64.91",
        "lib_na9": "Crédit-bail",
        "description": "- le crédit-bail, lorsque le bail couvre approximativement la durée de service escomptée du bien et que le preneur bénéficie de tous les avantages qu’offre l’utilisation de ce bien et qu’il assume tous les risques découlant de sa propriété. Le bien peut être transmissible ou non. Ce type de bail couvre tous les coûts ou presque, y compris les intérêts. "
    },
    {
        "cls_na9": "64.92",
        "lib_na9": "Autre distribution de crédit",
        "description": "- les activités de services financiers consistant principalement en l’octroi de prêts par des institutions qui ne s’occupent pas d’intermédiation monétaire, le crédit accordé pouvant prendre différentes formes (prêts, hypothèques, cartes de crédit, etc.) et fournissant les types de services suivants: • l’octroi de crédit à la consommation • le financement des échanges internationaux • l’offre de financement à long terme à l’industrie • le prêt d’argent en dehors du système bancaire • l’octroi de prêts au logement par des institutions spécialisées ne recevant pas de dépôts • les sociétés de prêt sur gages "
    },
    {
        "cls_na9": "64.99",
        "lib_na9": "Autres activités des services financiers, hors assurance et caisses de retraite, n.c.a.",
        "description": "- les autres activités de services financiers consistant principalement en placements de fonds autres que les prêts: • activités d’affacturage • opérations de crédit croisé (\"swaps\"), opérations sur options et autres opérations d’arbitrage • activités des sociétés de règlement d’assurance-viatique - les activités de placement pour compte propre, telles que celles effectuées par des sociétés de capital risque, des clubs d’investissement, etc. "
    },
    {
        "cls_na9": "65.11",
        "lib_na9": "Assurance vie",
        "description": "- la souscription de contrats d’assurance de rente ou d’assurance vie, d’assurance invalidité et d’assurance en cas de mort ou mutilation accidentelle (avec ou sans élément d’épargne important) "
    },
    {
        "cls_na9": "65.12",
        "lib_na9": "Autres assurances",
        "description": "- la fourniture de services d’assurance autres que sur la vie: • assurance accident et incendie • assurance maladie • assurance voyages • assurance biens • assurance automobile, assurance maritime, assurance aérienne, assurance transports • assurance contre les pertes financières et assurance responsabilité civile 65.2 Réassurance "
    },
    {
        "cls_na9": "65.20",
        "lib_na9": "Réassurance",
        "description": "polices d’assurance émises par d’autres assureurs. 65.3 Caisses de retraite "
    },
    {
        "cls_na9": "65.30",
        "lib_na9": "Caisses de retraite",
        "description": "prestations de retraite exclusivement pour les salariés ou membres du répondant du régime. Elle comprend les régimes de pension avec prestations définies ainsi que les régimes individuels dans lesquels les prestations sont simplement déterminées par la cotisation de l’affilié - les régimes de prestations aux salariés - les fonds et régimes de pension - les régimes de retraite "
    },
    {
        "cls_na9": "66.11",
        "lib_na9": "Administration de marchés financiers",
        "description": "- les bourses des contrats de marchandises - les bourses des contrats du marché à terme - les bourses des titres - les bourses des valeurs - les bourses des options sur actions ou marchandises I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "66.12",
        "lib_na9": "Courtage de valeurs mobilières et de marchandises",
        "description": "- les opérations effectuées sur des marchés financiers pour le compte de tiers (le courtage en valeurs mobilières, par exemple) ainsi que les activités qui s’y rattachent - le courtage de titres - le courtage de contrats de marchandises - les activités des bureaux de change, etc. "
    },
    {
        "cls_na9": "66.19",
        "lib_na9": "Autres activités auxiliaires de services financiers, hors assurance et caisses de retraite",
        "description": "- les activités de traitement et de règlement des transactions financières, y compris des transactions effectuées par carte de crédit - les services de conseils en placement - les activités des conseillers et courtiers en hypothèque - les services d’investissement financier, de fiducie ou de garde pour le compte de tiers "
    },
    {
        "cls_na9": "66.21",
        "lib_na9": "Évaluation des risques et dommages",
        "description": "demandes d’indemnisation. Elle comprend: - l’évaluation des demandes d’indemnisation • liquidation de sinistres • analyse des risques • évaluation des risques et dommages • règlement d’avaries et de sinistres - le règlement des demandes d’indemnisation "
    },
    {
        "cls_na9": "66.22",
        "lib_na9": "Activités des agents et courtiers d'assurances",
        "description": "- les activités des agents et courtiers d’assurances (intermédiaires d’assurance) consistant en la vente, la négociation ou le démarchage de contrats d’assurance de rente et d’autres formes de contrat d’assurance "
    },
    {
        "cls_na9": "66.29",
        "lib_na9": "Autres activités auxiliaires d'assurance et de caisses de retraite",
        "description": "- les activités entrant dans la gestion des assurances et des caisses de retraite ou qui lui sont étroitement liées (à l’exclusion de l’intermédiation financière, de la liquidation de sinistres et des activités des agents d’assurance): • administration des sauvetages • services actuariels "
    },
    {
        "cls_na9": "66.30",
        "lib_na9": "Gestion de fonds",
        "description": "et autres), telles que: - la gestion de fonds communs de placement - la gestion d’autres fonds de placement - la gestion de caisses de retraite  210 I n st i t u t N a t i o nal d e la S ta tis tiq u e   SECTION L  ACTIVITÉS IMMOBILIÈRES  Cette section comprend les activités de bailleurs, d’agents et/ou de courtiers dans l’un ou plusieurs des domaines suivants: vente ou achat de biens immobiliers, location de biens immobiliers, prestation d’autres services liés à l’immobilier tels que l’évaluation de biens immobiliers ou l’activité d’agent fiduciaire en immobilier. Les activités de cette section peuvent être effectuées sur des biens propres ou loués, éventuellement pour le compte de tiers. Sont également comprises la construction de structures, ainsi que la conservation des droits de propriété ou la location de ces structures. Cette section comprend aussi les gestionnaires de biens immobiliers.  68 Activités immobilières 68.1 Activités des marchands de biens immobiliers "
    },
    {
        "cls_na9": "68.10",
        "lib_na9": "Activités des marchands de biens immobiliers",
        "description": "- l’achat et la vente de biens immobiliers propres ou loués: • immeubles résidentiels et maisons d’habitation • immeubles non résidentiels, y compris les salles d’exposition, les installations d’entreposage libre-service, les galeries et centres commerciaux • terres et terrains - la création de lotissements, sans amélioration foncière "
    },
    {
        "cls_na9": "68.21",
        "lib_na9": "Location de logements",
        "description": "- la location d'appartements et de maisons, vides ou meublés destinés à l'habitation principale ou secondaire - la promotion immobilière de logements en vue d'une exploitation propre - l'exploitation d'emplacements pour caravanes résidentielles "
    },
    {
        "cls_na9": "68.29",
        "lib_na9": "Location de terrains et d'autres biens immobiliers",
        "description": "- la location et l'exploitation d'immeubles non résidentiels (bureaux, espaces commerciaux, halls d'exposition, salles de conférence, de réception ou de réunion, installations d'entreposage en libre-service, etc.) - la location de terres et terrains, notamment à usage agricole - la promotion immobilière d'autres biens immobiliers en vue d'une exploitation propre - l'exploitation d'emplacemet pour caravanes - la location de fonds de commerce - la location au mois ou à l'année de boxes ou de lieux de garage de véhicules "
    },
    {
        "cls_na9": "68.31",
        "lib_na9": "Agences immobilières",
        "description": "- l’intermédiation en matière d’achat, de vente, de location de biens immobiliers pour le compte de tiers - les services de conseil et d’évaluation en rapport avec l’achat, la vente et la location de biens immobiliers, pour le compte de tiers - les activités des agents fiduciaires en immobilier "
    },
    {
        "cls_na9": "68.32",
        "lib_na9": "Administration de biens immobiliers",
        "description": "- le recouvrement des loyers "
    },
    {
        "cls_na9": "69.10",
        "lib_na9": "Activités juridiques",
        "description": "- la représentation juridique d’une partie contre une partie adverse, que ce soit ou non devant des tribunaux ou d’autres organes judiciaires, par des membres du barreau ou sous leur contrôle: • conseil et représentation dans des affaires civiles • conseil et représentation dans des affaires pénales • conseil et représentation en relation avec des conflits du travail - le conseil et l’assistance juridique de nature générale, la rédaction de documents juridiques: • statuts, accords d’association ou documents analogues relatifs à la constitution de sociétés • brevets et droits d’auteurs • rédaction d’actes, de testaments, d’actes fiduciaires, etc. - les autres activités des notaires, des huissiers, des juges d’instruction et des arbitres "
    },
    {
        "cls_na9": "69.20",
        "lib_na9": "Activités comptables",
        "description": "- l’enregistrement d’opérations commerciales pour les entreprises ou autres - l’établissement ou la vérification de comptes financiers - l’examen des comptes et la certification de leur exactitude - l’établissement de déclarations fiscales pour les particuliers et les entreprises - les activités de conseil et de représentation (autre que la représentation juridique), pour le compte de clients, devant l’administration fiscale "
    },
    {
        "cls_na9": "70.10",
        "lib_na9": "Activités des sièges sociaux",
        "description": "du rôle de planification et de direction stratégique ou organisationnelle de la société ou entreprise, l’exercice du contrôle opérationnel et la gestion des opérations courantes des unités rattachées. - les activités des sièges sociaux - les activités des sièges administratifs centralisés - les activités des sièges d’entreprise - les activités des bureaux locaux et régionaux - les activités de gestion des filiales. "
    },
    {
        "cls_na9": "70.21",
        "lib_na9": "Conseil en relations publiques et communication",
        "description": ""
    },
    {
        "cls_na9": "70.22",
        "lib_na9": "Conseil pour les affaires et autres conseils de gestion",
        "description": "questions de gestion, telles que la planification d’entreprise stratégique et organisationnelle, la reconfiguration de processus, la gestion du changement, la réduction des coûts et d’autres questions financières, les objectifs et les politiques de marketing, les politiques, les pratiques et la planification en matière de ressources humaines, les stratégies de rémunération et de retraite, la prévision de la production et la planification du contrôle. Ces services aux entreprises peuvent comprendre le conseil et l’assistance opérationnelle aux entreprises et aux services publics dans les domaines suivants: - la conception de méthodes ou procédures comptables, de programme de comptabilisation des dépenses, de procédures de contrôle budgétaire - le conseil et l’assistance aux entreprises et aux services publics en matière de planification, d’organisation, de recherche du rendement, de contrôle, d’information de gestion, etc. "
    },
    {
        "cls_na9": "71.11",
        "lib_na9": "Activités d'architecture",
        "description": "- les activités de conseil en matière d’architecture: • conception de bâtiments et établissement de plans • urbanisme et architecture paysagère "
    },
    {
        "cls_na9": "71.12",
        "lib_na9": "Activités d'ingénierie",
        "description": "- les activités d’ingénierie (c’est-à-dire l’application des lois physiques et principes d’ingénierie dans la conception de machines, matériaux, instruments, structures, processus et systèmes) et de conseil dans les domaines suivants: • machines, processus et sites industriels • projets comportant des activités ayant trait au génie civil, au génie hydraulique, à la technique du trafic • projets de gestion de l’eau • conception et réalisation de projets intéressant le génie électrique et électronique, le génie minier, le génie chimique, le génie mécanique, le génie industriel, l’ingénierie de systèmes, de techniques de sécurité - l’élaboration de projets faisant appel aux techniques de la climatisation, de la réfrigération, de l’assainissement et de la lutte contre la pollution, au génie acoustique, etc. - les études géophysiques, géologiques et sismiques - les activités de levé géodésique: • levé cadastral et délimitation • relevé hydrologique • levé souterrain • information cartographique et spatiale "
    },
    {
        "cls_na9": "71.20",
        "lib_na9": "Activités de contrôle et analyses techniques",
        "description": "y compris: • essais acoustiques et de vibration • analyses de la composition et de la pureté de minéraux, etc. • activités d’analyse dans le domaine de l’hygiène alimentaire, y compris l’analyse et le contrôle vétérinaires en relation avec la production alimentaire • contrôle des caractéristiques et performances physiques de matériaux telles que leur résistance, leur épaisseur, leur durabilité, leur radioactivité, etc. • essais de qualification et de fiabilité • essais de performance de machines complètes: moteurs, automobiles, équipements électroniques, etc. • contrôle radiographique des soudures et des joints • analyse de défaillance • contrôle et mesure d’indicateurs environnementaux: pollution de l’air et de l’eau, etc. - la certification de produits, y compris de biens de consommation, de véhicules automobiles, d’aéronefs, de conteneurs sous pression, d’installations nucléaires, etc. - le contrôle technique des véhicules automobiles - les essais à l’aide de modèles ou de maquettes (aéronefs, navires, barrages, etc.) - les services des laboratoires de police "
    },
    {
        "cls_na9": "72.11",
        "lib_na9": "Recherche-développement en biotechnologie",
        "description": "- ADN/ARN: génomique, pharmacogénomique, sondes géniques, génie génétique, séquençage/synthèse/amplification de l’ADN/ARN, profilage de l’expression génétique et utilisation de la technologie antisens - protéines et autres molécules: séquençage/synthèse/ingénierie de protéines et peptides (y compris hormones à grandes molécules); amélioration des méthodes d’administration de médicaments à grandes molécules; protéomique, isolation et purification des protéines, signalisation, identification des récepteurs cellulaires - culture et ingénierie des cellules et tissus: culture de cellules/tissus, génie tissulaire (y compris structures d’échafaudage tissulaires et génie biomédical), fusion cellulaire, stimulants vaccinaux/immunitaires, manipulation embryonnaire - techniques biotechnologiques des procédés: fermentation au moyen de bioréacteurs, biotraitement, biolessivage, biopulpage, bioblanchiment, biodésulphuration, biorestauration, biofiltration et phytorestauration - vecteurs de gènes et d’ARN: thérapie génique, vecteurs viraux - bioinformatique: construction de bases de données sur les génomes, les séquences de protéines, modélisation de processus biologiques complexes, y compris biologie systémique - nanobiotechnologie: application des outils et procédés de nano/microfabrication pour construire des dispositifs permettant d’étudier les biosystèmes, avec des applications dans l’administration des médicaments, le diagnostic, etc. "
    },
    {
        "cls_na9": "72.19",
        "lib_na9": "Recherche-développement en autres sciences physiques et naturelles",
        "description": "- la recherche et le développement expérimental en sciences naturelles et ingénierie autres qu’en biotechnologie • recherche-développement en sciences naturelles • recherche-développement en ingénierie et technologie • recherche-développement en sciences médicales • recherche-développement en agronomie • recherche-développement interdisciplinaire, principalement en sciences naturelles et ingénierie 72.2 Recherche-développement en sciences humaines et sociales "
    },
    {
        "cls_na9": "72.20",
        "lib_na9": "Recherche-développement en sciences humaines et sociales",
        "description": "- la recherche-développement en sciences sociales - la recherche-développement en sciences humaines - la recherche-développement interdisciplinaire, principalement en sciences humaines et sociales "
    },
    {
        "cls_na9": "73.11",
        "lib_na9": "Activités des agences de publicité",
        "description": "conseil, la création publicitaire, la production de matériel publicitaire et l’achat de médias. - la conception et la réalisation de campagnes publicitaires: • conception et diffusion de publicités dans les journaux et les périodiques, à la radio et à la télévision, sur Internet et dans d’autres médias • conception et diffusion de publicités à l’extérieur, par exemple sur des panneaux, sur des vitrines, dans des magasins, sur des voitures et des autobus, etc. • publicité aérienne • distribution de prospectus et d’échantillons publicitaires • création de stands et d’autres structures et sites d’affichage - la réalisation de campagnes de marketing et d’autres services publicitaires destinés à attirer et fidéliser les consommateurs • promotion de produits • marketing dans les points de vente • publipostage • conseil en marketing "
    },
    {
        "cls_na9": "73.12",
        "lib_na9": "Régie publicitaire de médias",
        "description": "- la régie publicitaire de médias pour la vente ou la revente de temps d’antenne et d’espaces publicitaires "
    },
    {
        "cls_na9": "73.20",
        "lib_na9": "Études de marché et sondages",
        "description": "- les études portant sur le potentiel commercial de biens et de services, leur reconnaissance, acceptation et connaissance par le public, ainsi que sur les habitudes d’achat des consommateurs aux fins de la promotion des ventes et de la mise au point de produits nouveaux; sont comprises également les analyses statistiques des résultats - les sondages d’opinion sur des questions politiques, économiques et sociales ainsi que l’analyse statistique des résultats  74 Autres activités spécialisées, scientifiques et techniques Cette division comprend la prestation de services spécialisés, scientifiques et techniques (à l’exclusion des activités juridiques et comptables, des activités d’architecture et d’ingénierie, des activités de contrôle et analyses techniques, des activités de gestion et conseil de gestion, de la recherche-développement et des activités publicitaires).   217     74.1 Activités spécialisées de design "
    },
    {
        "cls_na9": "74.10",
        "lib_na9": "Activités spécialisées de design",
        "description": "- la création de modèles pour les articles textiles, les articles d’habillement, les chaussures, les bijoux, les meubles, les objets de décoration intérieure et autres articles de mode ainsi que pour les autres biens personnels ou domestiques - le design industriel, c’est-à-dire la création et l’élaboration d’avant-projets et de spécifications qui optimisent la fonction, la valeur et l’apparence des produits, y compris le choix des matériaux, de la structure, des mécanismes, de la forme, de la couleur et du fini de surface du produit, compte tenu des facteurs humains, de la sécurité, de l’attrait commercial et de la facilité de production, de distribution, d’utilisation et d’entretien - les activités de concepteurs graphiques - la décoration d'intérieur "
    },
    {
        "cls_na9": "74.20",
        "lib_na9": "Activités photographiques",
        "description": "- la production photographique réalisée à titre commercial ou privé: • photographies d’identité, photographies de classe, de mariage, etc. • photographies publicitaires, d’édition, de mode, à des fins immobilières ou touristiques • photographie aérienne • réalisation de vidéos pour des événements: mariages, réunions, etc. - le traitement des films: • développement, tirage et agrandissement de photos ou de films réalisés par les clients • laboratoires de développement et tirage de photos et de films • boutiques photos avec développement en une heure (ne faisant pas partie d’un magasin vendant des appareils photographiques) • montage de diapositives • copie, restauration et retouche de photographies - activités de photojournalistes - le microfilmage de documents "
    },
    {
        "cls_na9": "74.30",
        "lib_na9": "Traduction et interprétation",
        "description": ""
    },
    {
        "cls_na9": "74.90",
        "lib_na9": "Autres activités spécialisées, scientifiques et techniques n.c.a.",
        "description": "activités requérant des niveaux de compétences professionnelles, scientifiques et techniques plus avancées, mais ne comprend pas les fonctions administratives courantes et continues qui sont généralement de courte durée. - l’intermédiation en fonds de commerce, c’est-à-dire l’organisation de l’achat ou de la vente de petits et moyens fonds de commerce, y compris de cabinets de professions libérales, à l’exclusion toutefois du courtage immobilier - le courtage de brevets (organisation de l’achat et de la vente de brevets) - les activités d’expertise autres que celles ayant trait à l’immobilier et à l’assurance (antiquités, bijoux, etc.) - la vérification de factures et l’information sur les tarifs de transport - les activités concernant les prévisions météorologiques - les services de conseil en sécurité - les services de conseil en agronomie I n st i t u t N a t i o nal d e la S ta tis tiq u e    - les services de conseil en environnement - les autres services de conseil technique - les activités des consultants autres que les consultants en architecture, ingénierie et gestion - les activités des experts-métreurs - les activités exercées par des agents ou des agences pour le compte de particuliers et consistant habituellement à leur obtenir un engagement dans des films, des productions théâtrales, d’autres spectacles ou des manifestations sportives et à placer des livres, des pièces de théâtre, des œuvres d’art, des photos, etc., chez des éditeurs, des producteurs, etc. "
    },
    {
        "cls_na9": "75.00",
        "lib_na9": "Activités vétérinaires",
        "description": "- les activités de soins et de contrôle vétérinaires exercées sur des animaux de ferme - les activités de soins et de contrôle vétérinaires exercées sur des animaux de compagnie Ces activités sont exercées par des vétérinaires qualifiés dans des cliniques vétérinaires, lors de la visite de fermes, de chenils ou d’asiles pour animaux, dans les salles de consultation ou d’opération des vétérinaires ou dans d’autres lieux. - les activités des assistants vétérinaires ou d’autres types de personnel vétérinaire auxiliaire - les activités clinico-pathologiques et les autres activités de diagnostic portant sur des animaux - les activités des ambulances pour animaux "
    },
    {
        "cls_na9": "77.11",
        "lib_na9": "Location et location-bail de voitures et de véhicules automobiles légers",
        "description": "- la location et la location-bail des types de véhicules suivants: • voitures particulières et autres véhicules automobiles légers sans chauffeur (dont le poids est inférieur ou égal à 3,5 tonnes) "
    },
    {
        "cls_na9": "77.12",
        "lib_na9": "Location et location-bail de camions",
        "description": "- la location et la location-bail des types de véhicules suivants: • camions, remorques utilitaires et véhicules automobiles lourds (dont le poids est supérieur à 3,5 tonnes) • véhicules de loisirs "
    },
    {
        "cls_na9": "77.21",
        "lib_na9": "Location et location-bail d'articles de loisirs et de sport",
        "description": "- les bateaux de plaisance, canots et voiliers - les cycles - les chaises longues et parasols de plage - d’autres articles de sport - les skis "
    },
    {
        "cls_na9": "77.22",
        "lib_na9": "Location de vidéocassettes et disques vidéo",
        "description": "- la location de vidéocassettes, disques, CD, DVD, etc. "
    },
    {
        "cls_na9": "77.29",
        "lib_na9": "Location et location-bail d'autres biens personnels et domestiques",
        "description": "- la location de tous types d’articles personnels ou domestiques à des ménages ou à des entreprises (à l’exclusion d’articles de loisirs et de sport): • textiles, articles d’habillement et chaussures • meubles, articles de poterie et de verrerie, articles pour la cuisine et la table, appareils électriques et électroménagers • articles de bijouterie, instruments de musique, accessoires et costumes de scène • livres, journaux et magazines • machines et équipements utilisés par des amateurs ou dans le cadre d’un loisir (machines pour le bricolage, par exemple) • fleurs et plantes • équipements 2lectroniques pour usage domestique "
    },
    {
        "cls_na9": "77.31",
        "lib_na9": "Location et location-bail de machines et équipements agricoles",
        "description": "- la location et la location-bail de machines et équipements pour l’agriculture et la sylviculture, sans opérateur: • location des biens rangés dans la classe 28.30 (par exemple, tracteurs agricoles, etc.) "
    },
    {
        "cls_na9": "77.32",
        "lib_na9": "Location et location-bail de machines et équipements pour la construction",
        "description": "- la location et la location-bail de machines et équipements pour le bâtiment et le génie civil, sans opérateur: • camions-grues • échafaudages et plates-formes de travail, sans montage ni démontage "
    },
    {
        "cls_na9": "77.33",
        "lib_na9": "Location et location-bail de machines de bureau et de matériel informatique",
        "description": "- la location et la location-bail de machines et équipements de bureau, sans opérateur: • ordinateurs et équipements périphériques • duplicateurs, machines à écrire et machines de traitement de textes • machines et matériels comptables: caisses enregistreuses, calculateurs électroniques, etc. • mobilier de bureau "
    },
    {
        "cls_na9": "77.34",
        "lib_na9": "Location et location-bail de matériels de transport par eau",
        "description": "- la location et la location-bail de matériels de transport maritime et fluvial, sans équipage: • bateaux et navires commerciaux "
    },
    {
        "cls_na9": "77.35",
        "lib_na9": "Location et location-bail de matériels de transport aérien",
        "description": "- la location et la location-bail de matériels de transport aérien, sans pilote: • avions • ballons à air chaud "
    },
    {
        "cls_na9": "77.39",
        "lib_na9": "Location et location-bail d’autres machines, équipements et biens matériels n.c.a.",
        "description": "- la location et la location-bail, sans opérateur, de machines et équipements divers généralement utilisés comme biens d’équipement par les entreprises: • moteurs et turbines • machines-outils • équipement pour exploitation minière et pétrolière • matériels de radiodiffusion, de télévision et de communication à usage professionnel • équipement pour la production cinématographique • matériels de mesure et de contrôle • autres machines et matériels à usage scientifique, commercial et industriel - la location et la location-bail de matériels de transport terrestre (autres que les véhicules automobiles), sans chauffeur: • motocycles, caravanes et autocaravanes (\"campers\"), etc. • véhicules de chemin de fer - la location de conteneurs pour le logement ou le bureau - la location d’animaux (par exemple: troupeaux, chevaux de course) - la location de conteneurs - la location de palettes "
    },
    {
        "cls_na9": "77.40",
        "lib_na9": "Location-bail de propriété intellectuelle et de produits similaires, à l'exception des œuvres soumises à copyright",
        "description": "des produits similaires, pour lesquels des redevances ou des droits de licence sont versés au propriétaire. La location-bail de ces produits peut prendre différentes formes, comme l’autorisation de reproduction, l’utilisation dans des processus ou produits ultérieurs, l’exploitation d’une entreprise dans le cadre d’une franchise, etc. Les propriétaires actuels peuvent ou non avoir créé ces produits. - la location-bail de produits liés à la propriété intellectuelle (à l’exclusion des œuvres protégées par le droit d’auteur telles que les livres ou les logiciels) - la perception de redevances ou de droits de licence pour l’utilisation de: • entités brevetées • marques déposées ou marques de service • marques • prospection minière et évaluation • accords de franchise "
    },
    {
        "cls_na9": "78.10",
        "lib_na9": "Activités des agences de placement de main-d'œuvre",
        "description": "les personnes orientées ou placées n’étant pas des salariés des agences de placement. - la recherche, la sélection, l’orientation et le placement de personnel, y compris les activités de recherche et de placement de cadres - les activités des agences et bureaux de casting, telles que les agences de distribution de rôles - les activités des agences de placement de main-d’œuvre en ligne "
    },
    {
        "cls_na9": "78.20",
        "lib_na9": "Activités des agences de travail temporaire",
        "description": "temporairement ou de compléter la main-d’œuvre du client, les personnes placées étant salariées par l’agence de travail temporaire. Les agences rangées dans cette classe n’assurent toutefois pas la supervision directe de leurs salariés sur les lieux de travail du client. 78.3 Autre mise à disposition de ressources humaines "
    },
    {
        "cls_na9": "78.30",
        "lib_na9": "Autre mise à disposition de ressources humaines",
        "description": "l’employeur officiel des salariés pour les questions de paie, d’impôts, ainsi qu’en matière fiscale et de ressources humaines, mais ne sont pas responsables de la direction et de la supervision des salariés. La fourniture de ressources humaines a généralement lieu pour une longue durée ou sur une base permanente et les unités classées ici sont spécialisés dans l’exécution d’une vaste gamme de tâches de gestion des ressources humaines. "
    },
    {
        "cls_na9": "79.11",
        "lib_na9": "Activités des agences de voyage",
        "description": "- les activités des agences consistant principalement à vendre, en gros ou au détail, des services de voyage, voyage organisé, transport et hébergement au grand public et à des clients du secteur privé. "
    },
    {
        "cls_na9": "79.12",
        "lib_na9": "Activités des voyagistes",
        "description": "- les activités consistant à planifier et à mettre sur pied des voyages organisés vendus par des agences de voyage ou directement par des voyagistes. Les voyages organisés peuvent comporter un ou plusieurs ou l’ensemble des éléments suivants: • transport, • hébergement, • restauration, • visites de musées, de sites historiques ou culturels, spectacles, événements musicaux ou sportifs. 79.9 Autres services de réservation et activités connexes "
    },
    {
        "cls_na9": "79.90",
        "lib_na9": "Autres services de réservation et activités connexes",
        "description": "- les autres services de réservation liés aux voyages • les réservations pour le transport, les hôtels, les restaurants, la location de véhicules, les spectacles et les événements sportifs - les services d’échange à temps partagé - les activités de vente de billets pour les spectacles, les manifestations sportives et tous les autres événements de divertissement - les services d'assistance aux touristes • la fourniture d'informations touristiques • les activités des guides touristiques, - les activités de promotion du tourisme "
    },
    {
        "cls_na9": "80.10",
        "lib_na9": "Activités de sécurité privée",
        "description": "les services de ramassage et de livraison d’argent, de reçus ou d’autres objets de valeur en utilisant du personnel équipé pour protéger de tels biens pendant le transport. - les services de voitures blindées - les services de gardes du corps - les services de détecteurs de mensonges - les services de dactyloscopie - les services d’agents de sécurité - le déchiquetage d’informations sur tout support à des fins de sécurité "
    },
    {
        "cls_na9": "80.20",
        "lib_na9": "Activités liées aux systèmes de sécurité",
        "description": "- la surveillance et la surveillance à distance de systèmes de sécurité et d’alarme électroniques tels que les dispositifs d’alarme antivol et d’alarme incendie, y compris leur installation et maintenance - l’installation, la réparation, la réfection et l’adaptation de dispositifs de verrouillage mécaniques ou électroniques, de coffres-forts et des chambres fortes, avec, par la suite, leur surveillance ou surveillance à distance Les entreprises effectuant ces activités peuvent également vendre ces systèmes de sécurité, dispositifs de verrouillage mécaniques ou électroniques, coffres-forts et chambres fortes. "
    },
    {
        "cls_na9": "80.30",
        "lib_na9": "Activités d'enquête",
        "description": "- les services d’enquêtes et de détectives - les activités de tous les détectives privés, quels que soient le type de client et le but de l’enquête  81 Services relatifs aux bâtiments et aménagement paysager Cette division comprend la fourniture d'un certain nombre de services généraux d'appui dans les locaux du client, les activités de nettoyage intérieur et extérieur de bâtiments de tous types, le nettoyage de machines industrielles, le nettoyage de trains, autobus, avions, etc., le nettoyage de l’intérieur de citernes de transport par route ou par mer, les activités de désinfection et de destruction des parasites dans les bâtiments, les navires, les trains, etc., le nettoyage de bouteilles, le balayage des chaussées, le déblaiement de la neige et de la glace, les services d’aménagement et d’entretien paysager et la prestation de ces services en combinaison avec la conception de plans paysagers et/ou la construction (l’installation) d’allées piétonnières, de murs de soutènement, de terrasses, de clôtures, d’étangs et de structures similaires. 81.1 Activités combinées de soutien lié aux bâtiments "
    },
    {
        "cls_na9": "81.10",
        "lib_na9": "Activités combinées de soutien lié aux bâtiments",
        "description": "services comprennent le nettoyage intérieur courant, l’entretien, l’élimination des ordures, le gardiennage et la sécurité, la distribution du courrier, la blanchisserie et des services annexes destinés à soutenir les opérations au sein des installations. Ces activités de soutien sont effectuées par du personnel qui n’intervient pas dans les activités essentielles du client ou n’est pas chargé de celles ci. "
    },
    {
        "cls_na9": "81.21",
        "lib_na9": "Nettoyage courant des bâtiments",
        "description": "- les activités de nettoyage courant (non spécialisé) de tous types de bâtiments tels que: • les bureaux • les maisons ou appartements • les usines • les magasins • les institutions - les activités de nettoyage courant (non spécialisé) de locaux d’institutions, les autres locaux à usage commercial et professionnel et les immeubles à appartements Ces activités comprennent principalement le nettoyage intérieur, même si elles peuvent inclure le nettoyage des espaces extérieurs associés tels que les vitres ou les couloirs. "
    },
    {
        "cls_na9": "81.22",
        "lib_na9": "Autres activités de nettoyage des bâtiments et nettoyage industriel",
        "description": "- le nettoyage extérieur de bâtiments de tous types, y compris les bureaux, les usines, les magasins, les locaux d’institutions, les autres locaux à usage commercial et professionnel et les immeubles à appartements - les activités de nettoyage spécialisé de bâtiments, telles que le nettoyage des vitres, le ramonage des cheminées et le nettoyage des âtres, des fourneaux, des incinérateurs, des chaudières, des gaines de ventilation et des dispositifs d’évacuation des fumées - le nettoyage de machines industrielles - les autres activités de nettoyage des bâtiments et de nettoyage industriel n.c.a. "
    },
    {
        "cls_na9": "81.29",
        "lib_na9": "Autres activités de nettoyage",
        "description": "- les activités de nettoyage et d’entretien des piscines - le nettoyage des trains, des autobus, des avions, etc. - le nettoyage de l’intérieur de citernes de transport par route ou par mer - les activités de désinfection et de destruction de parasites - le nettoyage de bouteilles - le balayage des chaussées et le déblaiement de la neige et de la glace - les autres activités de nettoyage n.c.a. "
    },
    {
        "cls_na9": "81.30",
        "lib_na9": "Services d'aménagement paysager",
        "description": "- la plantation, les soins et l’entretien de: - parcs et jardins pour: • bâtiments d’habitation privés et publics • bâtiments publics et semi-publics (écoles, hôpitaux, bâtiments administratifs, églises, etc.) • terrains municipaux (parcs, espaces verts, cimetières, etc.) • verdure bordant les voies de communication (axes routiers, voies ferroviaires, berges, ports) • bâtiments industriels et commerciaux - verdure pour: • bâtiments (jardins de toit, verdure de façade, jardins intérieurs, etc.) • terrains de sport (terrains de football, parcours de golf, etc.), terrains de jeu, pelouses pour bains de soleil et autres parcs récréatifs • eaux stagnantes et courantes (bassins, marécages, étangs, piscines, fossés, cours d’eau, installations d’épandage) - les plantations pour la protection contre le bruit, le vent, l’érosion, la visibilité et l’éblouissement "
    },
    {
        "cls_na9": "82.11",
        "lib_na9": "Services administratifs combinés de bureau",
        "description": "réception, la planification financière, la facturation et la tenue de livres, les activités liées au personnel, les services de courrier, etc., pour le compte de tiers. "
    },
    {
        "cls_na9": "82.19",
        "lib_na9": "Photocopie, préparation de documents et autres activités spécialisées de soutien de bureau",
        "description": "soutien de bureau. Les activités de photocopie/impression de documents rangées dans cette classe concernent uniquement des activités d’impression en petit tirage. - la préparation de documents - la révision ou la correction de documents - la frappe et le traitement de texte - les services de secrétariat de soutien - la transcription de documents et d’autres services de secrétariat - la rédaction de lettres et de curriculum vitae - la location de boîtes aux lettres et d’autres services postaux et de courrier, tels que le tri préalable, l’adressage, etc. (à l’exclusion du publipostage) - la photocopie - la duplication - le tirage de plans - d’autres services de reproduction de documents n’offrant pas de services d’impression (impression offset, impressionminute, impression numérique, services de prépresse) "
    },
    {
        "cls_na9": "82.20",
        "lib_na9": "Activités de centres d'appels",
        "description": "- les activités des centres d’appels entrants: la réception d’appels venant de clients par des opérateurs humains, des systèmes de répartition automatique des appels, d’intégration du téléphone à l’ordinateur, de réponse vocale interactive ou des méthodes similaires pour prendre des commandes, donner des informations sur un produit, traiter les demandes d’assistance ou les réclamations des clients - les activités des centres d’appels sortants: utilisation de méthodes analogues pour vendre des biens ou des services à des clients potentiels, réaliser des études de marché ou des sondages et effectuer des activités similaires pour des clients. 82.3 Organisation de salons professionnels et congrès "
    },
    {
        "cls_na9": "82.30",
        "lib_na9": "Organisation de salons professionnels et congrès",
        "description": "commerciales, des congrès, des conférences et des réunions, incluant ou non la gestion et la mise à disposition du personnel pour exploiter les installations ou ces événements ont lieu. 82.9 Activités de soutien aux entreprises n.c.a. Ce groupe comprend les activités des agences de recouvrement de factures et des sociétés d’information financière sur la clientèle, ainsi que toutes les activités de soutien généralement fournies aux entreprises non classées ailleurs.    "
    },
    {
        "cls_na9": "82.91",
        "lib_na9": "Activités des agences de recouvrement de factures et des sociétés d'information financière sur la clientèle",
        "description": "- le recouvrement de créances et le versement des paiements perçus aux clients, comme les services de recouvrement de factures ou de créances - les activités consistant à rassembler des renseignements, tels que les antécédents de crédit et d’emploi de particuliers ou les antécédents de crédit d’entreprises, et à fournir ces informations aux institutions financières, aux détaillants et à des tiers qui doivent évaluer la solvabilité de ces personnes ou entreprises  228 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "82.92",
        "lib_na9": "Activités de conditionnement",
        "description": "- les activités de conditionnement, pour le compte de tiers, faisant appel ou non à des procédés automatiques: • mise en bouteilles de liquides divers, même alimentaires • emballage d’articles divers (mise sous blister, sous pellicules rétractables, etc.) • conditionnement de sécurité de préparations pharmaceutiques • étiquetage, estampillage et impression • emballage de colis et de paquets-cadeaux "
    },
    {
        "cls_na9": "82.99",
        "lib_na9": "Autres activités de soutien aux entreprises n.c.a.",
        "description": "- la production de comptes rendus textuels ou d’enregistrements sténographiques des délibérations des tribunaux et la transcription ultérieure du matériel enregistré, telles que: • services de transcription des délibérations des tribunaux ou de transcription sténographique • services de sténographes publics - les services de sous-titrage codé en temps réel (simultané) d’émissions de télévision en direct, de réunions ou de conférences - les services de codage par codes-barres pour les adresses - les services d’impression de codes-barres - les services de collectes de fonds, pour le compte de tiers - les services de reprise de possession - les services de collecte des pièces de parcmètres - les activités des commissaires-priseurs indépendants - l’administration des programmes de fidélisation - les autres activités de soutien généralement fournies aux entreprises non classées ailleurs "
    },
    {
        "cls_na9": "84.11",
        "lib_na9": "Administration publique centrale",
        "description": "- les activités exécutives et législatives exercés par les pouvoirs public au niveau central - les activités de l'administration financiére, budgétaires, économique, statistiques et monétaire - les activités administratives du ministère de la défense - administration des douanes "
    },
    {
        "cls_na9": "84.12",
        "lib_na9": "Administration des collectivités locales",
        "description": "- les activités exécutives et législatives exercés par les pouvoir publics aux niveaux régional, départemental et communal "
    },
    {
        "cls_na9": "84.13",
        "lib_na9": "Administration publique (tutelle) de la santé, de la formation, de la culture et des services sociaux, autre que",
        "description": "- l’administration publique des programmes visant à accroître le bien-être des personnes: • santé • éducation • culture • sport • loisirs • environnement • logement • services sociaux - l’administration publique des politiques de R & D et des fonds associés dans ces domaines - le parrainage d’activités récréatives et culturelles - l’octroi de subventions publiques à des artistes - l’administration des programmes d’approvisionnement en eau potable - l’administration des opérations de collecte et d’élimination des déchets - l’administration des programmes de protection de l’environnement - l’administration des programmes de logement  230 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "84.14",
        "lib_na9": "Administration publique (tutelle) des activités économiques",
        "description": "- l’administration publique et la tutelle des différents secteurs de l’activité économique, y compris l’octroi de subventions: • agriculture • aménagement du territoire • énergie et ressources minières • équipements • transports • communications • hôtellerie et tourisme • commerce de gros et de détail - la gestion des politiques de R & D et des fonds associés destinés à améliorer la performance économique - l’administration des affaires générales concernant l’emploi et le marché du travail - la mise en œuvre de politiques de développement régional, par exemple pour réduire le chômage "
    },
    {
        "cls_na9": "84.21",
        "lib_na9": "Affaires étrangères",
        "description": "- l’administration et la gestion du ministère des affaires étrangères et des missions diplomatiques et consulaires à l’étranger ou auprès des secrétariats d’organisations internationales - l’administration, la gestion et le soutien des services d’information et des services culturels dont le champ d’activité s’étend au-delà du territoire national - l’octroi d’une aide à des pays étrangers, directement ou par le truchement d’organisations internationales - la fourniture d’une aide militaire à des pays étrangers - la gestion du commerce extérieur ainsi que des affaires financières et techniques internationales "
    },
    {
        "cls_na9": "84.22",
        "lib_na9": "Défense",
        "description": "- l’administration et la supervision des activités de défense nationale et des forces armées terrestres, navales, aériennes et spatiales telles que: • unités combattantes des forces terrestres, navales et aériennes • génie, transport, transmissions, renseignement, matériel, personnel et autres services non combattants • forces de réserve et forces auxiliaires de la défense nationale • logistique militaire (fourniture de matériel, d’ouvrages, d’approvisionnements, etc.) • soins médicaux pour le personnel militaire en campagne - l’administration, le fonctionnement et le soutien des forces de défense civile - la préparation aux situations d’urgence et l’organisation d’exercices auxquels participent les institutions et les populations civiles - la gestion des politiques de R & D relatives à la défense, avec les fonds qui y sont associés "
    },
    {
        "cls_na9": "84.23",
        "lib_na9": "Justice",
        "description": "- l’administration et le fonctionnement des tribunaux administratifs, civils et correctionnels, des cours d’assises, des tribunaux militaires et du système judiciaire, y compris la représentation et le conseil juridiques fournis au nom de l’administration ou par l’administration, en espèces ou sous forme de services - le rendu de jugements et d’interprétations de la loi - l’arbitrage des actions civiles - l’administration des établissements pénitentiaires, y compris les services d’assistance aux détenus en vue de faciliter leur réinsertion, que cette gestion et exploitation soient assurées par des organismes publics ou par des organisations privées pour le compte de cette dernière "
    },
    {
        "cls_na9": "84.24",
        "lib_na9": "Activités d’ordre public et de sécurité",
        "description": "- l’administration et le fonctionnement des forces de police régulières et des forces auxiliaires financées par les pouvoirs publics ainsi que de la police des ports, de la police des frontières, des garde-côtes et des autres forces de police spécialisées, notamment dans la surveillance de la circulation, l’enregistrement des étrangers et la tenue des fichiers des personnes arrêtées - la fourniture à la population d’articles de première nécessité en cas de catastrophe survenant en temps de paix    "
    },
    {
        "cls_na9": "84.25",
        "lib_na9": "Services de protection civile",
        "description": "- la lutte contre les incendies et la prévention des incendies: • administration et fonctionnement des corps réguliers et des corps auxiliaires de pompiers chargés de la lutte contre les incendies, de la prévention des incendies, du sauvetage des personnes et des animaux, de l’assistance en cas de catastrophe naturelle, d’inondations, d’accidents de la circulation, etc. "
    },
    {
        "cls_na9": "84.30",
        "lib_na9": "Sécurité sociale obligatoire",
        "description": "- le financement et l’administration des régimes de sécurité sociale mis en place par l’administration • assurance maladie, accident et chômage • pensions de retraite • régimes couvrant les pertes de revenus en cas de maternité, invalidité temporaire, veuvage, etc. "
    },
    {
        "cls_na9": "85.10",
        "lib_na9": "Enseignement pré-primaire",
        "description": "- l’enseignement pré-scolaire (enseignement antérieur au premier degré). L'éducation pré-primaire est définie comme la première étape de l'instruction organisée et vise essentiellement à préparer les très jeunes enfants à un environnement scolaire, c'est-à-dire à ménager une transition entre la maison et l'école. "
    },
    {
        "cls_na9": "85.20",
        "lib_na9": "Enseignement primaire",
        "description": "enseignement de base solide en lecture, écriture et mathématiques et une compréhension élémentaire d’autres matières telles que l’histoire, la géographie, les sciences naturelles, les sciences sociales, l’art et la musique. Cet enseignement est généralement dispensé à des enfants, les programmes d’alphabétisation au sein ou en dehors du système scolaire, dont le contenu est comparable aux programmes de l’enseignement primaire, mais qui sont destinés à des personnes considérées comme trop âgées pour entrer dans des écoles élémentaires, y sont toutefois également inclus (programmes d’alphabétisation pour adultes, par exemple). "
    },
    {
        "cls_na9": "85.31",
        "lib_na9": "Enseignement secondaire (collège - 1er cycle)",
        "description": "- le premier cycle de l’enseignement secondaire général, correspondant plus ou moins à la période couverte par l’obligation scolaire "
    },
    {
        "cls_na9": "85.32",
        "lib_na9": "Enseignement secondaire (lycée - 2ème cycle)",
        "description": "- le deuxième cycle de l’enseignement secondaire général, donnant, en principe, accès à l’enseignement supérieur "
    },
    {
        "cls_na9": "85.33",
        "lib_na9": "Enseignement secondaire technique ou professionnel",
        "description": "connaissances de base théoriques et des qualifications pratiques axées sur un emploi existant ou futur. La formation peut avoir pour objet de préparer l’élève à un large éventail d’emplois dans un secteur déterminé ou à un emploi bien précis. - l’enseignement technique et professionnel au-dessous du niveau de l’enseignement supérieur tel qu’il est défini dans le groupe 85.4 - la formation des guides touristiques - la formation des chefs cuisiniers, hôteliers et restaurateurs - les écoles d’esthétique et de coiffure - la formation à la réparation informatique - les écoles de conduite pour chauffeurs professionnels de camions, autobus, autocars, etc., et les écoles de conduite destinées à des pilotes professionnels. "
    },
    {
        "cls_na9": "85.41",
        "lib_na9": "Enseignement post-secondaire non supérieur",
        "description": "supérieur. Il s’agit, par exemple, de cours d’enseignement post-secondaire supplémentaires destinés à préparer les élèves à l’enseignement supérieur ou à l’enseignement post-secondaire non supérieur professionnel. "
    },
    {
        "cls_na9": "85.42",
        "lib_na9": "Enseignement supérieur",
        "description": "- les premier, deuxième et troisième cycles de l’enseignement supérieur - les écoles d’arts du spectacle vivant dispensant un enseignement supérieur 85.5 Autres activités d'enseignement    Ce groupe comprend la formation continue générale et professionnelle, à des fins professionnelles, de loisirs ou de développement personnel. Il comprend les camps et les écoles proposant à des groupes ou à des individuels des cours de disciplines athlétiques, de langues étrangères, d’arts, de théâtre, de musique ou d’autres cours ou formations spécialisés non comparables à l’enseignement relevant des groupes 85.1 à 85.4. Il ne comprend pas les activités d’enseignement définies dans les groupes 85.1 à 85.4, c'est-à-dire enseignement préscolaire, enseignement primaire, enseignement secondaire et enseignement supérieur.  235     "
    },
    {
        "cls_na9": "85.51",
        "lib_na9": "Enseignement de disciplines sportives et d'activités de loisirs",
        "description": "ou des écoles. Les écoles de formation sportive de jour et celles offrant un hébergement sont également incluses. Cette classe ne comprend pas la formation sportive donnée dans les écoles et universités. La formation peut être dispensée dans diverses structures telles que les installations de formation de l’unité ou du client, des établissements d’enseignement ou par d’autres moyens. La formation relevant de cette classe est formellement organisée. - la formation sportive (base-ball, basket-ball, cricket, football, etc.) - les camps offrant une formation sportive - les cours de gymnastique - les cours d’équitation donnés dans des académies ou écoles - les cours de natation - les instructeurs de sports, professeurs et entraîneurs professionnels - les cours d’arts martiaux - les cours de jeux de cartes (comme le bridge) - les cours de yoga "
    },
    {
        "cls_na9": "85.52",
        "lib_na9": "Enseignement culturel",
        "description": "être appelées \"écoles\", \"ateliers\", \"classes\", etc. Elles offrent des cours formellement organisés, principalement à des fins récréatives, de loisirs ou de développement personnel, mais ces cours ne débouchent pas sur un diplôme professionnel. - les professeurs de piano et les autres cours de musique - les cours d’art - les cours et ateliers de danse - les écoles de théâtre (à l’exclusion des établissements universitaires) - les écoles de beaux-arts (à l’exclusion des établissements universitaires) - les écoles d’arts du spectacle vivant (à l’exclusion des établissements universitaires) - les écoles de photographies (à l’exclusion des établissements commerciaux) "
    },
    {
        "cls_na9": "85.53",
        "lib_na9": "Enseignement de la conduite",
        "description": "- les écoles de vol, voile, navigation ne délivrant pas de certificats ou de permis commerciaux    "
    },
    {
        "cls_na9": "85.59",
        "lib_na9": "Enseignements divers",
        "description": "- les activités éducatives ne pouvant pas être classées par niveau - le tutorat universitaire - les centres de formation offrant des cours de rattrapage - les cours de révision en vue d’examens professionnels - les cours de langues et de compétences conversationnelles - la formation informatique - l’instruction religieuse - la formation des maîtres nageurs - la formation à la survie - la formation à l’art oratoire - la formation à la lecture rapide "
    },
    {
        "cls_na9": "85.60",
        "lib_na9": "Activités de soutien à l'enseignement",
        "description": "- les activités non pédagogiques de soutien aux processus ou systèmes éducatifs: • le conseil dans le domaine éducatif • les activités de conseil en orientation scolaire • les activités d’évaluation des tests de connaissances • les activités de tests de connaissances • l’organisation de programmes d’échanges d’étudiants "
    },
    {
        "cls_na9": "86.10",
        "lib_na9": "Activités hospitalières",
        "description": "- les activités des établissements hospitaliers de court ou long séjour, c’est-à-dire les activités médicales de diagnostic et de soins des hôpitaux généraux (hôpitaux locaux et régionaux, hôpitaux des associations sans but lucratif, hôpitaux universitaires, militaires ou pénitentiaires) et des hôpitaux spécialisés (hôpitaux psychiatriques et de désintoxication, hôpitaux traitant des maladies infectieuses, maternités, sanatoriums spécialisés). Ces activités concernent principalement des patients hospitalisés, sont exercées sous la surveillance directe de médecins et comprennent: • les services du personnel médical et paramédical • les services des laboratoires et installations techniques, y compris les services de radiologie et d’anesthésie, • les services d’urgences • les services des salles d’opération, les services de pharmacie, de restauration et les autres services hospitaliers • les services des centres de planning familial assurant des actes médicaux tels que la stérilisation ou l’interruption de grossesse, avec hébergement "
    },
    {
        "cls_na9": "86.21",
        "lib_na9": "Activité des médecins généralistes",
        "description": "- les consultations données et les soins dispensés dans le domaine de la médecine générale par les médecins généralistes "
    },
    {
        "cls_na9": "86.22",
        "lib_na9": "Activité des médecins spécialistes",
        "description": "- les consultations données et les soins dispensés dans le domaine de la médecine spécialisée par les médecins spécialistes et les chirurgiens - les services des centres de planning familial assurant des actes médicaux tels que la stérilisation ou l’interruption de grossesse, sans hébergement "
    },
    {
        "cls_na9": "86.23",
        "lib_na9": "Pratique dentaire",
        "description": "- les activités de pratique dentaire de nature générale ou spécialisée (dentisterie, endodontique et dentisterie pédiatrique, pathologie orale) - les activités d’orthodontie - les activités de pratique dentaire en salles d’opération "
    },
    {
        "cls_na9": "86.91",
        "lib_na9": "Laboratoires d'analyses médicales",
        "description": "- les activités des laboratoires d'analyses médicales (sang, urine, etc.) - les services des laboratoires de radiologie et autres centres d’imagerie diagnostique (sans interprétation) "
    },
    {
        "cls_na9": "86.92",
        "lib_na9": "Ambulances",
        "description": "- le transport par ambulance de patients par tout mode de transport, y compris l'avion. Ces services sont souvent fournis à l'occasion d'une urgence médicale. - les activités des ambulances de réanimation "
    },
    {
        "cls_na9": "86.93",
        "lib_na9": "Activités des auxiliaires médicaux",
        "description": "- les activités exercés individuellement ou en groupe par les inférmiers, sages femme, kinésithérapeute, physiothérapeutes, orthophoniste, audioprothésiste, orthoptiste, et des autres praticiens travaillant dans les domaines de l’optométrie, de l’hydrothérapie, des massages médicaux, de la praxithérapie, de la Pédicurie-Podologie, de l’homéopathie, de la chiropraxie, etc. - les activités de psychothérapeutes et de psychanaliste - les activités du personnel paramédical dans le domaine des soins dentaires, tels que les hygiénistes dentaires "
    },
    {
        "cls_na9": "86.99",
        "lib_na9": "Autres activités pour la santé humaine",
        "description": "- les activités pour la santé humaine non répertoriées dans les classes précédentes, éventuellement exercées hors d'un cadre réglementé (acupuncteur, chiropracteurs, guérisseurs, rebouteux, etc.) les activités des banques de sang, des banques de sperme, des banques d'organes aux fins de transplantation, etc. - les lactariums Cette classe ne comprend pas : - la transformation du sang, voir 21.10 et la fabrication de sérums thérapeutiques et autres constituants du sang, voir 21.20  87 Hébergement médico-social et social Cette division comprend les soins résidentiels associés à des services infirmiers, des services de surveillance ou des soins divers aux malades. Les installations représentent une part importante du processus de production et les soins dispensés combinent des services médicaux et sociaux, le volet médical se composant dans une large mesure de soins infirmiers. 87.1 Hébergement médicalisé "
    },
    {
        "cls_na9": "87.10",
        "lib_na9": "Hébergement médicalisé",
        "description": "- les activités des: • résidences pour personnes âgées dispensant des soins infirmiers • maisons de convalescence • maisons de repos dispensant des soins infirmiers • établissements de soins infirmiers • maisons de soins "
    },
    {
        "cls_na9": "87.20",
        "lib_na9": "Hébergement social pour personnes handicapées mentales, malades mentales et toxicomanes",
        "description": "souffrant d’une déficience mentale, d’une maladie mentale, d’alcoolisme ou de toxicomanie. Les établissements concernés procurent hébergement, nourriture, surveillance, conseil, ainsi que certains soins de santé. - les activités des: • établissements pour alcooliques et toxicomanes • maisons de convalescence psychiatrique • foyers résidentiels de groupe pour les personnes présentant des troubles affectifs • établissements pour déficients mentaux • foyers de transition spécialisés en santé mentale - les soins résidentiels et le traitement prodigués aux patients souffrant d’une maladie mentale, d’alcoolisme ou de toxicomanie. "
    },
    {
        "cls_na9": "87.30",
        "lib_na9": "Hébergement social pour personnes âgées ou handicapées physiques",
        "description": "sont incapables de s’occuper d’elles-mêmes et/ou qui ne désirent plus vivre de manière autonome. Les soins comprennent généralement l’hébergement, la nourriture, la surveillance et l’aide dans les activités quotidiennes de la vie, telles que les travaux domestiques. Dans certains cas, ces établissements procurent des services infirmiers professionnels aux résidents dans des installations distinctes. - les activités des: • installations d’aide à la vie autonome • centres d’hébergement de soins de longue durée • résidences pour personnes âgées dispensant des soins infirmiers minimaux • maisons de repos ne dispensant pas de soins infirmiers "
    },
    {
        "cls_na9": "87.90",
        "lib_na9": "Autres activités d'hébergement social",
        "description": "âgées et handicapées, qui sont incapables de s’occuper d’elles-mêmes ou qui ne désirent plus vivre de manière autonome. - les activités exercées 24 heures sur 24 et visant à fournir une assistance sociale aux enfants et à des catégories particulières de personnes dont l’autonomie est limitée, sans toutefois que les soins médicaux, l’enseignement ou la formation jouent un rôle prédominant: • orphelinats • foyers et résidences pour enfants • foyers d’accueil temporaire pour sans-abri • établissements s’occupant des mères célibataires et de leurs enfants Ces activités peuvent être effectuées par des services publics ou des organismes privés. - les activités des: • maisons de transition pour personnes ayant des problèmes sociaux ou personnels • maisons de transition pour délinquants • établissements correctionnels pour jeunes  241    "
    },
    {
        "cls_na9": "88.10",
        "lib_na9": "Action sociale sans hébergement pour personnes âgées et pour personnes handicapées",
        "description": "- les services sociaux, de consultation, de protection sociale, d’orientation et autres services similaires destinés aux personnes âgées et handicapées à leur domicile ou dans d’autres lieux. Ces services peuvent être fournis par des services publics ou par des organismes privés, des organisations d’entraide nationales ou locales ou des spécialistes proposant des services de consultation: • visites aux personnes âgées et handicapées • activités des centres de jour pour personnes âgées ou pour adultes handicapés • réadaptation professionnelle et réinsertion des handicapés, à condition que ces activités ne comportent qu’un élément pédagogique limité "
    },
    {
        "cls_na9": "88.91",
        "lib_na9": "Action sociale sans hébergement pour jeunes enfants",
        "description": "- les activités des garderies périscolaires, y compris les activités de garderies d’enfants handicapés "
    },
    {
        "cls_na9": "88.99",
        "lib_na9": "Autre action sociale sans hébergement n.c.a.",
        "description": "- les services sociaux, de consultation, de protection sociale, d’orientation et d’aide aux réfugiés et autres services similaires apportés aux individus et aux familles à leur domicile ou dans d’autres lieux. Ces services peuvent être fournis par des services publics ou par des organismes privés, des organisations d’aide aux victimes de catastrophes, des organisations d’entraide nationales ou locales ou des spécialistes proposant des services de consultation: • protection sociale et conseil d’orientation pour enfants et adolescents • activités d’adoption et de protection des enfants et d’autres personnes contre les mauvais traitements • conseils d’économie domestique, consultations conjugales et familiales, services de conseil en matière de crédit à la consommation et d’endettement • activités au niveau des collectivités et des quartiers • aide aux victimes de catastrophes, aux réfugiés, aux immigrés, etc., y compris l’hébergement transitoire offert à ces personnes • réadaptation professionnelle et réinsertion des chômeurs, à condition que ces activités ne comportent qu’un élément pédagogique limité • détermination des droits à l’aide sociale, aux allocations de logement ou à des bons d’alimentation • centres de jour pour les sans-abri et les autres groupes sociaux démunis • activités de bienfaisance telles que la collecte de fonds ou d’autres activités apparentées relevant des œuvres sociales "
    },
    {
        "cls_na9": "90.01",
        "lib_na9": "Arts du spectacle vivant",
        "description": "- la production de spectacles, de productions théâtrales, de concerts, de spectacles d’opéra, de spectacles de danse et d’autres productions analogues: • activités de groupes, de cirques ou de compagnies, d’orchestres ou d’autres formations • activités exercées par des artistes indépendants tels que des acteurs, danseurs, musiciens, conteurs ou conférenciers "
    },
    {
        "cls_na9": "90.02",
        "lib_na9": "Activités de soutien au spectacle vivant",
        "description": "- les activités de soutien au spectacle vivant pour la production de spectacles, de productions théâtrales, de concerts, de spectacles d’opéra, de spectacles de danse et d’autres productions analogues: • activités des metteurs en scène, producteurs, concepteurs et réalisateurs de décors, préposés au changement de décors, ingénieurs lumière, etc. - les activités de producteurs ou d’organisateurs de spectacles vivants, disposant ou non de leurs propres installations "
    },
    {
        "cls_na9": "90.03",
        "lib_na9": "Création artistique",
        "description": "- les activités exercées par des artistes indépendants tels que des sculpteurs, peintres, dessinateurs-caricaturistes, graveurs au burin, aquafortistes, etc. - les activités des écrivains indépendants, pour tous les sujets, y compris la fiction, les ouvrages techniques, etc. - les activités des journalistes indépendants - la restauration d’œuvres d’art telles que les peintures, etc. "
    },
    {
        "cls_na9": "90.04",
        "lib_na9": "Gestion de salles de spectacles",
        "description": "- l’exploitation de salles de concert et de théâtre et d’autres salles de spectacles "
    },
    {
        "cls_na9": "91.01",
        "lib_na9": "Gestion des bibliothèques et des archives",
        "description": "- les activités de documentation et d’information des bibliothèques de tous types, salles de lecture, auditoriums, médiathèques et archives publiques qui fournissent des services au public en général ou à une catégorie particulière d’utilisateurs, par exemple les étudiants, les scientifiques, le personnel d’une entreprise, les membres d’une association, ainsi que la gestion des archives des administrations: • gestion de collections d’ouvrages spécialisés ou non • catalogage des collections • prêt et stockage de livres, de cartes, de périodiques, de films, de disques, de cassettes, d’œuvres d’art, etc. • activités de recherche visant à répondre aux demandes d’information, etc. - bibliothèques et services d’archives photographiques et cinématographiques "
    },
    {
        "cls_na9": "91.02",
        "lib_na9": "Gestion des musées",
        "description": "- la gestion des musées de toute nature: • musées d’art, d’orfèvrerie, de meubles, de costumes, de céramiques, d’argenterie • musées d’histoire naturelle, musées des sciences et techniques, musées d’histoire, y compris les musées militaires • autres musées spécialisés • musées en plein air "
    },
    {
        "cls_na9": "91.03",
        "lib_na9": "Gestion des sites et monuments historiques et des attractions touristiques similaires",
        "description": "- la gestion et la préservation des sites et bâtiments historiques "
    },
    {
        "cls_na9": "91.04",
        "lib_na9": "Gestion des jardins botaniques et zoologiques et des réserves naturelles",
        "description": "- la gestion des jardins botaniques et zoologiques, y compris les zoos pour enfants - la gestion des réserves naturelles, y compris la protection de la flore et de la faune, etc. "
    },
    {
        "cls_na9": "92.00",
        "lib_na9": "Organisation de jeux de hasard et d'argent",
        "description": "- la vente de billets de loterie - l’exploitation de jeux fonctionnant au moyen de pièces de monnaie - l’exploitation de sites web de jeux de hasard virtuels - la prise de paris et autres opérations de pari - les paris mutuels hors hippodrome - l’exploitation de casinos, y compris de \"casinos flottants\"  93 Activités sportives, récréatives et de loisirs Cette division comprend les activités sportives, récréatives et de loisirs (à l’exclusion des activités des musées, de la préservation des sites et monuments historiques, des jardins botaniques et zoologiques, des activités des réserves naturelles et de l’organisation de jeux de hasard et d’argent). Ne sont pas compris dans cette division les arts dramatiques, la musique et les autres arts et divertissements tels que la production de spectacles, de productions théâtrales, de concerts, de spectacles d’opéra, de spectacles de danse et d’autres productions analogues, voir division 90. 93.1 Activités liées au sport Ce groupe comprend l’exploitation d’installations sportives, les activités des équipes ou clubs sportifs participant principalement à des manifestations sportives devant un public payant, les activités des athlètes indépendants participants à des courses ou manifestations sportives devant un public payant, l’activité des propriétaires de voitures, chiens, chevaux, etc., de course consistant principalement à engager ceux-ci dans des courses ou d’autres manifestations de sports-spectacles, les activités des entraîneurs sportifs fournissant des services spécialisés de soutien aux participants de manifestations ou compétitions sportives, les activités des exploitants de stades et les autres activités d’organisation, de promotion ou de gestion de manifestations sportives n.c.a. "
    },
    {
        "cls_na9": "93.11",
        "lib_na9": "Gestion d'installations sportives",
        "description": "- l’exploitation d’installations destinées à accueillir des manifestations sportives, couvertes ou non couvertes, avec ou sans tribunes ou enceintes réservées aux spectateurs: • stade de football, hockey, cricket, rugby • pistes de courses pour voitures, chiens, chevaux • piscines et stades • stades d’athlétisme • terrains et stades pour les sports d’hiver • stades de hockey sur glace • salles de boxe • terrains de golf • bowlings - l’organisation et la gestion d’activités sportives en salle ou en plein air pour des professionnels ou des amateurs par des organisations disposant de leurs propres installations à leurs membres la possibilité de pratiquer des activités sportives.    "
    },
    {
        "cls_na9": "93.12",
        "lib_na9": "Activités de clubs de sports",
        "description": "- l’exploitation des clubs de sports: • clubs de football • clubs de bowling • clubs de natation • clubs de golf • clubs de boxe • clubs de sports d’hiver • clubs d’échecs • clubs d’athlétisme • clubs de tir, etc. "
    },
    {
        "cls_na9": "93.13",
        "lib_na9": "Activités des centres de culture physique",
        "description": "- les clubs et centres de culture physique et de musculation "
    },
    {
        "cls_na9": "93.19",
        "lib_na9": "Autres activités liées au sport",
        "description": "- les activités des producteurs ou promoteurs d’événements sportifs, disposant ou non de leurs propres installations - les activités des sportifs professionnels, des arbitres, des juges, des chronométreurs, etc. - les activités des ligues sportives et organismes de réglementation - les activités liées à la promotion de manifestations sportives - les activités des écuries de chevaux de course, des chenils de lévriers de course et des écuries de voitures de course - l’exploitation de réserves pour la pêche et la chasse sportive - les activités des guides de montagne - les activités de soutien à la pêche et à la chasse sportives ou récréatives "
    },
    {
        "cls_na9": "93.21",
        "lib_na9": "Activités des parcs d'attractions et parcs à thèmes",
        "description": "attractions, telles que les manèges mécaniques, ballades aquatiques, jeux, spectacles, expositions thématiques et aires de pique-nique.  246 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "93.29",
        "lib_na9": "Autres activités récréatives et de loisirs",
        "description": "classées ailleurs: - l’exploitation de machines à sous automatiques - les activités des parcs de loisirs (sans hébergement) - l’exploitation d’installations de transport de plaisance (marinas) - l’exploitation des domaines skiables - la location d’équipements de loisirs et d’agrément dans le cadre d’installations récréatives - les foires et salons de nature récréative - les activités des plages, y compris la location de matériels tels que les cabines de bain, vestiaires, sièges, etc. - l’exploitation de pistes de danse ou manifestations sportives, disposant ou non de leurs propres installations. "
    },
    {
        "cls_na9": "94.11",
        "lib_na9": "Activités des organisations patronales et consulaires",
        "description": "- les activités des organisations dont les membres ont pour intérêt essentiel le développement et la prospérité des entreprises relevant d’une certaine activité ou profession, y compris l’agriculture, ou la croissance économique et la vie d’une région géographique ou d’une subdivision politique déterminée, indépendamment du genre d’activité - les activités des fédérations d’associations de ce type - les activités des chambres de commerce, des corporations et d’autres organisations similaires - la diffusion d’informations, la représentation auprès des organismes publics, les relations publiques et les négociations collectives des organisations patronales et consulaires "
    },
    {
        "cls_na9": "94.12",
        "lib_na9": "Activités des organisations professionnelles",
        "description": "- les activités des organisations dont les membres s’intéressent principalement à une discipline, à une profession ou à un domaine technique particulier, telles que les associations de médecins, de juristes, de comptables, d’ingénieurs, d’architectes, etc. - les activités des associations de spécialistes qui exercent des activités à caractère scientifique, intellectuel ou culturel, telles que les associations d’écrivains, de peintres, d’artistes, de journalistes, etc. - la diffusion d’informations, l’élaboration de normes déontologiques et le contrôle de leur respect, la représentation auprès des organismes publics et les relations publiques des organisations professionnelles - les activités des sociétés savantes "
    },
    {
        "cls_na9": "94.20",
        "lib_na9": "Activités des syndicats de salariés",
        "description": "- la promotion des intérêts des salariés organisés en syndicats - les activités des associations dont les membres sont des salariés ayant pour objectif essentiel de faire connaître leurs vues sur les conditions salariales et les conditions de travail et de s’organiser en vue d’une action concertée - les activités des syndicats de salariés d’une entreprise, des fédérations et confédérations syndicales organisées selon des critères professionnels, régionaux, structurels ou autres "
    },
    {
        "cls_na9": "94.91",
        "lib_na9": "Activités des organisations religieuses",
        "description": "- les activités des organisations religieuses ou des particuliers fournissant des services directement aux fidèles dans les églises, mosquées, temples, synagogues ou dans d’autres lieux - les activités des monastères, des couvents et des institutions similaires - les activités de retraite religieuse - les services religieux liés aux funérailles "
    },
    {
        "cls_na9": "94.92",
        "lib_na9": "Activités des organisations politiques",
        "description": "- les activités des organisations politiques et des organisations auxiliaires comme les groupements de jeunes associés à un parti politique. Ces activités visent principalement à faire accéder des membres ou des sympathisants d’un parti à des postes politiques de manière à influer sur les décisions des pouvoirs publics et peuvent comprendre la diffusion d’informations, les relations publiques, la collecte de fonds, etc. "
    },
    {
        "cls_na9": "94.99",
        "lib_na9": "Activités des organisations associatives n.c.a.",
        "description": "- les activités des organisations (non affiliées directement à un parti politique) qui militent en faveur d’une cause ou d’une question d’intérêt public en sensibilisant l’opinion publique, en faisant pression sur les milieux politiques, en collectant des fonds, etc.: • initiatives individuelles ou mouvements de protestation • mouvements pour la protection de l’environnement et mouvements écologiques • organisations apportant leur soutien à des activités communautaires et éducatives n.c.a. • organisations pour la protection et la défense des intérêts de groupes spéciaux, par exemple de minorités ou de groupes ethniques • associations à caractère patriotique, y compris les associations d’anciens combattants - les associations de consommateurs - les associations d’automobilistes - les associations dont l’objet consiste à organiser des réunions et des rencontres, par exemple le Rotary, les loges maçonniques, etc. - les associations de jeunes, les associations d’étudiants, les clubs universitaires, les amicales d’étudiants, etc. - les associations spécialisées dans des occupations culturelles ou récréatives (autres que les clubs sportifs et les cercles de jeux), par exemple les cercles de poésie, les cercles littéraires, les associations historiques, les clubs de jardinage, les ciné-clubs et les photos-clubs, les clubs d’amis de la musique et des arts, les clubs de travaux manuels, les clubs de collectionneurs, les clubs sociaux, les sociétés carnavalesques, etc. - l’octroi de subventions par des organisations associatives ou autres "
    },
    {
        "cls_na9": "95.11",
        "lib_na9": "Réparation d'ordinateurs et d'équipements périphériques",
        "description": "informatiques, ainsi que les équipements périphériques. - ordinateurs de bureau - ordinateurs portables - lecteurs de disques magnétiques, lecteurs flash et autres systèmes de stockage - lecteurs de disques optiques (CD-RW, CD-ROM, DVD-ROM, DVD-RW) - imprimantes - moniteurs - claviers - souris, manettes et boules roulantes et leurs accessoires - modems informatiques internes et externes - terminaux informatiques spécialisés - serveurs informatiques - scanneurs, y compris lecteurs de codes-barres - lecteurs de cartes à puce - casques de réalité virtuelle - vidéoprojecteurs - terminaux informatiques, comme les guichets automatiques de banque (GAB), les terminaux point de vente, sans mécanisme - ordinateurs de poche (assistants personnels) "
    },
    {
        "cls_na9": "95.12",
        "lib_na9": "Réparation d'équipements de communication",
        "description": "- les téléphones sans fil - les téléphones portables - les modems, équipement porteur - les télécopieurs - les équipements de transmission des communications (routeurs, ponts, modems) - les appareils radio émetteur-récepteur - les caméras vidéo et TV destinées à un usage commercial    95.2 Réparation de biens personnels et domestiques Ce groupe comprend la réparation et l’entretien de biens personnels et domestiques.  250 I n st i t u t N a t i o nal d e la S ta tis tiq u e    "
    },
    {
        "cls_na9": "95.21",
        "lib_na9": "Réparation de produits électroniques grand public",
        "description": "- la réparation de produits électroniques grand public: • télévisions, récepteurs radio • magnétoscopes • lecteurs de CD • caméscopes destinés à un usage domestique "
    },
    {
        "cls_na9": "95.22",
        "lib_na9": "Réparation d'appareils électroménagers et d'équipements pour la maison et le jardin",
        "description": "jardin: - la réparation et l’entretien des appareils ménagers • réfrigérateurs, poêles, lave-linge, sèche-linge, matériel de conditionnement d’air, etc. - la réparation et l’entretien d’équipements pour la maison et le jardin • tondeuses à gazon, coupe-bordures, souffleurs à neige et à feuilles, ébrancheurs, etc. "
    },
    {
        "cls_na9": "95.23",
        "lib_na9": "Réparation de chaussures et d'articles en cuir",
        "description": "- la réparation de chaussures, de bagages et d’articles similaires - la pose de talons "
    },
    {
        "cls_na9": "95.24",
        "lib_na9": "Réparation de meubles et d'équipements du foyer",
        "description": "- le rembourrage, la remise à neuf, la réparation et la restauration de meubles et d’équipements du foyer, y compris de meubles de bureau "
    },
    {
        "cls_na9": "95.25",
        "lib_na9": "Réparation d'articles d'horlogerie et de bijouterie",
        "description": "- la réparation de montres, horloges et de leurs éléments, tels que boîtiers de montres et cages et cabinets d’horlogerie en tous types de matériaux, mouvements, chronomètres, etc. - la réparation de bijoux "
    },
    {
        "cls_na9": "95.29",
        "lib_na9": "Réparation d'autres biens personnels et domestiques",
        "description": "- la réparation de cycles - la réparation et la transformation d’articles d’habillement - la réparation d’articles de sport (à l’exclusion des fusils pour le tir sportif) et de matériel de camping - la réparation de livres - la réparation d’instruments de musique (à l’exclusion des orgues et instruments de musique historiques) - la réparation de jouets et articles similaires - la réparation d’autres articles personnels et domestiques - l’accordage de pianos    "
    },
    {
        "cls_na9": "96.01",
        "lib_na9": "Blanchisserie teinturerie",
        "description": "- le blanchissage, le nettoyage à sec, le repassage, etc., de tous les articles d’habillement (y compris les fourrures) et de matières textiles, effectués mécaniquement, manuellement ou dans les laveries automatiques pour le compte de particuliers ou d’entreprises - le ramassage et la livraison du linge - le nettoyage des tapis, des moquettes, des tentures et des rideaux, dans les locaux des clients ou non - la fourniture, par les blanchisseries, de linge, de vêtements de travail et d’articles similaires - les services de fourniture de couches-culottes "
    },
    {
        "cls_na9": "96.02",
        "lib_na9": "Coiffure et soins de beauté",
        "description": "- le lavage, la coupe, la mise en plis, la teinture, la coloration, l’ondulation, le défrisage de cheveux et les services analogues pour hommes et femmes - le rasage et la taille de la barbe - les massages faciaux, les soins de manucure et de pédicure, le maquillage, etc. "
    },
    {
        "cls_na9": "96.03",
        "lib_na9": "Services funéraires",
        "description": "- l’inhumation et l’incinération des corps (êtres humains ou animaux) et les activités connexes: • préparation des corps pour la sépulture ou l’incinération, embaumement et services fournis par les entreprises de pompes funèbres • services d’inhumation et d’incinération • location de locaux aménagés dans les funérariums - la location ou la vente de concessions - l’entretien de tombes et de mausolées "
    },
    {
        "cls_na9": "96.04",
        "lib_na9": "Activités thermales et de thalassothérapie",
        "description": ""
    },
    {
        "cls_na9": "96.05",
        "lib_na9": "Bains et autres soins corporels",
        "description": "- les activités lieés au bien être et au confort physique telles que celles fournies par les bains, douches, hammams, saunas, solariums, instituts de massage et de relaxation, etc. "
    },
    {
        "cls_na9": "96.09",
        "lib_na9": "Autres services personnels n.c.a.",
        "description": "- les activités des astrologues et des spirites - les activités liées à la vie sociale, par exemple les activités des hôtesses, des agences de rencontres et des agences matrimoniales - les services pour animaux de compagnie: hébergement, soins et dressage - les services de recherche généalogique - les activités des studios de tatouage et de perçage corporel - les services des cireurs, des porteurs, des préposés au parcage des véhicules, etc. - l’exploitation de machines de services personnels fonctionnant avec des pièces de monnaie (photomatons, pèsepersonnes, appareils de mesure de la tension artérielle, consignes à pièces, etc.) "
    },
    {
        "cls_na9": "97.00",
        "lib_na9": "Activités des ménages en tant qu'employeurs de personnel domestique",
        "description": "serveurs, valets de chambre, maîtres d’hôtel, blanchisseuses, jardiniers, portiers, palefreniers, chauffeurs, concierges, gouvernantes, gardiennes d’enfants à domicile (baby-sitters), précepteurs, secrétaires, etc. Elle permet aux domestiques salariés d’indiquer l’activité de l’employeur lors des recensements ou enquêtes, bien que l’employeur soit un particulier. Le service produit par cette activité est consommé par le ménage employeur. "
    },
    {
        "cls_na9": "98.10",
        "lib_na9": "Activités indifférenciées des ménages en tant que producteurs de biens pour usage propre",
        "description": "activités comprennent la chasse et la cueillette, la culture et l’élevage, la fabrication d’abris et de vêtements et d’autres biens produits par le ménage pour assurer sa propre subsistance. Si les ménages produisent également des biens destinés à la vente, ils sont classés dans la branche de production de biens correspondante de la NAT. S’ils sont principalement engagés dans une activité de subsistance spécifique de production de biens, ils sont classés dans la branche de production de biens correspondante de la NAT. 98.2 Activités indifférenciées des ménages en tant que producteurs de services pour usage propre "
    },
    {
        "cls_na9": "98.20",
        "lib_na9": "Activités indifférenciées des ménages en tant que producteurs de services pour usage propre",
        "description": "propre usage. Ces activités comprennent la cuisine, l’enseignement, les soins aux membres du ménage et les autres services produits par le ménage pour assurer sa propre subsistance.    Si les ménages produisent également des biens multiples destinés à leur propre utilisation, ils sont classés dans les activités indifférenciées des ménages en tant que producteurs de biens pour usage propre.  254 I n st i t u t N a t i o nal d e la S ta tis tiq u e   SECTION U ACTIVITÉS EXTRA TERRITORIALES 99 Activités des organisations et organismes extraterritoriaux 99.0 Activités des organisations et organismes extraterritoriaux "
    },
    {
        "cls_na9": "99.00",
        "lib_na9": "Activités des organisations et organismes extraterritoriaux",
        "description": "- les activités des organisations internationales telles que l’Organisation des Nations unies, ses institutions spécialisées, ses organismes régionaux, etc., le Fonds monétaire international, la Banque mondiale, l’Organisation mondiale des douanes, l’Organisation de coopération et de développement économiques, l’Organisation des pays exportateurs de pétrole, les Communautés européennes, l’Association européenne de libre-échange, l'Union du Maghreb Arabe, etc. - les activités des missions diplomatiques et consulaires lorsqu’elles sont recensées par le pays d’implantation plutôt que par le pays qu’elles représentent.   255    "
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
