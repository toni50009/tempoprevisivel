
# 🌤️ Tempo Previsível

Este projeto é um **aplicativo web responsivo** que permite consultar a previsão do tempo em **tempo real**, utilizando o nome de qualquer cidade do mundo.

O aplicativo possui uma interface limpa, moderna, responsiva (mobile-first) e implementa um sistema de **autocomplete inteligente** para facilitar a busca das cidades, tanto via teclado quanto mouse.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**
- **CSS3 (Mobile-First, Responsivo, Sem Bootstrap)**
- **JavaScript (Vanilla JS)**

---

## 🔗 APIs Utilizadas

O projeto faz uso de **duas APIs diferentes** da OpenWeather para fornecer as funcionalidades:

### 1️⃣ **Geocoding API – OpenWeather**
- 🔍 **Função:** Busca cidades conforme o usuário digita no campo de pesquisa (**autocomplete**).
- 🔗 [Documentação da API Geocoding](https://openweathermap.org/api/geocoding-api)
- **Exemplo de Endpoint:**
```
https://api.openweathermap.org/geo/1.0/direct?q={CIDADE}&limit=5&appid={API_KEY}
```

---

### 2️⃣ **Current Weather Data API – OpenWeather**
- ☁️ **Função:** Retorna os dados climáticos atuais da cidade escolhida, incluindo:
  - Temperatura
  - Descrição do clima
  - Condição (Sol, Nublado, Chuva, etc.)
  - País
- 🔗 [Documentação da API Current Weather](https://openweathermap.org/current)
- **Exemplo de Endpoint:**
```
https://api.openweathermap.org/data/2.5/weather?q={CIDADE}&appid={API_KEY}&units=metric&lang=pt_br
```

---

## 🎯 Funcionalidades

- ✅ Busca de cidades com **sistema de autocomplete** inteligente.
- ✅ Permite escolher cidades usando o **mouse ou teclado (Seta ↑ ↓ e Enter)**.
- ✅ Mostra:
  - Nome da cidade
  - País
  - Temperatura atual
  - Descrição do clima (ex.: céu limpo, nublado, chuva, etc.)
  - Ícone visual do clima, utilizando **Bootstrap Icons**.
- ✅ Interface 100% responsiva, feita com CSS puro, sem frameworks.
- ✅ Foco automático no campo de busca ao abrir a página.

---

## 🖥️ Layout

- ✔️ **Mobile-first** (prioriza experiência em smartphones)
- ✔️ Ajuste automático para tablets, notebooks e desktops.

---

## 📂 Estrutura do Projeto

```
📦 tempo-previsivel/
┣ 📜 index.html          → Estrutura do site
┣ 📜 style.css           → Estilo CSS responsivo
┣ 📜 main.js             → Lógica JavaScript com APIs e autocomplete
┣ 📜 README.md           → Documentação do projeto
```

---

## 🔑 Como Obter a API Key

1. Acesse [https://openweathermap.org/](https://openweathermap.org/) e crie uma conta gratuita.
2. Vá até o seu perfil → **API Keys** → **Create Key**.
3. Substitua a chave no arquivo `main.js` onde está:
```javascript
const apiKey = "SUA_API_KEY";
```

---

## 🚀 Como Rodar o Projeto Localmente

1. Faça o clone do repositório:
```bash
git clone https://github.com/seu-usuario/tempo-previsivel.git
```

2. Acesse a pasta do projeto:
```bash
cd tempo-previsivel
```

3. Abra o arquivo `index.html` no seu navegador.

---

## ✍️ Autor

Desenvolvido por **Antonio Zanon**  
🔗 [LinkedIn](https://www.linkedin.com/in/seu-link-aqui)  
🔗 [Portfólio](https://seu-link-aqui.com)  
🔗 [GitHub](https://github.com/seu-usuario)

---

## 📜 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para detalhes.

---
