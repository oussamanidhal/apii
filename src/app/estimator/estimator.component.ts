import { Component, ViewEncapsulation } from '@angular/core'; // add ViewEncapsulation import

@Component({
  selector: 'app-estimator',
  templateUrl: './estimator.component.html',
  styleUrls: ['./estimator.component.css'],
})


export class EstimatorComponent {

  governorates = [
    { 
      name: 'Jendouba', 
      delegations: ['Jendouba', 'Jendouba Nord', 'Bou Salem', 'Tabarka', 'Ain Draham', 'Fernana', 'Ghardimaou', 'Oued Meliz', 'Balta Bou Aouane'] 
    },
    { 
      name: 'Kasserine', 
      delegations: ['Kasserine Nord', 'Kasserine Sud', 'Ezzouhour', 'Hassi El Frid', 'Sbeitla', 'Sbiba', 'Djedeliane', 'El Ayoun', 'Thala', 'Hidra', 'Foossana', 'Feriana', 'Mejel Bel Abbes'] 
    },
    { 
      name: 'Kairouan', 
      delegations: ['Kairouan Nord', 'Kairouan Sud', 'Echbika', 'Sbikha', 'Haffouz', 'Hajeb El Ayoun', 'Nasrallah', 'Echrarda', 'Bouhajla', 'El Oueslatia', 'El Alai', 'Ain Jloula', 'Menzel Mhiri'] 
    },
    { 
      name: 'Siliana', 
      delegations: ['Bou Arada', 'Gaafour', 'El Krib', 'El Aroussa', 'Siliana Nord', 'Siliana Sud', 'Bou Rouis', 'Bargou', 'Makthar', 'El Rouhia', 'Kesra'] 
    },
    {
      name: 'Sidi Bouzid',
      delegations: ['Sidi Bouzid Ouest', 'Sidi Bouzid Est', 'Mezzouna', 'Regueb', 'Ouled Haffouz', 'Bir El Hafey', 'Sidi Ali Ben Aoun', 'Menzel Bouzaienne', 'Jilma', 'Cebbala Ouled Asker', 'Meknassy', 'Souk Jedid', 'Essaida']
    },
    {
      name: 'Le Kef',
      delegations: ['Kef Ouest', 'Kef Est', 'Nebeur', 'Sakiet Sidi Youssef', 'Tajerouine','Kalâat Senan', 'Kalâat Khasba', 'Djerissa', 'El Ksour', 'Dahmani', 'Sers', 'Touiref']
    },
    {
      name: 'Tataouine',
      delegations: ['Tataouine Nord', 'Tataouine Sud', 'Bir Lahmar','Smar',  'Ghomrassen', 'Dhehiba', 'Remada']
    },
    {
      name: 'Beja',
      delegations: ['Medjez El Bab', 'Beja Nord', 'Beja Sud', 'Teboursouk', 'Tibar', 'Testour', 'Goubellat', 'Nefza', 'Amdoun']
    },
    {
      name: 'Gafsa',
      delegations: ['Gafsa Nord', 'Gafsa Sud', 'Sidi Aich', 'El Ksar', 'Oum El Araïes', 'Redeyef', 'Metlaoui', 'Mdhila', 'El Guetar', 'Belkhir', 'Sned', 'Sidi Boubaker', 'Zanouch']
    },
    {
      name: 'Medenine',
      delegations: ['Medenine Sud', 'Medenine Nord', 'Ben Guerdane', 'Sidi Makhlouf', 'Beni Khedeche']
    },
    {
      name: 'Mahdia', 
      delegations: ['Chorbane', 'Essouassi', 'Hebira', 'Ouled Chamekh']
    },
    {
      name: 'Gabes',
      delegations: ['Mareth', 'El Hammma', 'Menzel El Habib', 'Nouvelle Matmata', 'Matmata', 'Dekhilet Toujane']
    },
    {
      name: 'Kebili',
      delegations: ['Kebili Sud', 'Kebili Nord', 'Souk El Ahad', 'Douz Nord', 'Douz Sud', 'El Faouar', 'Rejim Maatoug']
    },
    {
      name: 'Zaghouan',
      delegations: ['Zaghouan', 'Bir Mchergua', 'Zriba', 'El Fahs', 'Saouaf', 'El Nadhour']
    },
    {
      name: 'Tozeur',
      delegations: ['Tozeur', 'Degach', 'Tamaghza', 'Nefta', 'Hezoua', 'Hammamet El Jerid']
    },
    {
      name: 'Bizerte',
      delegations: ['Djoumine', 'Ghezala', 'Sejnane']
    },
    {
      name: 'Sfax',
      delegations: ['Agareb', 'Djebeniana', 'El Amra', 'El Hencha','El Ghraiba', 'Skhira', 'Bir Ali Ben Khélifa', 'Menzel Chaker' , 'Kerkennah']
    },
    {
      name: 'Sousse',
      delegations: ['Sidi El Hani']
    }
  ];
  selectedGovernorate = this.governorates[0];
  
  selectedDelegation = this.selectedGovernorate.delegations[0];

  amount: number = 1000;
  percent: string = '30%';

  totalInvestment: number = 0;
  totalFinancement: number = 0;
  totalCash : number = 0;
  
  // Add each of the fields as properties
  terrain: string = '0';
  genieCivil: string = '0';
  amenagement : string = '0';
  equipmentsImportes: string = '0';
  equipmentsLocaux: string = '0';
  materielDeTransport: string = '0';
  fraisAipprocheVevers : string = '0';
  fondsRoulement: string = '0';

  // ...rest of the fields...
  socialCapital: string = '0';
  fondsPropres: string = '0';
  
  calculateTotal() {
    this.totalInvestment = parseFloat(this.terrain) + parseFloat(this.genieCivil) + parseFloat(this.amenagement) + parseFloat(this.equipmentsImportes) + parseFloat(this.equipmentsLocaux) + parseFloat(this.materielDeTransport) + parseFloat(this.fraisAipprocheVevers) + parseFloat(this.fondsRoulement);
    this.totalFinancement = parseFloat(this.socialCapital) + parseFloat(this.fondsPropres);
    this.totalCash = this.totalInvestment + this.totalFinancement;
    
  }

  

  

  calculate() {
    // Your calculation logic goes here...

    console.log(this.selectedGovernorate);
  }

}
