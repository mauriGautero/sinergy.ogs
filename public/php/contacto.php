<?php
if(isset($_POST['enviar'])){
    if(!empty($_POST['nombre']) && !empty($_POST['empresa'] && !empty($_POST['telefono'])) && !empty($_POST['email']) && !empty($_POST['mensaje'])){
        
        $nombre=$_POST['nombre'];
        $empresa=$_POST['empresa'];
        $telefono=$_POST['telefono'];
        $email=$_POST['email'];
        $mensaje=$_POST['mensaje'];
        $header="From: noreply@example.com"."\r\n";
        $header="Reply-To: mauri.gautero@gmail.com"."\r\n";
        $header="X-Mailer: PHP/".phpversion();
        $mail=mail($email,$nombre,$mensaje, $header);
        fi($mail){
            echo" <h4> mail enviado </4>";
        }

    }

}