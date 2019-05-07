  function scanBarcode() {
    window.plugins.barcodeScanner.scan(function(result){
     alert("We got a barcode\n" +
      "Result: " + result.text + "\n" +
      "Format: " + result.format + "\n" +
      "Cancelled: " + result.cancelled);

      // verificação de codigos para exibição dos dados
      if(result.text == 280720550){
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
      }else if(result.text == 989895555){
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
      }else if(result.text == 85236987){
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
      }else if(result.text == 85369877444){
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
      }else{
        $('p[id=descUm]').text('Código não registrado!');
      }

    }, function(error) {
    alert("Scanning failed: " + error);
    }
   );
  }
