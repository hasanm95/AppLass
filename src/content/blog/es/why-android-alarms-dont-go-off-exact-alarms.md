---
title: "Por qué no sonó tu alarma en Android: 7 causas y soluciones (Samsung, Xiaomi, Pixel)"
description: "¿La alarma de Android no suena, suena tarde o no sonó en absoluto? Las causas habituales son el permiso de alarmas exactas, la optimización de batería y la gestión de energía del fabricante. Aquí tienes cómo diagnosticar y arreglar cada una, y cómo dejar de quedarte dormido con alarmas que sí suenan."
date: "2026-10-04"
dateModified: "2026-11-13"
category: "Aplicaciones Android"
author: "Equipo AppLass"
keywords: "la alarma no suena android, por qué no sonó mi alarma, alarma android no suena, alarma suena tarde android, modo doze alarma, optimización de batería alarma, alarmas exactas android, alarma samsung no suena, alarma xiaomi no suena, quedarse dormido con la alarma"
excerpt: "Cuando una alarma de Android suena tarde o no suena, casi siempre es el permiso de alarmas exactas, la optimización de batería o la gestión de energía del fabricante, no un tono roto. Aquí tienes cómo diagnosticar cada causa, arreglarla según tu fabricante y dejar de quedarte dormido con las alarmas que sí suenan."
tags:
  - android
  - técnico
  - despertador
  - batería
  - arisely
sidebarApps:
  - arisely
thumbnail: "../../../assets/blogs/why-android-alarms-dont-go-off-exact-alarms.png"
faqs:
  - question: "¿Por qué no sonó mi alarma de Android?"
    answer: "Lo más habitual es que la optimización de batería o el modo Doze retrasaran la app que la programó. Las alarmas planificadas como trabajo en segundo plano normal pueden agruparse y aplazarse para ahorrar energía, así que suenan tarde o se saltan directamente. Las alarmas programadas como alarmas exactas están exentas y se disparan a la hora exacta, incluso en modo Doze. En móviles Samsung, Xiaomi y Huawei, la gestión de energía del fabricante es una causa adicional y muy frecuente."
  - question: "¿Qué es una alarma exacta en Android?"
    answer: "Una alarma exacta usa el permiso SCHEDULE_EXACT_ALARM o USE_EXACT_ALARM de Android para dispararse a una hora exacta en lugar de agruparse con otro trabajo en segundo plano. El sistema la trata como crítica en el tiempo, así que suena puntual aunque el dispositivo esté inactivo, en modo Doze o la app lleve horas cerrada. Desde Android 14, este permiso está denegado por defecto para muchas apps."
  - question: "¿La optimización de batería impide que suenen las alarmas?"
    answer: "Puede retrasar o silenciar alarmas programadas como trabajo en segundo plano aplazable. Android documenta que una alarma inexacta con ventana de tiempo puede retrasarse al menos diez minutos. La solución fiable es una app que use alarmas exactas, además de poner el uso de batería de tu app de alarma en «Sin restricciones» en los ajustes de Android."
  - question: "¿Por qué fallan las alarmas sobre todo en Xiaomi y Samsung?"
    answer: "One UI, MIUI y HyperOS aplican su propia gestión de energía por encima de la de Android y suspenden procesos en segundo plano de forma rutinaria para ahorrar batería. Si el sistema suspende tu app de alarma, su alarma programada nunca se dispara. La solución depende del fabricante: activar el Inicio automático en Xiaomi, y poner la app en «Sin restricciones» y excluirla de las aplicaciones en suspensión en Samsung."
  - question: "Mi alarma no suena si cierro la app desde recientes. ¿Por qué?"
    answer: "Deslizar una app fuera de la lista de recientes puede cerrarla por completo en algunas capas de personalización, lo que cancela su trabajo programado. En Android puro una alarma exacta sobrevive a esto, pero las capas más agresivas no siempre lo respetan. Si tu alarma solo falla tras vaciar recientes o reiniciar el móvil, esta es la causa probable: deja la app en segundo plano y activa el Inicio automático."
  - question: "¿El modo No molestar puede silenciar mi alarma?"
    answer: "Por defecto, no. No molestar silencia notificaciones y multimedia pero deja pasar las alarmas, siempre que la app use el canal de audio de alarma de Android. El error de volumen más frecuente no es No molestar, sino que el volumen del propio canal de alarma esté bajo: es independiente del volumen multimedia y del tono de llamada. Compruébalo en Ajustes, Sonido, y busca concretamente el control de Alarma."
  - question: "¿Cómo me aseguro de que mi alarma siempre suene a su hora?"
    answer: "Usa una app de alarma basada en alarmas exactas, concédele el permiso «Alarmas y recordatorios», pon su uso de batería en «Sin restricciones», deja que reproduzca por el canal de audio de alarma y permítele mostrarse a pantalla completa sobre la pantalla de bloqueo. En Xiaomi y Samsung, activa además el Inicio automático o exclúyela de las apps en suspensión."
  - question: "¿Es seguro conceder el permiso de alarmas exactas?"
    answer: "Sí, para un despertador es justo el uso previsto. Google señala las apps de alarma y calendario como el caso de manual para SCHEDULE_EXACT_ALARM. El permiso solo controla la precisión horaria; no da acceso a tus datos ni a tus archivos."
  - question: "¿Por qué me quedo dormido con alarmas que sí suenan?"
    answer: "Normalmente se combinan tres cosas: la inercia del sueño, que te deja lo bastante aturdido como para apagar una alarma sin recordarlo; el botón de apagado de un solo toque, que una mano medio dormida encuentra por reflejo; y el bucle de posponer, que fragmenta tu último ciclo de sueño. El volumen no arregla ninguna. Lo que rompe el reflejo es una tarea que exija atención o movimiento."
  - question: "¿Es el botón de posponer la razón por la que me quedo dormido?"
    answer: "A menudo sí. Posponer te devuelve a un sueño fragmentado y de mala calidad y entrena el reflejo de apagar alarmas sin despertarte, por eso puedes sentirte peor tras posponer tres veces que levantándote al primer timbre. Poner un límite de posposiciones, o quitar el apagado fácil y exigir una tarea, rompe ese bucle."
  - question: "¿Cuánto tiempo suena una alarma de Android antes de parar?"
    answer: "En Android puro, la app Reloj silencia una alarma sin respuesta al cabo de unos 10 a 15 minutos y la marca como perdida. La duración exacta varía según el fabricante y es ajustable en algunas apps. Por eso una alarma que te pilla en sueño profundo puede parar antes de que emerjas, y por eso una tarea importa más que la duración."
---

**Si tu alarma de Android suena tarde o no suena, la causa casi nunca es un tono roto.** Es una de una
lista corta de comportamientos del sistema: el permiso de alarmas exactas, el modo Doze y la
optimización de batería, o la gestión de energía propia de tu fabricante. Esta guía recorre cada causa
en orden de diagnóstico, con los ajustes por fabricante que de verdad lo solucionan.

Si tus alarmas *sí* suenan y te quedas dormido igualmente, ese es otro problema con otra solución: lo
tratamos en la segunda mitad.

## Diagnóstico rápido

| Síntoma | Causa más probable | Ir a |
|---|---|---|
| La alarma sonó 10+ minutos tarde | Alarma inexacta agrupada por Doze | [Causa 1](#causa-1-la-alarma-no-era-exacta) |
| La alarma no sonó en absoluto | Permiso de alarmas exactas denegado | [Causa 2](#causa-2-el-permiso-de-alarmas-exactas-está-denegado) |
| Falla solo tras reiniciar o vaciar recientes | Gestión de energía del fabricante | [Causa 3](#causa-3-gestión-de-energía-del-fabricante) |
| Sonó pero en silencio o muy bajo | Volumen del canal de alarma, no el multimedia | [Causa 4](#causa-4-sonó-pero-no-la-oíste) |
| Sonó, la apagaste y no lo recuerdas | Inercia del sueño y apagado de un toque | [Segunda mitad](#parte-2-la-alarma-sonó-y-te-quedaste-dormido) |

---

## Causa 1: La alarma no era exacta

Para ahorrar energía, Android agrupa el trabajo en segundo plano. El **modo Doze** (móvil quieto,
pantalla apagada) y la optimización de batería aplazan las tareas en segundo plano a ventanas de
mantenimiento ocasionales. Una alarma programada como trabajo en segundo plano normal queda atrapada en
esa agrupación: suena tarde, o la ventana nunca coincide y se salta de hecho.

La documentación de Android es explícita: una alarma inexacta con ventana de tiempo puede retrasarse
**al menos diez minutos**. Esa es la diferencia entre una alarma a las 7:00 y una a las 7:12.

**La solución** es una alarma que use **alarmas exactas** (`SCHEDULE_EXACT_ALARM` / `USE_EXACT_ALARM`).
Están exentas del aplazamiento de Doze y se disparan a la hora exacta: pantalla bloqueada, dispositivo
inactivo, app cerrada desde hace horas.

| | Alarma programada en segundo plano | Alarma exacta |
| :--- | :--- | :--- |
| **Afectada por Doze / optimización de batería** | Sí — puede retrasarse o saltarse | No — exenta |
| **Se dispara con la app cerrada** | Poco fiable | Sí |
| **Se dispara con el móvil bloqueado/inactivo** | Poco fiable | Sí |
| **Pensada para** | Sincronización aplazable, limpieza | Alarmas, recordatorios, calendario |

Google cita explícitamente los **despertadores** como el caso de manual, así que una app de alarma de
verdad debería usarlo.

## Causa 2: El permiso de alarmas exactas está denegado

Esta es la causa que más ha crecido desde Android 14. Las alarmas exactas requieren ahora un acceso
especial, y para muchas apps está **denegado por defecto**. Si se revoca ese permiso, las futuras
alarmas exactas de la app se cancelan, en silencio.

**Compruébalo:** Ajustes → Aplicaciones → *tu app de alarma* → **Alarmas y recordatorios** → permitir.

En algunas versiones está en Ajustes → Aplicaciones → Acceso especial de aplicaciones → Alarmas y
recordatorios.

## Causa 3: Gestión de energía del fabricante

Android puro es solo la mitad de la historia. One UI (Samsung), MIUI/HyperOS (Xiaomi), EMUI (Huawei) y
ColorOS (Oppo/Realme) añaden su propia gestión de energía, más agresiva, por encima de la de Android, y
suspenden apps en segundo plano de forma rutinaria. Una app de alarma suspendida no suena.

Esta es la causa detrás del patrón de queja más común: *«funciona, pero no después de reiniciar el
móvil o vaciar recientes»*.

**Samsung (One UI)**
- Ajustes → Aplicaciones → *app de alarma* → Batería → **Sin restricciones**
- Ajustes → Batería → Límites de uso en segundo plano → comprueba que la app **no** esté en
  *Aplicaciones inactivas* ni en *Aplicaciones en suspensión profunda*

**Xiaomi / Redmi / POCO (MIUI, HyperOS)**
- Ajustes → Aplicaciones → Gestionar aplicaciones → *app de alarma* → **Inicio automático: activado**
- Misma pantalla → Ahorro de batería → **Sin restricciones**
- Bloquea la app en recientes (desliza su tarjeta hacia abajo) para que no se cierre

**Huawei (EMUI)**
- Ajustes → Batería → Inicio de aplicaciones → *app de alarma* → **Gestionar manualmente**, activa las
  tres opciones

**Oppo / Realme / OnePlus**
- Ajustes → Batería → *app de alarma* → **Permitir actividad en segundo plano** / desactivar
  *optimización de reposo*

**Pixel / Android puro**
- Ajustes → Aplicaciones → *app de alarma* → Batería → **Sin restricciones**

Las apps de terceros para «limpiar RAM» y ahorrar batería provocan el mismo fallo, y conviene
desinstalarlas si tu alarma te importa.

## Causa 4: Sonó, pero no la oíste

Tres cosas distintas pueden dejar una alarma prácticamente muda:

1. **El volumen del canal de alarma.** Android tiene un volumen de **alarma** propio, independiente del
   multimedia y del tono de llamada. Puede estar a cero mientras todo lo demás suena normal.
   Compruébalo en Ajustes → Sonido → control de **Alarma**, o pulsa subir volumen durante una alarma.
2. **La app no usa el canal de alarma.** Una app que reproduce por el canal multimedia se silencia junto
   con todo lo demás. No molestar deja pasar las alarmas *solo* por el canal de alarma.
3. **Sin pantalla completa.** Sin permiso para mostrarse a pantalla completa sobre la pantalla de
   bloqueo, la pantalla de sonido puede degradarse a una notificación muda que hay que tocar.

## Causa 5: Zona horaria, actualizaciones y la propia app Reloj

Menos frecuente, pero real:

- **La zona horaria automática** que cambia de noche tras un viaje desplaza las alarmas.
- **Una actualización del sistema o de la app** durante la noche puede cancelar las alarmas programadas
  hasta la siguiente ejecución de la app.
- **La propia app Reloj.** Ha habido periodos documentados en los que el Reloj de Google no sonó para
  algunos usuarios. Si todo lo demás está en orden y solo falla la app por defecto, prueba otra app de
  alarma.

## Causa 6: Vaciaste la app de recientes

En varias capas de personalización, deslizar una app en la lista de recientes la cierra y cancela su
trabajo programado. Android puro conserva las alarmas exactas en ese caso; las capas agresivas no
siempre lo respetan. Si tu alarma solo falla las mañanas después de vaciar recientes, deja la app
funcionando y activa el Inicio automático.

## Causa 7: Modo de ahorro de batería

El ahorro de batería propio de Android, y las variantes más estrictas de cada fabricante, restringen la
actividad en segundo plano en general. Si tu móvil entra en ahorro de energía por la noche al bajar de
cierto nivel de carga, eso puede marcar la diferencia entre una alarma que funciona y una que falta.
Carga por la noche, o excluye la app de alarma.

---

## Parte 2: La alarma sonó y te quedaste dormido

Si la alarma se dispara correctamente y aun así te quedas dormido, nada de lo anterior ayuda: es otro
problema.

| Causa | Qué ocurre | La solución |
| :--- | :--- | :--- |
| **Inercia del sueño** | En sueño profundo tu cerebro está lo bastante aturdido como para apagar una alarma sin recordarlo | Exigir una tarea que requiera atención real |
| **El botón de apagado** | Un toque somnoliento la silencia antes de que estés consciente | Quitar la salida de un solo toque |
| **El bucle de posponer** | Posponer fragmenta tu último ciclo de sueño y agrava el aturdimiento | Limitar o desactivar las posposiciones |

**Por qué un tono más alto no arregla esto.** Apagar una alarma es un *reflejo*: localizar un móvil y
tocar una superficie grande es algo que un cerebro dormido puede completar sin llegar nunca a ser
consciente. El volumen la hace más fácil de oír, no más difícil de apagar.

**Lo que sí funciona es poner una tarea entre tú y el botón de apagado:**

- Resolver una operación matemática
- Reescribir un código o una frase corta
- Dar un número determinado de pasos
- Escanear un QR o código de barras que dejaste al otro lado de la habitación
- Hacer flexiones verificadas por la cámara

En cuanto estás haciendo una tarea, estás despierto. Ese es todo el mecanismo. Las tareas físicas ganan
a las mentales en los dormilones profundos, porque las matemáticas despiertan tu cerebro diez segundos
mientras que ir hasta la cocina despierta tu cuerpo.

**Cierra los dos últimos escapes.** Una mano medio dormida y decidida tiene aún dos trucos: bajar el
volumen o pulsar el botón de encendido. Algunas apps de alarma ofrecen guardianes opcionales, activos
solo mientras suena, que vuelven a subir el volumen y bloquean el menú de apagado. (Un apagado forzado
por hardware, manteniendo pulsado el botón, no lo puede bloquear ninguna app, y es así por diseño.)

Para la comparativa completa de las apps que hacen esto, mira
[las mejores apps de despertador para dormilones](/es/blog/best-alarm-apps-for-heavy-sleepers-android-2026),
y [la misión de flexiones explicada](/es/blog/alarm-app-that-makes-you-do-pushups-android) para la
versión más dura de una tarea de apagado.

## Lista de comprobación de fiabilidad

Recórrela una vez y la mayoría de los problemas de alarma desaparecen para siempre:

1. Concede **Alarmas y recordatorios** a tu app de alarma
2. Pon su uso de batería en **Sin restricciones**
3. Activa el **Inicio automático** (Xiaomi) o exclúyela de **Aplicaciones inactivas** (Samsung)
4. Comprueba concretamente el **control de volumen de Alarma**
5. Permite la **pantalla completa sobre la pantalla de bloqueo**
6. Desinstala limpiadores de RAM y batería de terceros
7. Deja el móvil cargando por la noche para que el ahorro de energía nunca se active

## Un despertador construido sobre todo esto

[Arisely](/blog/arisely-alarm-clock-for-heavy-sleepers) (en inglés) usa alarmas a la hora exacta,
reproduce por el canal de audio de alarma con un refuerzo de volumen y se muestra a pantalla completa
sobre la pantalla de bloqueo, así que se dispara puntual y fuerte aunque el móvil esté bloqueado o la
app lleve horas cerrada. Unos guardianes opcionales vuelven a subir el volumen y bloquean el menú de
apagado mientras suena, y diez misiones de despertar eliminan el apagado de un solo toque. Gratis, sin
cuenta, y el banner de la versión gratuita nunca aparece en la pantalla de sonido.

[**Descargar Arisely en Google Play**](https://play.google.com/store/apps/details?id=com.arisely&referrer=utm_source%3Dapplass%26utm_medium%3Dblog%26utm_campaign%3Dexact-alarms%26utm_content%3Dwhy-android-alarms-dont-go-off-exact-alarms)

---

**Relacionado:** [Las mejores apps de despertador para dormilones](/es/blog/best-alarm-apps-for-heavy-sleepers-android-2026) ·
[La app de despertador que te hace hacer flexiones](/es/blog/alarm-app-that-makes-you-do-pushups-android) ·
[Las mejores alternativas a Alarmy](/es/blog/alarmy-alternatives-android)
