# 🚀 Guía de Despliegue en GitHub Pages

Esta guía te ayudará a publicar tu portafolio en GitHub Pages paso a paso.

## 📋 Pre-requisitos

- ✅ Tener una cuenta de GitHub
- ✅ Tener Git instalado
- ✅ Tener Node.js instalado

## 🎯 Método 1: Deploy Automático con GitHub Actions (Recomendado)

Este método despliega automáticamente cada vez que haces push a la rama master.

### Paso 1: Configurar el Repositorio en GitHub

1. **Asegúrate de que tu código esté en GitHub**:
   ```powershell
   git add .
   git commit -m "Add GitHub Pages configuration"
   git push origin master
   ```

### Paso 2: Habilitar GitHub Pages en el Repositorio

1. Ve a tu repositorio en GitHub: `https://github.com/Joel-SD/Joel_Portfolio`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source** (Fuente), selecciona:
   - **GitHub Actions** (no selecciones una rama)
5. Guarda los cambios

### Paso 3: Verificar la Configuración de Base URL

En `vite.config.js`, asegúrate de que la base URL coincida con el nombre de tu repositorio:

```javascript
base: '/Joel_Portfolio/',  // Debe coincidir con el nombre de tu repositorio
```

**⚠️ IMPORTANTE**: Si tu repositorio se llama diferente o quieres usar un dominio personalizado, ajusta esta configuración:

- **Para repositorio llamado exactamente como tu usuario**: `base: '/'`
- **Para dominio personalizado**: `base: '/'`
- **Para otro nombre de repo**: `base: '/nombre-del-repo/'`

### Paso 4: Hacer Push y Esperar el Deploy

1. Si hiciste cambios en `vite.config.js`:
   ```powershell
   git add .
   git commit -m "Configure base URL for GitHub Pages"
   git push origin master
   ```

2. Ve a la pestaña **Actions** en tu repositorio
3. Verás el workflow "Deploy to GitHub Pages" ejecutándose
4. Espera a que termine (toma 2-3 minutos)
5. Tu sitio estará disponible en: `https://joel-sd.github.io/Joel_Portfolio/`

## 🛠️ Método 2: Deploy Manual con gh-pages

Si prefieres control manual sobre cuándo desplegar:

### Paso 1: Instalar gh-pages

```powershell
npm install
```

### Paso 2: Hacer Deploy

```powershell
npm run deploy
```

Este comando:
1. Construye el proyecto (`npm run build`)
2. Publica la carpeta `dist` en la rama `gh-pages`

### Paso 3: Configurar GitHub Pages (solo primera vez)

1. Ve a **Settings** > **Pages**
2. En **Source**, selecciona la rama `gh-pages`
3. Carpeta: `/ (root)`
4. Guarda

Tu sitio estará disponible en: `https://joel-sd.github.io/Joel_Portfolio/`

## 🌐 Configurar un Dominio Personalizado (Opcional)

Si tienes un dominio propio:

### Paso 1: Crear archivo CNAME

Crea el archivo `public/CNAME` con tu dominio:
```
tudominio.com
```

### Paso 2: Configurar DNS

En tu proveedor de dominio, agrega estos registros DNS:

```
Tipo    Nombre    Valor
A       @         185.199.108.153
A       @         185.199.109.153
A       @         185.199.110.153
A       @         185.199.111.153
CNAME   www       joel-sd.github.io
```

### Paso 3: Actualizar vite.config.js

Cambia la base a:
```javascript
base: '/',  // Para dominio personalizado
```

### Paso 4: Configurar en GitHub

1. Ve a **Settings** > **Pages**
2. En **Custom domain**, ingresa tu dominio
3. Habilita **Enforce HTTPS**

## 🔍 Verificar el Deploy

### Ver el Sitio en Vivo
```
https://joel-sd.github.io/Joel_Portfolio/
```

### Ver el Estado del Deploy
1. Ve a **Actions** en tu repositorio
2. Verás todos los deploys y su estado

### Ver Logs de Build
Si algo sale mal:
1. Haz clic en el workflow que falló
2. Revisa los logs de cada paso

## 🐛 Solución de Problemas

### Problema: Página en blanco o error 404

**Solución 1**: Verifica la base URL en `vite.config.js`
```javascript
// Debe coincidir EXACTAMENTE con el nombre del repositorio
base: '/Joel_Portfolio/',
```

**Solución 2**: Verifica que GitHub Pages esté usando la fuente correcta
- Para GitHub Actions: Source debe ser "GitHub Actions"
- Para gh-pages manual: Source debe ser la rama "gh-pages"

### Problema: Estilos o imágenes no cargan

**Causa**: Las rutas están incorrectas debido a la base URL

**Solución**: Asegúrate de usar rutas relativas o que comiencen con `/`
```jsx
// ✅ Correcto
<img src="/assets/logo.svg" />

// ❌ Incorrecto
<img src="assets/logo.svg" />
```

### Problema: El workflow falla en GitHub Actions

**Solución 1**: Verifica los permisos
1. Ve a **Settings** > **Actions** > **General**
2. En **Workflow permissions**, selecciona:
   - "Read and write permissions"
3. Guarda los cambios

**Solución 2**: Verifica que `package-lock.json` esté en el repo
```powershell
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### Problema: Los cambios no se reflejan

**Solución**: Limpia la caché del navegador
- Chrome/Edge: `Ctrl + Shift + R`
- Firefox: `Ctrl + F5`

O espera 5-10 minutos para que GitHub Pages actualice el CDN.

## 📊 Métricas y Analytics

Después del deploy, verifica que Google Analytics funcione:

1. Abre la consola del navegador (F12)
2. Ve a la pestaña **Network**
3. Busca requests a `google-analytics.com` o `analytics.google.com`
4. En modo producción, deberías ver estos requests

**Nota**: Recuerda configurar tu Measurement ID en `src/utils/analytics.js`

## 🔄 Actualizar el Sitio

### Con GitHub Actions (Automático)
Simplemente haz push a master:
```powershell
git add .
git commit -m "Update portfolio"
git push origin master
```

### Con gh-pages (Manual)
```powershell
npm run deploy
```

## 🎨 Optimizaciones Post-Deploy

### 1. Habilitar HTTPS
En **Settings** > **Pages**, marca **Enforce HTTPS**

### 2. Verificar Performance
Usa [Google PageSpeed Insights](https://pagespeed.web.dev/)

### 3. Verificar SEO
Usa [Google Search Console](https://search.google.com/search-console)

## 📱 Compartir tu Portafolio

Una vez desplegado, comparte tu portafolio:

```
🌐 Portafolio: https://joel-sd.github.io/Joel_Portfolio/
💼 LinkedIn: [tu perfil]
💻 GitHub: https://github.com/Joel-SD
```

## 🆘 Soporte

Si encuentras problemas:
1. Revisa los logs en la pestaña **Actions**
2. Verifica la configuración en **Settings** > **Pages**
3. Revisa la consola del navegador para errores JavaScript

## 🎉 ¡Listo!

Tu portafolio ahora está en vivo y se actualizará automáticamente cada vez que hagas push a master.

---

**URLs Importantes**:
- 🌐 Sitio en Vivo: https://joel-sd.github.io/Joel_Portfolio/
- 📦 Repositorio: https://github.com/Joel-SD/Joel_Portfolio
- ⚙️ Configuración: https://github.com/Joel-SD/Joel_Portfolio/settings/pages
- 🚀 Actions: https://github.com/Joel-SD/Joel_Portfolio/actions
