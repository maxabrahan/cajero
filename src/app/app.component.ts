import { Component, } from '@angular/core';




@Component({
  selector: 'app-root',
  standalone: true,
 // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
  title = 'cajero';
    monto:number=1000000;
   public billetes: number[] = [10000, 20000, 50000, 100000];
 public contadorBilletes: number[] = [0, 0, 0, 0];
  public acarreo: number[] = [0, 0, 0, 0];

  
  
   calcularBilletes() {
    while (this.monto > 10000 && this.monto <= 1000000) {
      for (let i = 0; i < 4; i++) {
        if (this.monto < this.billetes[i]) {
          this.acarreo[i]++;
        }
        
      }
      

      for (let j = 0; j < 4; j++) {
        for (let k = j; k < 4; k++) {
          if (this.monto >= this.billetes[k]) {
            this.monto -= this.billetes[k];
            this.contadorBilletes[k]++;

          }

          
          if (this.monto == 0) {
            break;
          }
         

          if (j == 3 && this.monto - this.billetes[k] != 0) {
            j = -1;
            this.acarreo[k] = 1;
          }

          if (this.acarreo[3] == 0) {
            this.acarreo = [1, 1, 1, 1];
          }

         
          
        }
     
      }
      
    }
    
    
    
    
      
  }



 
  
  
 
  

}


