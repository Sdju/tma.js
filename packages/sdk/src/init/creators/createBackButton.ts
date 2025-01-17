import { BackButton } from '~/back-button/index.js';
import { getStorageValue, saveStorageValue } from '~/storage.js';
import type { PostEvent } from '~/bridge/index.js';

/**
 * Creates BackButton instance using last locally saved data also saving each state in
 * the storage.
 * @param isPageReload - was current page reloaded.
 * @param version - platform version.
 * @param postEvent - Bridge postEvent function
 */
export function createBackButton(
  isPageReload: boolean,
  version: string,
  postEvent: PostEvent,
): BackButton {
  const { isVisible = false } = isPageReload ? getStorageValue('back-button') || {} : {};
  const component = new BackButton(isVisible, version, postEvent);

  component.on('change', () => {
    saveStorageValue('back-button', { isVisible: component.isVisible });
  });

  return component;
}
