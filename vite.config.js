// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             return "vendor";
//           }
//         },
//       },
//     },
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import legacy from "@vitejs/plugin-legacy";

// export default defineConfig({
//   plugins: [
//     react(),
//     legacy({
//       targets: ["defaults", "not IE 11", "Safari >= 12"],
//       modernPolyfills: ["es.object.from-entries"], // Includes necessary polyfills in modern chunks
//       additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // Ensures async/await support
//     }),
//   ],
//   build: {
//     target: "es2015", // Ensures compatibility with older JS engines
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             return "vendor";
//           }
//         },
//       },
//     },
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11", "Safari >= 12"],
      modernPolyfills: true,
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
