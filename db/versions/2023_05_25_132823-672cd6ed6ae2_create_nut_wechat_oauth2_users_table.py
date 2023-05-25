"""create nut.wechat-oauth2-users table

Revision ID: 672cd6ed6ae2
Revises: 2e771e175b43
Create Date: 2023-05-25 13:28:23.851494

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '672cd6ed6ae2'
down_revision = '2e771e175b43'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'wechat_oauth2_users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('union_id', sa.String(length=127), nullable=False),
        sa.Column('app_id', sa.String(length=63), nullable=False),
        sa.Column('open_id', sa.String(length=127), nullable=False),
        sa.Column('nickname', sa.String(length=63), nullable=False),
        sa.Column('sex', sa.Integer, nullable=False),
        sa.Column('city', sa.String(length=63), nullable=False),
        sa.Column('province', sa.String(length=63), nullable=False),
        sa.Column('country', sa.String(length=63), nullable=False),
        sa.Column('head_img_url', sa.String(length=255)),
        sa.Column('privilege', sa.LargeBinary, nullable=False),
        sa.Column('lang', sa.String(length=8), nullable=False),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_wechat_oauth2_users_app_open_ids',
                    'wechat_oauth2_users', ['app_id', 'open_id'], unique=True)
    op.create_index('idx_wechat_oauth2_users_nickname',
                    'wechat_oauth2_users', ['nickname'])
    op.create_index('idx_wechat_oauth2_users_app_id',
                    'wechat_oauth2_users', ['app_id'])
    op.create_index('idx_wechat_oauth2_users_open_id',
                    'wechat_oauth2_users', ['open_id'])
    op.create_index('idx_wechat_oauth2_users_union_id',
                    'wechat_oauth2_users', ['union_id'])
    op.create_index('idx_wechat_oauth2_users_city',
                    'wechat_oauth2_users', ['city'])
    op.create_index('idx_wechat_oauth2_users_province',
                    'wechat_oauth2_users', ['province'])
    op.create_index('idx_wechat_oauth2_users_country',
                    'wechat_oauth2_users', ['country'])
    op.create_index('idx_wechat_oauth2_users_lang',
                    'wechat_oauth2_users', ['lang'])


def downgrade() -> None:
    op.drop_table('wechat_oauth2_users')
