"use client"

import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

import Button from './Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;

// The AuthProviders component is defined. It doesn't receive any props.
const AuthProviders = () => {
    // Inside the component, a useState hook is used to manage the providers state. 
    // providers will hold information about the available authentication providers, and it's initially set to null.

    const [providers, setProviders] = useState<Providers | null>(null);

    // The useEffect hook is used to fetch the available authentication providers when the component mounts. 
    useEffect(() => {
        // It calls the fetchProviders function asynchronously to get the provider information using getProviders
        const fetchProviders = async () => {
            const res = await getProviders();
            
            setProviders(res);
        }
        // Once the data is fetched, it sets the providers state.
        fetchProviders();
    }, []);

    // The component checks if providers is not null. If the providers` object is available, it proceeds to render 
    // the authentication providers as sign-in buttons.
    if (providers) {
        return (
            // It uses Object.values(providers) to get an array of provider objects and maps through them, 
            // rendering a Button component for each provider.
            <div>
                {Object.values(providers).map((provider: Provider, i) => (
                   // Each button's handleClick function triggers the signIn function with the id of the respective provider. 
                    // This initiates the sign-in process for the selected provider.
                    <Button key={i} title='Sign In' handleClick={() => signIn(provider?.id)} />
                ))}
            </div>
        )
    }
}

export default AuthProviders