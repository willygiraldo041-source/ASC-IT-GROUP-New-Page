const sanityClient = require('@sanity/client');

const client = sanityClient.createClient({
  projectId: '4z0gk085',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  // Token público - solo lectura y escritura básica
  token: 'skD4FQfJ8YZhGqHBxQp9kOGv7XJYnZJC2p8EbK9vLLvGCaXqKLLpX6pJQN0QwJxGVxJxFJbQpXqLxQp9'
});

async function updateServices() {
  console.log('🔄 Actualizando servicios...\n');

  try {
    // 1. Buscar y actualizar Blue Team Defense -> Intelligent Process Automation
    const services = await client.fetch('*[_type == "service"]');
    
    const blueTeam = services.find(s => s.slug?.current === 'blue-team-defense');
    if (blueTeam) {
      await client
        .patch(blueTeam._id)
        .set({
          title: 'Intelligent Process Automation',
          'slug.current': 'intelligent-process-automation',
          description: 'Automatización de workflows y desarrollo de bots RPA. Optimizamos operaciones y liberamos recursos para tareas de mayor valor.',
          features: ['Workflow Automation', 'RPA & Scripts', 'CI/CD Automation'],
          icon: 'Settings',
          order: 4
        })
        .commit();
      console.log('✅ Actualizado: Blue Team Defense → Intelligent Process Automation');
    }

    // 2. Buscar y actualizar Incident Response -> DevOps & Cloud Security
    const incident = services.find(s => s.slug?.current === 'incident-response');
    if (incident) {
      await client
        .patch(incident._id)
        .set({
          title: 'DevOps & Cloud Security',
          'slug.current': 'devops-cloud-security',
          description: 'Integración de seguridad en pipelines DevOps con DevSecOps y protección cloud nativa.',
          features: ['CI/CD Security', 'IaC Security', 'Kubernetes Security'],
          icon: 'Cloud',
          order: 5
        })
        .commit();
      console.log('✅ Actualizado: Incident Response → DevOps & Cloud Security');
    }

    // 3. Actualizar orden de Security Audits
    const audits = services.find(s => s.slug?.current === 'security-audits');
    if (audits) {
      await client
        .patch(audits._id)
        .set({ order: 3 })
        .commit();
      console.log('✅ Actualizado: Security Audits orden a 3');
    }

    console.log('\n🎉 ¡Servicios actualizados exitosamente!');
    console.log('📝 Recarga la página principal para ver los cambios.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

updateServices();
