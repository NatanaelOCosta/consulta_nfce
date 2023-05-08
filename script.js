// URL DOS SITES DE CONSULTA NFCE
const links = {
'11': "https://www.nfce.sefin.ro.gov.br/home.jsp",
'12': "http://sefaznet.ac.gov.br/nfce/consulta.xhtml",
'13': "http://www.sefaz.am.gov.br/nfce/formConsulta.do",
'14': "https://portalapp.sefaz.rr.gov.br/nfce/consulta",
'15': "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
'16': "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
'17': "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
'21': "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp;jsessionid=yFJRNmI6g7iM18LxrO1Y634bCUyUTBdY96O14DrD.sefaz-app-p01?dswid=-7600",
'22': "https://www.sefaz.pi.gov.br/nfce/consulta/",
'23': "http://nfce.sefaz.ce.gov.br/pages/consultaNota.jsf",
'24': "https://nfce.set.rn.gov.br/portalDFE/NFCe/ConsultaNFCe.aspx",
'25': "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
'26': "https://nfce.sefaz.pe.gov.br/nfce/consulta",
'27': "https://nfce.sefaz.al.gov.br/consultanfce.htm",
'28': "http://www.nfce.se.gov.br/portal/portalNoticias.jsp",
'29': "http://nfe.sefaz.ba.gov.br/servicos/nfce/Modulos/Geral/NFCEC_consulta_chave_acesso.aspx",
'31': "https://portalsped.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
'32': "https://app.sefaz.es.gov.br/ConsultaNFCe",
'33': "http://www4.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
'35': "https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaPublica.aspx",
'41': "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
'42': "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFe.aspx",
'43': "https://www.sefaz.rs.gov.br/NFCE/NFCE-COM.aspx",
'50': "https://www.dfe.ms.gov.br/nfce/consulta/",
'51': "https://www.sefaz.mt.gov.br/nfce/consultanfce",
'52': "http://nfe.sefaz.go.gov.br/nfeweb/sites/nfe/consulta-completa"
};

// UFs E SEUS NOMES
const ufs = {
'11': 'Rondônia - RO',
'12': 'Acre - AC',
'13': 'Amazonas - AM',
'14': 'Roraima - RR',
'15': 'Pará - PA',
'16': 'Amapá - AP',
'17': 'Tocantins - TO',
'21': 'Maranhão - MA',
'22': 'Piauí - PI',
'23': 'Ceará - CE',
'24': 'Rio Grande do Norte - RN',
'25': 'Paraíba - PB',
'26': 'Pernambuco - PE',
'27': 'Alagoas - AL',
'28': 'Sergipe - SE',
'29': 'Bahia - BA',
'31': 'Minas Gerais - MG',
'32': 'Espírito Santo - ES',
'33': 'Rio de Janeiro - RJ',
'35': 'São Paulo - SP',
'41': 'Paraná - PR',
'42': 'Santa Catarina - SC',
'43': 'Rio Grande do Sul - RS',
'50': 'Mato Grosso do Sul - MS',
'51': 'Mato Grosso - MT',
'52': 'Goiás - GO'
};

function limparCampos() {
  document.getElementById('uf-origem').innerHTML = '';
  const estadoSelect = document.getElementById('estado');
  estadoSelect.value = '';
  const linksDiv = document.getElementById('links');
  linksDiv.innerHTML = '';
}

document.getElementById('chave-acesso').addEventListener('change', selecionarLink);
document.getElementById('chave-acesso').addEventListener('input', function() {
  if (!this.value) {
    limparCampos();
  }
});

//ATUALIZA O VALOR DE ESTADO AUTOMATICAMENTE DE ACORDO COM O VALOR RETORNADO NA VERIFICAÇÃO DA CHAVE
function selecionarLink() {
  const chave_acesso = document.getElementById("chave-acesso").value;
  if (!chave_acesso) {
    limparCampos();
    return;
  }

  const uf_origem = chave_acesso.slice(0, 2);

  if (ufs.hasOwnProperty(uf_origem)) {
    const uf_origem_nome = ufs[uf_origem];
    document.getElementById('uf-origem').innerHTML = 'UF de origem: ' + uf_origem + ' ' + uf_origem_nome;
    const link = links[uf_origem];
    if (link) {
      const estadoSelect = document.getElementById('estado');
      estadoSelect.value = uf_origem;
      linksDiv.innerHTML = `<a href="${link}" target="_blank">Clique aqui para consultar a NFC-e</a>`;
    } else {
      linksDiv.innerHTML = '';
    }
  } else {
    document.getElementById('uf-origem').innerHTML = 'UF de origem não encontrada.';
    linksDiv.innerHTML = '';
  }
}

// CRIA O BOTAO DE ACORDO COM A UF SELECIONADA
const estadoSelect = document.getElementById('estado');
const linksDiv = document.getElementById('links');

estadoSelect.addEventListener('change', (event) => {
  const estado = event.target.value;
  const link = links[estado];

  if (link) {
    linksDiv.innerHTML = `<a href="${link}" target="_blank">Clique aqui para consultar a NFC-e</a>`;
  } else {
    linksDiv.innerHTML = '';
  }
});