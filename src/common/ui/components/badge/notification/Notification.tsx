import { FunctionComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleExclamation, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import TailwindStyle from "common/tailwind/TailwindStyle";
import Size from "common/ui/types/size/Size";
import FeedbackType from "common/ui/types/feedback/FeedbackType";

const getIcon = (props: NotificationProps) => {
    switch (props.type) {
        case 'success':
            return faCircleCheck;
        case 'info':
            return faCircleInfo;
        case 'danger': 
        case 'warning':
            return faCircleExclamation;
    }
}

const getClassName = (props: NotificationProps) => TailwindStyle.builder()
    .addIf(`text-md`, !props.size || props.size === 'm')
    .addIf(`text-xs`, props.size === 'xs')
    .addIf(`text-sm`, props.size === 's')
    .addIf(`text-lg`, props.size === 'l')
    .addIf(`text-xl`, props.size === 'xl')
    .addIf(`text-2xl`, props.size === '2xl')
    .addIf(`text-3xl`, props.size === '3xl')
    .addIf(`text-warning`, props.type === 'warning')
    .addIf(`text-danger`, props.type === 'danger')
    .addIf(`text-success`, props.type === 'success')
    .addIf(`text-info`, props.type === 'info')
    .get();

interface NotificationProps {
    type: FeedbackType;
    size?: Size;
}

const Notification: FunctionComponent<NotificationProps> = (props: NotificationProps) => {
    return (
        <span className={getClassName(props)}>
            <FontAwesomeIcon icon={getIcon(props)} />
        </span>
    );
}

export default Notification;