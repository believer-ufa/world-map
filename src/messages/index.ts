import { LanguageCode } from '@/types/language';
import en from './en.json';
import ru from './ru.json';

interface MessageData {
  id: string;
  defaultMessage: string;
  message: string;
  files: string[];
}

type MessagesArray = MessageData[]
type AllLangsMessagesMap = Record<LanguageCode, MessagesArray>

const locales: AllLangsMessagesMap = { en, ru };
const messages: Record<LanguageCode, Record<string, string>> = { ru: {}, en: {} };

Object.keys(locales).forEach((lang: string): void => {
  const data: MessagesArray = locales?.[lang as LanguageCode];
  messages[lang as LanguageCode] = data.reduce((msgs: Record<string, string>, msg: MessageData) => {
    msgs[msg.id] = msg.message;
    return msgs;
  }, {});
});

export default messages;
