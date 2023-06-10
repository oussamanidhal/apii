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
      name: 'Le Kef',
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
      name: 'Beja',
      group : 'Deuxième Groupe',
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
      name: 'Gabes',
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
      group : 'Deuxième Groupe',
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
      group : 'Deuxième Groupe',
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
      group : 'Deuxième Groupe',
      delegations: [
        {name: 'Sidi El Hani', group: 'Premier Groupe'}
      ]
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
