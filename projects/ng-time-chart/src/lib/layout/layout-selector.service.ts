import {Injectable} from '@angular/core';
import {StackedLayoutService} from './stacked-layout.service';
import {TiledLayoutService} from './tiled-layout.service';
import {Item} from '../item';

export enum LayoutStrategy {
  /**
   * Stack items one on top of the other
   */
  Stacked,
  /**
   * Try to tile items if their start and end dates do not overlap
   */
  Tiled
}

@Injectable({
  providedIn: 'root'
})
export class LayoutSelectorService {

  constructor(private readonly stackedLayout: StackedLayoutService,
              private readonly tiledLayout: TiledLayoutService) {
  }

  /**
   * Does the layout of the an {@link Item} list using the selected strategy
   * @param items The Items to lay out
   * @param strategy The {@link LayoutStrategy} to use to layout the items
   */
  public doLayout(items: Item[], strategy: LayoutStrategy = LayoutStrategy.Stacked): Item[][] {
    switch (strategy) {
      case LayoutStrategy.Stacked:
        return this.stackedLayout.doLayout(items);
      case LayoutStrategy.Tiled:
        return this.tiledLayout.doLayout(items);

    }
  }

}