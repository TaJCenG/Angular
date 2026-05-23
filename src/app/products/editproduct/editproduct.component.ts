import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {


   //server?: {id: number, name: string, status: string};
   product:any={};
   productName = '';
   productStatus = '';
   allowEdit = false;
 
   constructor(private prdService: ProductService,
    private router: Router, 
    private route: ActivatedRoute
   ) { }
 
   ngOnInit() {
    const id = +this.route.snapshot.params['id'];
     this.product = this.prdService.getProduct(id);
     this.productName = this.product.name;
     this.productStatus = this.product.status;
      this.route.queryParams.subscribe(params => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });
   }
 
   onUpdateProduct() {
     this.prdService.updateProduct(this.product.id, {name: this.productName, status: this.productStatus});
   }

}
