import { CMSLayoutRootProps, PublicContentProps, PublicSidebarProps } from '@contember/cms-layout';
import { createDirectiveContext } from '@contember/layout';
import * as React from 'react';
import { LAYOUT_BREAKPOINT } from './Constants';

type DirectivesType = {
  'cms-layout.breakpoint': CMSLayoutRootProps['breakpoint'];
  'cms-layout.content.basis': PublicContentProps['basis'];
  'cms-layout.content.maxWidth': PublicContentProps['maxWidth'];
  'cms-layout.content.minWidth': PublicContentProps['minWidth'];
  'cms-layout.sidebarLeft.keepVisible': PublicSidebarProps['keepVisible'];
  'cms-layout.sidebarLeft.width': PublicSidebarProps['width'];
  'cms-layout.sidebarRight.keepVisible': PublicSidebarProps['keepVisible'];
  'cms-layout.sidebarRight.width': PublicSidebarProps['width'];
  'title': string | null | undefined;
}

const directivesDefaultValues: DirectivesType = Object.freeze({
  'cms-layout.breakpoint': LAYOUT_BREAKPOINT,
  'cms-layout.content.basis': undefined,
  'cms-layout.content.maxWidth': LAYOUT_BREAKPOINT,
  'cms-layout.content.minWidth': undefined,
  'cms-layout.sidebarLeft.keepVisible': undefined,
  'cms-layout.sidebarLeft.width': undefined,
  'cms-layout.sidebarRight.keepVisible': undefined,
  'cms-layout.sidebarRight.width': undefined,
  'title': undefined,
})

export const directivesList = Object.keys(directivesDefaultValues) as (keyof DirectivesType)[]
export const [DirectivesProvider, Directive, DirectivesConsumer, useDirectives] = createDirectiveContext<DirectivesType>('Directives', directivesDefaultValues)

export const Title = React.memo<{ children: string | null | undefined }>(({ children }) => (
  <Directive name="title" content={children} />
))
