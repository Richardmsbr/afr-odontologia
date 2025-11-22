# Deploy e Configuracao DNS - AFR Odontologia

## Informacoes do Projeto

| Item | Valor |
|------|-------|
| **Cliente** | Dr. Alex de Freitas Rodrigues |
| **Clinica** | AFR Odontologia Especializada |
| **Dominio** | www.clinicaafr.com.br |
| **Repositorio** | https://github.com/Richardmsbr/afr-odontologia |
| **GitHub Pages** | https://richardmsbr.github.io/afr-odontologia/ |
| **Data Deploy** | 21/11/2025 |

---

## URLs do Site

- **Producao:** https://www.clinicaafr.com.br
- **Alternativa:** https://clinicaafr.com.br
- **GitHub Pages:** https://richardmsbr.github.io/afr-odontologia/

---

## Configuracao DNS - Registro.br

### Dominio: clinicaafr.com.br

### Registros Tipo A (dominio raiz @)

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 3600 |
| A | @ | `185.199.109.153` | 3600 |
| A | @ | `185.199.110.153` | 3600 |
| A | @ | `185.199.111.153` | 3600 |

### Registro CNAME (www)

| Tipo | Nome | Valor | TTL |
|------|------|-------|-----|
| CNAME | www | `richardmsbr.github.io` | 3600 |

---

## Passo a Passo - Registro.br

1. Acesse: https://registro.br
2. Faca login com suas credenciais
3. Clique no dominio `clinicaafr.com.br`
4. Va em **DNS** > **Editar zona**
5. Clique em **Adicionar registro**
6. Adicione os 4 registros tipo **A** com os IPs acima
7. Adicione o registro **CNAME** para `www`
8. Clique em **Salvar**

**Tempo de propagacao:** 5 minutos a 24 horas

---

## Verificar Propagacao DNS

Apos configurar, use estes comandos para verificar:

```bash
# Verificar registros A
dig clinicaafr.com.br A +short

# Verificar CNAME
dig www.clinicaafr.com.br CNAME +short

# Verificar se resolve para GitHub
nslookup www.clinicaafr.com.br
```

Ou acesse: https://dnschecker.org/#A/clinicaafr.com.br

---

## Informacoes de Contato da Clinica

| Item | Valor |
|------|-------|
| **Telefone** | (11) 3447-3363 |
| **WhatsApp** | (11) 3447-3363 |
| **Endereco** | R. Dr. Cesar, 72 - 5o andar, Sala 51 |
| **Bairro** | Santana |
| **Cidade** | Sao Paulo - SP |
| **CEP** | 02013-004 |
| **Site Oficial** | www.clinicaafr.com.br |

---

## Estrutura do Projeto

```
afr-odontologia/
├── index.html              # Pagina principal
├── css/
│   └── style.css           # Estilos
├── js/
│   └── main.js             # JavaScript
├── assets/
│   └── images/
│       ├── logo.svg        # Logo vetorial
│       ├── logo.jpg        # Logo original
│       ├── dr-alex-*.jpg   # Fotos do Dr. Alex
│       └── ...
├── CNAME                   # Dominio customizado
├── README.md               # Documentacao
└── DEPLOY-DNS.md           # Este arquivo
```

---

## Comandos Uteis

```bash
# Clonar repositorio
git clone https://github.com/Richardmsbr/afr-odontologia.git

# Servidor local
cd afr-odontologia
python3 -m http.server 8888

# Fazer alteracoes e publicar
git add -A
git commit -m "Descricao da alteracao"
git push

# Verificar status do GitHub Pages
gh api repos/Richardmsbr/afr-odontologia/pages
```

---

## Suporte

- **Desenvolvedor:** Richard
- **GitHub:** https://github.com/Richardmsbr
- **Projeto:** https://github.com/Richardmsbr/afr-odontologia

---

*Documentacao gerada em 21/11/2025*
