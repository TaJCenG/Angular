import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  product:any={};

  constructor(private prdService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.product = this.prdService.getProduct(id);

    this.route.params.subscribe(
      (params:Params) => {
        this.product = this.prdService.getProduct(+params['id']);
      }
    )

    // this.route.queryParams.subscribe(params => {
    //   if (params['allowEdit'] == '1') {
    //     this.product.status = 'online';
    //   } else {
    //     this.product.status = 'offline';
    //   }
    // });

  }
   onEdit(){
      this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    };
}
