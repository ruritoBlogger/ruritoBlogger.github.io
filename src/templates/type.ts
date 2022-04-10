export interface ITimelineData {
    date: string;
    title: string;
    content: string;
    link?: string;
    link_text?: string;
    img_link?: string;
    img_alt?: string;
}

export interface TimeLineTemplateProps {
    datas: ITimelineData[],
}