import inquirer from 'inquirer'
import { execaCommand } from 'execa'
import { magentaBright, greenBright, bold } from 'colorette'

// "scripts": {
//   "dev": "cross-env type=start node start.config.mjs",
// },

const projects = [{ cnName: '开票', enName: 'invoice' }]

inquirer
  .prompt([
    {
      type: 'list',
      message: `选择要启动的项目：`,
      name: 'mono', // 存储答案的字段
      default: projects[0].enName, // 默认启动项
      choices: projects.map((p) => {
        // 选择
        return { name: p.cnName, value: p.enName }
      }),
    },
  ])
  .then(({ mono: prd }) => {
    const project = projects.find((v) => v.enName == prd)
    if (!project) return

    console.log(`>>> 当前项目标识：当前产品标识：${bold(magentaBright(project.enName))}`)

    const cmd = `pnpm --F @inno-crx/${project.enName} run dev `
    // 这里的启动项就去找到我们projects里面的项目的文件启动

    let envVars = {
      selectedProject: project.enName,
      product: prd,
      // project: project.projectKey,
      // isLocal,
    }

    execaCommand(cmd, { stdio: 'inherit', env: envVars })
  })
  .catch((err) => {
    console.log('error', err)
  })
