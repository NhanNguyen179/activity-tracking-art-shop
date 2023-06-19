export class CreateEventTrackingDTO {
  Application = 'Art Auction Web';
  Page: string;
  Url: string;
  ActionType: string;
  Action: string;
  SessionId = '';
  LocalTimestamp: Date;
  Outcome?: string | null;
  Feature?: string | null;

  UserId?: string | null;
  UserEmail?: string | null;
  UserType?: string | null;

  BrowserName?: string | null;
  BrowserVersion?: string | null;
  BrowserLayout?: string | null;
  ClientOS?: string | null;
  ClientDescription?: string | null;
  UserAgent?: string | null;

  Attribute1?: any;
  Attribute2?: any;
  Attribute3?: any;
  Attribute4?: any;
  Attribute5?: any;
  Attribute6?: any;
  Attribute7?: any;
  Attribute8?: any;
  Attribute9?: any;
  Attribute10?: any;
}
