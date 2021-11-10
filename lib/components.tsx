// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react";

export const ExternalLink = ({href, icon = true, children, ...props}: { href: string, icon?: boolean, children: React.ReactNode }) => {
    // https://iconmonstr.com/external-link-thin-svg/
    const iconElement = <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 22" height="0.9em" width="0.9em" aria-hidden="true" fill="currentColor" style={{verticalAlign:"text-bottom"}}><path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/></svg>;
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}{icon && iconElement}</a>;
}
