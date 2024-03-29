terraform {
  cloud {
    organization = "rurito0125"

    workspaces {
      name = "portfolio-workspace"
    }
  }
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

data "vercel_project_directory" "portfolio" {
  path = "../frontend"
}

resource "vercel_deployment" "portfolio" {
    project_id  = vercel_project.portfolio.id
    files       = data.vercel_project_directory.portfolio.files
    path_prefix = data.vercel_project_directory.portfolio.path
    production  = true
}

resource "vercel_project" "portfolio" {
    name      = "portfolio"
    framework = "nextjs"
    git_repository = {
      type = "github"
      repo = "ruritoBlogger/ruritoBlogger.github.io"
    }
}