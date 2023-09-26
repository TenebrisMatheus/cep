/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cep: string = '';
  mostrarEsqueceuCEP: boolean = false;
  estado: string = '';
  cidade: string = '';
  parteRua: string = '';
  dadosCEP: any = null;
  dadosE: any = null;

  constructor(private http: HttpClient,  private toastController: ToastController) {}

  buscarCEP() {
    if (this.cep.length === 8) {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;

      this.http.get(url).subscribe((data: any) => {
        this.dadosCEP = data;
      });
    }
  }

  esqueceuCEP() {
    this.mostrarEsqueceuCEP = true;
    this.estado = '';
    this.cidade = '';
    this.parteRua = '';
    this.dadosE = null; 
  }

  async mostrarAviso(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
    });
    toast.present();
  }

  buscarEndereco() {
    if (this.estado && this.cidade && this.parteRua) {
      const url = `https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.parteRua}/json/`;

      this.http.get(url).subscribe((data: any) => {
        this.dadosE = data;
        this.mostrarEsqueceuCEP = false;
      });
    } else {
      this.mostrarAviso('Por favor, preencha todos os campos.');
    }
  }
}
*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cep: string = '';
  mostrarEsqueceuCEP: boolean = false;
  estado: string = '';
  cidade: string = '';
  parteRua: string = '';
  dadosCEP: any = null;
  dadosE: any = null;

  constructor(private http: HttpClient, private toastController: ToastController) {}

  buscarCEP() {
    if (this.cep.length === 8) {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;

      this.http.get(url).subscribe((data: any) => {
        this.dadosCEP = data;
      });
    }
  }

  esqueceuCEP() {
    this.mostrarEsqueceuCEP = true;
    this.estado = '';
    this.cidade = '';
    this.parteRua = '';
  }

  async mostrarAviso(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000, // Duração do aviso em milissegundos
    });
    toast.present();
  }

  buscarEndereco() {
    if (this.estado && this.cidade && this.parteRua) {
      // Certifique-se de que a URL para buscar o endereço esteja correta
      const url = `https://viacep.com.br/ws/${this.estado}/${this.cidade}/${this.parteRua}/json/`;

      this.http.get(url).subscribe(
        (data: any) => {
          this.dadosE = data;
          // Certifique-se de que os dados são retornados corretamente
          console.log(data);
        },
        (error) => {
          // Verifique se há erros no console
          console.error(error);
        }
      );
    } else {
      this.mostrarAviso('Por favor, preencha todos os campos.');
    }
  }
}
