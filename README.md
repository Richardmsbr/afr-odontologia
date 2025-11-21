# AFR Odontologia Especializada

Site institucional one-page para a clinica odontologica do Dr. Alex de Freitas, cirurgiao dentista formado pela USP.

## Estrutura do Projeto

```
afr-odontologia/
├── index.html              # Pagina principal
├── css/
│   └── style.css           # Estilos principais
├── js/
│   └── main.js             # Scripts de interacao
├── assets/
│   └── images/             # Imagens do site
│       ├── logo.jpg
│       ├── dr-alex-implante.jpg
│       ├── dr-alex-paciente.jpg
│       ├── microscopio-procedimento.jpg
│       ├── atendimento-microscopio.jpg
│       └── protese-3d.jpg
└── README.md               # Este arquivo
```

## Tecnologias Utilizadas

- **HTML5** - Estrutura semantica
- **CSS3** - Estilos modernos com CSS Custom Properties (variaveis)
- **JavaScript** (Vanilla) - Interacoes e animacoes
- **Google Fonts** - Montserrat + Open Sans

## Funcionalidades

### Navegacao
- Menu responsivo com hamburger para mobile
- Menu fixo que muda de cor no scroll
- Scroll suave para ancoras internas
- Destaque automatico do link ativo

### Animacoes
- Preloader animado
- Animacoes de entrada (fade-in) ao scroll
- Parallax sutil na imagem hero
- Hover effects nos cards e botoes
- Contadores animados na secao Sobre

### Galeria
- Lightbox para visualizacao de imagens
- Overlay com efeito hover
- Fechamento por clique fora, botao X ou tecla ESC

### WhatsApp
- Botao flutuante com animacao pulse
- Tooltip no hover
- Link direto para conversa

### Acessibilidade
- HTML semantico
- Labels ARIA
- Navegacao por teclado
- Contraste adequado de cores

## Como Usar

### Visualizar Localmente

1. Navegue ate a pasta do projeto:
   ```bash
   cd /home/richard/Projects/afr-odontologia
   ```

2. Abra com um servidor local (recomendado):
   ```bash
   # Usando Python 3
   python3 -m http.server 8080

   # Usando PHP
   php -S localhost:8080

   # Usando Node.js (npx)
   npx serve
   ```

3. Acesse no navegador: `http://localhost:8080`

### Abrir Diretamente

Voce tambem pode abrir o arquivo `index.html` diretamente no navegador:
```bash
xdg-open /home/richard/Projects/afr-odontologia/index.html
# ou
firefox /home/richard/Projects/afr-odontologia/index.html
```

## Personalizacoes Necessarias

### Informacoes de Contato (index.html)

Substitua os placeholders pelos dados reais:

```html
<!-- Telefone -->
<a href="tel:+5511XXXXXXXX">(11) XXXX-XXXX</a>

<!-- WhatsApp -->
<a href="https://wa.me/5511XXXXXXXXX">(11) 9XXXX-XXXX</a>

<!-- Email -->
<a href="mailto:contato@afrodontologia.com.br">contato@afrodontologia.com.br</a>

<!-- Endereco -->
<span>Rua Exemplo, 123 - Bairro - Sao Paulo - SP</span>
```

### Google Maps (index.html)

Para ativar o mapa, substitua o placeholder na secao contato:

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque o endereco da clinica
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o codigo iframe
5. Substitua o `<div class="map-placeholder">` pelo iframe

### Redes Sociais (index.html)

Atualize os links das redes sociais:
```html
<a href="https://instagram.com/afrodontologia" class="social-link">
<a href="https://facebook.com/afrodontologia" class="social-link">
```

### Meta Tags SEO (index.html)

Atualize as meta tags para SEO:
```html
<meta property="og:url" content="https://www.afrodontologia.com.br">
```

## Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde | `#0FA968` | Cor principal (logo) |
| Azul | `#1E4B8E` | Cor secundaria (logo) |
| Branco | `#FFFFFF` | Fundos |
| Preto | `#1A1A1A` | Textos |

## Tipografia

- **Titulos**: Montserrat (300-800)
- **Corpo**: Open Sans (300-600)

## Responsividade

O site e totalmente responsivo com breakpoints em:
- Mobile: < 640px
- Tablet: 640px - 1023px
- Desktop: >= 1024px

## Performance

- Imagens com lazy loading nativo
- CSS otimizado com variaveis
- JavaScript minimo e performatico
- Fontes com preconnect

## Melhorias Futuras Sugeridas

1. **PWA**: Adicionar Service Worker para funcionamento offline
2. **Analytics**: Integrar Google Analytics 4
3. **Formulario**: Adicionar formulario de contato com backend
4. **Blog**: Secao de artigos sobre saude bucal
5. **Otimizacao de Imagens**: Converter para WebP com fallback
6. **CDN**: Hospedar assets em CDN para melhor performance

## Hospedagem Recomendada

- **Vercel**: Deploy automatico via Git
- **Netlify**: Deploy simples com formularios
- **GitHub Pages**: Gratuito para sites estaticos
- **AWS S3 + CloudFront**: Para alta escala

## Suporte

Para duvidas ou alteracoes, entre em contato.

---

Desenvolvido com carinho para AFR Odontologia Especializada.
Dr. Alex de Freitas - CRO/SP
