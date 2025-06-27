# Netlify Environment Variables

Voor deze website zijn GEEN environment variables nodig in Netlify!

Alle configuratie is hard-coded in de broncode:

## EmailJS Configuratie
De EmailJS credentials staan in `/src/config/email.ts`:
- Service ID: service_1rruujp
- Template ID: template_rkcpzhg  
- Public Key: sjJ8kK6U9wFjY0zX9

## Deployment Instructies

1. Push code naar GitHub
2. Verbind GitHub repository met Netlify
3. Deploy zonder environment variables
4. Klaar!

## Build Settings in Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x of hoger

## Important Notes
- Geen `.env` bestand nodig
- Alle API keys zijn public keys (veilig voor frontend)
- EmailJS werkt direct zonder extra configuratie