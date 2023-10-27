import { User, Session } from 'next-auth'

// This type represents the state of a form for creating or editing a project. It includes properties for the project's title, description, 
// image, live site URL, GitHub URL, and category. These properties typically correspond to user input in a project creation or editing form.
export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
};

// This interface describes the structure of a project object. It includes properties for the project's title, description, image URL, 
// live site URL, GitHub URL, category, project ID, and information about the user who created the project, 
// including their name, email, and avatar URL. This interface defines the shape of a project object returned from a data source.
export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    id: string;
    createdBy: {
        name: string;
        email: string;
        avatarUrl: string;
        id: string;
    };
}

// This interface defines the structure of a user's profile. It includes properties such as the user's ID, name, email, description, 
// avatar URL, GitHub URL, LinkedIn URL, and an array of the user's projects. The projects are represented as an array of objects 
// with pagination information (pageInfo). This structure is typically used for user profile information in the application.
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    linkedinUrl: string | null;
    projects: {
        edges: { node: ProjectInterface }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        };
    };
}

// This interface extends the Session interface from NextAuth.js to include additional user information. 
// It includes the user's ID, name, email, and avatar URL, in addition to the standard properties provided by the Session interface. 
// This extension allows you to store extra user-related information in the session.
export interface SessionInterface extends Session {
    user: User & {
        id: string;
        name: string;
        email: string;
        avatarUrl: string;
    };
}

// This interface describes the structure of the data object used for creating or updating a project. 
// It includes properties for the project's title, description, image URL, live site URL, GitHub URL, and category. It's used for defining 
// the shape of data objects passed to GraphQL mutations or when processing form submissions.
export interface ProjectForm {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
}

// These types and interfaces provide a clear and strongly-typed way to define and work with different data structures and 
// states within the Next.js application. They help ensure type safety and make it easier to handle and validate data in the application, 
// preventing common programming errors.




