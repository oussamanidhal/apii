import { Component, ViewEncapsulation, ViewChild } from '@angular/core'; // add ViewChild import
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.css'],
})


export class EstimatorComponent {

    @ViewChild(MatTooltip) tooltip!: MatTooltip;


    showTooltipBriefly() {
        this.tooltip.show();
        setTimeout(() => {
            this.tooltip.hide();
        }, 10000);
    }
  

    
    

  governorates = [
    { 
      name: 'Jendouba', 
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Jendouba', group : 'Deuxième Groupe'},
        {name : 'Jendouba Nord', group : 'Deuxième Groupe'},
        {name : 'Bou Salem', group : 'Deuxième Groupe'}, 
        {name : 'Tabarka', group : 'Deuxième Groupe'}, 
        {name : 'Ain Draham', group : 'Deuxième Groupe'}, 
        {name : 'Fernana', group : 'Deuxième Groupe'}, 
        {name : 'Ghardimaou', group : 'Deuxième Groupe'},
        {name : 'Oued Meliz', group : 'Deuxième Groupe'}, 
        {name : 'Balta Bou Aouane', group : 'Deuxième Groupe'}]  
  },
    { 
      name: 'Kasserine', 
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Kasserine Nord', group : 'Deuxième Groupe'}, 
        {name : 'Kasserine Sud', group : 'Deuxième Groupe'}, 
        {name : 'Ezzouhour', group : 'Deuxième Groupe'}, 
        {name : 'Hassi El Frid', group : 'Deuxième Groupe'}, 
        {name : 'Sbeitla', group : 'Deuxième Groupe'}, 
        {name : 'Sbiba', group : 'Deuxième Groupe'}, 
        {name : 'Djedeliane', group : 'Deuxième Groupe'}, 
        {name : 'El Ayoun', group : 'Deuxième Groupe'}, 
        {name : 'Thala', group : 'Deuxième Groupe'}, 
        {name : 'Hidra', group : 'Deuxième Groupe'}, 
        {name : 'Foossana', group : 'Deuxième Groupe'}, 
        {name : 'Feriana', group : 'Deuxième Groupe'}, 
        {name : 'Mejel Bel Abbes', group : 'Deuxième Groupe'}] 
    },
    { 
      name: 'Kairouan', 
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Kairouan Nord', group : 'Deuxième Groupe'}, 
        {name : 'Kairouan Sud', group : 'Deuxième Groupe'}, 
        {name : 'Echbika', group : 'Deuxième Groupe'}, 
        {name : 'Sbikha', group : 'Deuxième Groupe'}, 
        {name : 'Haffouz', group : 'Deuxième Groupe'}, 
        {name : 'Hajeb El Ayoun', group : 'Deuxième Groupe'}, 
        {name : 'Nasrallah', group : 'Deuxième Groupe'}, 
        {name : 'Echrarda', group : 'Deuxième Groupe'}, 
        {name : 'Bouhajla', group : 'Deuxième Groupe'}, 
        {name : 'El Oueslatia', group : 'Deuxième Groupe'}, 
        {name : 'El Alai', group : 'Deuxième Groupe'}, 
        {name : 'Ain Jloula', group : 'Deuxième Groupe'}, 
        {name : 'Menzel Mhiri', group : 'Deuxième Groupe'}] 
    },
    { 
      name: 'Siliana', 
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Bou Arada', group : 'Deuxième Groupe'}, 
        {name : 'Gaafour', group : 'Deuxième Groupe'}, 
        {name : 'El Krib', group : 'Deuxième Groupe'}, 
        {name : 'El Aroussa', group : 'Deuxième Groupe'}, 
        {name : 'Siliana Nord', group : 'Deuxième Groupe'}, 
        {name : 'Siliana Sud', group : 'Deuxième Groupe'}, 
        {name : 'Bou Rouis', group : 'Deuxième Groupe'}, 
        {name : 'Bargou', group : 'Deuxième Groupe'}, 
        {name : 'Makthar', group : 'Deuxième Groupe'}, 
        {name : 'El Rouhia', group : 'Deuxième Groupe'}, 
        {name : 'Kesra', group : 'Deuxième Groupe'}] 
    },
    {
      name: 'Sidi Bouzid',
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Sidi Bouzid Ouest', group : 'Deuxième Groupe'}, 
        {name : 'Sidi Bouzid Est', group : 'Deuxième Groupe'}, 
        {name : 'Mezzouna', group : 'Deuxième Groupe'}, 
        {name : 'Regueb', group : 'Deuxième Groupe'}, 
        {name : 'Ouled Haffouz', group : 'Deuxième Groupe'}, 
        {name : 'Bir El Hafey', group : 'Deuxième Groupe'}, 
        {name : 'Sidi Ali Ben Aoun', group : 'Deuxième Groupe'}, 
        {name : 'Menzel Bouzaienne', group : 'Deuxième Groupe'}, 
        {name : 'Jilma', group : 'Deuxième Groupe'}, 
        {name : 'Cebbala Ouled Asker', group : 'Deuxième Groupe'}, 
        {name : 'Meknassy', group : 'Deuxième Groupe'}, 
        {name : 'Souk Jedid', group : 'Deuxième Groupe'}, 
        {name : 'Essaida', group : 'Deuxième Groupe'}]
    },
    {
      name: 'Kef',
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Kef Ouest', group : 'Deuxième Groupe'}, 
        {name : 'Kef Est', group : 'Deuxième Groupe'}, 
        {name : 'Nebeur', group : 'Deuxième Groupe'}, 
        {name : 'Sakiet Sidi Youssef', group : 'Deuxième Groupe'}, 
        {name : 'Tajerouine', group : 'Deuxième Groupe'}, 
        {name : 'Kalâat Senan', group : 'Deuxième Groupe'}, 
        {name : 'Kalâat Khasba', group : 'Deuxième Groupe'}, 
        {name : 'Djerissa', group : 'Deuxième Groupe'}, 
        {name : 'El Ksour', group : 'Deuxième Groupe'}, 
        {name : 'Dahmani', group : 'Deuxième Groupe'}, 
        {name : 'Sers', group : 'Deuxième Groupe'}, 
        {name : 'Touiref', group : 'Deuxième Groupe'}]
    },
    {
        name: 'Nabeul',
        group : 'none',
        delegations: [{name : '' , group : 'none'}]
    },
    {
        name: 'Tunis',
        group : 'none',
        delegations: [{name : '' , group : 'none'}]
    },
    {
        name: 'Monastir',
        group : 'none',
        delegations: [{name : '' , group : 'none'}]
    },
    {
      name: 'Tataouine',
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Tataouine Nord', group : 'Deuxième Groupe'}, 
        {name : 'Tataouine Sud', group : 'Deuxième Groupe'}, 
        {name : 'Bir Lahmar', group : 'Deuxième Groupe'}, 
        {name : 'Smar', group : 'Deuxième Groupe'}, 
        {name : 'Ghomrassen', group : 'Deuxième Groupe'}, 
        {name : 'Dhehiba', group : 'Deuxième Groupe'}, 
        {name : 'Remada', group : 'Deuxième Groupe'}]
    },
    {
      name: 'Béja',
      group : 'mixed',
      delegations: [
        {name : 'Medjez El Bab', group : 'Premier Groupe'}, 
        {name : 'Beja Nord', group : 'Deuxième Groupe'}, 
        {name : 'Beja Sud', group : 'Deuxième Groupe'}, 
        {name : 'Teboursouk', group : 'Deuxième Groupe'}, 
        {name : 'Tibar', group : 'Deuxième Groupe'}, 
        {name : 'Testour', group : 'Deuxième Groupe'}, 
        {name : 'Goubellat', group : 'Deuxième Groupe'}, 
        {name : 'Nefza', group : 'Deuxième Groupe'}, 
        {name : 'Amdoun', group : 'Deuxième Groupe'}]
    },
    {
        name: 'Ben Arous',
        group : 'none',
        delegations: [{name : '' , group : 'none'}]
      },
    {
      name: 'Gafsa',
      group : 'Deuxième Groupe',
      delegations: [
        {name : 'Gafsa Nord', group : 'Deuxième Groupe'}, 
        {name : 'Gafsa Sud', group : 'Deuxième Groupe'}, 
        {name : 'Sidi Aich', group : 'Deuxième Groupe'}, 
        {name : 'El Ksar', group : 'Deuxième Groupe'}, 
        {name : 'Oum El Araïes', group : 'Deuxième Groupe'}, 
        {name : 'Redeyef', group : 'Deuxième Groupe'}, 
        {name : 'Metlaoui', group : 'Deuxième Groupe'}, 
        {name : 'Mdhila', group : 'Deuxième Groupe'}, 
        {name : 'El Guetar', group : 'Deuxième Groupe'}, 
        {name : 'Belkhir', group : 'Deuxième Groupe'}, 
        {name : 'Sned', group : 'Deuxième Groupe'}, 
        {name : 'Sidi Boubaker', group : 'Deuxième Groupe'}, 
        {name : 'Zanouch', group : 'Deuxième Groupe'}]
    },
    {
      name: 'Medenine',
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Medenine Sud', group: 'Deuxième Groupe'}, 
        {name: 'Medenine Nord', group: 'Deuxième Groupe'}, 
        {name: 'Ben Guerdane', group: 'Deuxième Groupe'}, 
        {name: 'Sidi Makhlouf', group: 'Deuxième Groupe'}, 
        {name: 'Beni Khedeche', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Mahdia', 
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Chorbane', group: 'Deuxième Groupe'}, 
        {name: 'Essouassi', group: 'Deuxième Groupe'}, 
        {name: 'Hebira', group: 'Deuxième Groupe'}, 
        {name: 'Ouled Chamekh', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Gabès',
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Mareth', group: 'Deuxième Groupe'}, 
        {name: 'El Hammma', group: 'Deuxième Groupe'}, 
        {name: 'Menzel El Habib', group: 'Deuxième Groupe'}, 
        {name: 'Nouvelle Matmata', group: 'Deuxième Groupe'}, 
        {name: 'Matmata', group: 'Deuxième Groupe'}, 
        {name: 'Dekhilet Toujane', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Kebili',
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Kebili Sud', group: 'Deuxième Groupe'}, 
        {name: 'Kebili Nord', group: 'Deuxième Groupe'}, 
        {name: 'Souk El Ahad', group: 'Deuxième Groupe'}, 
        {name: 'Douz Nord', group: 'Deuxième Groupe'}, 
        {name: 'Douz Sud', group: 'Deuxième Groupe'}, 
        {name: 'El Faouar', group: 'Deuxième Groupe'}, 
        {name: 'Rejim Maatoug', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Zaghouan',
      group : 'mixed',
      delegations: [
        {name: 'Zaghouan', group: 'Premier Groupe'}, 
        {name: 'Bir Mchergua', group: 'Premier Groupe'}, 
        {name: 'Zriba', group: 'Premier Groupe'}, 
        {name: 'El Fahs', group: 'Deuxième Groupe'}, 
        {name: 'Saouaf', group: 'Deuxième Groupe'}, 
        {name: 'El Nadhour', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Tozeur',
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Tozeur', group: 'Deuxième Groupe'}, 
        {name: 'Degach', group: 'Deuxième Groupe'}, 
        {name: 'Tamaghza', group: 'Deuxième Groupe'}, 
        {name: 'Nefta', group: 'Deuxième Groupe'}, 
        {name: 'Hezoua', group: 'Deuxième Groupe'}, 
        {name: 'Hammamet El Jerid', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Bizerte',
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Djoumine', group: 'Deuxième Groupe'}, 
        {name: 'Ghezala', group: 'Deuxième Groupe'}, 
        {name: 'Sejnane', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Sfax',
      group : 'mixed groupe',
      delegations: [
        {name: 'Agareb', group: 'Premier Groupe'}, 
        {name: 'Djebeniana', group: 'Premier Groupe'}, 
        {name: 'El Amra', group: 'Premier Groupe'}, 
        {name: 'El Hencha', group: 'Premier Groupe'}, 
        {name: 'El Ghraiba', group: 'Premier Groupe'}, 
        {name: 'Skhira', group: 'Premier Groupe'}, 
        {name: 'Bir Ali Ben Khélifa', group: 'Premier Groupe'}, 
        {name: 'Menzel Chaker', group: 'Premier Groupe'}, 
        {name: 'Kerkennah', group: 'Deuxième Groupe'}
      ]
    },
    {
      name: 'Sousse',
      group : 'Premier Groupe',
      delegations: [
        {name: 'Sidi El Hani', group: 'Premier Groupe'}
      ]
    }
    ];

    emptyGovernorate = {
        name: '',
        group : 'none',
        delegations: [{name : '' , group : 'none'}]
    };
    
  selectedGovernorate = this.emptyGovernorate;
  
  selectedDelegation = this.selectedGovernorate.delegations[0];



  amount: number = 1000;
  percent: string = '30%';

  totalInvestment: number = 0;
  totalFinancement: number = 0;
  totalCash : number = 0;
  
  // Add each of the fields as properties
  terrain: number = 0;
  genieCivil: number = 0;
  amenagement : number = 0;
  equipmentsImportes: number = 0;
  equipmentsLocaux: number = 0;
  materielDeTransport: number = 0;
  fraisAipprocheVevers : number = 0;
  fondsRoulement: number = 0;

  // ...rest of the fields...
  socialCapital: number = 0;
  fondsPropres: number = 0;

  percentage: number = 0;
  plafond : number = 0;
  incentive: number = 0;
  regionalPlafond  : number = 0;





  onInputChange(event: any, field: string) {
    const input = event.target;
    const inputValue = input.value;
  
    // Remove any non-numeric characters from the input value
    const numericValue = inputValue.replace(/[^0-9]/g, '');
  
    // Update the input field value with the numeric value
    input.value = numericValue;
  
    // Update the corresponding variable in the component
    // if (field === 'terrain') {
    //   this.terrain = numericValue;
    // } else if (field === 'genieCivil') {
    //   this.genieCivil = numericValue;
    // } else if (field === 'amenagement') {
    //   this.amenagement = numericValue;
    // } else if (field === 'equipmentsImportes') {
    //   this.equipmentsImportes = numericValue;
    // } else if (field === 'equipmentsLocaux') {
    //   this.equipmentsLocaux = numericValue;
    // } else if (field === 'materielDeTransport') {
    //   this.materielDeTransport = numericValue;
    // } else if (field === 'fraisAipprocheVevers') {
    //   this.fraisAipprocheVevers = numericValue;
    // } else if (field === 'fondsRoulement') {
    //   this.fondsRoulement = numericValue;
    // }
  
    // Add similar conditions for other fields
  }
  
  


  
  calculateTotal() {
    this.totalInvestment = this.terrain + this.genieCivil + this.amenagement + this.equipmentsImportes + this.equipmentsLocaux + this.materielDeTransport + this.fraisAipprocheVevers + this.fondsRoulement;
    this.totalFinancement = this.socialCapital + this.fondsPropres;
    this.totalCash = this.totalInvestment + 0;


    // 15 + 15
    if (this.selectedDelegation.group == 'Premier Groupe' && this.selectedActivity.sec_pri == -1) {
      this.plafond = 1000000;
      this.percentage = 0.3;
      if(this.selectedActivity.ndv_rgn == -1) {
        this.percentage = this.percentage - 0.15;
      }
    }

    // 30 + 15 = 33.3333
    if(this.selectedDelegation.group == 'Deuxième Groupe' && this.selectedActivity.sec_pri == -1) {
      this.plafond = 5000000;
      this.percentage = 0.33333;
      if(this.selectedActivity.ndv_rgn == -1) {
        this.percentage = 0.15;
      }
    }

    // 15 + 0
    if(this.selectedDelegation.group == 'Premier Groupe' && this.selectedActivity.sec_pri == 0) {
      this.plafond = 1500000;
      this.percentage = 0.15;
      if(this.selectedActivity.ndv_rgn == -1) {
        this.percentage = this.percentage - 0.15;
      }
    }

    // 30 + 0
    if(this.selectedDelegation.group == 'Deuxième Groupe' && this.selectedActivity.sec_pri == 0) {
     this.plafond = 3000000;
     this.percentage = 0.3;
     if(this.selectedActivity.ndv_rgn == -1) {
        this.percentage = this.percentage - 0.3;
      }
    }
    // 0 + 15
    if(this.selectedGovernorate.group == 'none' && this.selectedActivity.sec_pri == -1) {
        this.plafond = 1500000;
        this.percentage = 0.15;

       }

    // 0 + 0
    if(this.selectedGovernorate.group == 'none' && this.selectedActivity.sec_pri == 0) {
        this.plafond = 1000000;
        this.percentage = 0;
       }




       this.incentive = Number((this.totalCash * this.percentage).toFixed(3));

       if(this.incentive > this.plafond) {
        this.incentive = this.plafond;
       }
   


  }


  // Current selected governorate's name
selectedGovernorateName: string =  '';


selectGovernorate(governorate: any) {
    if (!governorate) {
      console.error(`Governorate not found!`);
      return;
    }
    this.selectedGovernorate = governorate;
    this.selectedGovernorateName = governorate.name;
    this.selectedDelegation = this.selectedGovernorate.delegations[0]; // reset delegation when governorate changes
  }
  
  selectDelegation(delegation: any) {
    if (!delegation) {
      console.error(`Delegation not found!`);
      return;
    }
    this.selectedDelegation = delegation;
  }

getFillColor(name: string) {
    if (this.selectedGovernorateName !== name || !this.selectedGovernorate) {
        return; // Not selected or governorate not found, don't change color
    }

    switch(this.selectedGovernorate.group) {
        case 'Premier Groupe':
            return '#FFB859';
        case 'Deuxième Groupe':
            return '#2DCD7A';
        case 'none':
            return '#FF5959';
        default:
            return '#5E17EB'; // mixed
    }
}



getTooltipText(): string {
    if (!this.selectedActivity) {
        return '';
    }
    
    const isSecPrioritaire = this.selectedActivity.sec_pri === -1 ? 'secteur prioritaire' : 'Non secteur prioritaire';
    const isEligible = this.selectedActivity.ndv_rgn === -1 ? 'Non Eligible au développement régionale' : 'Eligible au développement régionale';

    return `Cette activité est :  ${isSecPrioritaire} ET ${isEligible}`;

}
  

//... existing code...

getRegionalPercentage(): number {
    // Assuming this method is only for the display purposes and 
    // calculation logic remains in the `calculateTotal()` method.
    if (this.selectedDelegation.group == 'Premier Groupe') {
        if(this.selectedActivity.ndv_rgn == -1){
            return 0; // As given in your description
        }
      return 15; // 15% represented as 15
    } else if (this.selectedDelegation.group == 'Deuxième Groupe') {
        if(this.selectedActivity.ndv_rgn == -1){
            return 0; // As given in your description
        }
      return 30; // 30% represented as 30
    }
    return 0; // default
  }
  
  getRegionalBonus(): number {
    let calculatedBonus = this.totalCash * (this.getRegionalPercentage() / 100);

    // Setting the plafond based on the regional percentage
    this.regionalPlafond = 0;
    if (this.getRegionalPercentage() === 15) {
        this.regionalPlafond = 1.5 * 1e6;  // 1.5 million
    } else if (this.getRegionalPercentage() === 30) {
        this.regionalPlafond = 3 * 1e6;    // 3 million
    }

    // Return the lesser of the calculatedBonus and plafond
    return Math.min(calculatedBonus, this.regionalPlafond);
}

getSecteurBonus(): number {
    if (this.selectedActivity.sec_pri == -1) {
        const calculatedBonus = this.totalCash * 0.15;

        // Setting the plafond for the secteur bonus
        const plafond = 1 * 1e6;  // 1 million

        // Return the lesser of the calculatedBonus and plafond
        return Math.min(calculatedBonus, plafond);
    } else {
        return 0;
    }
}
  
  //... remaining code...
  

  

  calculate() {
    // Your calculation logic goes here...

    console.log(this.selectedGovernorate);
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
].filter(activity => activity.cod_api === -1);

selectedActivity = this.activities[0];


selectActivity(activity: any) {
    if (!activity) {
      console.error(`Activity not found!`);
      return;
    }
    this.selectedActivity = activity;
    this.calculateTotal(); // recalculate totals after changing the selected activity
    this.showTooltipBriefly();
  }
  
  
  

searchValue: string = '';
filteredActivities: any[] = this.activities;

filterActivities() {
    this.filteredActivities = this.activities.filter(activity =>
        activity.lib_na9.toLowerCase().includes(this.searchValue.toLowerCase())
    );
    this.showTooltipBriefly();
    this.selectedActivity = this.filteredActivities[0];
}


}


