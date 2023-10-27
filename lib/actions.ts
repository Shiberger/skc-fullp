import { GraphQLClient } from "graphql-request";

import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation, getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql";
import { ProjectForm } from "@/common.types";
import { categoryFilters } from "@/constants";

// It sets some environment-specific variables based on the value of process.env.NODE_ENV. In production, 
const isProduction = process.env.NODE_ENV === 'production';

// it tries to use environment variables for the GraphQL API URL and API key. In development, 
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';

// it uses default values and a localhost URL for the GraphQL API.
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

// It initializes a GraphQL client client using the previously determined API URL.
const client = new GraphQLClient(apiUrl);

// fetchToken: This function sends a request to obtain an authentication token from a specified endpoint.
export const fetchToken = async () => {
    try {
        const response = await fetch(`${serverUrl}/api/auth/token`);
        return response.json();
    } catch (err) {
        throw err;
    }
};

// uploadImage: This function uploads an image to a server using a POST request.
export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: "POST",
            body: JSON.stringify({
                path: imagePath,
            }),
        });
        return response.json();
    } catch (err) {
        throw err;
    }
};

// makeGraphQLRequest: This is a generic function for making GraphQL requests using the initialized client. 
// It takes a GraphQL query string and optional variables and returns the result of the GraphQL query.
const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (err) {
        throw err;
    }
};

// fetchAllProjects: This function fetches a list of projects based on optional filtering criteria like a category and an endcursor (likely for pagination). 
// It sets the API key in the client's headers.
export const fetchAllProjects = (category?: string | null, endcursor?: string | null) => {
    client.setHeader("x-api-key", apiKey);

    const categories = category == null ? categoryFilters : [category];

    return makeGraphQLRequest(projectsQuery, { categories, endcursor });
};

// createNewProject: This function creates a new project with the provided data and an image. 
// It also sets the API key and authorization token in the client's headers.
export const createNewProject = async (form: ProjectForm, creatorId: string, token: string) => {
    const imageUrl = await uploadImage(form.image);

    if (imageUrl.url) {
        client.setHeader("Authorization", `Bearer ${token}`);

        const variables = {
            input: {
                ...form,
                image: imageUrl.url,
                createdBy: {
                    link: creatorId
                }
            }
        };

        return makeGraphQLRequest(createProjectMutation, variables);
    }
};

// updateProject: This function updates an existing project. It checks if the image is a base64 data URL and, if so, uploads it. 
// It then sets the API key and authorization token in the client's headers.
export const updateProject = async (form: ProjectForm, projectId: string, token: string) => {
    function isBase64DataURL(value: string) {
        const base64Regex = /^data:image\/[a-z]+;base64,/;
        return base64Regex.test(value);
    }

    let updatedForm = { ...form };

    const isUploadingNewImage = isBase64DataURL(form.image);

    if (isUploadingNewImage) {
        const imageUrl = await uploadImage(form.image);

        if (imageUrl.url) {
            updatedForm = { ...updatedForm, image: imageUrl.url };
        }
    }

    client.setHeader("Authorization", `Bearer ${token}`);

    const variables = {
        id: projectId,
        input: updatedForm,
    };

    return makeGraphQLRequest(updateProjectMutation, variables);
};

// deleteProject: This function deletes a project with the given ID and sets the authorization token in the client's headers.
export const deleteProject = (id: string, token: string) => {
    client.setHeader("Authorization", `Bearer ${token}`);
    return makeGraphQLRequest(deleteProjectMutation, { id });
};

// getProjectDetails: This function retrieves details of a project by its ID and sets the API key in the client's headers.
export const getProjectDetails = (id: string) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getProjectByIdQuery, { id });
};

// createUser: This function creates a new user with the provided name, email, and avatar URL. It sets the API key in the client's headers.
export const createUser = (name: string, email: string, avatarUrl: string) => {
    client.setHeader("x-api-key", apiKey);

    const variables = {
        input: {
            name: name,
            email: email,
            avatarUrl: avatarUrl
        },
    };

    return makeGraphQLRequest(createUserMutation, variables);
};

// getUserProjects: This function fetches projects associated with a specific user ID, and it allows specifying the number of projects to retrieve. 
// It sets the API key in the client's headers.
export const getUserProjects = (id: string, last?: number) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getProjectsOfUserQuery, { id, last });
};

// getUser: This function fetches user details based on their email and sets the API key in the client's headers.
export const getUser = (email: string) => {
    client.setHeader("x-api-key", apiKey);
    return makeGraphQLRequest(getUserQuery, { email });
};