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

export interface IHistoryData {
    title: string;
    content: string;
    link?: string;
    link_text?: string;
}

export interface HistoryTemplateProps {
    datas: IHistoryData[]
}

export interface ISkillData {
    title: string;
    content: string;
}

export interface SkillTemplateProps {
    datas: ISkillData[]
}