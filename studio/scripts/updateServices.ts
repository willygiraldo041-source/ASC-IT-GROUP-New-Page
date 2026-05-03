import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '4z0gk085',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || '',
  apiVersion: '2024-01-01',
})

async function updateServices() {
  console.log('🔄 Actualizando servicios en Sanity...')

  try {
    // Actualizar Blue Team Defense -> Intelligent Process Automation
    const blueTeamDocs = await client.fetch(`*[_type == "service" && slug.current == "blue-team-defense"][0]`)
    
    if (blueTeamDocs) {
      await client
        .patch(blueTeamDocs._id)
        .set({
          title: 'Intelligent Process Automation',
          slug: { _type: 'slug', current: 'intelligent-process-automation' },
          description: 'Automatización de workflows y desarrollo de bots RPA. Optimizamos operaciones y liberamos recursos para tareas de mayor valor.',
          features: ['Workflow Automation', 'RPA & Scripts', 'CI/CD Automation'],
          icon: 'Settings',
          order: 4
        })
        .commit()
      console.log('✅ Blue Team Defense actualizado a Intelligent Process Automation')
    }

    // Actualizar Incident Response -> DevOps & Cloud Security
    const incidentDocs = await client.fetch(`*[_type == "service" && slug.current == "incident-response"][0]`)
    
    if (incidentDocs) {
      await client
        .patch(incidentDocs._id)
        .set({
          title: 'DevOps & Cloud Security',
          slug: { _type: 'slug', current: 'devops-cloud-security' },
          description: 'Integración de seguridad en pipelines DevOps con DevSecOps y protección cloud nativa.',
          features: ['CI/CD Security', 'IaC Security', 'Kubernetes Security'],
          icon: 'Cloud',
          order: 5
        })
        .commit()
      console.log('✅ Incident Response actualizado a DevOps & Cloud Security')
    }

    // Actualizar orden de Security Audits
    const auditDocs = await client.fetch(`*[_type == "service" && slug.current == "security-audits"][0]`)
    
    if (auditDocs) {
      await client
        .patch(auditDocs._id)
        .set({ order: 3 })
        .commit()
      console.log('✅ Security Audits orden actualizado a 3')
    }

    console.log('🎉 ¡Servicios actualizados exitosamente!')
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

updateServices()
