class Canal {
    constructor(id, tipo, destinatario) {
      this.id = id;
      this.tipo = tipo;
      this.destinatario = destinatario;
    }
  }
  
  class Mensagem {
    constructor(tipo, mensagem, dataEnvio) {
      this.tipo = tipo;
      this.mensagem = mensagem;
      this.dataEnvio = dataEnvio;
    }
  }
  
  class EnviarMensagem {
    static enviar(canal, mensagem) {
      switch (canal.tipo) {
        case 'whatsapp':
        case 'telegram':
          return this.enviarWhatsAppOuTelegram(canal, mensagem);
        case 'facebook':
        case 'instagram':
          return this.enviarFacebookOuInstagram(canal, mensagem);
      }
    }
  
    static enviarWhatsAppOuTelegram(canal, mensagem) {
      // Envia a mensagem via WhatsApp ou Telegram
  
      return new Promise((resolve, reject) => {
        // Envia a mensagem para o destinatário
  
        resolve();
      });
    }
  
    static enviarFacebookOuInstagram(canal, mensagem) {
      // Envia a mensagem via Facebook ou Instagram
  
      return new Promise((resolve, reject) => {
        // Envia a mensagem para o destinatário
  
        resolve();
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Obtém os campos do formulário
  
    const canal = document.getElementById('canal').value;
    const mensagem = document.getElementById('mensagem').value;
    const tipo = document.getElementById('tipo').value;
  
    // Verifica o tipo da mensagem
  
    if (tipo === 'arquivo') {
      // Mostra o campo para o arquivo
  
      document.getElementById('arquivo-container').style.display = 'block';
    } else {
      // Esconde o campo para o arquivo
  
      document.getElementById('arquivo-container').style.display = 'none';
    }
  
    // Envia a mensagem
  
    const mensagemObjeto = new Mensagem(tipo, mensagem, new Date());
    const canalObjeto = new Canal(null, canal, null);
  
    EnviarMensagem.enviar(canalObjeto, mensagemObjeto).then(() => {
      alert('Mensagem enviada com sucesso!');
    }, () => {
      alert('Ocorreu um erro ao enviar a mensagem.');
    });
  });
  