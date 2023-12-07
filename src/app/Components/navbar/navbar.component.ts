import { Component, NgZone, OnInit,ElementRef } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductListService } from '../../product-list.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  onLinkClick(toggleButton: HTMLElement) {
    debugger
    toggleButton.click();
  }

  lang: string = "";
  count: number = 0;
  langs: string[] = ["python", "java", "angular"];
  
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm = '';
  searchText: string = '';
  brands: any = [{}];
  dictData = {
    "phone": {
      "vivo": {},
      "oppo": {}
    },
    "tv": {
      "mi": {},
      "samsung": {}
    }
  };
  ngOnInit(): void {
    // setInterval(() => {
    //   debugger;
    //   const currentLang = this.langs[this.count];
    //   const currentChar = currentLang[this.lang.length]; // Get the next character

    //   if (currentChar) {
    //     this.lang += currentChar;
    //   } else {
    //     // Reset the lang to an empty string when the entire word is processed
    //     this.lang = "";
    //     this.count = (this.count + 1) % this.langs.length;
    //   }
    // },300)
    debugger;
    //this.startChecking();
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
       // this.filteredProducts = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  constructor(private ngZone: NgZone,private productService: ProductListService){}
  skills: string[] = ['Python', 'Java', 'React'];
  currentSkill: string='';
  startChecking() {
    setInterval(() => {
      this.ngZone.run(() => {
         this.changeSkills();
      });
    }, 2000); 
  }
  changeSkills() {
    const randomIndex = Math.floor(Math.random() * this.skills.length);
    this.currentSkill = this.skills[randomIndex];
  }
  getStudentDetails() {
    console.log(this.searchText);
    if (this.searchText in this.dictData) {
      if(this.searchText == 'tv' || this.searchText=='phone')
        this.brands = Object.keys(this.dictData[this.searchText]);
      else
        this.brands = Object.keys(this.dictData['phone']);
      console.log(this.brands)
    } else {
      this.brands = [];
    }
  }
  
  onSearch(): void {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
}
