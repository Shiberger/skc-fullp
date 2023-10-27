// A GraphQL mutation for creating a new project. It takes an input parameter of type ProjectCreateInput and returns information 
// about the created project, including its ID, title, description, and the user who created it.
export const createProjectMutation = `
	mutation CreateProject($input: ProjectCreateInput!) {
		projectCreate(input: $input) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

// A GraphQL mutation for updating an existing project. It takes parameters for the project ID and an input object of type 
// ProjectUpdateInput. It returns information about the updated project, similar to the createProjectMutation.
export const updateProjectMutation = `
	mutation UpdateProject($id: ID!, $input: ProjectUpdateInput!) {
		projectUpdate(by: { id: $id }, input: $input) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

// A GraphQL mutation for deleting a project by its ID. It returns the ID of the deleted project.
export const deleteProjectMutation = `
  mutation DeleteProject($id: ID!) {
    projectDelete(by: { id: $id }) {
      deletedId
    }
  }
`;

// A GraphQL mutation for creating a new user. It takes an input parameter of type UserCreateInput and returns information 
// about the created user, including their name, email, avatar URL, and other details.
export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				description
				githubUrl
				linkedinUrl
				id
			}
		}
	}
`;

// A GraphQL query for fetching a list of projects. It can filter projects by categories and supports pagination with the endcursor parameter. 
// It returns a list of projects with various details, including title, description, links, and the user who created each project.
export const projectsQuery = `
  query getProjects($categories: [String!], $endcursor: String) {
    projectSearch(first: 8, after: $endcursor, filter:  {category: {in: $categories}}) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          githubUrl
          description
          liveSiteUrl
          id
          image
          category
          createdBy {
            id
            email
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

// A GraphQL query for retrieving detailed information about a project by its ID. It returns information such as the project's title, 
// description, image, links, and the user who created it.
export const getProjectByIdQuery = `
  query GetProjectById($id: ID!) {
    project(by: { id: $id }) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;

// A GraphQL query for fetching user information by their email address. It returns details about the user, including their name, email, 
// avatar URL, and other social media links.
export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;

// A GraphQL query for retrieving a user's projects. It takes the user's ID as a parameter and can limit the number of projects 
// returned with the last parameter. It returns information about the user, including their projects, 
// which are listed with their IDs and titles.
export const getProjectsOfUserQuery = `
  query getUserProjects($id: ID!, $last: Int = 4) {
    user(by: { id: $id }) {
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedinUrl
      projects(last: $last) {
        edges {
          node {
            id
            title
            image
          }
        }
      }
    }
  }
`;

// These GraphQL queries and mutations are defined as string templates and can be used in conjunction with a GraphQL client 
// to interact with a GraphQL API. They allow you to create, update, delete, and retrieve information 
// about projects and users in the application.




