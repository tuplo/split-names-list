declare namespace Intl {
	class ListFormat {
		constructor(locale: string, options?: Record<string, string>);
		public format: (items: string[]) => string;
	}
}
