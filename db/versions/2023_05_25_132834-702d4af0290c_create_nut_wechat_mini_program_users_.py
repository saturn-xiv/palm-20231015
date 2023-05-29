"""create nut.wechat-mini-program-users table

Revision ID: 702d4af0290c
Revises: 672cd6ed6ae2
Create Date: 2023-05-25 13:28:34.767606

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '702d4af0290c'
down_revision = '672cd6ed6ae2'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'wechat_mini_program_users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('union_id', sa.String(length=127),
                  nullable=False, unique=True),
        sa.Column('app_id', sa.String(length=63), nullable=False),
        sa.Column('open_id', sa.String(length=127), nullable=False),
        sa.Column('nickname', sa.String(length=63)),
        sa.Column('avatar_url', sa.String(length=255)),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_wechat_mini_program_users_app_open_ids',
                    'wechat_mini_program_users', ['app_id', 'open_id'], unique=True)
    op.create_index('idx_wechat_mini_program_users_union_id',
                    'wechat_mini_program_users', ['union_id'])
    op.create_index('idx_wechat_mini_program_users_app_id',
                    'wechat_mini_program_users', ['app_id'])
    op.create_index('idx_wechat_mini_program_users_open_id',
                    'wechat_mini_program_users', ['open_id'])
    op.create_index('idx_wechat_mini_program_users_nickname',
                    'wechat_mini_program_users', ['nickname'])


def downgrade() -> None:
    op.drop_table('wechat_mini_program_users')
