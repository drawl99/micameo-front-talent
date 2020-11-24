import { ModalVideoService } from './../../services/modal-video.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cameo } from 'src/app/interfaces/cameo.interface';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: [
    './modal-video.component.css',
  ]
})
export class ModalVideoComponent implements OnInit {
  isLoading = false;
  @Output() outputEmiter = new EventEmitter<boolean>();
  cameo: Cameo;
  
  uploadPercent: Observable<number>;
  urlVideo: Observable<string>;
  
  constructor(public modalService: ModalVideoService,
              private storage: AngularFireStorage,
              private orderService: OrderService,) { }

  ngOnInit(): void {
    this.cameo = {
      order: '',
      url_video: ''
    }
  }


  cerrarModal(){
    this.modalService.cerrarModal();
  }

  subirVideo(e: any) {
    const order = this.modalService.order;
    // const order = this.modalService.order;
    // console.log(order);
    // console.log(e);
    
    this.isLoading = true;
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `cameos/cameo_${id}.mp4`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => {
      this.urlVideo = ref.getDownloadURL();
      this.urlVideo.subscribe(
        (url) => {
          this.cameo.url_video = url;
          this.cameo.order = order.id.toString();
          this.orderService.crearCameo(this.cameo).subscribe(
            data => {
              this.orderService.updateOrder(order.id, 5).subscribe(
                data => {},
                error => {
                  console.log(error);
                  
                },
                () => {
                  Swal.fire({
                    title: 'ORDEN FINALIZADA',
                    text: 'Completaste la orden',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  }).then(
                    (result) => {
                      if(result.isConfirmed){
                        this.modalService.cerrarModal();
                      }
                    }
                  );
                  
                  this.outputEmiter.emit(true);
                }
              );
            },
            error => {
              console.log(error);
              
            },
            () => {
              // this.isLoading = false;
              // this.outputEmiter.emit(true);
            }
          );
        }
      );
    })).subscribe();

  }

  // cargarCameo(){
  //   console.log('entro');
    
  //   const order = this.modalService.order;
    
  // }
}
