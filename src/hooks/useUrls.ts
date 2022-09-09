import { useEffect, useState } from "react";
import { UrlMock } from "../mock/urls";
import MockUrlService from "../servicos/MockUrlService";

export default function useUrls (mockUrlService: MockUrlService): UrlMock {
    const [links, setLinks] = useState({});

    useEffect(() => {
        const output = mockUrlService.getUrls();
        setLinks(output);
    }, []);

    return links;
}